import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Address from '../components/Address';


interface CadastroProps { }

const Cadastro: React.FC<CadastroProps> = (props) => {
  const [sameAddressBills, setSameAddressBills] = useState(true)
  return (
    <>
      <section className="h-100 h-custom gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-12">
                      <div className="p-5">
                        <h3 className="fw-normal mb-5 text-dark">Informações Básicas</h3>

                        <div className="mb-4 pb-2">
                          <Form.Label>Nome completo</Form.Label>
                          <Form.Control type="text" />
                        </div>
                        <div className="mb-4 pb-2">
                          <Form.Label>E-mail</Form.Label>
                          <Form.Control type="email" />
                        </div>


                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="mb-4 pb-2">
                              <Form.Label>Genero</Form.Label>
                              <Form.Control as="select" >
                                <option>Masculino</option>
                                <option>Feminino</option>
                                <option>Outros</option>
                              </Form.Control>
                            </div>
                          </div>

                          <div className="col-md-6 mb-4 pb-2">
                            <div className="mb-4 pb-2">
                              <Form.Label>Cpf</Form.Label>
                              <Form.Control type="text" />
                            </div>
                          </div>
                        </div>

                        <div className="mb-4 pb-2">
                          <Form.Label>Data de Nascimento</Form.Label>
                          <Form.Control type="date" />
                        </div>

                        <div className='row'>
                          <div className="col-md-4 mb-4 pb-2">
                            <div className="mb-4 pb-2">
                              <Form.Label>Tipo Telefone</Form.Label>
                              <Form.Control as="select" >
                                <option>Celular</option>
                                <option>Fixo</option>
                              </Form.Control >
                            </div>
                          </div>

                          <div className="col-md-2 mb-4 pb-2">
                            <div className="mb-4 pb-2">
                              <Form.Label>DDD</Form.Label>
                              <Form.Control type="text" maxLength={2} />
                            </div>
                          </div>
                          <div className="col-md-4 mb-4 pb-2">
                            <div className="mb-4 pb-2">
                              <Form.Label>Telefone</Form.Label>
                              <Form.Control type="tel" maxLength={9} />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="mb-4 pb-2">
                              <Form.Label>Senha</Form.Label>
                              <Form.Control type="password" />
                            </div>
                          </div>

                          <div className="col-md-6 mb-4 pb-2">
                            <div className="mb-4 pb-2">
                              <Form.Label>Repita a senha</Form.Label>
                              <Form.Control type="password" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`col-lg-${sameAddressBills ? 12 : 6} bg-indigo `}>
                      <div className="p-5">
                        <h3 className="fw-normal mb-5 text-dark" >Endereço de Entrega</h3>
                        <div className="form-check d-flex justify-content-start mb-4 pb-3">
                          <Form.Check type="checkbox" label="Usar dados para endereço de cobrança" checked={sameAddressBills} onChange={() => setSameAddressBills(prev => !prev)} />
                        </div>
                        <Address />

                      </div>

                    </div>
                    <div className="col-lg-6 bg-indigo ">
                      {
                        !sameAddressBills && <div className="p-5">
                          <h3 className="fw-normal mb-5 text-dark" >Endereço de Cobrança</h3>
                          <div className="form-check d-flex justify-content-start mb-4 pb-3">
                          </div>
                          <Address />

                        </div>
                      }
                    </div>

                  </div>

                  <div className="d-flex justify-content-center mb-4">

                    <button type="button" className="btn btn-light d-flex  bg-dark text-white btn-lg"
                      data-mdb-ripple-color="white">
                      Cadastro
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cadastro;
