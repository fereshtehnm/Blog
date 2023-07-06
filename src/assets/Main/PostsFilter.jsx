import React from 'react'

const PostsFilter = (props) => {

    // const dropDownChangeHandler = (event) => {
    //     props.onChangeFilter(event.target.value)
    //     console.log(event.target.value)
    // }
    return (
    <div className="text-white p-0 px-4">
      <div className="flex w-full items-center justify-between my-4">
      <label className="font-bold mb-2">Filter:</label>
        <select className="select select-warning w-full max-w-xs" value={props.selected} onChange={props.onChangeFilter}>
            {props.options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>

        </div>
    </div>
    )
}

export default PostsFilter;