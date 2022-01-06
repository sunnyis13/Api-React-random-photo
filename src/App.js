import './App.css';
import React , {useState} from 'react'
import axios from 'axios';

function App() {
  const [image, setImage] = useState('')

  const handleChange = () => {
    axios.get('https://randomuser.me/api/')
    .then(res => {
      const uri = res.data.results[0].picture.large
      uri && setImage(uri)
    }).catch(err => {
      console.log(err.message);
    })
  }

  return (
    <div className="App">
      <h1>AI Photo Generator</h1>
      {image && <img src={image} alt="AI Face"/>}
      <button type='button' onClick={handleChange}>
        New Image
      </button>
    </div>
  );
}

export default App;
