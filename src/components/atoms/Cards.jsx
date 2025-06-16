import { useState } from "react";
import picOne from "../../assets/Wallet.png";
import picTwo from "../../assets/Wallet3.png";
import picThree from "../../assets/Wallet2.png";
import picFour from "../../assets/Wallet1.png";
import grp from "../../assets/Group 3.png";

export default function Cards() {
  const [isExpanded, setIsExpanded] = useState(false);

  const cards = [
    { id: 1, pic: picOne },
    { id: 2, pic: picTwo },
    { id: 3, pic: picThree },
    { id: 4, pic: picFour },
  ];
  const expandedHeight = isExpanded ? (cards.length - 1) * 100 + 176 : 176;

  return (
    <div
      className=" flex items-center justify-center pb-0"
      style={{
        backgroundImage: `url(${grp})`,
        height: `${expandedHeight}px` ,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        minHeight: isExpanded ? `${expandedHeight + 400}px` : '37rem',
      }}
    >
      <div className="relative">
        <div className="relative w-[18rem]  ">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`absolute w-full h-44 rounded-xl shadow-lg cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105`}
              style={{
                zIndex: cards.length - index,
                transform: isExpanded
                  ? `translateY(${index * -200}px)`
                  : `translateY(${index * 10}px) `,
                transformOrigin: "center bottom",
                backgroundImage: `url(${card.pic})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
              onClick={() => setIsExpanded(!isExpanded)}
              // onMouseLeave={() => setIsExpanded(!isExpanded)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
