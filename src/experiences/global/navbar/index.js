import $ from 'jquery';
import Vue from 'vue';
//
import GlobalNavbarComponentConfig from './GlobalNavbarConfig'
global.vueComponents = global.vueComponents || [];
setup_navbarComponents();

// private functions
function setup_navbarComponents() {
    $('[is^=xp-global-navbar]').each(generate_navbarComponent);
}

function generate_navbarComponent() {
    vueComponents.push(new GlobalNavbarComponentConfig(this));
}
