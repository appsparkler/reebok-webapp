import $ from 'jquery'
import Vue from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'

import TestPlugin from './test-plugin'
import Plugin_AEMVue from './plugin-aemvue';

Vue.config.comments = true;
Vue.config.ignoredElements = ['cq', 'sly'];
Vue.config.warnHandler = function(msg, vm, trace) {
  console.log(msg);
};
Vue.config.productionTip = false;
Vue.config.devTools = true;
global.vueComponentConfigs = global.vueComponentConfigs || [];

export const initialize_VueApps = () => {
  $('[id^=app]').each(VueApp);
}

export const initialize_VueComponents = () => {}

// private functions
function VueApp() {
  Vue.use(Plugin_AEMVue, { vueComponentConfigs })
  $('*', this).each(remove_allAtributesFromHTMLOtherThanIs);
  // Vue.use(TestPlugin, {vueComponents});
  new Vue({
      el: this,
      template: this.outerHTML
  });
}

export function remove_allAtributesFromHTMLOtherThanIs() {
  Object.keys(this.attributes).reverse().forEach(delete_NonIsAttribute.bind(this))
}

function delete_NonIsAttribute(key, value, attributeArray) {
  try {
    const namedItem = this.attributes.item(key);
    const name = namedItem.name;
    if(name == ':component-api') this.attributes.removeNamedItem(name);
  } catch (e) {

  }
}
