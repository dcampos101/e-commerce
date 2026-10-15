// src/components/ItemDetail.jsx
import { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ItemQuantitySelector from './ItemQuantitySelector';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ id, name, img, price, description }) => {
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    addItem({ id, name, price, img }, quantity);
    alert(`Agregaste ${quantity} unidad(es) de ${name} al carrito.`);
  };

  return (
    <Card className="p-4 shadow-sm">
      <Row className="align-items-center">
        <Col md={6}>
          <Card.Img src={img} alt={name} className="img-fluid rounded" />
        </Col>
        <Col md={6}>
          <h2>{name}</h2>
          <p className="text-muted">{description}</p>
          <h3 className="text-primary my-3">\${price}</h3>
          <ItemQuantitySelector onAdd={handleOnAdd} />
        </Col>
      </Row>
    </Card>
  );
};
export default ItemDetail;
