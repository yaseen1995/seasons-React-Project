import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

//learn 3 functions, setState(), constructor() and render() when we deal with classes
//and when we extend them

//Super is a call to the parents constructor, thats all.

  // CONSTRUCTOR
  state =  { lat: null, errorMessage: ''}; // New way of initialising the constructor, babel way



  // Life Cycle Method
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {this.setState({ lat : position.coords.latitude })},
      err => this.setState({ errorMessage : err.message })
    );
  }

  

  renderContent() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if(!this.state.errorMessage && this.state.lat) {

      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;


  }


  render() {

    return (
    <div className="border red">
    { this.renderContent() }
    </div>
            );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
