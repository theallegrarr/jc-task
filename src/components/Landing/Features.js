import React from 'react';
import lamp from '../../assets/lamp.svg';
import energy from '../../assets/energy.svg';
import geothermal from '../../assets/geothermal-energy.svg';
import wavy from '../../assets/Frame.svg';

export default function LinkUpFeatures () {

  return (
    <div className='features-div'>
      <div className='ftr-head'>
        <h3>Features</h3>
      </div>
      <img src={wavy} alt='wavy-alt' className='wavy' />

      <div className='feature-cards'>
      <div className='feature-card'>
        <img src={energy} alt='dec-alt' className='dec-icon' />
        <h4>Useful</h4>
        <p>
          A neccessity for every professional
        </p>
      </div>
      <div className='feature-card'>
        <img src={lamp} alt='dec-alt' className='dec-icon' />
        <h4>Easy To Use</h4>
        <p>
          Click a button, fill some forms and you're done
        </p>
      </div>
      <div className='feature-card'>
      <img src={geothermal} alt='dec-alt' className='dec-icon' />
        <h4>Its Free!</h4>
        <p>
          No payment plans or premium offers, its all free
        </p>
      </div>
    </div>
    </div>
  );
}