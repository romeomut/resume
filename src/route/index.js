// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

let header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address:
    'Віницька обл., м. Жмеринка, вул. Набережна, буд. 23',
}

let footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkidin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume / Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume / Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Hendlebars',
          point: 9,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 8,
          isTop: false,
        },
        {
          name: 'Git',
          point: 5,
          isTop: false,
        },
        {
          name: 'Terminal',
          point: 4,
        },
        {
          name: 'NPM',
          point: 3,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Basketball',
          isMain: true,
        },
        {
          name: 'Chess',
          isMain: false,
        },
        {
          name: 'Icecream',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume / Education',
    },

    header,

    main: {
      education: [
        { name: 'ВУЗ 1', isEnd: true },
        { name: 'ВУЗ 2', isEnd: false },
        { name: 'ВУЗ 3', isEnd: true },
        { name: 'ВУЗ 4', isEnd: false },
        { name: 'ВУЗ 5', isEnd: true },
        { name: 'ВУЗ 6', isEnd: true },
      ],
      certificates: [
        { name: 'Lorem 1', id: 46386 },
        { name: 'Lorem 2', id: 2153 },
        { name: 'Lorem 3', id: 8076 },
        { name: 'Lorem 4', id: 332 },
        { name: 'Lorem 5', id: 10001 },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume / Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            //url: 'https://it-brains.com.ua/',
            url: null,
          },
          duration: {
            from: '10.10.2023',
            to: '22.03.2023',
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://it-brains.com.ua/',
              about:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laborum quas illum voluptates, delectus repudiandae mollitia doloremque enim inventore molestiae!',
              stack: [
                { name: 'React.js' },
                { name: 'HTML / CSS' },
                { name: 'Nodejs' },
              ],
              awards: [
                {
                  name: 'awards 1',
                },
                {
                  name: 'awards 2',
                },
              ],
              stackAmount: 10,
              awardAmount: 10,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
