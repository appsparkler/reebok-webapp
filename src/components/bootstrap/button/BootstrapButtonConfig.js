// styles
import './styles.scss';

// scripts
export default class {
  config = {
    props:['componentApi'],
    methods: {
      buttonClicked() {
        if(this.componentApi && this.componentApi.buttonClicked)
          this.componentApi.buttonClicked();
      }
    }
  }
}
