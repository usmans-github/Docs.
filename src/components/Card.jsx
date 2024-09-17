import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragTransition={{bounceDamping: 5}} className="relative w-52 h-64 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden flex-shrink-0 cursor-pointer">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full  left-0">
        <div className="flex justify-between items-center px-8 py-3 mb-3">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "green" ? "bg-green-600": "bg-blue-600"} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
