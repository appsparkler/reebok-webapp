// styles
import './styles.scss';

// scripts
export default class {
  config = {
      data() {
        return {
          ReebokButtonConfig: {
            buttonClicked() {
              alert('This is Six-Cell-Layout Experience');
            }
        }
      }
    }
    // update vue configuration here
    // "name" and "template" should not be added here (as they are dynamically extracted from HTML)
  }
}
