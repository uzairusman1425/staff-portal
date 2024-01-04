"use client";

import { useRouter } from "next/navigation"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"

function BackButton() {

    const router = useRouter()

    return (
        <button className="h-10 w-10 flex items-center justify-center rounded-full bg-themeDarkGray" onClick={() => {router.back()}}>
            <ChevronLeftIcon className="h-7 w-7 text-white" />
        </button>
    )
}

export default BackButton