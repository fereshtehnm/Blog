import React, { useState } from "react"


const AddPost = (props) => {
    return (
        <div>
            <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
            <textarea className="textarea textarea-accent" placeholder="Bio"></textarea>  
        </div>
    )
}

export default AddPost