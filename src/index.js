import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StatusMessage from './components/StatusMessage';
import Card from './components/Card';
import Label from './components/Label';

ReactDOM.render(

<div class="col-md-6 mt-5">

  <div class="row">
  <Card
  TopIcon="simcard"
  content=""
  elevation="shadow"
  error=""
  subtitle="Digi Postpaid 90"
  title="RM80/month"
  width="15rem"
/>
  </div>

  <div class="row mt-5">
      <StatusMessage
      state="warning"
      label="This mobile number is an account group owner. Please select a new account group owner to proceed.">
      </StatusMessage>
  </div>

  <div class="row">
  </div>

  <div class="row mt-5">
  </div>

  <div class="row mt-5">
  </div>

</div>, 

  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
