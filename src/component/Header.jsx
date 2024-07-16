import { useState } from 'react'
import { HamburgerIcon, Logo } from './icons'
import { FaCross } from 'react-icons/fa'
import useWindowSize from '../hooks/useWindowSize'
const Header = () => {
  const [show, setShow] = useState(false)
  const { width } = useWindowSize()
  return (
    <section className="p-4 relative">
      <article className="flex items-center justify-between">
        <div>
          <Logo />
        </div>
        {width > 500 ? (
          <article className="flex gap-24 justify-between">
            <div className="flex gap-4">
              <div>Home</div>
              <div>About</div>
              <div>Contact</div>
              <div>Blog</div>
              <div>Careers</div>
            </div>
            {width > 750 && (
              <div>
                <h2>Request invite</h2>
              </div>
            )}
          </article>
        ) : (
          <div onClick={() => setShow(!show)}>
            {show ? <FaCross /> : <HamburgerIcon />}
          </div>
        )}
      </article>

      {show && (
        <article className="flex flex-col pt-6 w-full items-center gap-4 bg-white fixed top-10 ">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div>Blog</div>
          <div>Careers</div>
        </article>
      )}
    </section>
  )
}

export default Header
