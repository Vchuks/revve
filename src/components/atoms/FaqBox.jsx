import PropTypes from "prop-types";
import { useState } from "react";

const FaqBox = ({ question, answer }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className="text-[#CA92E3] text-xl md:text-2xl lg:text-[40px] w-full py-2 border-b border-[#5D0186] ">
      <div className="flex justify-between items-baseline py-4 md:py-6" onClick={handleOpen}>
        <p className="w-full">{question}</p>
        <p className="w-16 flex justify-end">

        {open ? <i class='bx bx-minus md:text-3xl'></i> :<i class="bx bx-plus-medical text-sm md:text-2xl"></i>}
        </p>
      </div>
      {open && <p className="pb-2 px-4 sans shadow-2xl rounded-b-2xl ">{answer}</p>}
    </div>
  );
};

FaqBox.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default FaqBox;
