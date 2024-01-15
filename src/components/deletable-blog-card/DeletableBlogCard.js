import Link from "next/link"
import PropTypes from "prop-types"
import { ArrowUpRightIcon } from "@heroicons/react/24/solid"
import { TrashIcon } from "@heroicons/react/24/outline"

export default function DeletableBlogCard({id, name, email, date, title, content, refreshPage}) {

    async function handleDelete(e) {

        e.preventDefault()

        const session = JSON.parse(localStorage.getItem("session"))

        const body = {
            token: session?.token,
            id: id
        }

        try {
            const response = await fetch("/api/post", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })

            const result = await response.json()

            console.log(result)

            if(result?.success) {
                refreshPage()
            }
            else {
                alert(result?.error)
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="w-full flex flex-col gap-5">
            <div className="flex flex-row gap-2 items-center">
                <div className="text-themeDarkGray font-semibold">{name}</div>
                <div className="h-2 w-2 rounded-full bg-themeDarkGray" />
                <div className="text-themeDarkGray font-semibold">{date}</div>
                <div className="h-2 w-2 rounded-full bg-themeDarkGray" />
                <div className="text-themeDarkGray font-semibold">{email}</div>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
                <div className="text-2xl font-semibold">{title}</div>
                <div className="flex flex-row gap-5 items-center">
                    <Link href={`/blog/${id}`}>
                        <ArrowUpRightIcon className="h-6 w-6 text-black" />
                    </Link>
                    <button onClick={handleDelete}>
                        <TrashIcon className="h-6 w-6 text-black" />
                    </button>
                </div>
            </div>
            <div className="text-themeDarkGray">{content?.slice(0, 350)}<span>{content?.length > 350 && "..."}</span></div>
        </div>
    )
}

DeletableBlogCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    refreshPage: PropTypes.func.isRequired
}