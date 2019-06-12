// styles
import './styles.scss';

// scripts
export default class {
  config = {
    // update vue configuration here
    // "name" and "template" should not be added here (as they are dynamically extracted from HTML)
    data() {
      return {
        ReebokButtonConfig:{
          buttonClicked() {
            alert('Hi...I am a bootstrap card!!!')
          }
        }
      }
    }
  }
}
