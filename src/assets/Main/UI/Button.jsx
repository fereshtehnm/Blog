import React from "react"

const Button = (props) => {
    return (
        <button className="btn btn-outline">
            {props.children}
        </button>
    )
}

export default Button

  // type={props.type || 'button'}
            // onClick={props.onClick}