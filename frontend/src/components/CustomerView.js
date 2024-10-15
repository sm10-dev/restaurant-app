import React from 'react';
import Menu from './Menu';
import OrderTracking from './OrderTracking';
import Feedback from './Feedback';

const CustomerView = () => {
  return (
    <div>
      <h1>Customer View</h1>
      <Menu />
      <OrderTracking />
      <Feedback />
    </div>
  );
};

export default CustomerView;
