// src/components/ItemList.jsx
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {products.map(prod => (
        <Col key={prod.id}>
          <Item {...prod} />
        </Col>
      ))}
    </Row>
  );
};
export default ItemList;
