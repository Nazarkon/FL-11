/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */

// ES 2016

class User2 {
  constructor(name, orderTotalPrice, weekendDiscount, nightDiscount, bonus) {
    this.name = name;
    this.orderTotalPrice = orderTotalPrice;
    this.weekendDiscount = weekendDiscount;
    this.nightDiscount = nightDiscount;
    this.bonus = bonus;

    this.makeOrder = () => `Price after discount and including bonuses is ${this.orderTotalPrice}`;
  }
}

getDiscount = (order) => {
  const time = new Date();
  const DISCOUNT_VAL = 0.1;
  const SUNDAY = 0;
  const SATURDAY = 6;
  const NIGHT_HOUR = 23;
  const MORNING_HOUR = 6;
  if (time.getHours() >= NIGHT_HOUR || time.getHours() < MORNING_HOUR) {
    order.orderTotalPrice = (order.orderTotalPrice - order.nightDiscount) * DISCOUNT_VAL;
  } else if (time.getDay() === SATURDAY || time.getDay() === SUNDAY) {
    order.orderTotalPrice -= order.weekendDiscount;
  } else {
    console.log('Sorry, if you wanna a discount please , join us another time');
  }
};

getBonus = (order) => {
  order.orderTotalPrice -= order.bonus;
};

const order = new User2('Roman', 500, 20, 7, 20);

console.log(order);
getBonus(order);
console.log('====== Bonus ======');
console.log(order.makeOrder());
getBonus(order);
console.log('====== Bonus ======');
console.log(order.makeOrder());
getDiscount(order);
console.log('====== Discount ======');
console.log(order.makeOrder());
