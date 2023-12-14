import Event from './module/event.js';
import Print from './view/outputView.js';

class App {
  #day;

  #personNum;

  #menu;

  #sum;

  #discount;

  async run() {
    Print.welcome();
    await this.#getObject();
    Print.preview(this.#day);
    this.#printResult();
  }

  async #getObject() {
    const { day, personNum, menu, sum, discount } = await new Event().getValidation();
    this.#day = day;
    this.#personNum = personNum;
    this.#menu = menu;
    this.#sum = sum;
    this.#discount = discount;
  }

  #printResult() {
    Print.order(this.#menu);
    Print.sumPrice(this.#sum);
    Print.discountPrice(this.#discount);
    Print.afterDiscount(this.#sum, this.#discount);
  }
}

export default App;
