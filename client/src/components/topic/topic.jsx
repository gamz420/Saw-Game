import { Link } from "react-router-dom";
import './style.css'

export default function Topic({ topic }) {

  const questions = topic.questions
  // const answered = questions.answered

  return (
    <>
      <div className="border borderGame d-flex justify-content-center align-items-center w-100 h-100">
        <div className="border borderItem d-flex justify-content-center align-items-center w-100 h-100">
          {topic.name}
        </div>
        {questions.length ? questions.map(question => {
          if (question.answered === false) {
            return (
              <Link
                key={question._id}
                className="border borderItem d-flex justify-content-center align-items-center w-100 h-100 text-decoration-none"
                to={`/game/${question._id}`}
              >
                <div>{question.points}</div>
              </Link>
            )
          } else {
            return (<div className="border border-primary d-flex justify-content-center align-items-center w-100 h-100"><img className="border border-primary d-flex justify-content-center align-items-center w-100 h-100" src="https://newsomsk.ru/images/news/fullhd/2017/10/2c909198ee0f0349c1b3a599399a43e3.jpg" /></div>)
          }
        })
          : "No questions"
        }
      </div>
    </>
  );
}
