import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

import ErrorBoundary from './bugFinder';
import Feedback from './components/Feedback/Feedback';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Feedback title="Statistics" />
      </div>
    </ErrorBoundary>
  );
}

App.propTypes = {
  title: PropTypes.string,
};
export default App;
