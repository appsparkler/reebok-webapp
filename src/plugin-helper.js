// import {remove_allAtributesFromHTMLOtherThanIs} from 'common-script'
import $ from 'jquery'
export default class VueComponentNameAndTemplateExtractor {
  constructor(el) {
    const attributesToRemove = [":component-api"];
    this.clonedEl = el.cloneNode(true);
    // remove un-required attributes from 2nd-gen + components
    const listOfComponents = [];
    const nestedComponents = this.clonedEl.querySelectorAll('[is] [is] [is]');
    listOfComponents.push(this.clonedEl);
    // hydrate list-of-components
    nestedComponents.forEach(elem => listOfComponents.push(elem));
    listOfComponents.forEach(remove_blockingAttributes.bind(null, attributesToRemove));
    listOfComponents.forEach(elem => console.log(elem.outerHTML));
    //  
    this.template = this.clonedEl.outerHTML;
    this.name = this.clonedEl.attributes.is.value.toString();
    this.name = this.clonedEl;

    function remove_blockingAttributes(attrs, elem) {
      attrs.forEach(attr => elem.removeAttribute(attr));
    }
    // if(Array.isArray(nestedComponents))
    //   nestedComponents.forEach(
    //     el => remove_blockingAttributes(null, attributesToRemove, el)
    //   )
    // nestedComponents
    //   .forEach(
    //     remove_blockingAttributes
    //       .bind(null, attributesToRemove)
    //   );
    // remove_blockingAttributes.bind(null, attributesToRemove, this.clonedEl);
    // const $clone = $(el).clone();
    // removing attributes other than "is" from 2nd Gen elements.
    // $clone.find('[is] [is]').each(remove_allAtributesFromHTMLOtherThanIs);
    // const clonedEl = $clone.get(0);
    // $clone.removeAttr(':component-api');
    // this.clonedEl.removeAttribute(':component-api');
    // this.clonedEl.removeAttribute('is');
    // this.template = this.clonedEl.outerHTML.replace(/is=".*?"/, '');
    // console.log(this.template);
  }
}

function remove_blockingAttributes(attributesToRemove, el) {
    attributesToRemove.forEach(attr => el.removeAttribute(attr))
    // el.removeAttribute(":component-api");
    // Object.keys(el.attributes).reverse().forEach(delete_NonIsAttribute.bind(el))
}
