export default function Field ({ label, value, onChange, ...rest }) {
  return (
    <div className='field'>
      <label>{label}</label>
      <input onChange={e => onChange(e.target.value)} value={value} {...rest} />
      <style jsx>{`
        .field {
          position: relative;
        }

        .field > label {
          color: #aaa;
          left: 10px;
          position: absolute;
          top: 5px;
        }

        .field > input {
          font-size: 20px;
          padding: 10px;
          padding-top: 25px;
          width: 100%;
        }
      `}</style>
    </div>
  )
}
