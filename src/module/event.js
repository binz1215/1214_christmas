import DayValidate from '../controller/day_validate.js';
import PersonValide from '../controller/person_num_validate.js';
import MenuValide from '../controller/menu_validate.js';
import SumOrigin from './sum_origin.js';
import Discount from './discount.js';

class Event {
  #day;

  #personNum;

  #menu;

  #sumOrigin;

  #discount;

  async getValidation() {
    this.#day = await new DayValidate().validDay();
    this.#personNum = await new PersonValide().validPersonNum();
    await this.#getMenu();
    this.#getSum();
    this.#getDiscount();

    return {
      day: this.#day,
      personNum: this.#personNum,
      menu: this.#menu,
      sum: this.#sumOrigin,
      discount: this.#discount,
    };
  }

  async #getMenu() {
    const menuValid = new MenuValide();
    menuValid.setPersonNum(this.#personNum);
    this.#menu = await menuValid.validMenu();
  }

  #getSum() {
    const sumOrigin = new SumOrigin();
    sumOrigin.orderarray(this.#menu);
    this.#sumOrigin = sumOrigin.allPrice();
  }

  #getDiscount() {
    const discount = new Discount();
    discount.setObject(this.#sumOrigin, this.#day);
    discount.runDiscount();
    this.#discount = discount.getDiscount();
  }
}
export default Event;

// const play = new Event();
// const x = await play.getValidation();
/// /
// console.log(x);
