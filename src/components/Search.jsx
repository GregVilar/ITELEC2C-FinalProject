import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Search() {
  const navigate = useNavigate()
  const [input, setInput] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/searched/' + input)
    setInput("")
  }


  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <input onChange={(e) => { setInput(e.target.value) }} type="text" value={input} />
      </div>
    </FormStyle>
  )
}


const FormStyle = styled.form`
  max-width: 600px;
  width: 50%;
  margin: 0 auto;
  position: relative;


  div {
    position: relative;
  }


  input {
    border: none;
    background: linear-gradient(35deg, #FFFFFF, #A9A9A9);
    font-size: 1.2rem;
    color: black;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    transition: all 0.3s ease;


    &:focus {
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    }
  }
`


export default Search
