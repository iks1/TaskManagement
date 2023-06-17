import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToList,addToCard } from '../store/Slice'

const Addnew = ({type,parentId}) => {
    const [input, setInput] = useState('');
    const [openform, setOpenform] = useState(false);
    const dispatch = useDispatch();
    const SubmitHandler = (e) => {
        e.preventDefault()
        if(type === 'card'){
        dispatch(addToCard({id: Math.random(), title: input,parentId:parentId}))}
        else{
            dispatch(addToList({id: Math.random(), title: input, cards: []}))
        }
        console.log(input)
    }   
    const changeInput = (e) => {
        setInput(e.target.value)
    }
    const openForm = () => {
        setOpenform(true)
    }
  return (
    <div>
      <button onClick={openForm}>
        + Add new
      </button>
      {openform && <form onSubmit={SubmitHandler}>
        <input value={input} onChange={changeInput} />
        <button onSubmit={SubmitHandler}>
            save
        </button>
      </form>}
    </div>
  )
}

export default Addnew
