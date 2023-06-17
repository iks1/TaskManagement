import React from 'react'
import { useState } from 'react'

const Addnew = () => {
    const [input, setInput] = useState('')
    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log(input)
    }   
    const changeInput = (e) => {
        setInput(e.target.value)
    }
  return (
    <div>
      <button>
        + Add new
      </button>
      <form onSubmit={SubmitHandler}>
        <input value={input} onChange={changeInput} />
        <button>
            save
        </button>
      </form>
    </div>
  )
}

export default Addnew
