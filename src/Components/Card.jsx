import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        dragElastic={0.1}
        dragTransition={{bounceStiffness:100, bounceDamping:10}}
        className="relative flex-shrink-0 w-52 h-72 text-white px-5 py-9 rounded-[35px] bg-zinc-900/90 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0  w-full  left-0">
          <div className=" flex items-center justify-between px-6 py-4 mb-2">
            <h5>{data.filesixe}</h5>
            <span className="w-5 h-5 bg-zinc-200 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoClose size=".7em" color="#000" />
              ) : (
                <MdOutlineFileDownload size=".7em" color="#000" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full p-3 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex text-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitile}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
