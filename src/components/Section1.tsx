import { latestArticles, whyChooseUs } from './data'
import Image from 'next/image'

const Section1 = () => {
  return (
    <div className=" relative">
      <section className="w-full max-w-[1200px] mx-auto mt-[80px]  flex flex-col-reverse gap-6 sm:flex-row justify-between sm:items-center my-4">
        <article className=" basis-1/2 px-4 w-full max-w-[400px]">
          <h2 className="text-dBlue text-5xl">
            Next generation digital banking
          </h2>
          <p className="text-grayish-blue my-4">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className="text-sm  w-fit bg-blue-200 px-6 py-2 rounded-3xl bg-gradient-to-r from-lGreen to-bCyan">
            <button>Request invite</button>
          </div>
        </article>
        <div className="px-8 z-10 basis-1/2 h-[700px] bg-[url('/images/bg-intro-desktop.svg')] bg-cover bg-center bg-no-repeat">
          <Image
            src="/images/image-mockups.png"
            alt="Invite"
            width={300}
            height={300}
            className="w-[90%] h-full "
          />
        </div>
      </section>
      <section className="absolute top-[85%] bottom-10 bg-light-gray-blue w-full  h-full">
        <article className="w-full pt-[100px] max-w-[1200px] mx-auto">
          <div>
            <h2 className="text-dBlue text-2xl">Why choose EasyBank?</h2>
            <p className="text-grayish-blue my-4">
              We leverage open banking to turn your bank account into financial
              hub. <br />
              Control your finances like never before
            </p>
          </div>
          <article className="flex items-center mt-6 gap-4">
            {whyChooseUs.map((data) => {
              return (
                <div className="flex flex-col gap-4" key={data.id}>
                  <Image
                    src={data.src}
                    width={40}
                    height={40}
                    alt={data.heading}
                  />
                  <h2 className="text-dBlue">{data.heading}</h2>
                  <p className="text-grayish-blue">{data.content}</p>
                </div>
              )
            })}
          </article>
        </article>

        <div className="text-center mt-10 bg-very-light-gray">
          <article>
            {latestArticles.map((data) => {
              return (
                <div key={data.id}>
                  <div className="w-full max-w-[200px] h-[150px] relative mx-auto">
                    <Image src={data.src} fill alt={data.heading} />
                  </div>
                  <h2>{data.heading}</h2>
                  <p>{data.content}</p>
                </div>
              )
            })}
          </article>
        </div>
      </section>
    </div>
  )
}

export default Section1
