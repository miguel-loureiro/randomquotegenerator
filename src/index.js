import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

const API_url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

class App extends Component {

state = {
  quotes: null,
  randomQuote: null,
}

componentDidMount() {
  fetch(API_url)
    .then(res => res.json())
    .then(data => {
      this.setState({
        quotes: data.quotes
      })
      });
    };

randomQuoteHandler = () => {
  const randomNumber = Math.floor(Math.random() * this.state.quotes.length);
  const randomQuote = this.state.quotes[randomNumber];

  this.setState({
    randomQuote: randomQuote,
  })
}

render() {
  return (
  <div>
      <p className='has-text-link-dark has-text-centered is-size-1 mx-2 my-3'>Random Quotes</p>
      <div className="has-background-grey-lighter card has-text-centered is-wide">
        
        <div className="card-content is-size-3">
          
            {this.state.randomQuote !== null && this.state.randomQuote.quote}
        </div>
      <br></br>
      <div className='card-content is-size-5'>
          {this.state.randomQuote !== null && this.state.randomQuote.author}
      </div>
          <footer className="card-footer">
          <div className="buttons are-medium">
            <button className="button is-primary is-rounded is-inverted is-outlined" onClick={this.randomQuoteHandler}> Click to see another quote </button>
          </div>
          
    </footer>
      </div>
  
  </div>
   
  );
} 
 

}

ReactDOM.render(<App />,document.getElementById('root')
);


