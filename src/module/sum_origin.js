import { MENU } from '../constants/contants.js';

class SumOrigin {
  #order;

  orderarray(orderObjedt) {
    this.#order = orderObjedt;
  }

  allPrice() {
    const menuArray = this.#makeMunuArray();
    const countArray = this.#makeCountArray();
    const sum = this.#sum(menuArray, countArray);

    return sum;
  }

  #sum(menuArray, countArray) {
    let sum = 0;
    menuArray.forEach((menuname, index) => {
      const price = this.#findCategory(menuname);
      sum += price * countArray[index];
    });
    return sum;
  }

  #findCategory(menu) {
    for (const category in MENU) {
      const categoryMenu = MENU[category];
      if (menu in categoryMenu) {
        return categoryMenu[menu];
      }
    }
  }

  #makeMunuArray() {
    const menuArray = this.#order.orders.map((order) => order.menu);
    return menuArray;
  }

  #makeCountArray() {
    const countArray = this.#order.orders.map((count) => count.count);
    return countArray;
  }
}
export default SumOrigin;

// const play = new SumOrigin();
// const x = play.allPrice();
/// /
// console.log(x);
