import Image from 'next/image'
import Link from 'next/link'
type Props = {
  showNav: boolean
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>
}
const Headers = (props: Props) => {
  const { showNav, setShowNav } = props
  return (
    <header className="bg-white p-4">
      <article className="flex justify-between items-center">
        <div>
          <Image src="/images/logo.svg" width={100} height={100} alt="logo" />
        </div>
        <div className="sm:hidden" onClick={() => setShowNav(!showNav)}>
          {showNav ? (
            <Image
              src="/images/icon-close.svg"
              width={25}
              height={25}
              alt="logo"
            />
          ) : (
            <Image
              src="/images/icon-hamburger.svg"
              width={40}
              height={40}
              alt="logo"
            />
          )}
        </div>
        <div className="hidden md:flex">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Careers</Link>
        </div>
      </article>
    </header>
  )
}

export default Headers
