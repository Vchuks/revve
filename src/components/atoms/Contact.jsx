import pin from "../../assets/pin.png"

const Contact = () => {
  return (
    <div className="bg-[#6D1F8F66] py-10 lg:py-20 px-3 md:px-10 lg:px-14 xl:px-20 rounded-[32px] call flex flex-col md:flex-row gap-8 md:gap-0 z-10 ">
      <div className="w-full text-white flex flex-col justify-between">
        <h2 className="text-3xl md:text-[52px]">Get in touch</h2>
        <div className="sans flex flex-col gap-4 pt-4 md:pt-0">
            <p className="w-[20rem] pb-4 md:pb-8">Do you have any questions or feedback?We'd love to hear from you.</p>
            <div className="flex gap-2 items-center">
                <i class='bx bxs-phone'></i><p>+1(343)338-5190</p>
            </div>
            <div className="flex gap-2 items-center">
                <i class='bx bxs-envelope' ></i><p>hello@revveme.com</p>
            </div>
            <div className="flex gap-2 items-center">
                <img src={pin} alt=""/><p>2482 Yonge St Toronto ON M4P 2H5</p>
            </div>
        </div>
      </div>
      <div className="w-full ">
        <form className="text-white sans flex flex-col gap-6 lg:pr-24">
            <div className="flex flex-col gap-2 ">
                <label htmlFor="fullname">Fullname</label>
                <input id="fullname" type="text" placeholder="Firstname Lastname" className="border px-4 py-2 rounded-lg border-[#FFFFFF1F] outline-white placeholder:text-[#CA92E3]" />
            </div>
            <div className="flex flex-col gap-2 ">
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" placeholder="johndoe@mail.com" className="border px-4 py-2 rounded-lg placeholder:text-[#CA92E3] border-[#FFFFFF1F] outline-white" />
            </div>
            <div className="flex flex-col gap-2 ">
                <label>Message</label>
                <textarea rows="7" className="border px-4 py-2 rounded-lg border-[#FFFFFF1F] outline-white placeholder:text-[#CA92E3]" placeholder="Type here.." ></textarea>
            </div>
            <button className="text-black mt-2 sans font-bold py-3 bg-white rounded-xl">Send message</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact
