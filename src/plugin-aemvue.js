import PluginHelper from 'plugin-helper'

export default {
  install(Vue, options) {
    options.vueComponentsV2.forEach(setup_pHs.bind(null, Vue))
  }
}
function setup_pHs(Vue, obj) {
  const pH = new PluginHelper(obj.el);
  obj.config = obj.config || {};
  obj.config.template = pH.template;
  console.log(pH.template);
  // Vue.component(pH.name, obj);
  // Vue.component(pH.name, )
}
