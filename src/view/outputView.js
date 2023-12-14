import { Console } from '@woowacourse/mission-utils';

const Print = {
  welcome() {
    Console.print(`안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.`);
  },
  preview(day) {
    Console.print(`12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
    Console.print('');
  },
  order(order) {
    Console.print(`<주문 메뉴>`);
    for (const item of order.orders) {
      Console.print(`${item.menu} ${item.count}개`);
    }
    Console.print('');
  },
  sumPrice(sum) {
    Console.print(`<할인 전 총주문 금액>`);
    Console.print(`${sum.toLocaleString()}원`);
    Console.print('');
  },
  discountPrice(discount) {
    Console.print(`<혜택 내역>`);
    Console.print(`${discount.toLocaleString()}원`);
    Console.print('');
  },
  afterDiscount(sum, discount) {
    Console.print(`<할인 후 예상 결제 금액>`);
    Console.print(`${(sum - discount).toLocaleString()}원`);
    Console.print('');
  },
};

export default Print;
