import Link from "next/link"
import PropTypes from "prop-types"
import { ArrowUpRightIcon } from "@heroicons/react/24/solid"

function FeaturedBlogCard({id, name, date, title, content}) {
    return (
        <div className="w-full flex flex-col gap-5">
            <div className="flex flex-row gap-2 items-center">
                <div className="text-themeDarkGray font-semibold">{name}</div>
                <div className="h-2 w-2 rounded-full bg-themeDarkGray" />
                <div className="text-themeDarkGray font-semibold">{date}</div>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
                <div className="text-2xl font-semibold">{title}</div>
                <Link href={`/blog/${id}`}>
                    <ArrowUpRightIcon className="h-6 w-6 text-black" />
                </Link>
            </div>
            <div className="text-themeDarkGray">{content?.slice(0, 350)}<span>{content?.length > 350 && "..."}</span></div>
        </div>
    )
}

export default FeaturedBlogCard

FeaturedBlogCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}