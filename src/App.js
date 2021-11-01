import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  },
  {
    name: "samgyetang",
    image:
      "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
