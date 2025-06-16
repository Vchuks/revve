import calender from "../../assets/Calendar.png"

const Bills = () => {
  return (
    <div className='bills-bg lg:h-[50rem] py-10 px-3 md:px-10 lg:px-14 xl:px-20 flex flex-col md:flex-row justify-between items-center gap-5 lg:gap-0'>
      <div className=' text-white w-full lg:w-[21rem] flex flex-col gap-8 md:gap-14 '>
        <h2 className='text-3xl md:text-[52px]'>Pay Bills</h2>
        <p className='sans'>Say goodbye to long queues and endless processes—our platform offers a seamless solution for paying bills instantly without any hiccups.</p>
        <div>
            <p className="sans pb-4">Get Revve on your phone</p>
            <button className="w-48 py-3 sans font-bold bg-white text-black rounded-xl">Coming soon</button>
        </div>
      </div>
      
      <div className='lg:w-80 md:pt-40'>
        <img src={calender} alt className='w-full' loading='lazy'/>
      </div>
    </div>
  )
}

export default Bills
