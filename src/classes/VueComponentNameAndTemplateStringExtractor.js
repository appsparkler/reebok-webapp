import $ from 'jquery'
export default class VueComponentNameAndTemplateExtractor {
  constructor(el) {
    console.log($('[is]',el));
    const outerHTML = new String(el.outerHTML);
    this.name = el.attributes.is.value;
    this.template = outerHTML.replace(/is=".*?"/, "").toString();
  }
}
