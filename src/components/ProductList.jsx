import React from "react";
import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProductList = ({ products }) => (
  <Container>
    <CardColumns>
      {
        products.map((product, index) => (
          <ProductCard
            product={product}
          />
        ))
      }
    </CardColumns>
  </Container>
)

const ProductCard = ({ product }) => (
  <Card id={product.id}>
    <Card.Img variant="top" src={process.env.PUBLIC_URL + product.imagePath} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
      <Card.Text>{product.description}</Card.Text>
      <Button variant="primary">Add to Cart</Button>
    </Card.Body>
  </Card>
);

export default ProductList;
