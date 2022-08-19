import React from 'react'
import styled from 'styled-components'

import ProjectCard from './components/project-card'
import Title from './components/title'
import { Br, Em, Letter, Link } from './components/ui'

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
          url='https://www.kuali.co/products/curriculum'
          img={require('./img/kuali-cm.png')}
          date='2014 - 2018'
          description={
            <span>
              I have been working at this <Em>awesome place</Em> called Kuali.
              We make administrative software for higher education. The majority
              of my time here so far has been spent on this product that
              digitizes a very manual and time-consuming process, helping
              faculty members propose, approve, and update the curriculum at
              their institution.
            </span>
          }
        />
        <ProjectCard
          name='Simplify CM'
          url='https://simplifycm-archived.dallin.pro'
          img={require('./img/simplify-cm.png')}
          date='2016'
          description={
            <span>
              Early on in Kuali, one of our designers designed an awesome
              marketing page for our product. No one had time to build it so I
              volunteered. It uses very minimal Javascript (just to enable the
              parallax animations) and integrates directly into our sales
              system.
            </span>
          }
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
              This project is <Em>heavily</Em> inspired by{' '}
              <Link href='https://vimeo.com/66085662'>
                Bret Victor's Drawing Dynamic Visualizations
              </Link>
              . Actually, it aims to be a direct clone of the tool he used in
              the video but it's not yet complete. I saw that video and fell in
              love. These could be the tools of the future! I believe we will
              still always need the ability to drop down to code for advanced
              cases, but I also think that can be done in a way where the code
              you write is for more building blocks in your tool. I want the
              majority of my interaction with my tools to be direct
              manipulation.
            </span>
          }
        />
        <ProjectCard
          name='Antherion Games'
          img={require('./img/antherion.png')}
          date='2012'
          description={
            <span>
              During my senior year of high school, I started building iPhone
              games and apps under the name Antherion. It was a lot of fun! This
              was before Swift's time so the apps were all built in Objective-C.
              I've still got the code but I had to take the apps themselves off
              of the store. I didn't have time to update them, nor did I want to
              keep paying Apple's yearly fee. This site was built to promote
              those apps. Sadly, I never got around to advertising, promoting,
              or otherwise getting traffic to the site...
            </span>
          }
        />
        <ProjectCard
          name='Osmun Family Site'
          img={require('./img/osmun.png')}
          date='2009'
          description={
            <span>
              When I was first starting out in web development, I built this
              site for my family. We already had the domain and needed something
              to put on it. I didn't even know javascript yet; this was back
              when I only knew a little PHP and not enough css to even do box
              shadows (look close, they're images). Looking back, I totally
              regret the color choices. Cut me some slack though, it was over a
              decade ago. I've gotten better. I promise!
            </span>
          }
        />
      </Projects>
      <Letter title='Who am I?'>
        Hi, my name's Dallin Osmun and I love to build{' '}
        <Em>products that delight users and make their lives easier</Em>! If
        you've got a project that requires <Em>offline support</Em> and{' '}
        <Em>real-time updates</Em>, hit me up; I'm all over that. If you need to
        turn your data into super slick charts to help business owners reason
        about it and <Em>make the right decisions</Em>, hit me up; Let's talk
        business. And if you need someone to automate an inefficient and
        antiquated process to <Em>save people loads of time</Em>, well, I think
        you know where I'm going with this. Seriously,{' '}
        <Link href='https://www.linkedin.com/in/dallin-osmun'>let's talk</Link>.
        <Br />
        I'm really good at building web apps using <Em>React</Em>, <Em>Node</Em>
        , and <Em>Mongo</Em> but I can handle <Em>Vue</Em> or <Em>Elm</Em> if
        that's what tickles your fancy. I love writing code with{' '}
        <Em>socket.io</Em> and <Em>d3</Em>; bonus points if you've got a project
        where we can use them together! I've spent a lot of time studying{' '}
        <Em>GraphQL</Em> and found it to be a very simple yet powerful way of
        modeling your data and providing it to the front end. Mix that with{' '}
        <Em>Apollo</Em> and you may not even need a state management library.
        <Br />
        Also, I really love to learn! I try and devote a large portion of my
        time to learning. From Functional Programming concepts to Linear Algebra
        to "How do you turn sand into computer chips?". I find it all
        fascinating. I once built a multi-touch table out of plexiglass,
        infra-red LEDS, and a $5 webcam. Nothing much came of it but I had a
        blast figuring out how to make everything work and writing my own
        software to run on it. I don't know much about blockchains, observables,
        or event sourcing yet but I can guarantee you: I will soon.
      </Letter>
    </div>
  )
}

const Projects = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  max-width: 1980px;
  text-align: center;
`
