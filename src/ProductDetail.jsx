import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProductDetail.css'; // Custom CSS for styling

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <Container className="product-detail">
      <Row>
        <Col md={6}>
          <Image src={process.env.PUBLIC_URL + product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
        <Card className="h-100">
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Price: ${product.price}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
<br></br>
      <Link to="/"> {/* This links back to the root (home) */}
        <Button variant="secondary">Back to Home Page</Button>
      </Link>
    </Container>
  );
}

export default ProductDetail;
