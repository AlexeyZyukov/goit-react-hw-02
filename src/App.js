import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

import Feedback from './feedback/Feedback.js';

function App() {
  return (
    <div className="App">
      <Feedback title="Statistics" />
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string,
};
export default App;
