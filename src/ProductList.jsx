import React from 'react';
import { Link } from 'react-router-dom'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function ProductList({ products }) {
  return (
    <Row>
      {products.map((product) => (
        <Col xs={12} sm={6} md={4} lg={3} key={product.id} className="mb-4">
          <div className="mx-4 h-100"> 
            <Card style={{ width: '18rem' }} className="h-100"> 
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + product.image}
                alt={product.name}
                className="mt-2 mb-2"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">More Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;
