import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Topic from "../topic/topic";
import './style.css'
import { getTopicsFromServer } from "../../redux/actionCreators/topicsAC";

export default function Topics() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/game')
      .then(response => response.json())
      .then(topicsFromServer => dispatch(getTopicsFromServer(topicsFromServer)))
  }, [])

  const topics = useSelector(state => state.topics)

  return (
    <div className="d-flex justify-content-center align-items-center vw-100 vh-100 backOfGame">
      <div className="border border-danger d-flex flex-column justify-content-center align-items-center w-75 h-75">
        {topics.length ? topics.map(topic => {
          return (
            <Topic key={topic._id} topic={topic}/>
          )
        })
        : 'No topics'
        }
      </div>
    </div>
  );
}
