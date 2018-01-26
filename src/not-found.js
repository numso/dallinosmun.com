import React from 'react'

export default function NotFound () {
  return (
    <div className='wrapper'>
      <div className='header'>404</div>
      <div className='subheader'>Not Found</div>
      <style jsx>{`
        .wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: calc(100vh - 119px);
          flex-direction: column;
        }

        .header {
          font-size: 300px;
        }

        .subheader {
          font-size: 100px;
        }
      `}</style>
    </div>
  )
}
