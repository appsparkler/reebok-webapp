// styles
import './styles.scss';

// scripts
export default class {
  props = ['componentApi']
  mounted() {
    alert('button is mounted...')
  }
  methods = {
    buttonClicked() {
      if(this.componentApi && this.componentApi.buttonClicked)
        this.componentApi.buttonClicked();
    }
  }
}
