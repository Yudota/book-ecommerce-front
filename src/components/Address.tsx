import React from 'react';
import { Form } from 'react-bootstrap';

interface AddressProps { }

const Address: React.FC<AddressProps> = (props) => {
  return (
    <div>

      <div className="mb-4 pb-2">
        <div className="form-outline form-white">
          <Form.Label>CEP</Form.Label>
          <Form.Control type="text" />

        </div>
      </div>


      <div className="row">
        <div className="col-md-5 mb-4 pb-2">
          <div className="form-outline form-white">
            <Form.Label>Tipo Logradouro</Form.Label>
            <Form.Control type="text" />
          </div>
        </div>
        <div className="col-md-7 mb-4 pb-2">
          <div className="form-outline form-white">
            <Form.Label>Tipo Residencia</Form.Label>
            <Form.Control as="select" >
              <option>Apartamento</option>
              <option>Casa</option>
            </Form.Control>
          </div>
        </div>

        <div className="col-md-12 mb-4 pb-2">
          <div className="form-outline form-white">
            <Form.Label>Logradouro</Form.Label>
            <Form.Control type="text" />
          </div>
        </div>
        <div className="col-md-2 mb-4 pb-2">
          <div className="form-outline form-white">
            <Form.Label>Numero</Form.Label>
            <Form.Control type="text" />
          </div>
        </div>
        <div className="col-md-5 mb-4 pb-2">
          <div className="form-outline form-white">
            <Form.Label>Bairro</Form.Label>
            <Form.Control type="text" />
          </div>
        </div>
        <div className="col-md-5 mb-4 pb-2">
          <div className="form-outline form-white">
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="text" />
          </div>
        </div>
        <div className="col-md-6 mb-4 pb-2">
          <div className="form-outline form-white">
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text" />
          </div>
        </div>
        <div className="col-md-6 mb-4 pb-2">
          <div className="form-outline form-white">
            <Form.Label>País</Form.Label>
            <Form.Control type="text" />
          </div>
        </div>
      </div>





      <div className="row">
        <div className="col-md-12 mb-4 pb-2">
          <div className="form-outline form-white">
            <Form.Label>Observações</Form.Label>
            <Form.Control type="text" />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Address;
