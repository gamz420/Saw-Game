import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { changePoints, getTopicsFromServer } from "../../redux/actionCreators/topicsAC"
import './styles.css'
const Question = () => {

  let { id } = useParams()
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const topics = useSelector(state => state.topics)

  const questions = topics.map(topic => topic.questions)

  let currentQuestion;

  for (let i = 0; i < questions.length; i++) {
    for (let j = 0; j < questions[i].length; j++) {
      if (questions[i][j]._id === id) {
        currentQuestion = questions[i][j]
      }
    }
  }

  const handlerChange = (event) => {
    setInput(event.target.value)
  }

  const handlerCheckAnswer = async () => {
    if (input === currentQuestion.answer) {
      dispatch(changePoints({ status: true, points: currentQuestion.points }))
      setResult('Правильный ответ')
    } else {
      dispatch(changePoints({ status: false, points: currentQuestion.points }))
      setResult(`Вы ошиблись. Правильный ответ: ${currentQuestion.answer}`)
      setTimeout(() => {
        setResult('Следующая ошибка может быть последней для тебя.')
      }, 2000)
    }

    await fetch('http://localhost:3000/api/v1/game', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ id })
    })
      .then(setTimeout(() => {
        history.push('/game')
      }, 5000))
  }

  return (

    <>
      {currentQuestion &&

        <>
          <div className="d-flex justify-content-center vw-100 vh-100 align-items-center imagepaper" >
            <div className="d-flex flex-column justify-content-center align-items-center mb-4 question vw-75 h-50 rounded-3" >
              <h4 className="w-50 h-30 fw-bold blackText ">{currentQuestion.text}</h4>
              <input type="text" onChange={handlerChange} className="form-control w-25 h-20" placeholder="Your answer"></input>
              <button type="submit" onClick={handlerCheckAnswer} className="btn btn-dark w-25 btn-sm mt-5">Ответить</button>
              {result ? result : ''}
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Question
