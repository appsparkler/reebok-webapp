import $ from 'jquery';
import Vue from 'vue';
//
import Global_2ColumnComponentConfig from './Global_2ColumnConfig'
global.vueComponents = global.vueComponents || [];
setup_2ColumnComponents();

// private functions
function setup_2ColumnComponents() {
    $('[is^=xp-global-2Column]').each(generate_2ColumnComponent);
}

function generate_2ColumnComponent() {
    vueComponents.push(new Global_2ColumnComponentConfig(this));
}
