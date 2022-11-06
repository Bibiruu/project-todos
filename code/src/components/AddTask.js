/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { list } from 'reducers/list'

export const AddTask = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('') // empty string ready for user input

  const defaultPrevention = (event) => { // reload prevention
    event.preventDefault()
    const newTask = {
      id: Date.now().toString(),
      task: input,
      completed: false
    }
    dispatch(list.actions.addItem(newTask))
    setInput('') // input field clearing
  }

  return (
    <form className="new-task" onSubmit={defaultPrevention}>
      <label>
        INPUT NEW TASK  ⇨
        <input type="text" placeholder="Type here..." value={input} onChange={(event) => setInput(event.target.value)} /> {/* getting the input */}
      </label>
      <button className="add-task" type="submit">Add new task:</button>
    </form>
  )
}
