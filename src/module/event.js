import DayValidate from '../controller/day_validate.js';
import PersonValide from '../controller/person_num_validate.js';

class Event {
  #day;

  #personNum;

  #menu;

  async getValidation() {
    this.#day = await new DayValidate().validDay();
    this.#personNum = await new PersonValide().validPersonNum();
  }
}
export default Event;

const play = new Event();
const x = await play.getValidation();
//
console.log(x);
