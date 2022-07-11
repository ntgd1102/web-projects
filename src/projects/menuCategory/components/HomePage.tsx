import React from 'react';

import './HomePage.css';

export const HomePage: React.FC = () => {
  return (
    <div className='home-page'>
      <h3>LOCATION & HOURS</h3>
      <div>1067 N San Antonio Rd Los Altos, CA 94022</div>
      <div>Phone: (650) 948-2696</div>
      <div>Fax: (650) 948-0121</div>
      <div>Sunday – Thursday – 11:30am – 9:30pm</div>
      <div>Friday 11:30am – 10pm</div>
      <div>Saturday 12pm (noon) – 10pm</div>
    </div>
  );
}

export default HomePage;