import { useState, useContext } from 'react';
import OrderContext from '../components/OrderContext';
import calculateOrderTotal from './calculateOrderTotal';
import formatMoney from './formatMoney';
import attachNameAndPrices from './attachNameAndPrices';

export default function useVeganBurger({ veganBurgers, inputs }) {
  const [order, setOrder] = useContext(OrderContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const addToOrder = (orderedBurger) => setOrder([...order, orderedBurger]);

  const removeFromOrder = (index) =>
    setOrder([...order.slice(0, index), ...order.slice(index + 1)]);

  const submitOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const body = {
      order: attachNameAndPrices(order, veganBurgers),
      total: formatMoney(calculateOrderTotal(order, veganBurgers, 'useBurger')),
      name: inputs.name,
      email: inputs.email,
      screwYou: inputs.screwYou,
    };

    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    );
    const text = JSON.parse(await res.text());

    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      setLoading(false);
      setMessage(text.message);
    }
  };

  return {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  };
}
