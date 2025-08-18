import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useProducts } from '@/hooks/useProducts';

const ProductRedirect = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById } = useProducts();

  if (!id) {
    return <Navigate to="/products" replace />;
  }

  const product = getProductById(parseInt(id));

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Redirect to the new slug-based URL
  return <Navigate to={`/produto/${product.slug}`} replace />;
};

export default ProductRedirect;