const Section1 = () => {
  return (
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
  )
}

export default Section1
