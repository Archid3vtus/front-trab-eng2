import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  Button
} from "reactstrap";

//css
import "../../assets/css/login.css";

class Login extends Component {
  render() {
    return (
      <div className="logina">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <h5 className="title">Login</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Input placeholder="Email" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Input placeholder="Email" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
