import React from "react";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'


const ProductCard = ({ product }) => (
  <Card className='shadow-sm'>
    <Card.Img variant="top" src={process.env.PUBLIC_URL + product.imagePath} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
      <Card.Text>{product.description}</Card.Text>
      <Button variant="primary">Add to Cart</Button>
    </Card.Body>
  </Card>
);


const ProductList = ({ products }) => (
  <Row>
    {
      products.map((product, index) => (
        <Col md={4} className='mb-3' id={product.id}>
          <ProductCard
            product={product}
          />
        </Col>
      ))
    }
  </Row>
)


class ProductPage extends React.Component {

  constructor(props) {
    super(props);
    this.products = props.products
    this.state = {
      search: "",
      maxPrice: 99999999
    };
  }

  /*changeSearch = () => {
    this.setState({});
  }*/

  render() {
    return (
      <Container>
        <Row>
          <Col className='mb-3' md={3}>

            <Form.Control className='mb-2' placeholder="Search products..." />

            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="sort-by">
                Sort By
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Highest Price</Dropdown.Item>
                <Dropdown.Item>Lowest Price</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Col>

          <Col md={9}>
            <ProductList
              products={this.products}
            />
          </Col>

        </Row>
      </Container>
    )
  }

}


export default ProductPage;
