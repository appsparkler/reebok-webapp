export default {
  install(Vue, options) {
      if(options && options.vueComponents) {
        options.vueComponents.forEach(obj => {
            Vue.component(obj.config.name, obj.config);
          });
      }
  }
}
