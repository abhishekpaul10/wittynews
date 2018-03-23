import React, { Component } from 'react';
import NewsPage from './components/newspage';
import './Assets/css/defaults.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsPage/>
      </div>
    );
  }
}

export default App;
