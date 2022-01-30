import './App.css';

function Userlist () {
  return (
    <div className="userlist">
    </div>
  )
}

function Text (){
  return(
    <div className="text">
      <h1>Hello World!</h1>
    </div>
  )
}

function Chat () {
  return (
    <div className="chat">      
    </div>
  )
}

function Inputbox () {
  return (
    <div className="inputbox">      
      <input type="text" id="userInput" value="" placeholder='type something'>
      </input>
      <button onclick= {SentText} >Sent!</button>
    </div>
  )  
}

function SentText ()
{

}


function App() {
  return (
    <div className="App">
      <Userlist/>      
      <Text/>
      <Chat/>
      <Inputbox/>
    </div>
  );
}

export default App;
