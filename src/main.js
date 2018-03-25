import React from 'react'
import styled from 'styled-components'

import Title from './components/title'
import ProjectCard from './components/project-card'
import Letter, { EM, BR } from './components/letter'
import Link from './components/link'

const Projects = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  max-width: 1980px;
  text-align: center;
`

// When someone clicks on a project card, have it flip over and have the description and a visit button.
// When someone clicks again; flip it back.
// Should more than one card be able to be flipped at a time?

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
          description={
            <span>
              During my first year at Kuali, at our yearly Kuali Days
              conference, we had a hack night. The main focus was to help all
              the developers from the company and the community get to know each
              other. We only had a couple hours to finish something so my group
              decided to build a simple{' '}
              <Link href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'>
                Conway's Game of Life
              </Link>{' '}
              simulation. It was a really fun activity and I enjoyed learning
              from others' coding experience and preferences.
            </span>
          }
        />
        <ProjectCard
          name='Dynamic Visualizations'
          url='https://ddv.dallinosmun.com'
          img={require('./img/ddv.png')}
          date='2014 - 2015'
          description={
            <span>
              This project is <EM>heavily</EM> inspired by{' '}
              <Link href='https://vimeo.com/66085662'>
                Bret Victor's Drawing Dynamic Visualizations
              </Link>. Actually, it aims to be a direct clone of the tool he
              used in the video but it's not yet complete. I saw that video and
              fell in love. These could be the tools of the future. Yes, we'll
              still always need the ability to drop down to code for advanced
              cases, but that can be done in a way where the code you write is
              for more building blocks in your tool. I want the majority of my
              interaction with my tools to be direct manipulation.
            </span>
          }
        />
        <ProjectCard
          name='Antherion Games'
          url='http://www.antherion.com'
          img={require('./img/antherion.png')}
          date='2012'
          description={
            "During my senior year of high school, I started building iPhone games and apps under the name Antherion. It was a lot of fun! This was before Swift's time so the apps were all built in Objective-C. I've still got the code but I had to take the apps themselves off of the store. I didn't have time to update them, nor did I want to keep paying Apple's yearly fee. This site was built to promote those apps. Sadly, I never got around to advertising, promoting, or otherwise getting traffic to the site..."
          }
        />
        <ProjectCard
          name='Osmun Family Site'
          url='http://www.osmun.net'
          img={require('./img/osmun.png')}
          date='2009'
          description={
            "When I was first starting out in web development, I built this site for my family. We already had the domain and needed something to put on it. I didn't even know javascript yet; this was back when I only knew a little PHP and not enough css to even do box shadows (look close, they're images). Looking back, I totally regret the color choices. Cut me some slack though, it was over a decade ago. I've gotten better. I promise!"
          }
        />
      </Projects>
      <Letter title='Who am I?'>
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
      </Letter>
    </div>
  )
}

// In the letter, first paragraph should be business based --- sell myself to the pm / business owner
// second should be dev based (name all the tech you want) --- sell myself to the dm / dev team
// third should be about learning? or just about me in general? --- show that I'm a good culture fit
