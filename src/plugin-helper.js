// import {remove_allAtributesFromHTMLOtherThanIs} from 'common-script'
export default class VueComponentNameAndTemplateExtractor {
  constructor(el) {
    this.clonedEl = el.cloneNode(true);
    const nestedIS = this.clonedEl.querySelectorAll('[is] [is]');
    console.log(nestedIS);
    nestedIS.forEach(remove_allAttributesFromHTMLOtherThanIs)
    // const $clone = $(el).clone();
    // removing attributes other than "is" from 2nd Gen elements.
    // $clone.find('[is] [is]').each(remove_allAtributesFromHTMLOtherThanIs);
    // const clonedEl = $clone.get(0);
    // $clone.removeAttr(':component-api');
    // this.name = clonedEl.attributes.is.value;
    // clonedEl.attributes.removeNamedItem('is');
    // this.template = clonedEl.outerHTML.replace(/is=".*?"/, '');
  }
}

function remove_allAttributesFromHTMLOtherThanIs(el) {
  console.log(el);
}
