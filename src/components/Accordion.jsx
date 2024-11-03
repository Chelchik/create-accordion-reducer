import React, { useState } from 'react'

function Accordion({ accordion, onDelete }) {
    const [isShow, setIsShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isEdit2, setIsEdit2] = useState(false);
    const [text, setText] = useState(accordion.title);
    const [description, setDescription] = useState(accordion.description);

    const isShowFunc = () => {
        setIsShow(!isShow);
    }

    const isEditFunc = () => {
        setIsEdit(!isEdit);
    }

    const isEditFunc2 = () => {
        setIsEdit2(!isEdit2);
    }

    const inputValue = (e) => {
        setText(e.target.value);
    }

    const descriptionValue = (e) => {
        setDescription(e.target.value);
    }

    const dontSave = () => {
        setText(accordion.title)
        setIsEdit(!isEdit);
    }

    return (
        <div className='accordion'>
            <div className='titleBox'>
                <button onClick={isEditFunc} className='editAndSaveBtn'>{isEdit ? "Save" : "Edit"}</button>
                <button onClick={dontSave} className='editAndSaveBtn' style={{display: isEdit ? 'block' : 'none'}}>Delete</button>

                {
                    isEdit ? <input type="text" value={text} onChange={inputValue} className='textEditor' /> : <p>{text}</p>
                }

                <div className='deleteAndShowButtonsBox'>
                    <b onClick={isShowFunc}>{isShow ? "-" : "+"}</b>

                    <button onClick={() => onDelete(accordion.id)} className='delete-btn'>X</button>
                </div>
            </div>

            <div className='description-box' style={{ display: isShow ? 'flex' : 'none' }}>
                <button onClick={isEditFunc2} className='editAndSaveBtn'>{isEdit2 ? "Save" : "Edit"}</button>

                {
                    isEdit2 ? <textarea type="text" value={description} rows={6} onChange={descriptionValue} className='textareaEditor' /> : <span>{description}</span>
                }
            </div>
        </div>
    )
}

export default Accordion