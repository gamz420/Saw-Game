const { dbConnect, disconnect } = require('./db/connect');
const TopicModel = require('./models/topic.model');
const QuestionModel = require('./models/question.model');



async function start() {
  try {
    dbConnect()

    const irlandTopic = new TopicModel({
      name: 'Фильмы ужасов',
    })

    const movieTopic = new TopicModel({
      name: 'Маньяки и серийные убийцы',
    })

    const soccerTopic = new TopicModel({
      name: 'JS',
    })

    const movieOne = new QuestionModel({
      text: 'Так сколько же жертв было у Андрея Чикатило по официальной версии?.',
      answer: '52',
      points: '100',
      answered: false,
    })


    const movieTwo = new QuestionModel({
      text: 'Кто помагал новокузнецкому маньяку Александру Спесивцеву совершать преступления?',
      answer: 'Мать',
      points: '200',
      answered: false,
    })


    const movieThree = new QuestionModel({
      text: 'Как умер один из самых известных американских серийных убийц Тед Банди, убивший в 1974-78 гг. около 50 (точное число не установлено) девушек?',
      answer: 'Был казнен на электрическом стуле',
      points: '300',
      answered: false,
    })


    const movieFour = new QuestionModel({
      text: 'Сколько лет самоому молодому серийному убийце в мире?',
      answer: '8',
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
      text: 'Как звали кровожадного маньяка каннибала, носившего маски из человеческих лиц в серии фильмов "Техасская резня бензопилой"?',
      answer: 'Кожаное Лицо',
      points: '100',
      answered: false,
    })

    const irlandTwo = new QuestionModel({
      text: 'Как звали главного антагониста, носившего хоккейную маску из серии фильмов "Пятница 13-е"?',
      answer: 'Джейсон Вурхис',
      points: '200',
      answered: false,
    })

    const irlandThree = new QuestionModel({
      text: 'Как звали жестокого убийцу из ада в серии фильмов "Кошмар на улице Вязов", который приходил к детям во снах?.',
      answer: 'Фредди Крюгер',
      points: '300',
      answered: false,
    })

    const irlandFour = new QuestionModel({
      text: 'Как звали куклу Джона Крамера из серии фильмов "Пила"?',
      answer: 'Билли',
      points: '400',
      answered: false,
    })

    const irlandFive = new QuestionModel({
      text: 'Как зовут девочку, которая вылезает из телевизора при просмотре странной кассеты в фильме "Звонок?" ',
      answer: 'Самара Морган',
      points: '500',
      answered: false,
    })

    const soccerOne = new QuestionModel({
      text: ` Что этот код выведет на консоль?
      var bar = null;
      console.log(typeof bar === "object");`,
      answer: 'true',
      points: '100',
      answered: false,
    })

    const soccerTwo = new QuestionModel({
      text: `Какое из перечисленных ниже слов не является зарезервированным словом в JavaScript? [default ,throw, finally,undefined ]`,
      answer: 'undefined',
      points: '200',
      answered: false,
    })

    const soccerThree = new QuestionModel({
      text: 'Что делает оператор **?',
      answer: 'Возводит в степень.',
      points: '300',
      answered: false,
    })

    const soccerFour = new QuestionModel({
      text: 'Чему равна сумма [] + 1 + 2?',
      answer: '12',
      points: '400',
      answered: false,
    })

    const soccerFive = new QuestionModel({
      text: `for(var i=0; i<10; i++) {
        setTimeout(function() {
          alert(i);
        }, 100);
      }`,
      answer: '10 раз число 10',
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

