import React from 'react'
import {useState} from 'react' //so that naay effect when you click buttons


const Content = () => {
  const [name, setName] = useState('Bene')
  const [count, setCount] = useState(0)   

  const handleNameChange = () => {
    const names = ['Bob','Kevin','Samantha']
    const int = Math.floor(Math.random()*3)
    setName(names[int])
  }

  const buttonNameChange = () => {
    setCount(count + 1)
    setCount(count + 1)
    console.log(count)
  }

  const buttonNameChange2 = () => {
    console.log(count)
  }
  const buttonNameChange3 = (e) => {
    console.log(e.target.innerText)
  }
  
  return (
    <main>
      <p onDoubleClick={buttonNameChange}>
       Hello {name}!
      </p>
      <button onClick={handleNameChange}> Change name</button>
      <button onClick={buttonNameChange}> Count </button>
      <button onClick={buttonNameChange2}> Click me 2</button>
      <button onClick={(e)=> buttonNameChange3(e)}> Click me 3</button>
    </main>
  )
}

export default Content