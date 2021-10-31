import React from "react"

function Footer() {
    function Emoji(props) {
        return (
            <span
                className="emoji"
                role="img"
                aria-label={props.label ? props.label : ""}
                aria-hidden={props.label ? "false" : "true"}
            >
                {props.symbol}
            </span>
        )
    }
    return (
        <div className="Footer">
            <p className="Footer-text text-white">Coded with <Emoji symbol="❤️" label="heart"/> by</p>
            <a href="https://github.com/rafdidact" className="Footer-link">@rafdidact</a>
        </div>
    )
}

export default Footer