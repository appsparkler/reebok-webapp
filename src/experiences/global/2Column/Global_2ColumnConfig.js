import Extractor from 'classes/VueComponentNameAndTemplateStringExtractor';

// styles
import './styles.scss';

// scripts
export default class {
  config = {
    data() {
      return {
        ReebokButtonConfig: {
          buttonClicked:function() {
            alert('i am the 2 column experience...')
          }
        }
      }
    }
    // update vue configuration here
    // "name" and "template" should not be added here (as they are dynamically extracted from HTML)
  }

  constructor(el) {
    const extractor = new Extractor(el);
    this.config.name = extractor.name;
    this.config.template = extractor.template;
  }
}
