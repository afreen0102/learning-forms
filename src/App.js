import './App.css';
import { useState } from 'react';

function App() {

  const [ formData, setFormData ] = useState({
    bookname: "",
    description: "",
    isFiction: true,
    rating: ""
  })

  console.log(formData);

  function changeHandler(event) {
  console.log(event.target.name);

  const { name ,value , checked, type } = event.target

  console.log(value)

  setFormData(prevData => {

    return {
    ...prevData, 
    [name] : type === "checkbox" ? checked : value
  
    }
    })
 }


  return (
    <div className="App">

      <form className="form">
         
         <input  type="text" 
         name="bookname" 
         value={formData.bookname} 
         placeholder='Book Title' 
         onChange={changeHandler} 
         id="isFiction"/>

         <input type="checkbox" 
         onChange={changeHandler} 
         name="isFiction" 
         checked={formData.isFiction} />
         <label htmlFor="isFiction"> is fiction ?</label>
         <textarea rows="10" 
         placeholder="Description" 
         name="description" onChange={changeHandler} value={formData.description} />

         <h3>Rating</h3>
         <input 
         type="radio" 
         onChange={changeHandler}
         name="rating"
         id="nice"
         value="nice"
         checked={formData.mode === "nice" }
         />
         <label htmlFor="nice">Nice</label>

         <input 
         type="radio" 
         onChange={changeHandler}
         name="rating"
         id="ordinary"
         value="ordinary"
         checked={formData.mode === "ordinary" }
         />
         <label htmlFor="ordinary">Ordinary</label>
      </form>
      
    </div>
  );
}

export default App;
