import PropTypes from "prop-types"
import BackButton from "../back-button/BackButton"

export default function Header({title}) {
    return (
        <div className="w-[95%] flex flex-row items-center justify-between mt-10">
            <BackButton />
            <div className="text-4xl font-bold font-sora underline text-themeGray">{title}</div>
            <div className="w-10" />
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}