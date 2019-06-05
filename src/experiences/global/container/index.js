import $ from 'jquery';
import Vue from 'vue';
//
import GlobalContainerComponentConfig from './GlobalContainerConfig'
global.vueComponents = global.vueComponents || [];
setup_containerComponents();

// private functions
function setup_containerComponents() {
    $('[is^=xp-global-container]').each(generate_containerComponent);
}

function generate_containerComponent() {
    vueComponents.push(new GlobalContainerComponentConfig(this));
}
