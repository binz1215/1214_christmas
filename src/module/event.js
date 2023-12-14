import DayValidate from '../controller/day_validate.js';
import PersonValide from '../controller/person_num_validate.js';
import MenuValide from '../controller/menu_validate.js';

class Event {
  #day;

  #personNum;

  #menu;

  async getValidation() {
    this.#day = await new DayValidate().validDay();
    this.#personNum = await new PersonValide().validPersonNum();
    const menuValid = new MenuValide();
    menuValid.setPersonNum(this.#personNum);
    this.#menu = menuValid.validMenu();
  }

  #countMenu() {
    setPersonNum(this.#personNum);
  }
}
export default Event;

const play = new Event();
const x = await play.getValidation();
//
console.log(x);
