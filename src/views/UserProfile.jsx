/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Table
} from "reactstrap";

import { getPatients, registerPatient } from "../actions/patient";

class UserProfile extends React.Component {
  state = {
    nome: "",
    cpf: "",
    rg: "",
    patientsList: []
  };

  componentDidMount() {
    this.recallList();
  }

  recallList = () => {
    getPatients(localStorage.getItem("Authorization")).then(res => {
      this.setState({ patientsList: res.data });
    });
  };

  onFieldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = event => {
    registerPatient(
      { nome: this.state.nome, cpf: this.state.cpf, rg: this.state.rg },
      localStorage.getItem("Authorization")
    ).then(res => {
      this.recallList();
    });
  };

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Cadastrar paciente</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Nome completo</label>
                          <Input
                            name="nome"
                            value={this.state.nome}
                            placeholder="nome"
                            type="text"
                            onChange={this.onFieldChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="3">
                        <FormGroup>
                          <label>CPF</label>
                          <Input
                            name="cpf"
                            value={this.state.cpf}
                            placeholder="000.000.000-00"
                            type="text"
                            onChange={this.onFieldChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>RG</label>
                          <Input
                            name="rg"
                            value={this.state.rg}
                            placeholder="00.000.000-0"
                            type="email"
                            onChange={this.onFieldChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button
                    onClick={this.onFormSubmit}
                    className="btn-fill"
                    type="submit"
                  >
                    Salvar
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Pacientes</h5>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>RG</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.patientsList.map(patient => {
                        return (
                          <tr key={patient.id}>
                            <td>{patient.nome}</td>
                            <td>{patient.cpf}</td>
                            <td>{patient.rg}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
