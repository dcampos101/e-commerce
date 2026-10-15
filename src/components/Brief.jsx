// src/components/Brief.jsx
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Brief = ({ cart, removeItem, totalPrice }) => {
  return (
    <div>
      <ListGroup className="mb-3">
        {cart.map(prod => (
          <ListGroup.Item key={prod.id} className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <img src={prod.img} alt={prod.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} className="rounded" />
              <div>
                <h6 className="mb-0">{prod.name}</h6>
                <small className="text-muted">Cantidad: {prod.quantity} x ${prod.price}</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="fw-bold">${prod.quantity * prod.price}</span>
              <Button variant="link" className="text-danger p-0" onClick={() => removeItem(prod.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
        <h4>Total a pagar:</h4>
        <h4 className="text-success">${totalPrice}</h4>
      </div>
    </div>
  );
};
export default Brief;
