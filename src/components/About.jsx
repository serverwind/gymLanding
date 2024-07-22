import Header from './Header'
import gym from '../../public/gym.jpg'
import Number from './Number'

const GymImg = () => {
  return (
    <div className="relative">
      <Number number='01' />
      <img className='hidden sm:block' src={gym} alt="Our gym" />
    </div>
  )
}

const Content = () => {
  return (
    <div className="mx-4 sm:my-16 sm:grid sm:grid-cols-2 sm:items-center sm:gap-4">
      <GymImg />
      <div className="my-4 sm:my-0">
        <p>At Journey London we believe Crossfitters come in all shapes and sizes, we are all on a journey towards our own personal best health and fitness levels. A journey that makes us better as athletes, friends and people.</p>
        <p> Our facility is unlike any other gym you’ve been to before. We pride ourselves not only in providing world class CrossFit training, but we also believe in creating a motivating and dynamic environment. We are the community dedicated to your human evolution, one workout at a time.  </p>
        <p> Come in for a free trial class! Lose some body fat, gain some friends, and get fit for life!  </p>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <section className="max-w-5xl mx-auto">
      <Header text="Who we are" />
      <Content />
    </section>
  )
}

export default About
