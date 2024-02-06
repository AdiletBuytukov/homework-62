import React from 'react';
import {Link} from "react-router-dom";

const Cars: React.FC = () => (
  <div>
    <h2>Автомобили</h2>
    <div className='d-flex justify-content-center gap-2'>
      <Link className='btn btn-success' to='*'>Volvo</Link>
      <Link className='btn btn-primary' to='*'>BMW</Link>
      <Link className='btn btn-warning' to='*'>TOYOTA</Link>
    </div>
  </div>
);

export default Cars;
