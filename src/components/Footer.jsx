const Contacts = () => {
  return (
    <div className="flex flex-col gap-1">
     <a href="mailto:serverwind.dev@gmail.com">serverwind.dev@gmail.com</a>
     <p className="mb-0 text-base">+373 111 11 11</p>
     <p className="mb-0 text-base">Karl Liebkneht str. 1, Tiraspol</p>
    </div>
  )
}

const Links = () => {
  return (
    <div className="flex flex-col">
      <a className="hover:text-gray-400 hover:underline duration-200" href="#">Careers</a>
      <a className="hover:text-gray-400 hover:underline duration-200" href="#">Contacts</a>
      <a className="hover:text-gray-400 hover:underline duration-200" href="#">Privacy Policy</a>
      <a className="hover:text-gray-400 hover:underline duration-200" href="#">Terms and Conditions</a>
    </div>
  )
}

const Subscribe = () => {
  return(
    <div className="flex flex-col order-first sm:order-last sm:items-end">
      <p className="text-2xl font-bold uppercase">Subscribe to our newsletter</p>
    <div>
      <input className="p-2 sm:w-64" type="email" placeholder="Enter your email" />
      <button className="bg-black p-2 text-white font-bold uppercase hover:bg-gray-400 hover:text-black duration-200">Subscribe</button>
    </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="grid text-center sm:text-left sm:grid-cols-3 bg-yellow-300 text-black gap-4 sm:gap-2 items-start px-4 py-8">
      <Contacts />
      <Links />
      <Subscribe />
    </footer>
  );
}

export default Footer
