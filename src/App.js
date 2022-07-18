import React,{Children, useState} from "react";
import logo from './logo.svg';
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

// comment this out after completion and uncomment code below it to proceed
function Child({func}) {
  return <div>
    This is children content
    <button onClick={()=>func('I need to be updated from my child')}>Change</button>
  </div>;
}
/**
  Challenge: Uncomment this code to complete quiz

function Child() {
  return (
    <>
      <div>Child</div>
      <button>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child />
      </div>
    </>
  );
}
Uncomment this to tackle quiz
**/

// Comment out after completion
function Parent(props) {
  const [content,setContent] = useState('Parent Component')
  function changeParent(word){
    setContent(word)
  }

  return (
    <div>
      <h3>{content}</h3>
      <Child func={changeParent}/>
    </div>
  );
}
// Comment above code after completion




function App() {
  const [hide,setHide]=useState(true)
  const [value,setValue] = useState(logo);
  function handleImage(){
    setValue('https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png')
  }
  const handleHide=()=>{
    setHide(!hide);
  }
  
  
  return (
    <>
    
    <img src={value} className="App-logo" alt="logo" />
    <button onClick={handleImage}>Change Image</button>
      <h3>User names</h3>
      <ul className="user">
        {
          users.map((item)=><li key={item.id}>{item.name}</li>)
        }
      </ul>
      <button onClick={handleHide}>Hide Element Below</button>

      <div>Toggle Challenge</div>
      {hide?<Parent><Child /></Parent>:null}
    </>
  );
}

export default App;