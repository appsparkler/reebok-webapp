import $ from 'jquery';
import Vue from 'vue';
//
import BootstrapButtonComponentConfig from './BootstrapButtonConfig'
global.vueComponentsV2 = [];
global.vueComponents = global.vueComponents || [];
setup_buttonComponents();

// private functions
function setup_buttonComponents() {
    $('[is^=xp-bootstrap-button]').each(generate_buttonComponent);
    // document.querySelectorAll('[is^=xp-bootstrap-button]').forEach(function(item) {
    //   vueComponentsV2.push({
    //     el: item
    //   })
    // })
}

function generate_buttonComponent() {
  // console.log(this.outerHTML);
  vueComponentsV2.push({
      config: new BootstrapButtonComponentConfig(this),
      el: this
    });
    // vueComponents.push(new BootstrapButtonComponentConfig(this));
}
