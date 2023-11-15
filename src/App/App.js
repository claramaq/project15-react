import Header from '../Header/Header';
import Post from '../Post/Post';
import Answers from '../Answers/Answers';
import Data from '../recordedAnswers.json'; 
import './App.css';
import { useState } from 'react';

function App() {
  //////////////////////////////////////////////////////////////
  //                      Form inputs Begin                   //
  //////////////////////////////////////////////////////////////

  //                         useState                         //
  const [ input, setInput ] = useState({ name: "", snack: "" }); //setup hook for form
  const [ newPost, updateAnswers ] = useState(Data); //setup hook for new answer posts
  //                        Form Terms                        //
  const Form = [
    {id: 1, placeholder: 'Name', name: 'name'},
    {id: 2, placeholder: 'Favorite snack?', name: 'snack'}
  ];  //set up object array for form inputs
  //                       handleChange                       //
  const handleChange = (e) => {
    const {name, value} = e.target; //destructoring
    setInput((prev) => {return {...prev, [name]: value}}); //call data from form
  };
  //                       handleSubmit                       //
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent refresh
    console.log(input); //log data for testing
    postAnswer(input); //call postAnswer function with form details
  };

  //////////////////////////////////////////////////////////////
  //                      Form inputs End                     //
  //////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////
  //                    Answer details Begin                  //
  //////////////////////////////////////////////////////////////

  const postAnswer = () => {
    const form = document.querySelector('form'); //define DOM element form
    const fd = new FormData(form); //get info from form
    const newPost = Object.fromEntries(fd); //make info into newPost
    const d = new Date(); //get date
    const getDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`; //format date
    newPost.date = getDate; //add date to newPost
    const newId = Data.length++; //get last key && add one
    newPost.id = newId; //assign id

    Data.push(newPost); //push newPost to Data
    updateAnswers((prev) => {return {...prev, newPost}}); //update answers
  }

  //////////////////////////////////////////////////////////////
  //                     Answer details End                   //
  //////////////////////////////////////////////////////////////
 


  
  //Below HTML for page Layout
  return (
    <div className='App'>
  {/* //////////////////////// Header /////////////////////// */}
      <Header />



      <div className='container'>
  {/* ///////////////////////// Post //////////////////////// */}
        <div className='Post-container'>
            <h1>Post</h1>
            <form 
            onSubmit={handleSubmit} 
            className='Post-wrapper'>
        {/* ///////// Map for form input submission ///////// */}
        {Form.map((form) => {
                const {id, name, placeholder} = form
                return (
                  <Post 
                    key={id}
                    id={name}
                    placeholder={placeholder}
                    name={name} 
                    handleChange={handleChange} 
                  />
                )
              })}

              {/* <span className='required none'>* Required</span>
              <input className='form-control' id='name' 
              placeholder='Name' name='name' 
              type='textbox' maxLength='20' 
              onChange={handleChange} 
              // value={newName}
              required/>
              <span className='required none'>* Required</span>
              <input className='form-control' id='snack' 
              placeholder='Favorite snack?' name='snack' 
              type='textbox' maxLength='20' 
              onChange={handleChange} 
              // value={newSnack} 
              required/> */}
  {/* //////////////////////// Submit /////////////////////// */}
              <input 
                type='button' 
                className='btn btn-warning' 
                value='Post' 
                onClick={postAnswer}  
              />
            </form>
        </div>

  {/* /////////////////////// Answers /////////////////////// */}
        <div className="Answers-container">
          <h1>Answers</h1>
          <div className="answer-posts">
        {/* ///////////////// Map for answers /////////////// */}
            {Data.map((data) => {
              const {id, date, name, snack} = data;
              return (<Answers 
              key = { id } 
              date = { date }
              name = { name }
              snack = { snack }
              />)
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
