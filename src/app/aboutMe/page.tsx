"use client"

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    return <div>
        <p>
            This page is where I tell information about myself
        </p>
        <button onClick={()=>{router.push("/counter")}}>Counter</button>
    </div>
}