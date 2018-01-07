export default function ChartHeader ({ children, subtitle, title }) {
  return (
    <div className='header'>
      <div className='title'>{title}</div>
      {children(400)}
      <div className='subtitle'>{subtitle}</div>
      <style jsx>{`
        .header {
          padding: 20px;
        }

        .title {
          font-weight: 100;
          letter-spacing: 1px;
          padding-bottom: 10px;
          text-align: left;
        }

        .subtitle {
          font-size: 14px;
          font-weight: 100;
          letter-spacing: 2px;
          padding-top: 10px;
          text-align: right;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  )
}
