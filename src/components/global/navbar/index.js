import $ from 'jquery';
import Vue from 'vue';
//
import GlobalNavbarComponentConfig from './GlobalNavbarConfig'
global.vueComponentConfigs = global.vueComponentConfigs || [];
setup_navbarComponents();

// private functions
function setup_navbarComponents() {
    $('[is^=xp-global-navbar]').each(generate_navbarComponent);
}

function generate_navbarComponent() {
    global.vueComponentConfigs.push({
      config: new GlobalNavbarComponentConfig(this),
      el: this
    });
}
