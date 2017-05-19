import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const Container = () => (
  <div>
    <App />
  </div>
  );

export default Container;

ReactDOM.render(
  <Container />,
  document.getElementById('root'),
);
