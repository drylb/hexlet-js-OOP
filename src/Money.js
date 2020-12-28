// @ts-check
// BEGIN (write your solution here)

// VERSION #1

function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(currency) {
  if (this.getCurrency() === 'usd' && currency === 'eur') {
    return new Money(this.getValue() * 0.7, currency);
  }
  if (this.getCurrency() === 'eur' && currency === 'usd') {
    return new Money(this.getValue() * 1.2, currency);
  }
  return new Money(this.getValue(), this.getCurrency());
};

Money.prototype.add = function add(money) {
  const exchangedMoney = money.exchangeTo(this.getCurrency());
  const newValue = this.getValue() + exchangedMoney.getValue();
  return new Money(newValue, this.getCurrency());
};

Money.prototype.format = function format() {
  if (this.getCurrency() === 'usd') {
    // bad design (to pass undefined to the function), but it is JS
    return this.getValue().toLocaleString(undefined, { style: 'currency', currency: 'USD' });
  }
  return this.getValue().toLocaleString(undefined, { style: 'currency', currency: 'EUR' });
};

// VERSION #2

const rates = {
  usd: {
    eur: 0.7,
  },
  eur: {
    usd: 1.2,
  },
};

function Money1(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money1.prototype.getValue = function getValue() {
  return this.value;
};

Money1.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money1.prototype.exchangeTo = function exchangeTo(newCurrency) {
  const currency = this.getCurrency();
  const currentValue = this.getValue();
  if (currency === newCurrency) {
    return new Money1(currentValue, currency);
  }
  const newValue = currentValue * rates[currency][newCurrency];
  return new Money1(newValue, currentValue);
};

Money1.prototype.add = function add(money) {
  const currency = this.getCurrency();
  const exchangedMoney = money.exchangeTo(currency);
  const newValue = this.getValue() + exchangedMoney.getValue();
  return new Money1(newValue, currency);
};

Money1.prototype.format = function format() {
  // bad design (to pass undefined to the function), but it is JS
  return this.getValue()
    .toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() });
};

export { Money, Money1 };

// END

/* Money.js
Реализуйте абстракцию "Деньги". Она знает о валюте денег, позволяет их конвертировать
в другие валюты, выполнять арифметические операции и форматировать вывод. Список методов:

Money(value, currency = 'usd') – создает объект-деньги.
Money.prototype.getValue() – возвращает стоимость в виде числа
Money.prototype.exchangeTo(currency) – возвращает новый объект-деньги,
где значение конвертировано в указанную валюту

Money.prototype.add(money) – возвращает новый объект-деньги, который представляет из
себя сумму исходных и переданных денег, в валюте исходных денег
(внутри возможна конвертация если валюты не совпадают)

Money.prototype.format() – возвращает локализованное представление денег удобное для вывода
const money1 = new Money(100);

// Возвращает значение
money1.getValue(); // 100

// Конвертирует в указанную валюту и возвращает новое значение
money1.exchangeTo('eur').getValue(); // 70

const money2 = new Money(200, 'eur');
money2.getValue(); // 200
const money3 = money2.add(money1);
money3.getValue(); // 270
const money4 = money1.add(money2);
money4.getValue(); // 340

money1.format(); // "$100.00"
money2.format(); // "€200.00"

const money5 = new Money(10000);
money5.format(); // "$10,000.00"
Наша реализация поддерживает только две валюты: usd и eur без возможности расширения.
Коэффициенты конверсии:

usd -> eur = 0.7
eur -> usd = 1.2
Подсказки
Number.prototype.toLocaleString() – умеет форматировать вывод денег в нужной локали.
Если передать undefined первым параметром, то установится текущая локаль.
Пример реализации денег на js */
