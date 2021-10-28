import React, { useState } from 'react'

const Control = ({ onAdd }) => {
  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }
  const addItem = (e) => {
    onAdd(value)
    setValue('')
  }

  return (
    <>
      <input value={value} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </>
  )
}

export default Control
