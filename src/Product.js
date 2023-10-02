// src/components/Product.js
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Product({ product }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClose = () => setShowDetails(false);
  const handleShow = () => setShowDetails(true);

  return (
<>
   
    <div className="mb-4"> {/* Add margin-bottom to the container */}
      <Card  style={{ padding: '20px' }}>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + product.image}
          alt={product.name}
          style={{ height: '200px' }} // Set the desired height here
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Price: ${product.price}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            More Details
          </Button>
        </Card.Body>
      </Card>

      {/* Modal for displaying more details */}
      <Modal show={showDetails} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {/* Add more product details here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default Product;
