const { dbConnect, disconnect } = require('./db/connect');
const TopicModel = require('./models/topic.model');
const QuestionModel = require('./models/question.model');



async function start() {
  try {
    dbConnect()

    const irlandTopic = new TopicModel({
      name: 'Ирландия',
    })

    const movieTopic = new TopicModel({
      name: 'Кино',
    })

    const soccerTopic = new TopicModel({
      name: 'Футбол',
    })

    const movieOne = new QuestionModel({
      text: 'ЕГО произведение легло в основу фильма "Зеленая миля".',
      answer: 'Стивен Кинг',
      points: '100',
      answered: false,
    })


    const movieTwo = new QuestionModel({
      text: 'Кто изначально должен был сыграть Джека Воробья в фильме «Пираты Карибского моря»?',
      answer: 'Джим Керри',
      points: '200',
      answered: false,
    })


    const movieThree = new QuestionModel({
      text: 'В декабре 1947 года ОН опубликовал статью "Я объявляю войну Голливуду". Спустя несколько лет ЕМУ запретили появляться в США.',
      answer: 'Ч. Чаплин',
      points: '300',
      answered: false,
    })


    const movieFour = new QuestionModel({
      text: 'Какой фильм является самым кассовым в истории?',
      answer: 'Аватар',
      points: '400',
      answered: false,
    })


    const movieFive = new QuestionModel({
      text: 'Дополнительный видеоролик к ЭТОМУ фильму назывался "Кровь, песок и кинопленка".',
      answer: 'Гладиатор',
      points: '500',
      answered: false,
    })

    const irlandOne = new QuestionModel({
      text: 'Именно ЭТОТ цвет традиционно связывают с Ирландией.',
      answer: 'Зеленый',
      points: '100',
      answered: false,
    })

    const irlandTwo = new QuestionModel({
      text: 'Первых ирландских королей хоронили именно ТАК. Вовсе не в целях экономии места.',
      answer: 'Стоя',
      points: '200',
      answered: false,
    })

    const irlandThree = new QuestionModel({
      text: 'ЭТОТ ирландский город дал название стихотворной форме.',
      answer: 'Лимерик',
      points: '300',
      answered: false,
    })

    const irlandFour = new QuestionModel({
      text: 'Скажите по-ирландски "мы сами".',
      answer: 'Шин фейн',
      points: '400',
      answered: false,
    })

    const irlandFive = new QuestionModel({
      text: 'Закончите ирландскую пословицу: "Бойся бычьих рогов, конских копыт и улыбки..."',
      answer: 'Англичанина',
      points: '500',
      answered: false,
    })

    const soccerOne = new QuestionModel({
      text: 'В какой стране появился и начал развиваться футбол?',
      answer: 'Англия',
      points: '100',
      answered: false,
    })

    const soccerTwo = new QuestionModel({
      text: 'Сколько существует размеров футбольных мячей?',
      answer: 'Пять',
      points: '200',
      answered: false,
    })

    const soccerThree = new QuestionModel({
      text: 'Как правильно расшифровывается аббревиатура УЕФА?',
      answer: 'Союз европейских футбольных ассоциаций',
      points: '300',
      answered: false,
    })

    const soccerFour = new QuestionModel({
      text: 'Кто является атвором самого сильного удара в футболе, согласно данным на начало 2020 года?',
      answer: 'Халк',
      points: '400',
      answered: false,
    })

    const soccerFive = new QuestionModel({
      text: 'В какой стране впервые проходил Кубок мира ФИФА?',
      answer: 'Уругвай',
      points: '500',
      answered: false,
    })

    movieTopic.questions.push(movieOne, movieTwo, movieThree, movieFour, movieFive)
    irlandTopic.questions.push(irlandOne, irlandTwo, irlandThree, irlandFour, irlandFive)
    soccerTopic.questions.push(soccerOne, soccerTwo, soccerThree, soccerFour, soccerFive)

    await movieOne.save()
    await movieTwo.save()
    await movieThree.save()
    await movieFour.save()
    await movieFive.save()
    await irlandOne.save()
    await irlandTwo.save()
    await irlandThree.save()
    await irlandFour.save()
    await irlandFive.save()
    await soccerOne.save()
    await soccerTwo.save()
    await soccerThree.save()
    await soccerFour.save()
    await soccerFive.save()

    await movieTopic.save()
    await irlandTopic.save()
    await soccerTopic.save()

  } catch (e) {
    console.log(e);
  }
  disconnect();
}

start();

