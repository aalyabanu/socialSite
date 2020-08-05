import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Likes from './Likes';
import Loves from './Loves';
import { Container, Col, Row } from "react-bootstrap";

class Scard extends React.Component {

  render() {
    return (
      <>
      <Container>
        <Card className="mx-auto text-center mt-2">
          <Row>
          <Col xs="3">
          <div className="avatar">
                <img
                  src="http://www.croop.cl/UI/twitter/images/doug.jpg"
                  alt="dougie avatar"
                />
              </div>
          <Card.Header as="h5">@{this.props.id}</Card.Header>
          </Col>
          <Col>
          <Image fluid className="mx-auto" src={this.props.img} alt={this.props.alt} />
          <Card.Body>
            <Card.Text>{this.props.text}</Card.Text>
            </Card.Body>
            </Col>
            </Row>
            <Row>
              <Col>
            <Likes no={this.props.likes} likeaction={this.props.likeaction} postId={this.props.postId} />
            </Col>
            <Col>
            <Loves no={this.props.loves} loveaction={this.props.loveaction} postId={this.props.postId} />
            </Col>
            </Row>
        
          

        </Card>
        </Container>
      </>
    );
  }
}

export default Scard;