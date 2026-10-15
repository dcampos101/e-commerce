// src/components/Item.jsx
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={img} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="fw-bold text-primary">\${price}</Card.Text>
        <Button as={Link} to={`/item/${id}`} variant="dark" className="w-100">Ver más</Button>
      </Card.Body>
    </Card>
  );
};
export default Item;
