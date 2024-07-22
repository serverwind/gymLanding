import coach1 from '../../public/coach1.jpg';
import coach2 from '../../public/coach2.jpg';
import coach3 from '../../public/coach3.jpg';
import coach4 from '../../public/coach4.jpg';
import coach5 from '../../public/coach5.jpg';
import coach6 from '../../public/coach6.jpg';
import coach7 from '../../public/coach7.jpg';
import coach8 from '../../public/coach8.jpg';

const team = [
  {
    id: 1,
    name: 'Bryan Hunter',
    role: 'Founder',
    image: coach1
  }, {
    id: 2,
    name: "Simone Walters",
    role: "Coach",
    image: coach2
  }, {
    id: 3,
    name: "Tom Downey",
    role: "Coach",
    image: coach3
  }, {
    id: 4,
    name: "Frazor Davids",
    role: "Coach",
    image: coach4
  }, {
    id: 5,
    name: "Jess Walters",
    role: "Yoga Teacher",
    image: coach5
  }, {
    id: 6,
    name: "Mary Smith",
    role: "Yoga Teacher",
    image: coach6
  }, {
    id: 7,
    name: "Alastor Moore",
    role: "Master",
    image: coach7
  }, {
    id: 8,
    name: "Alonso Reyes",
    role: "Master",
    image: coach8
  }
];

const Card = () => {
  return (
  team.map((member) => (
    <div key={member.id} style={{ backgroundImage: `url(${member.image})` }} className="cursor-pointer bg-cover bg-center p-4 mb-4 sm:mb-0 h-64 relative group">
      <div className="hidden absolute top-0 left-0 w-full h-full bg-yellow-300 text-black font-bold group-hover:flex flex-col duration-200 items-center justify-center">
        <p className="border-b-2 border-black font-bold uppercase">{member.name}</p>
        <p className="font-thin">{member.role}</p>
      </div>
    </div>
  ))
  )
}
export default Card
