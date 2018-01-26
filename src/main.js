import React from 'react'

export default function Home () {
  return (
    <div>
      <div className='header-box-container'>
        <div className='row header-box'>
          <div>
            <Header />
          </div>
        </div>
      </div>
      <div className='row info-box'>
        <div>
          <WhoAmI />
          <Skills />
        </div>
      </div>
      <div className='row projects-box'>
        <div>
          <Projects />
        </div>
      </div>
      <div className='row social-box'>
        <div>
          <Social />
        </div>
      </div>
      <style jsx>{`
        .row {
          display: flex;
          justify-content: center;
        }

        .row > div {
          width: 62.5rem;
        }

        @media (min-width: 641px) {
          .header-box {
            border-bottom: 8px solid #404666;
            border-left: 50px solid #272727;
            border-right: 50px solid #272727;
            border-top: 13px solid #868383;
            width: 60%;
          }
        }

        .header-box-container {
          background-color: #414141;
        }

        .header-box {
          background-color: #787571;
          background: -webkit-gradient(
              radial,
              center 0,
              0,
              center 0,
              100,
              color-stop(0%, #787571),
              color-stop(100%, #242424)
            )
            no-repeat;
          background: -webkit-radial-gradient(
              center 0,
              circle cover,
              #787571,
              #242424
            )
            no-repeat;
          background: -moz-radial-gradient(
              center 0,
              circle cover,
              #787571,
              #242424
            )
            no-repeat;
          background: -o-radial-gradient(
              center 0,
              circle cover,
              #787571,
              #242424
            )
            no-repeat;
          background: -ms-radial-gradient(
              center 0,
              circle cover,
              #787571,
              #242424
            )
            no-repeat;
          background: radial-gradient(center 0, circle cover, #787571, #242424)
            no-repeat;
          height: 500px;
          margin: 0 auto;
          padding-top: 200px;
          text-align: center;
        }

        .info-box {
          background-color: white;
          background: -webkit-gradient(
            linear,
            0% 0%,
            0% 100%,
            from(#404666),
            to(#fff)
          );
          background: -webkit-linear-gradient(top, #404666, #fff) no-repeat;
          background: -moz-linear-gradient(top, #404666, #fff) no-repeat;
          background: -o-linear-gradient(top, #404666, #fff) no-repeat;
          background: -ms-linear-gradient(top, #404666, #fff) no-repeat;
          background: linear-gradient(top, #404666, #fff) no-repeat;
          padding-top: 150px;
        }

        .projects-box {
          background-color: #727272;
          box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);
        }

        .social-box {
          background-color: #414141;
          min-height: 150px;
        }
      `}</style>
    </div>
  )
}

function getRandom (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function WhoAmI () {
  var books = [
    'Wheel of Time',
    "Ender's Game",
    'Myst',
    'Stormlight Archive',
    'Mistborn',
    'Reckoners'
  ]
  var shows = [
    'Once upon a Time',
    'The 100',
    'Chuck',
    'Big Bang Theory',
    'The Flash',
    'The Arrow',
    'Firefly'
  ]
  var games = [
    'Zelda',
    'Minecraft',
    'Starcraft',
    'Starcraft II',
    'Super Smash Brothers'
  ]
  var state = {
    book: getRandom(books),
    show: getRandom(shows),
    games: [getRandom(games)]
  }
  var game2 = getRandom(games)
  while (game2 === state.games[0]) {
    game2 = getRandom(games)
  }
  state.games.push(game2)

  return (
    <div className='who-am-i'>
      <h1>Who am I?</h1>
      <p>
        Hi, My name's Dallin Osmun and I'm a web developer. I graduated from
        Utah State University and am now working for an awesome group called
        KualiCo. I enjoy reading the {state.book} series and watching{' '}
        {state.show} with my friends. In my spare time you'll probably find me
        playing {state.games[0]} or {state.games[1]} (if I'm not coding, that
        is). I love life and I'm a Mormon. Oh, and I make dang good Italian
        food.
      </p>
    </div>
  )
}

function Social () {
  const links = [
    {
      link: 'http://www.twitter.com/dallinosmun',
      img: '/img/twitter.png'
    },
    { link: 'http://www.facebook.com/numso', img: '/img/facebook.png' },
    {
      link: 'http://www.linkedin.com/profile/view?id=42336136',
      img: '/img/linkedin.png'
    },
    {
      link: 'http://plus.google.com/118106587848547452215?prsrc=3',
      img: '/img/gplus.png'
    },
    { link: 'https://github.com/numso', img: '/img/github.png' }
  ]
  return (
    <div>
      <h1>Social</h1>
      <div className='links'>
        {links.map(l => (
          <div>
            <a href={l.link} target='_blank'>
              <img src={l.img} />
            </a>
          </div>
        ))}
      </div>
      <style jsx>{`
        .links {
          display: flex;
          max-width: 600px;
        }

        .links > div {
          flex: 1;
          text-align: center;
        }

        .links > div img {
          background-color: white;
          border-radius: 10px;
          transition: all 0.6s;
          width: 50px;
        }

        .links > div img:hover {
          transform: rotate(380deg);
        }
      `}</style>
    </div>
  )
}

function Header () {
  return (
    <div className='header'>
      <div className='title'>Dallin Osmun</div>
      <div className='taglines'>
        <div>Web Designer</div>
        <div>Javascript Enthusiast</div>
        <div>Zelda Addict</div>
      </div>
      <style jsx>{`
        .taglines {
          display: flex;
        }

        .taglines > div {
          color: #f5ce43;
          flex: 1;
          font-size: 20px;
        }

        .title {
          color: white;
          font-family: 'Syncopate', sans-serif;
          font-size: 48px;
        }
      `}</style>
    </div>
  )
}

function Projects () {
  const projects = [
    {
      name: 'Osmun Family Site',
      url: 'http://www.osmun.net',
      img: '/img/osmun-thumb.jpg'
    },
    {
      name: 'Dynamic Visualizations',
      url: 'http://pictures.dallinosmun.com',
      img: '/img/pictures-thumb.png'
    },
    {
      name: 'Antherion Games',
      url: 'http://www.antherion.com',
      img: '/img/antherion-thumb.png'
    }
  ]
  return (
    <div>
      <h1>Projects</h1>
      <div style={{ display: 'flex' }}>
        {projects.map(renderProject)}
        <div style={{ alignSelf: 'center' }}>(See More...)</div>
      </div>
    </div>
  )
}

function renderProject (project) {
  return (
    <div className='project'>
      <a href={project.url} target='_blank'>
        <img
          style={{ boxShadow: '0 0 20px 2px rgba(0,0,0,.5)' }}
          src={project.img}
        />
        <div style={{ padding: '10px 0' }}>{project.name}</div>
      </a>
      <style jsx>{`
        .project {
          flex: 1;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

function Skills () {
  const skills = [
    {
      title: 'Skills Set',
      items: [
        'Web Design',
        'Responsive Design',
        'Server Side Coding',
        'Knowledgable in RESTful API',
        'Client Side Mashup',
        'Good at Team Management'
      ]
    },
    {
      title: 'Programming Knowledge',
      items: [
        'HTML5',
        'CSS3, Stylus, LESS',
        'Javascript, ES6',
        'Angular, React, Backbone',
        'Express, Koa',
        'Socket.io'
      ]
    },
    {
      title: 'Specialties',
      items: [
        'NodeJS Servers',
        'Javascript with Client Side Mashup',
        'CSS3 including transitions and animations',
        'Responsive Design for mobile devices'
      ]
    }
  ]

  return (
    <div className='skills'>
      {skills.map(({ items, title }) => (
        <div>
          <div style={{ textAlign: 'center' }}>
            <h2>{title}</h2>
          </div>
          <ul>{items.map(i => <li>{i}</li>)}</ul>
        </div>
      ))}
      <style jsx>{`
        @media (min-width: 641px) {
          .skills {
            display: flex;
          }

          .skills > div {
            flex: 1;
          }
        }
      `}</style>
    </div>
  )
}
