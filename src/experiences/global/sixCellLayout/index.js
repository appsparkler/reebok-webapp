import $ from 'jquery';
import Vue from 'vue';
//
import GlobalSixCellLayoutComponentConfig from './GlobalSixCellLayoutConfig'
global.vueComponentConfigs = global.vueComponentConfigs || [];
setup_sixCellLayoutComponents();

// private functions
function setup_sixCellLayoutComponents() {
    $('[is^=xp-global-sixCellLayout]').each(generate_sixCellLayoutComponent);
}

function generate_sixCellLayoutComponent() {
    vueComponentConfigs.push({
      config:new GlobalSixCellLayoutComponentConfig(),
      el: this
    });
}
