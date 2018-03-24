import React from 'react'
import styled from 'styled-components'

const HeaderBoxContainer = styled.div`
  background-color: #414141;
`

const Row = styled.div`
  display: flex;
  justify-content: center;

  > div {
    width: 62.5rem;
  }
`

const HeaderBox = styled(Row)`
  @media (min-width: 641px) {
    border-bottom: 8px solid #404666;
    border-left: 50px solid #272727;
    border-right: 50px solid #272727;
    border-top: 13px solid #868383;
    width: 60%;
  }

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
  background: -webkit-radial-gradient(center 0, circle cover, #787571, #242424)
    no-repeat;
  background: -moz-radial-gradient(center 0, circle cover, #787571, #242424)
    no-repeat;
  background: -o-radial-gradient(center 0, circle cover, #787571, #242424)
    no-repeat;
  background: -ms-radial-gradient(center 0, circle cover, #787571, #242424)
    no-repeat;
  background: radial-gradient(center 0, circle cover, #787571, #242424)
    no-repeat;
  height: 500px;
  margin: 0 auto;
  padding-top: 200px;
  text-align: center;
`

const InfoBox = styled(Row)`
  background-color: white;
  background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#404666), to(#fff));
  background: -webkit-linear-gradient(top, #404666, #fff) no-repeat;
  background: -moz-linear-gradient(top, #404666, #fff) no-repeat;
  background: -o-linear-gradient(top, #404666, #fff) no-repeat;
  background: -ms-linear-gradient(top, #404666, #fff) no-repeat;
  background: linear-gradient(top, #404666, #fff) no-repeat;
  padding-top: 150px;
`

const ProjectsBox = styled(Row)`
  background-color: #727272;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);
`

const SocialBox = styled(Row)`
  background-color: #414141;
  min-height: 150px;
`

export default function Home () {
  return (
    <div>
      <HeaderBoxContainer>
        <HeaderBox>
          <div>
            <Header />
          </div>
        </HeaderBox>
      </HeaderBoxContainer>
      <InfoBox>
        <div>
          <WhoAmI />
          <Skills />
        </div>
      </InfoBox>
      <ProjectsBox>
        <div>
          <Projects />
        </div>
      </ProjectsBox>
      <SocialBox>
        <div>
          <Social />
        </div>
      </SocialBox>
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
    <div>
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

const SocialLinks = styled.div`
  display: flex;
  max-width: 600px;

  > div {
    flex: 1;
    text-align: center;

    img {
      background-color: white;
      border-radius: 10px;
      transition: all 0.6s;
      width: 50px;

      &:hover {
        transform: rotate(380deg);
      }
    }
  }
`

function Social () {
  const links = [
    {
      link: 'http://www.twitter.com/dallinosmun',
      img: require('./img/twitter.png')
    },
    {
      link: 'http://www.facebook.com/numso',
      img: require('./img/facebook.png')
    },
    {
      link: 'http://www.linkedin.com/profile/view?id=42336136',
      img: require('./img/linkedin.png')
    },
    {
      link: 'http://plus.google.com/118106587848547452215?prsrc=3',
      img: require('./img/gplus.png')
    },
    { link: 'https://github.com/numso', img: require('./img/github.png') }
  ]
  return (
    <div>
      <h1>Social</h1>
      <SocialLinks>
        {links.map(l => (
          <div>
            <a href={l.link} target='_blank'>
              <img src={l.img} />
            </a>
          </div>
        ))}
      </SocialLinks>
    </div>
  )
}

const Taglines = styled.div`
  display: flex;

  > div {
    color: #f5ce43;
    flex: 1;
    font-size: 20px;
  }
`

const HeaderTitle = styled.div`
  color: white;
  font-family: 'Syncopate', sans-serif;
  font-size: 48px;
`

function Header () {
  return (
    <div>
      <HeaderTitle>Dallin Osmun</HeaderTitle>
      <Taglines>
        <div>Web Designer</div>
        <div>Javascript Enthusiast</div>
        <div>Zelda Addict</div>
      </Taglines>
    </div>
  )
}

function Projects () {
  const projects = [
    {
      name: 'Osmun Family Site',
      url: 'http://www.osmun.net',
      img: require('./img/osmun-thumb.jpg')
    },
    {
      name: 'Dynamic Visualizations',
      url: 'http://pictures.dallinosmun.com',
      img: require('./img/pictures-thumb.png')
    },
    {
      name: 'Antherion Games',
      url: 'http://www.antherion.com',
      img: require('./img/antherion-thumb.png')
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

const Project = styled.div`
  flex: 1;
  text-align: center;
`

function renderProject (project) {
  return (
    <Project>
      <a href={project.url} target='_blank'>
        <img
          style={{ boxShadow: '0 0 20px 2px rgba(0,0,0,.5)' }}
          src={project.img}
        />
        <div style={{ padding: '10px 0' }}>{project.name}</div>
      </a>
    </Project>
  )
}

const SkillsWrapper = styled.div`
  @media (min-width: 641px) {
    display: flex;

    > div {
      flex: 1;
    }
  }
`

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
    <SkillsWrapper>
      {skills.map(({ items, title }) => (
        <div>
          <div style={{ textAlign: 'center' }}>
            <h2>{title}</h2>
          </div>
          <ul>{items.map(i => <li>{i}</li>)}</ul>
        </div>
      ))}
    </SkillsWrapper>
  )
}
