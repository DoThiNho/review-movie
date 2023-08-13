import 'public/assets/css/globals.css'
import SignInModal from '../pages/SignInModal'
import Header from '../components/Header'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between bg-white">
      {/* <SignInModal/> */}
      <Header />
    </main>
  )
}
