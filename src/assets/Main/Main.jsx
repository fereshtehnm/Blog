import React from "react";
import Posts from "./Posts";
import AddPost from "./AddPost";
import Button from "./UI/Button";

export default function Main(props) {
  return (
    <div className="main" data-theme="retro">
      <div className="grid grid-cols-2  text-amber-950 relative py-10" data-theme="light">
        <div className="text-4xl font-bold p-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </div>
        <div className="text-xl p-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni cumque totam labore<br />
          animi odit tempore temporibus reiciendis hic, vel qui quia veniam eaque quibusdam<br />
          earum fugiat voluptatum atque, reprehenderit ea dolore odio. Dolorem doloremque fuga<br />
          provident optio nobis consequuntur explicabo.
        </div>
      </div>

      <br />
      <h2 id="Image-header">Images</h2>
      <div className="carousel rounded-box h-[30rem] py-6">
        <div className="carousel-item object-contain">
          <img src="/pics/benz2.jpg" alt="Burger" />
        </div>
        <div className="carousel-item object-contain">
          <img src="/pics/benz1.jpg" alt="Burger" />
        </div>
        <div className="carousel-item object-contain">
          <img src="/pics/van1.jpg" alt="Burger" />
        </div>
        <div className="carousel-item object-contain">
          <img src="/pics/ford1.png" alt="Burger" />
        </div>
      </div>

      <br />

      <h2 id="posts-header">Add Post</h2>
      <div>
        <AddPost></AddPost>
      </div>

      <h2 id="posts-header">Posts</h2>
      <div className="flex flex-wrap text-center items-center" data-theme="retro">
        <Posts items={props.items} />
      </div>

    </div>
  );
}
