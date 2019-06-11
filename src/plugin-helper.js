// import {remove_allAtributesFromHTMLOtherThanIs} from 'common-script'
import $ from 'jquery'
export default class VueComponentNameAndTemplateExtractor {
  constructor(el) {
    const attributesToRemove = [":component-api"];
    const clonedEl = el.cloneNode(true);
    // remove un-required attributes from 2nd-gen + components
    const listOfComponents = [];
    const nestedComponents = clonedEl.querySelectorAll('[is] [is] [is]');
    listOfComponents.push(clonedEl);
    // hydrate list-of-components
    nestedComponents.forEach(elem => listOfComponents.push(elem));
    listOfComponents.forEach(
      remove_blockingAttributes.bind(null, attributesToRemove)
    );
    this.template = clonedEl.outerHTML.replace(/is=".*?"/, '');
    this.name = clonedEl.attributes.is.value.toString();
  }
}

function remove_blockingAttributes(attrs, elem) {
    attrs.forEach(attr => elem.removeAttribute(attr));
}
