import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Navbar from './Navbar';

import Home from '../routes/home';
import About from '../routes/about';

export default class App extends Component {
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {


    return (
      <div class="antialiased text-gray-900">
        <Navbar />
        <Router onChange={this.handleRoute}>
          <Home path="/" page="home" />
          <About path="/about/" page="about" />
        </Router>
      </div>
    );
  }
}
