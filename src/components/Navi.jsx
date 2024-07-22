import hamburger from '../../public/hamburger.svg';

const Logo = () => {
  return <div className="flex-grow p-4 font-bold">GYM</div>
}

const Hamburger = () => {
  function handleClick() {
    const links = document.getElementById('links');
    links.classList.toggle('hidden');
    links.classList.toggle('links-mobile');
  }
  return (
    <button id="hamburger" className="flex p-4 w-16 sm:hidden" onClick={handleClick}>
      <img src={hamburger} alt="hamburger" />
    </button>
  )
}

const Links = () => {
  const data = [{
    name: 'Home',
    path: '#',
    class: 'p-4 hover:text-gray-400 duration-200'
  }, {
    name: 'About',
    path: '#about',
    class: 'p-4 hover:text-gray-400 duration-200'
  }, {
    name: 'Team',
    path: '#team',
    class: 'p-4 hover:text-gray-400 duration-200'
  }, {
    name: 'Classes',
    path: '#classes',
    class: 'p-4 hover:text-gray-400 duration-200'
  }, {
    name: 'Membership',
    path: '#membership',
    class: 'p-4 hover:text-gray-400 duration-200'
  }, {
    name: 'Contact',
    path: '#contact',
    class: 'p-4 bg-yellow-300 text-black font-bold hover:bg-gray-400 duration-200'
  }
  ];

  return (
    data.map((link) => (
      <a className={link.class} href={link.path} key={link.name}>{link.name}</a>
    ))
  )
}

const Navi = () => {
  return(
    <nav className="flex text-lg uppercase gap-2 items-center p-4">
      <Logo/>
      <div id='links' className="hidden sm:block">
        <Links/>
      </div>
      <Hamburger/>
    </nav>
  )
}

export default Navi
