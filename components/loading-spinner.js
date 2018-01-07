import CubeGrid from 'better-react-spinkit/dist/CubeGrid'

export default function LoadingSpinner () {
  return (
    <div className='loading'>
      <CubeGrid size={200} />
      <style jsx>{`
        .loading {
          align-items: center;
          display: flex;
          height: 100%;
          justify-content: center;
          position: fixed;
          width: 100%;
        }
      `}</style>
    </div>
  )
}
