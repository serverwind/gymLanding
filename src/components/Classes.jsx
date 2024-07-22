import Header from "./Header"
import Number from "./Number"
import class1 from '../../public/class1.jpg';
import class2 from '../../public/class2.jpg';
import class3 from '../../public/class3.jpg';
import class4 from '../../public/class4.jpg';

const classesData = [
  {
    id: 1,
    image: class4,
    name: "Yoga for Beginners",
  }, {
    id: 2,
    image: class2,
    name: "Cardio",
  }, {
    id: 3,
    image: class3,
    name: "Pilates",
  }, {
    id: 4,
    image: class1,
    name: "Weight Lifting",
  }
];

const BookClass = () => {
  return (
    <button className="bg-yellow-300 py-4 px-6 text-black font-bold uppercase hover:bg-gray-400 duration-200">Book</button>
  )
}

const Class = () => {
  return (
   classesData.map((data) => (
    <div key={data.id} className="flex flex-col items-start justify-end cursor-pointer bg-cover bg-top p-4 mb-4 sm:mb-0 h-400 group" style={{ backgroundImage: `url(${data.image})` }}>
        <p className="text-4xl font-bold drop-shadow-md">{data.name}</p>
        <BookClass />
    </div>
   )) 
  )
}

const Classes = () => {
  return (
    <section className="max-w-5xl mx-auto my-20">
      <Header text="Featured Classes" />
      <div className="relative">
        <Number number="03" />
      </div>
      <div className="sm:grid grid-cols-2 gap-4 my-16">
        <Class />
      </div>
    </section>
  )
}

export default Classes
