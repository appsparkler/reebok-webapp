import $ from 'jquery';
import Vue from 'vue';
//
import GlobalBootstrapCarouselComponentConfig from './GlobalBootstrapCarouselConfig'
global.vueComponentConfigs = global.vueComponentConfigs || [];
setup_bootstrapCarouselComponents();

// private functions
function setup_bootstrapCarouselComponents() {
    $('[is^=xp-global-bootstrapCarousel]').each(generate_bootstrapCarouselComponent);
}

function generate_bootstrapCarouselComponent() {
    vueComponents.push({
      config: new GlobalBootstrapCarouselComponentConfig(),
      el: this
    });
}
