"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const router = useRouter()
    const [count, setCount] = useState(0)
    return <div id="page" className="h-screen flex justify-center items-start flex-col p-80 bg-blue-200">
        <p>
            counter <span id="count">{count}</span>
        </p>
        {/* <label>input:<input type="number" onChange={(e)=>{document.querySelector("#count")!.textContent = e.currentTarget.value}} name="count"/></label> */}
        {/* <button onClick={(e)=>{document.querySelector("#count")!.textContent = String(Number((document.querySelector("#count") as HTMLSpanElement).textContent) + 1)}}>add</button> */}
        <button onClick={()=>{setCount(count + 1)}}>add</button>
        <button onClick={()=>{document.querySelector("#page")!.classList.toggle("bg-red-400")}}>change</button>
        <button onClick={()=>{router.push("/aboutMe")}}>About Me</button>
    </div>
}