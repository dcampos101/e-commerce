// src/components/AddItemButton.jsx
import Button from 'react-bootstrap/Button';

const AddItemButton = ({ onAdd, quantity }) => {
  return (
    <Button variant="success" className="w-100 mt-2" onClick={() => onAdd(quantity)}>
      Agregar al Carrito
    </Button>
  );
};
export default AddItemButton;
