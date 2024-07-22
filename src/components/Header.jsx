// {text} from props src/components/About.jsx where Header is used
const Header = ({text}) => {
  return (
    <div className='w-11/12 mx-auto sm:w-full relative text-center'>
      <h2 className="text-5xl sm:text-7xl text-gray-800 font-bold uppercase">{text}</h2>
      <div className="absolute bottom-1/4 sm:-bottom-1 inset-x-0 uppercase font-bold text-2xl sm:text-4xl">{text}</div>
    </div>
  )
}

export default Header
