import { useState } from "react";
import Header from "./Header";
import Number from "./Number";
import Modal from "./Modal";
import check from "../../public/check.svg";
import amateur from "../../public/amateur.svg";
import pro from "../../public/pro.svg";
import olympic from "../../public/olympic.svg";

const subs = [
  {
    id: 1,
    name: "Amateur",
    price: "99$/month",
    month: "12 Classes Per Month",
    week: "3 Classes Per Week",
    fees: "No joining fees",
    img: amateur,
  },
  {
    id: 2,
    name: "Professional",
    price: "129$/month",
    month: "20 Classes Per Month",
    week: "5 Classes Per Week",
    fees: "No joining fees",
    img: pro,
  },
  {
    id: 3,
    name: "Olympic",
    price: "199$/month",
    month: "Unlimited Classes Per Month",
    week: "3 Classes Per Day",
    fees: "No joining fees",
    img: olympic,
  },
];

const Button = () => {
  const [modal, setShowModal] = useState(false);
  return ( 
    <>
      <button onClick={() => setShowModal(true)} className="bg-yellow-300 p-4 text-black font-bold uppercase mt-auto hover:bg-gray-400 duration-200">Join Now</button>
      {modal && <Modal />}
    </>
  )};

const Sub = () => {

  return subs.map((data) => (
    <div key={data.id} className="mb-4 sm:mb-0 bg-white text-black p-8 flex flex-col transition hover:scale-105 duration-200">
      <h3 className="text-4xl font-bold text-center uppercase">{data.name}</h3>
      <img src={data.img} alt={data.name} className="mx-auto my-6 w-24" />
      <p className="text-lg font-thin flex">
        <img src={check} alt="Check Icon" className="mr-2 w-6" />
        {data.price}
      </p>
      <p className="text-lg font-thin flex">
        <img src={check} alt="Check Icon" className="mr-2 w-6" />
        {data.month}
      </p>
      <p className="text-lg font-thin flex">
        <img src={check} alt="Check Icon" className="mr-2 w-6" />
        {data.week}
      </p>
      <p className="text-lg font-thin flex">
        <img src={check} alt="Check Icon" className="mr-2 w-6" />
        {data.fees}
      </p>
      <Button />
    </div>
  ));
};

const Subs = () => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:gap-4 my-16">
      <Sub />
    </div>
  );
};

const Membership = () => {
  return (
    <section className="mx-4 max-w-5xl sm:mx-auto my-20">
      <Header text="Membership" />
      <div className="relative">
        <Number number="04" />
      </div>
      <Subs />
    </section>
  );
};

export default Membership;
