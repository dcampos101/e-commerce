// src/components/ItemDetailContainer.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { getProductById } from '../mock/asyncMock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then(response => setProduct(response))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return (
      <Container className="text-center my-5"><Spinner animation="border" /></Container>
    );
  }

  return (
    <Container className="my-5">
      {product ? <ItemDetail {...product} /> : <p>Producto no encontrado.</p>}
    </Container>
  );
};
export default ItemDetailContainer;
