import React from 'react'

export default function Header () {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Games', link: '/' },
    { name: 'Projects', link: '/projects' },
    { name: 'Resume', link: '/' }
  ]
  return (
    <div className='root'>
      <style jsx>{`
        .root {
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding-left: 20px;
        }
        .name {
          color: black;
          letter-spacing: 10px;
          text-transform: uppercase;
        }
        .links {
          margin: 10px 0;
        }
      `}</style>
      <div className='name'>Dallin Osmun</div>
      <div className='links'>
        {navItems.map(({ name, link }) => (
          <BlockLink key={name} title={name} href={link} />
        ))}
      </div>
    </div>
  )
}

function BlockLink ({ href, title }) {
  return (
    <div className='root'>
      <style jsx>{`
        .root {
          display: inline-block;
        }
        .letter {
          align-items: center;
          background: rgba(0, 0, 0, 0.3);
          color: white;
          display: flex;
          height: 40px;
          justify-content: center;
          margin-right: 10px;
          transition: all 300ms;
          text-decoration: none;
          width: 40px;
        }
        .letter:hover {
          background: rgba(0, 0, 0, 0.7);
        }
        .title {
          align-items: center;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          display: flex;
          height: 40px;
          opacity: 0;
          padding: 0 20px;
          position: absolute;
          top: 10px;
          transform-origin: 0 100%;
          transform: rotate(90deg);
          transition: all 300ms;
          white-space: nowrap;
          z-index: -1;
        }
        .letter:hover + .title {
          opacity: 1;
          z-index: 10;
        }
      `}</style>
      <a href={href} className='letter'>
        {title[0]}
      </a>
      <div className='title'>{title}</div>
    </div>
  )
}
