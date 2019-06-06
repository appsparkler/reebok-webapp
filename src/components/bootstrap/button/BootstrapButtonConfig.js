import Extractor from 'classes/VueComponentNameAndTemplateStringExtractor';

// styles
import './styles.scss';

// scripts
export default class {
  config = {
    props:['bootstrapButtonConfig'],
    methods: {
      buttonClicked() {
        if(this.bootstrapButtonConfig && this.bootstrapButtonConfig.buttonClicked)
          this.bootstrapButtonConfig.buttonClicked();
      }
    }
  }

  constructor(el) {
    const extractor = new Extractor(el);
    this.config.name = extractor.name;
    this.config.template = extractor.template;
  }
}
