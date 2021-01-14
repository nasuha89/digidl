import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import simcard from './assets/simcard.svg';
import SectionMessage from '@atlaskit/section-message';
import Select from '@atlaskit/select';

ReactDOM.render(

<div class="col-md-12 mt-5">
  <div class="row">
    <div class="card col-md-2">
      <div class="card-body">
        <img src={simcard} alt="SIM Card icon"></img>
        <p class="card-title mt-3">Digi Postpaid 98</p>
        <p class="card-text"><strong>0161008788</strong></p>
      </div>
    </div>
  </div>

  <div class="row mt-3">
    <SectionMessage appearance="warning">
      <p>This mobile number is an account group owner. Please select a new account group owner to proceed.</p>
    </SectionMessage>
  </div>
  
  <div className="row mt-5">
    <div className="col-md-12 ml-0">
      <Select />
    </div>
  </div>


</div>,

  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
