import PluginHelper from 'plugin-helper'

export default {
  install(Vue, options) {
    options.vueComponentsV2.forEach(setup_pHs)
  }
}
function setup_pHs(obj) {
  const pH = new PluginHelper(obj.el);
  console.log(pH); 
}
