import { DAY, STAR_DAY, DISCOUNT, XMAS } from '../constants/contants.js';

class Discount {
  #sumPrice;

  #discount = 0;

  #day;

  setObject(sum, day) {
    this.#sumPrice = sum;
    this.#day = day;
  }

  runDiscount() {
    this.#x_masDiscount();
    this.#star_dayDiscount();
  }

  #x_masDiscount() {
    let discount = 0;
    if (this.#day >= XMAS.START && this.#day <= XMAS.D_DAY && this.#sumPrice >= DISCOUNT.MIN) {
      discount = DISCOUNT.START + (this.#day - 1) * DISCOUNT.DAY;
    }
    this.#discount += discount;
  }

  #star_dayDiscount() {
    if (STAR_DAY.includes(this.#day) && this.#sumPrice >= DISCOUNT.MIN) {
      this.#discount += DISCOUNT.START;
    }
  }

  getDiscount() {
    return this.#discount;
  }
}
export default Discount;

// const play = new Discount();
// const x = play.runDiscount();
/// /
// console.log(x);
