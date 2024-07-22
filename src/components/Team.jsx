import Header from './Header'
import Number from './Number'
import Card from './Card'

const Team = () => {
  return (
    <section className="max-w-5xl mx-auto my-20">
      <Header text="Our Team" />
      <div className="relative">
        <Number number="02" />
      </div>
      <div className="sm:grid grid-cols-4 gap-4 my-16">
        <Card />
      </div>
    </section>
  )
}

export default Team
