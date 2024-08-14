import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null)
    const data=[
        {
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet.",
            filesixe:".9mb",
            close:true,
            tag:{
                isOpen:true, tagTitile:"Good Work", tagColor:"green"
            },
        },

        {
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet.",
            filesixe:".15mb",
            close:false,
            tag:{
                isOpen:false, tagTitile:"Download Now", tagColor:"green"
            },
        },

        {
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet.",
            filesixe:".5mb",
            close:false,
            tag:{
                isOpen:true, tagTitile:"Download Now", tagColor:"blue"
            },
        },
        
    ];
  return (
    <div ref={ref} className=" fixed z-[3]  top-0 left-0  w-full h-full flex gap-5 flex-wrap pt-5 ">
       {data.map((item, index)=>(
        <Card data={item} reference={ref} />
       ))}

    </div>
  );
}

export default Foreground
