import React from 'react';

interface DetalheLivroProps { }

const DetalheLivro: React.FC<DetalheLivroProps> = (props) => {
  return (
    <>
      <div>
        <div className='container d-flex sm-2 bg-secondary'>

          <div className="container d-flex sm-1 bg-primary">
            Image
          </div>
          <div className='container d-flex sm-1 bg-danger'>Info Book container</div>
        </div>

      </div>
    </>
  );
};

export default DetalheLivro;
