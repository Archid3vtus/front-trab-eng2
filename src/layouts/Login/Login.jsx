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
import {loginUser} from "../../actions/auth";

//css
import "../../assets/css/login.css";

class Login extends Component {
  state = {
    login: "",
    senha: ""
  }

  componentDidMount(){
    localStorage.removeItem("Authorization");
  }

  onFieldChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  onFormSubmit = event => {
    loginUser(this.state).then(res => {
      localStorage.setItem("Authorization", res.data.token);
      window.location.href = "/admin/dashboard"
    })
  }

  render() {
    return (
      <div className="login">
        <Col>
          <Col xs="12" style={{width: "30%"}}>
            <Card>
              <CardHeader>
                <h5 className="title" style={{textAlign: "center"}}>Login</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Input onChange={this.onFieldChange} name="login" placeholder="Email" type="text" value={this.state.login}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Input onChange={this.onFieldChange} name="senha" placeholder="Password" type="password" value={this.state.senha} />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button onClick={this.onFormSubmit}>Entrar</Button>
              </CardFooter>
            </Card>
          </Col>
        </Col>
      </div>
    );
  }
}

export default Login;
