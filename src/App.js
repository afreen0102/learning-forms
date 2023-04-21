import './App.css';
import { useState } from 'react';

function App() {

  const [ formData, setFormData ] = useState({
    bookname: "",
    description: "",
    isFiction: true,
    rating: "",
    favCar:""
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

 function submitHandler(event) {
  event.preventDefault();
  console.log("on submitting ");
  console.log(formData)
 }


  return (
    <div className="App">

      <form className="form" onSubmit={submitHandler}>
         
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

         <fieldset>
         <legend>Mode:</legend>
         <input 
         type="radio" 
         onChange={changeHandler}
         name="rating"
         id="nice"
         value="nice"
         checked={formData.rating === "nice" }
         />
         <label htmlFor="nice">Nice</label>

         <input 
         type="radio" 
         onChange={changeHandler}
         name="rating"
         id="ordinary"
         value="ordinary"
         checked={formData.rating === "ordinary" }
         />
         <label htmlFor="ordinary">Ordinary</label>
         </fieldset>

         <label htmlFor="favCar">Select Your Favaourite Car</label>
         <select
         onChange={changeHandler}
         name="favCar"
         id="favCar"
         value={formData.favCar}
         >
          <option value="scorpio">Scorpio</option>
          <option value="xylo">Xylo</option>
          <option value="defender">Defender</option>
         </select>


         <button>Submit</button>
         

      </form>
      
    </div>
  );
}

export default App;
