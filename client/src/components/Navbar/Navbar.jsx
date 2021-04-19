import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import './style.css'
import { Link } from "react-router-dom";
function Navbar() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const handlergameOver = () => {
    //тут должен вызываться диспатч для ремува юзера
  }
  return (
    <>
      {
        user.name.length ?
          < nav className="navbar navbar-expand-lg navbar-light colorNavbar" >
            <div className="container-fluid">
              <Link className="navbar-brand" to="/game">Welcome to game, {user.name}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" to="#"></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" to="#">Твои очки :{user.points}</a>
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" className="btn black mx-5 colorButton" onClick={handlergameOver}>Завершить игру</button>
          </nav>
          : null
      }
    </>
  )
}

export default Navbar
