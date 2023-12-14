import { Console } from '@woowacourse/mission-utils';

export async function inputDay() {
  const day = await Console.readLineAsync('12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n');
  return Number(day);
}

export async function inputPersonNum() {
  const person = await Console.readLineAsync('방문하실 인원 수를 알려주세요 (1~6사이)\n');
  return Number(person);
}

export async function inputOrder() {
  const order = await Console.readLineAsync('주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n');
  return order;
}
