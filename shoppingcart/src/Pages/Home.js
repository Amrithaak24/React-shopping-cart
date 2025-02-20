import React from 'react';
import { Products } from './Products'; // Assuming Products is named as such in Products.js
import Productcart from '../components/Productcart'; // Assuming correct filename and casing for ProductCart

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl my-5'>List Products</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {Products.map((product, key) => 
          <Productcart key={key} data={product} />
        )}
      </div>
    </div>
  );
}

export default Home;
