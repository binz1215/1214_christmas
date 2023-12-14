import { Console } from '@woowacourse/mission-utils';

export function welcome() {
  Console.print(`안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.`);
}

export function preview(day) {
  Console.print(`12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
  Console.print('');
}
