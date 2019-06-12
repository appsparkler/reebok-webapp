import $ from 'jquery';
import Vue from 'vue';
//
import GlobalContainerComponentConfig from './GlobalContainerConfig'
global.vueComponentConfigs = global.vueComponentConfigs || [];
setup_containerComponents();

// private functions
function setup_containerComponents() {
    $('[is^=xp-global-container]').each(generate_containerComponent);
}

function generate_containerComponent() {
    global.vueComponentConfigs.push({
      config: new GlobalContainerComponentConfig(),
      el: this
    });
}
