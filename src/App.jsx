import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const quotes = [
  {quote:"In the middle of every difficulty lies opportunity.", author:"Albert Einstein"},
  {quote:"Do what you can, with what you have, where you are.", author:"Theodore Roosevelt"},
  {quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.", author:"Winston Churchill"},
  {quote:"It always seems impossible until it is done.", author:"Nelson Mandela"},
  {quote:"Your time is limited, so don’t waste it living someone else’s life.", author:"Steve Jobs"}
]

const textColor = [
  "darkblue",
  "purple",
  "orange",
  "green"
]

class MyApp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      index: Math.floor(Math.random()* (quotes.length)),
      backgroundColor:''
    }
    this.clickHandler = this.clickHandler.bind(this);
    }
    componentDidMount(){
      const leadText = document.getElementById("text")
      if (leadText){
        const leadTextColor = window.getComputedStyle(leadText).color;
        this.setState({backgroundColor:leadTextColor})
      }
    }
    generateNewIndex(){
      return Math.floor(Math.random()* (quotes.length));
    }

    generateNewColor(){
      return textColor[Math.floor(Math.random()*textColor.length)];
    }

    clickHandler(){
      this.setState({
        index:this.generateNewIndex(),
        backgroundColor: this.generateNewColor()
      })
    }

    
  
  render(){
    
    return(
      <div id="background" className="d-flex align-items-center justify-content-center" style={{
        backgroundColor:this.state.backgroundColor,
        transition:'background-color 1s ease',
        height:'100vh',
        margin:"0",
        paddingTop:"10px",
      }}>
        <div id="quote-box" className="container text-center p-5 border rounded shadow" style={{maxWidth:"800px",backgroundColor:"white"}}>
          
          <p id="text" className="lead" style={{color:this.state.backgroundColor}}>"{quotes[this.state.index].quote}"</p>
          <p id='author' className="text-muted">-{quotes[this.state.index].author}</p>
              <button id="new-quote" onClick={this.clickHandler} className="btn btn-primary mt-4">New quote</button>
              <a className="btn btn-primary mt-4" href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter' /></a>  
        </div>
      </div>
    )
  }
}


export default MyApp;