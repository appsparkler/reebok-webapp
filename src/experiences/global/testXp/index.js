import $ from 'jquery';
import Vue from 'vue';
//
import GlobalTestXpComponentConfig from './GlobalTestXpConfig'
global.vueComponents = global.vueComponents || [];
setup_testXpComponents();

// private functions
function setup_testXpComponents() {
    $('[is^=xp-global-testXp]').each(generate_testXpComponent);
}

function generate_testXpComponent() {
    vueComponents.push(new GlobalTestXpComponentConfig(this));
}
