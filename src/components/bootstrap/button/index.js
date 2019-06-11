import $ from 'jquery';
import Vue from 'vue';
//
import BootstrapButtonComponentConfig from './BootstrapButtonConfig'
global.vueComponentConfigs = global.vueComponentConfigs || [];
setup_buttonComponents();

// private functions
function setup_buttonComponents() {
    $('[is^=xp-bootstrap-button]').each(generate_buttonComponent);
}

function generate_buttonComponent() {
  global.vueComponentConfigs.push({
      config: new BootstrapButtonComponentConfig(this),
      el: this
    });
}
