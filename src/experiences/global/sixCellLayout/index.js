import $ from 'jquery';
import Vue from 'vue';
//
import GlobalSixCellLayoutComponentConfig from './GlobalSixCellLayoutConfig'
global.vueComponents = global.vueComponents || [];
setup_sixCellLayoutComponents();

// private functions
function setup_sixCellLayoutComponents() {
    $('[is^=xp-global-sixCellLayout]').each(generate_sixCellLayoutComponent);
}

function generate_sixCellLayoutComponent() {
    vueComponents.push(new GlobalSixCellLayoutComponentConfig(this));
}
