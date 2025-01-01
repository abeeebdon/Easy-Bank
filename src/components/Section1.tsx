import { latestArticles, whyChooseUs } from './data'
import Image from 'next/image'

const Section1 = () => {
  return (
    <>
      <section className="flex flex-col-reverse sm:flex-row justify-between my-4">
        <article className="text-center">
          <h2 className="text-dBlue">Next generation digital banking</h2>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className="w-[90%] max-w-[250px] bg-blue-500 mx-auto rounded-lg py-3 text-white">
            <button>Request Invite</button>
          </div>
        </article>
        <article>
          <img src="./images/image-mockups.png" alt="Invite" />
        </article>
      </section>
      <section>
        <article>
          <div>
            <h2>Why choose EasyBank</h2>
            <p>
              We leverage open banking to turn your bank account into financial
              hub. COntrol your finances like never before
            </p>
          </div>
          <div className="text-center">
            <article>
              {whyChooseUs.map((data) => {
                return (
                  <div key={data.id}>
                    <Image
                      src={data.src}
                      width={25}
                      height={25}
                      alt={data.heading}
                    />
                    <h2>{data.heading}</h2>
                    <p>{data.content}</p>
                  </div>
                )
              })}
            </article>
          </div>
          <div className="text-center">
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
        </article>
      </section>
    </>
  )
}

export default Section1
