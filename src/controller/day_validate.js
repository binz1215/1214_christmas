import { Console } from '@woowacourse/mission-utils';
import { inputDay } from '../view/inputView.js';
import { DAY } from '../constants/contants.js';

class DayValidate {
  #day;

  async validDay() {
    let valid = true;

    while (valid) {
      try {
        this.#day = await inputDay();
        this.#dayValidCheck();
        valid = false;
      } catch (error) {}
    }
    return this.#day;
  }

  #dayValidCheck() {
    if (this.#isNum()) {
      Console.print(`[ERROR] 날짜는 숫자만 입력 가능합니다.`);
      throw new Error(`[ERROR]`);
    }

    if (this.#isIncludedDay()) {
      Console.print(`[ERROR] 유효한 날짜만 입력 가능합니다.`);
      throw new Error(`[ERROR]`);
    }
  }

  #isNum() {
    if (Number.isNaN(this.#day)) return true;
  }

  #isIncludedDay() {
    if (!DAY.includes(this.#day)) return true;
  }
}
export default DayValidate;

// const play = new DayValidate();
// const x = await play.validDay();
/// /
// console.log(x);
