import calculateBurgerPrice from './calculateBurgerPrice';
import formatMoney from './formatMoney';

export default function attachNameAndPrices(order, burgers) {
  return order.map((item) => {
    const burgerOrder = burgers.find((burger) => burger.id === item.id);
    return {
      ...item,
      name: burgerOrder.name,
      thumbnail: burgerOrder.image.asset.fluid.src,
      price: formatMoney(calculateBurgerPrice(burgerOrder.price, item.size)),
    };
  });
}
