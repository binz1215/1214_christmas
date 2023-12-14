import { Console } from '@woowacourse/mission-utils';
import { inputPersonNum } from '../view/inputView.js';
import { NUM_ARANGE } from '../constants/contants.js';

class PersonValide {
  #personNum;

  async validDay() {
    let valid = true;

    while (valid) {
      try {
        this.#personNum = await inputPersonNum();
        this.#personNumValidCheck();
        valid = false;
      } catch (error) {}
    }
    return this.#personNum;
  }

  #personNumValidCheck() {
    if (this.#isNum()) {
      Console.print(`[ERROR] 인원수는 숫자만 입력 가능합니다.`);
      throw new Error(`[ERROR]`);
    }

    if (this.#isRightArange()) {
      Console.print(`[ERROR] 1~6사이만 입력 가능합니다.`);
      throw new Error(`[ERROR]`);
    }
  }

  #isNum() {
    if (Number.isNaN(this.#personNum)) return true;
  }

  #isRightArange() {
    if (this.#personNum < NUM_ARANGE[1] || this.#personNum > NUM_ARANGE[6]) return true;
  }
}
export default PersonValide;

// const play = new PersonValide();
// const x = await play.validDay();
/// /
// console.log(x);
