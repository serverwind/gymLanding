// {number} from props src/components/Number.jsx
const Number = ({number}) => {
  return (
      <div className="big-number text-8xl text-center font-bold text-black sm:text-9xl sm:absolute sm:-top-20 sm:left-3">{number}</div>
  )
}

export default Number
