import Header from '../Header/Header';
import Post from '../Post/Post';
import Answers from '../Answers/Answers';
import Data from '../recordedAnswers.json';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  //////////////////////////////////////////////////////////////
  //                     Form details Begin                   //
  //////////////////////////////////////////////////////////////

  //                         useState                         //
  const [ details, setDetails ] = useState({
    name: "",
    snack: ""
  })
  //                       handleChange                       //
  const handleChange = (e) => {
    const {name, value} = e.target
    setDetails((prev) => {return {...prev, [name]: value}})
  }
  //                       handleSubmit                       //
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(details)
    postAnswer()
  }
  //                        Form Terms                        //
  const Form = [
    {id: 1, placeholder: 'Name', name: 'name'},
    {id: 2, placeholder: 'Favorite snack?', name: 'snack'}
  ]

  //////////////////////////////////////////////////////////////
  //                     Form details End                     //
  //////////////////////////////////////////////////////////////
  


  //////////////////////////////////////////////////////////////
  //                    Answer details Begin                  //
  //////////////////////////////////////////////////////////////

  //                         useState                         //
    const [newPost, updateAnswers] = useState(Data);
  /////////////////////////////////////////////////////////////
  const postAnswer = () => {
    //define DOM element form
    const form = document.querySelector('form');
    //get info from form | make info into newPost
    const fd = new FormData(form);
    const newPost = Object.fromEntries(fd)
    //Get date | format date | add date to newPost
    const d = new Date();
    const getDate = `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`;
    newPost.date = getDate
    //Get last key | add one to key number | assign number to newPost
    const newId = Data.length++
    newPost.id = newId
    //Push newPost to JSON
    Data.push(newPost)
  }

  ////////////////////////////////////////////////////////////////////

  // updateAnswers = (e) => {}

  //////////////////////////////////////////////////////////////
  //                     Answer details End                   //
  //////////////////////////////////////////////////////////////



  
  //Below HTML for page Layout
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <div className='Post-container'>
            <h1>Post</h1>
            <form onSubmit={handleSubmit} className='Post-wrapper'>
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
              <input 
                type='button' 
                className='btn btn-warning' 
                value='Post' 
                onClick={handleSubmit} 
              />
            </form>
        </div>
        <div className="Answers-container">
          <h1>Answers</h1>
          <div className="answer-posts">
            {Data.map((data) => {
              const {id, date, name, snack} = data
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
}

export default App;
