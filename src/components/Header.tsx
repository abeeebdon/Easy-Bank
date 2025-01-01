import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
type Props = {
  showNav: boolean
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>
}
const Headers = (props: Props) => {
  const { showNav, setShowNav } = props
  return (
    <header className="bg-white p-4 py-6 flex justify-center">
      <article className="w-full max-w-[1200px] flex justify-between items-center">
        <div>
          <Image src="/images/logo.svg" width={170} height={100} alt="logo" />
        </div>
        <div
          className="sm:hidden text-lg text-black"
          onClick={() => setShowNav((prev) => !prev)}
        >
          {showNav ? <FaTimes /> : <FaBars />}
          {/* icons to toggle the navigation */}
        </div>
        <div className="hidden text-black gap-4  sm:flex">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Careers</Link>
        </div>
        <div className="hidden md:block bg-blue-200 px-4 py-2">
          <button>Contact us</button>
        </div>
      </article>
    </header>
  )
}

export default Headers
