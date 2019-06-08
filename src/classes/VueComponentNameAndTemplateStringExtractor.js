import {remove_allAtributesFromHTMLOtherThanIs} from 'common-script'
import $ from 'jquery'
export default class VueComponentNameAndTemplateExtractor {
  constructor(el) {
    const $clone = $(el).clone();
    // removing attributes other than "is" from 2nd Gen elements.
    $clone.find('[is] [is]').each(remove_allAtributesFromHTMLOtherThanIs);
    const clonedEl = $clone.get(0);
    $clone.removeAttr(':component-api');
    this.name = clonedEl.attributes.is.value;
    clonedEl.attributes.removeNamedItem('is');
    this.template = clonedEl.outerHTML.replace(/is=".*?"/, '');
  }
}
