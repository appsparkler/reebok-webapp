import $ from 'jquery';
import Vue from 'vue';
//
import BootstrapCardComponentConfig from './BootstrapCardConfig'
global.vueComponentsConfig = global.vueComponentsConfig || [];
setup_cardComponents();

// private functions
function setup_cardComponents() {
    console.log($('[is^=xp-bootstrap-card]').length)
    $('[is^=xp-bootstrap-card]').each(generate_cardComponent);
}

function generate_cardComponent() {
    alert(typeof this);
    global.vueComponentsConfig.push({
      config: new BootstrapCardComponentConfig(this),
      el: this
    });
}
