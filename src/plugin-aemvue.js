import PluginHelper from 'plugin-helper'

export default {
  install(Vue, options) {
    options.vueComponentsV2.forEach(setup_pHs.bind(null, Vue))
  }
}
function setup_pHs(Vue, obj) {
  const pluginHelper = new PluginHelper(obj.el);
  obj.config = obj.config || {};
  obj.config.template = pluginHelper.template;
  Vue.component(pluginHelper.name, obj.config);
}
