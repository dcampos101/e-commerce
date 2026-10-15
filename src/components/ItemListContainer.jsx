// src/components/ItemListContainer.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { getProducts, getProductsByCategory } from '../mock/asyncMock';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then(response => setProducts(response))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" variant="dark" />
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="my-4 text-secondary text-capitalize">{categoryId ? categoryId : greeting}</h2>
      <ItemList products={products} />
    </Container>
  );
};
export default ItemListContainer;
