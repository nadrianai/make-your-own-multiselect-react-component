import 'bootstrap/dist/css/bootstrap.min.css';
import Select from './Select';
import React, {useState} from 'react';


const options = [
  {
      label:"Dreamy Blue",
      value:"#1e81b0"
  },
  {
      label:"Dirty White",
      value:"#eeeee4"
  },
  {
      label:"Orange Orange",
      value:"#e28743"
  },
  {
      label:"Light Orange",
      value:"#eab676"
  },
  {
      label:"Sky Blue",
      value:"#76b5c5"
  },
  {
      label:"Chocholate Brown",
      value:"#873e23"
  },
  {
      label:"Coral Blue",
      value:"#abdbe3"
  },
  {
      label:"Aquamarine Blue",
      value:"#154c79"
  }
]

function App() {
  
  const [value1, setValue1] = useState([options[0]])
  const [value2, setValue2] = useState(options[0])


  return (
    <div className="container">
      <Select options = {options} value={value1} onChange = {option => setValue1(option)} multiple={true}/>
      <br />
      <Select options={options} value={value2} onChange={o => setValue2(o)} />
    </div>
  );
}

export default App;
