import { Console } from '@woowacourse/mission-utils';
import { inputOrder } from '../view/inputView.js';
import { NUM_ARANGE, MENU } from '../constants/contants.js';

class MenuValide {
  #menuRaw;

  #personNum = 3;

  #order = {};

  setPersonNum(personNum) {
    this.#personNum = personNum;
  }

  async validMenu() {
    let valid = true;

    while (valid) {
      try {
        this.#menuRaw = await inputOrder();
        this.#makeObject();
        console.log(this.#order);
        this.#menuValidCheck();
        this.#menuCountValidCheck();
        valid = false;
      } catch (error) {}
    }
    return this.#order;
  }

  // eslint-disable-next-line max-lines-per-function
  #menuValidCheck() {
    const menuArray = this.#order.orders.map((item) => item.menu);
    if (this.#isDuplicaton(menuArray)) {
      Console.print(`[ERROR] 메뉴 중복입력은 할 수 없습니다.`);
      throw new Error(`[ERROR]`);
    }

    if (this.#isIncludeMenu(menuArray)) {
      Console.print(`[ERROR] 메뉴판에 있는 메뉴만 입력 가능합니다.`);
      throw new Error(`[ERROR]`);
    }

    if (this.#isMoreMain(menuArray)) {
      Console.print(`[ERROR] 메인메뉴는 인원수 이상 주문해야 합니다.`);
      throw new Error(`[ERROR]`);
    }
  }

  #menuCountValidCheck() {
    const countArray = this.#order.orders.map((item) => item.count);
    if (this.#isRightNum(countArray)) {
      Console.print(`[ERROR] 메뉴 개수는 1이상 숫자로 입력해야 합니다.`);
      throw new Error(`[ERROR]`);
    }
    if (this.#isUnderMax(countArray)) {
      Console.print(`[ERROR] 메뉴 개수는 20개 이하여야 합니다.`);
      throw new Error(`[ERROR]`);
    }
  }

  #isDuplicaton(menuArray) {
    const menuSet = new Set(menuArray);
    if (menuArray.length !== menuSet.size) return true;
  }

  #isIncludeMenu(menuArray) {
    const foodNames = Object.keys(MENU).flatMap((category) => Object.keys(MENU[category]));
    for (const menu of menuArray) {
      if (!foodNames.includes(menu)) return true;
    }
  }

  // 여기 너무 어려웠다.....
  #isMoreMain(menuArray) {
    const mainMenu = Object.keys(MENU.메인);
    const dupleArray = mainMenu.filter((menu) => menuArray.includes(menu));
    let mainNum = 0;
    dupleArray.forEach((targetMenu) => {
      mainNum += this.#order.orders.find((order) => order.menu === targetMenu).count;
    });

    if (mainNum < this.#personNum) return true;
  }

  #isRightNum(countArray) {
    return countArray.some((count) => count < NUM_ARANGE[1] || Number.isNaN(count));
  }

  #isUnderMax(countArray) {
    const sum = countArray.reduce((pre, cur) => pre + cur, 0);
    if (sum > NUM_ARANGE[20]) return true;
  }

  #makeObject() {
    const order = this.#menuRaw.split(',');
    const orderArray = [];
    order.forEach((eachOrder) => {
      const [name, count] = eachOrder.split('-');
      const orderObject = {
        menu: name.trim(),
        count: Number(count),
      };
      orderArray.push(orderObject);
    });
    this.#order.orders = orderArray;
  }
}
export default MenuValide;

// const play = new MenuValide();
// const menuRaw = '해산물파스타-2,레드와인-1,초코케이크-1';

// const x = await play.validMenu();
/// /
// console.log(x);
