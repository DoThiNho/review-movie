import SignInModal from '../pages/SignInModal'
import 'public/assets/css/globals.css'


export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between bg-white">
      <SignInModal/>
    </main>
  )
}
