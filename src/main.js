import React from 'react'
import styled from 'styled-components'

import Title from './components/title'
import ProjectCard from './components/project-card'
import AboutMe, { EM, BR } from './components/about-me'
import Link from './components/link'

const Projects = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  max-width: 1980px;
  text-align: center;
`

export default function Home () {
  return (
    <div>
      <Title
        title='Dallin Osmun'
        subtitles={['Web Designer', 'Javascript Enthusiast', 'Zelda Addict']}
      />
      <Projects>
        <ProjectCard
          name='Kuali Curriculum Management'
          url='https://www.kuali.co/products/student/curriculum-management/'
          img={require('./img/kuali-cm.png')}
          date='2014 - 2018'
        />
        <ProjectCard
          name='Simplify CM'
          url='http://simplifycm.com'
          img={require('./img/simplify-cm.png')}
          date='2016'
        />
        <ProjectCard
          name='Conway Simulation'
          url='https://conway.dallinosmun.com'
          img={require('./img/conway.png')}
          date='2015'
        />
        <ProjectCard
          name='Dynamic Visualizations'
          url='https://pictures.dallinosmun.com'
          img={require('./img/ddv.png')}
          date='2014 - 2015'
        />
        <ProjectCard
          name='Antherion Games'
          url='http://www.antherion.com'
          img={require('./img/antherion.png')}
          date='2012'
        />
        <ProjectCard
          name='Osmun Family Site'
          url='http://www.osmun.net'
          img={require('./img/osmun.png')}
          date='2009'
        />
      </Projects>
      <AboutMe>
        Hi, My name's Dallin Osmun and I love to build{' '}
        <EM>products that delight users and make their lives easier</EM>. I'm
        really good at building web apps using <EM>React</EM>, <EM>Node</EM>,
        and <EM>Mongo</EM> but I can handle <EM>Vue</EM> or <EM>OTHER</EM> if
        that's what tickles your fancy. If you've got a project that requires{' '}
        <EM>real-time updates</EM> using something like Websockets, hit me up;
        I'm all over that. If you need to turn your data into super slick charts
        using <EM>d3</EM> to help business owners make the right decisions, hit
        me up; Let's talk business. And if you need SOME OTHER THING, well, I
        think you know where I'm going with this. Seriously,{' '}
        <Link href='https://www.linkedin.com/in/dallin-osmun'>let's talk</Link>.{' '}
        <BR /> I'm currently learning how to apply functional concepts to reduce
        bugs, keep code maintainable, and make apps more resilient to change by
        learning about and creating side projects in <EM>Elm</EM>.
      </AboutMe>
    </div>
  )
}

// { link: 'https://github.com/numso', img: require('./img/github.png') }
