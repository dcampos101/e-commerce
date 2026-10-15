// src/components/Checkout.jsx
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Brief from './Brief';

const Checkout = () => {
  const { cart, removeItem, totalPrice, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <Container className="text-center my-5">
        <h3>Tu carrito está vacío 🛒</h3>
        <Button as={Link} to="/" variant="dark" className="mt-3">Volver al Catálogo</Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="mb-4">Resumen de tu compra</h2>
      <Row>
        <Col md={8}>
          {/* Se renderiza el componente Brief pasando las props necesarias */}
          <Brief cart={cart} removeItem={removeItem} totalPrice={totalPrice} />
          <div className="d-flex justify-content-between mt-4">
            <Button variant="outline-danger" onClick={clearCart}>Vaciar Carrito</Button>
            <Button variant="success" onClick={() => { alert('¡Gracias por tu compra!'); clearCart(); }}>
              Finalizar Compra
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Checkout;
