import { useState } from 'react';
import { useEffect } from 'react';

const modulesData = [
  {
    id: 1,
    name: 'Different modules',
    number: 45
  },
  {
    id: 2,
    name: 'Minutes per class',
    number: 60
  },
  {
    id: 3,
    name: 'Classes per week',
    number: 20
  },
  {
    id: 4,
    name: 'United goal',
    number: 1
  }
]

function Counter({ number }) {
  const [count, setCount] = useState(0);

useEffect(() => {
  let interval = setInterval(() => {
    if (count < number) {
      setCount(count + 1);
    } else {
      clearInterval(interval);
    }
  }, 50);

  return () => clearInterval(interval);
}, [count]);
  
  return (
    <div className="text-6xl sm:text-8xl font-bold">{count}</div>
  )
}

const Module = () => {
  return (
    modulesData.map((data) => (
      <div key={data.id}>
        <Counter number={data.number} />
        <p className="text-2xl sm:text-4xl font-thin">{data.name}</p>
      </div>
    ))
  )
}

const Modules = () => {
  return(
    <section className="bg-yellow-300 text-black py-0.5">
      <div className="flex flex-col sm:flex-row gap-8 text-center max-w-5xl mx-auto my-20">
        <Module />
      </div>

    </section>
  )
}

export default Modules
