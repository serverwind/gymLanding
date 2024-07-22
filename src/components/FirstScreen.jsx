const Button = () => {
  return ( <button className="bg-yellow-300 p-4 text-black font-bold uppercase hover:bg-gray-400 duration-200">Begin your journey</button> )
}

const Header = () => {
  return ( <h1 className="text-4xl sm:text-8xl font-bold uppercase mb-8">The only <span className="text-yellow-300">impossible journey</span> is the one you <span className="text-yellow-300">never begin</span>.</h1> )
}

const FirstScreen = () => {
  return (
    <section className="max-h-screen p-4 flex flex-col justify-center journey bg-center mb-20 sm:bg-cover sm:h-screen">
<div className="max-w-5xl mx-auto">
    <Header />
    <Button />
</div>
  </section>
  )
}

export default FirstScreen
