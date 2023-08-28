import 'public/assets/css/globals.css'
import SignInModal from '../pages/SignInModal'
import Header from '../components/Header'
import Carousel from '../components/CardSlider/Carousel'
import CenteredTabs from '../components/Tab'

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white">
      {/* <SignInModal/> */}
      <Header />
      <Carousel />
      <div className='bg-home w-full pt-[100px]'>
        <CenteredTabs/>
      </div>
    </main>
  )
}
