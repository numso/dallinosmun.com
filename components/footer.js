export default function Footer () {
  const year = new Date().getFullYear()
  return (
    <div className='footer'>
      Site designed and coded by Dallin Osmun{' '}
      <span style={{ fontFamily: 'sans-serif' }}>©</span> {year}
      <style jsx>{`
        .footer {
          background-color: black;
          color: white;
          padding: 20px 50px;
        }
      `}</style>
    </div>
  )
}
