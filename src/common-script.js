import $ from 'jquery'
import Vue from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap'
import 'bootstrap\\dist\\css\\bootstrap.css'

Vue.config.comments = true;
Vue.config.ignoredElements = ['cq', 'sly'];
Vue.config.warnHandler = function(msg, vm, trace) {
  console.log(msg);
};
Vue.config.productionTip = false;
Vue.config.devTools = true;

global.vueComponents = global.vueComponents || [];

export const initialize_VueApps = () => {
  $('[id^=app]').each(VueApp);
}

export const initialize_VueComponents = () => {
  vueComponents.forEach(obj => {
    Vue.component(obj.config.name, obj.config);
  });
}
// private functions
function VueApp() {
  $('*', this).each(remove_allAtributesFromHTMLOtherThanIs)
  console.log(this.outerHTML)
  var VueApp = new Vue({
      el: this,
      template: this.outerHTML
  });
}


function remove_allAtributesFromHTMLOtherThanIs() {

  Object.keys(this.attributes).reverse().forEach(delete_NonIsAttribute.bind(this))
}

function delete_NonIsAttribute(key, value, attributeArray) {
  try {
    // if(this.tagName === 'BUTTON') {
    //   console.log(this.attributes.item(key));
    // }
    const namedItem = this.attributes.item(key);
    // if(!namedItem) console.log(key)
    const name = namedItem.name;
    if(name !== 'is') this.attributes.removeNamedItem(name);
  } catch (e) {

  }
}
