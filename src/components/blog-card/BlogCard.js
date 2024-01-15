import Link from "next/link"
import PropTypes from "prop-types"

export default function BlogCard({id, name, email, date, title, content}) {
    return (
        <Link href={`/blog/${id}`} className="w-full flex flex-col gap-3">
            <div className="flex flex-row gap-2 items-center">
                <div className="font-extralight">{name}</div>
                <div className="h-1 w-1 rounded-full bg-themeDarkGray" />
                <div className="text-themeGray text-sm font-extralight">{date}</div>
                <div className="h-1 w-1 rounded-full bg-themeDarkGray" />
                <div className="font-extralight">{email}</div>
            </div>
            <div className="w-full flex flex-col gap-3">
                <div className="text-xl">{title}</div>
                <div className="font-extralight text-sm">{content?.slice(0, 350)}<span>{content?.length > 350 && "..."}</span></div>
            </div>
            <div className="text-sm font-extralight text-themeGray">Selected for you</div>
        </Link>
    )
}

BlogCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}