// src/components/CartWidget.jsx
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="btn btn-outline-light position-relative">
      <FontAwesomeIcon icon={faShoppingCart} />
      {totalQuantity > 0 && (
        <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill">
          {totalQuantity}
        </Badge>
      )}
    </Link>
  );
};
export default CartWidget;
