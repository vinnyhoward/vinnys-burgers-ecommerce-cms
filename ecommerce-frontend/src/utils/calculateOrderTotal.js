import calculateBurgerPrice from './calculateBurgerPrice';

export default function calculateOrderTotal(order, burger) {
  return order.reduce((runningTotal, singleOrder) => {
    const singleBurger = burger.find((item) => item.id === singleOrder.id);
    return (
      runningTotal + calculateBurgerPrice(singleBurger.price, singleOrder.size)
    );
  }, 0);
}
