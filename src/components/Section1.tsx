import { latestArticles, whyChooseUs } from './data'
import Image from 'next/image'

const Section1 = () => {
  return (
    <div className=" ">
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
        <article className="w-full py-[100px] max-w-[1200px] mx-auto">
          <div>
            <h2 className="text-dBlue text-2xl">Why choose EasyBank?</h2>
            <p className="text-grayish-blue mt-4">
              We leverage open banking to turn your bank account into financial
              hub. <br />
              Control your finances like never before
            </p>
          </div>
          <article className="flex items-center mt-10 gap-4">
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
          <article className="w-full max-w-[1200px] mx-auto py-20">
            <h2 className="text-dBlue text-2xl text-left ">Latest Articles</h2>
            <div className="flex  mt-6 gap-4 justify-between">
              {latestArticles.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="w-full max-w-[270px] shadow bg-white text-left"
                  >
                    <Image
                      src={data.src}
                      width={100}
                      height={100}
                      className="w-full h-[170px]"
                      alt={data.heading}
                    />
                    <div className="p-2 mt-2">
                      <p className="text-grayish-blue">{data.author}</p>
                      <h2 className="text-dBlue my-2">{data.heading}</h2>
                      <p className="text-grayish-blue">{data.content}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Section1
