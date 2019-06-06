import $ from 'jquery';
import Vue from 'vue';
//
import BootstrapButtonComponentConfig from './BootstrapButtonConfig'
global.vueComponents = global.vueComponents || [];
setup_buttonComponents();

// private functions
function setup_buttonComponents() {
    $('[is^=xp-bootstrap-button]').each(generate_buttonComponent);
}

function generate_buttonComponent() {
    vueComponents.push(new BootstrapButtonComponentConfig(this));
}
