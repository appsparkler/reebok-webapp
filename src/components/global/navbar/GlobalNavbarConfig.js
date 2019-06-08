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
            alert('i am the Navbar...')
          }
        }
      }
    }
  }

  constructor(el) {
    const extractor = new Extractor(el);
    this.config.name = extractor.name;
    this.config.template = extractor.template;
  }
}
