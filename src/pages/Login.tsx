import React from 'react';

interface IndexProps { }

const Login: React.FC<IndexProps> = (props) => {
  return (
    <>
      <div className='container-fluid d-flex justify-content-around w-100 h-100' >
        <div className='sm-4'>
          <img className='sm-6 auto' src='https://picsum.photos/id/480/900' alt="teste" />
        </div>
        <form className='my-auto'>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
