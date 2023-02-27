import React from 'react';
import { ListGroup } from 'react-bootstrap';
interface ShoppingChartProps { }

const ShoppingChart: React.FC<ShoppingChartProps> = (props) => {

  return (
    <>
      <ListGroup>
        <ListGroup.Item>
          <img style={{ width: "5%" }} className='img-fluid img-thumbnail' src='../../public/img/test-200x300.jpg' />
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item>
          <img style={{ width: "5%" }} className='img-fluid img-thumbnail' src='../../public/img/test-200x300.jpg' />
          Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item>
          <img style={{ width: "5%" }} className='img-fluid img-thumbnail' src='../../public/img/test-200x300.jpg' />
          Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item>
          <img style={{ width: "5%" }} className='img-fluid img-thumbnail' src='../../public/img/test-200x300.jpg' />
          Porta ac consectetur ac
        </ListGroup.Item>
        <ListGroup.Item>
          <img style={{ width: "5%" }} className='img-fluid img-thumbnail' src='../../public/img/test-200x300.jpg' />
          Vestibulum at eros
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default ShoppingChart;
