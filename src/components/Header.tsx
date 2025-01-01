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
    <header className="bg-white p-4 z-20 flex justify-center fixed left-0 w-full top-0 h-[80px]">
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
        <div className="hidden text-grayish-blue gap-6  sm:flex">
          <Link href="/" className="hover:text-dBlue">
            Home
          </Link>
          <Link href="/" className="hover:text-dBlue">
            About
          </Link>
          <Link href="/" className="hover:text-dBlue">
            Contact
          </Link>
          <Link href="/" className="hover:text-dBlue">
            Blog
          </Link>
          <Link href="/" className="hover:text-dBlue">
            Careers
          </Link>
        </div>
        <div className="hidden text-sm md:block bg-blue-200 px-6 py-2 rounded-3xl bg-gradient-to-r from-lGreen to-bCyan">
          <button>Request invite</button>
        </div>
      </article>
    </header>
  )
}

export default Headers
