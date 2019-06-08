import Extractor from 'classes/VueComponentNameAndTemplateStringExtractor';

// styles
import './styles.scss';

// scripts
export default class {
  config = {
    props:['componentApi'],
    methods: {
      buttonClicked() {
        if(this.componentApi && this.componentApi)
          this.componentApi.buttonClicked();
      }
    },
    beforeCreate() {
      console.log(this)
      debugger; 
    }
  }

  constructor(el) {
    const extractor = new Extractor(el);
    this.config.name = extractor.name;
    this.config.template = extractor.template;
  }
}
