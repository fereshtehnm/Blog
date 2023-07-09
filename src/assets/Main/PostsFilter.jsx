import React from 'react'

const PostsFilter = (props) => {
    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
        console.log(event.target.value)
    }
    
    return (
    <div className="text-white p-0 px-4 w-full">
      <div className="flex w-full items-center justify-between p-4 my-4" data-theme="luxury">
      <label className="font-bold mb-2">Filter</label>
        <select 
          className="select select-warning w-full max-w-xs " 
          value={props.selected}
          onChange={dropDownChangeHandler}
        >
            {props.categories.map((option) => (
              <option className='hover:bg-gray-100 bg-black' key={option.id} value={option.id}>{option.title}</option>
            ))}
        </select>
        
        </div>
    </div>
    )
}

export default PostsFilter