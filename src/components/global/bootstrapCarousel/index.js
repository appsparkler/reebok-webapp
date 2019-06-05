import $ from 'jquery';
import Vue from 'vue';
//
import GlobalBootstrapCarouselComponentConfig from './GlobalBootstrapCarouselConfig'
global.vueComponents = global.vueComponents || [];
setup_bootstrapCarouselComponents();

// private functions
function setup_bootstrapCarouselComponents() {
    $('[is^=xp-global-bootstrapCarousel]').each(generate_bootstrapCarouselComponent);
}

function generate_bootstrapCarouselComponent() {
    vueComponents.push(new GlobalBootstrapCarouselComponentConfig(this));
}
