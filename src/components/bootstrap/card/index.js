import $ from 'jquery';
import Vue from 'vue';
//
import BootstrapCardComponentConfig from './BootstrapCardConfig'
global.vueComponents = global.vueComponents || [];
setup_cardComponents();

// private functions
function setup_cardComponents() {
    $('[is^=xp-bootstrap-card]').each(generate_cardComponent);
}

function generate_cardComponent() {
    vueComponents.push(new BootstrapCardComponentConfig(this));
}
