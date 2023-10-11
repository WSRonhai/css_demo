class FlipClock {
  main;
  nums;
  constructor(el) {
    this.main = document.querySelector(el);
  }
  //入口方法
  clock() {
    this.getTimes();
    this.createSectionElement();
  }
  //获取当前时间值
  getTimes() {
    this.nums = new Date()
      .toLocaleTimeString()
      .replaceAll(":", "")
      .split("")
      .map((n) => +n);
    console.log(this.nums);
  }
  //创建时间结构
  createSectionElement() {
    this.nums.forEach((num, index) => {
      this.main.insertAdjacentHTML(
        "beforeend",
        `
        <section>
        <div data-before="${num}" data-after="4"></div>
        <div data-before="${num}" data-after="4"></div>
      </section>
        `
      );
      if (index % 2 && index != this.nums.length - 1) {
        this.main.insertAdjacentHTML("beforeend", "<p></p>");
      }
    });
  }
}
const instance = new FlipClock("#clock");
instance.clock();
