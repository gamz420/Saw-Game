import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
import { setUser } from '../../redux/actionCreators/topicsAC'
import './style.css'

function Start() {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const [value, setValue] = useState(user.name)
  const handlerSubmit = () => {
    dispatch(setUser(value))
    history.push('/game')
  }
  return (
    <div class="text-center d-flex flex-column justify-content-center align-items-center wv-100 vh-100">
      <h1 className="h1 mb-3 font-weight-normal colorButton "> Давай сыграем в игру?</h1>
      <input type="text" onChange={(e) => setValue(e.target.value)} id="inputEmail" className="form-control w-25" placeholder="Имя жертвы" required autofocus value={value} />
      <button className="btn btn-lg  colorButton btn-dark btn-block w-25 mt-3" type="submit" onClick={handlerSubmit}>Начать игру</button>
    </div>
  )
}

export default Start
