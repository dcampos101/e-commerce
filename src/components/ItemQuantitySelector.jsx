// src/components/ItemQuantitySelector.jsx
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import AddItemButton from './AddItemButton';

const ItemQuantitySelector = ({ stock = 10, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => quantity < stock && setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="mt-3">
      <div className="d-flex align-items-center justify-content-center gap-3 bg-light p-2 rounded">
        <Button variant="outline-dark" size="sm" onClick={decrement}>-</Button>
        <span className="fw-bold fs-5">{quantity}</span>
        <Button variant="outline-dark" size="sm" onClick={increment}>+</Button>
      </div>
      <AddItemButton onAdd={onAdd} quantity={quantity} />
    </div>
  );
};
export default ItemQuantitySelector;
