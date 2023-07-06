import React, { useState } from "react"
import Card from "./UI/Card";
// each post

const Post = (props) => {
    return (
        <Card className="Post" data-theme="autumn">
            <div className="card w-96 bg-base-100 shadow-xl image-full mx-4 my-8 flex">
                <figure><img src="pics/van1.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.text}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning">Show more</button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Post