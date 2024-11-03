import logo from './logo.svg';
import './App.css';
import { useState, useReducer } from 'react';
import reducer from './reducer';
import Accordion from './components/Accordion';

function App() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isErrorTitle, setIsErrorTitle] = useState(false);
  const [isErrorDescription, setIsErrorDescription] = useState(false);
  const [state, dispatch] = useReducer(reducer, [
    { id: 1, title: "HTML, CSS", description: "Hello WorldHello WorldHello WorldHello WorldHello WorldHello World" },
    { id: 2, title: "JavaScript", description: "Hello WorldHello WorldHello WorldHello WorldHello WorldHello World" },
    { id: 3, title: "React", description: "Hello WorldHello WorldHello WorldHello WorldHello WorldHello World" }
  ]
  )
  

  const inputValue = (e) => {
      setTitle(e.target.value)
  }

  const descriptionFunc = (e) => {
     setDescription(e.target.value)
  }
  const createAccordion = (e) => {
    e.preventDefault();
    if (title.length === 0) {
      setIsErrorTitle(true)
    }

    if (description.length === 0) {
      setIsErrorDescription(true)
    }

    if (title.length >= 1 && description.length >= 1) {
      setIsErrorDescription(false)
      setIsErrorTitle(false)
    dispatch({
      type: "ADD_ACCORDION",
      payload: {
          id: Math.random(),
          title: title,
          description: description
        }
    })
    setTitle("");
    setDescription("");
  }
  }

  const deleteFunc = (id) => {
        dispatch({
          type: "DELETE_ACCORDION",
          payload: id
        })
  }

  return (
    <div className="root">
      <form onSubmit={createAccordion}>
        <input type="text" placeholder='Accordion title' id='title-input' onChange={inputValue} value={title} style={{border: `1px solid ${isErrorTitle ? "red" : "#000"}`}} />

        <p style={{display: isErrorTitle ? "block" : "none"}}>you didn't enter the title text</p>

        <textarea id='description-input' rows={7} placeholder='Accordion description' onChange={descriptionFunc} value={description} style={{border: `1px solid ${isErrorDescription ? "red" : "#000"}`}}></textarea>

        <p style={{display: isErrorDescription ? "block" : "none"}}>you didn't enter the title text</p>


        <input type="submit" value="Add accordion" id="submit" />
      </form>

      <div className='accordions-box'>
        {
          state.map((item) => {
            return <Accordion key={item.id} accordion={item} onDelete={deleteFunc} />
          })
        }
      </div>
    </div>
  );
}

export default App;
