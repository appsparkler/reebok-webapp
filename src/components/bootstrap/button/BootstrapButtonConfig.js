import Extractor from 'classes/VueComponentNameAndTemplateStringExtractor';

// styles
import './styles.scss';

// scripts
export default class {
  config = {
    data() {
      return {
        ReebokButtonConfig: this.componentConfig || {}
      }
    },
    props:['componentConfig'],
    methods: {
      buttonClicked() {
        if(this.componentConfig && this.componentConfig.buttonClicked)
          this.componentConfig.buttonClicked();
      }
    }
  }

  constructor(el) {
    const extractor = new Extractor(el);
    this.config.name = extractor.name;
    this.config.template = extractor.template;
  }
}
