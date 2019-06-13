import $ from 'jquery';
import Vue from 'vue';
//
import BootstrapCardComponentConfig from './BootstrapCardConfig'
global.vueComponentConfigs = global.vueComponentConfigs || [];
setup_cardComponents();

// private functions
function setup_cardComponents() {
    $('[is^=xp-bootstrap-card]').each(generate_cardComponent);
}

function generate_cardComponent() {
    global.vueComponentConfigs.push({
      config: new BootstrapCardComponentConfig(),
      el: this
    });
}
