import React from "react";
import ProductCard from "./ProductCard";

const productDatas = [
  {
    id: 0,
    img: "/jacket-1.jpg",
    title: "title",
    desc: "Woman jacket",
    rating: 4,
    price: "100.00",
  },
  {
    id: 1,
    img: "/jacket-1.jpg",
    title: "title",
    desc: "Woman jacket",
    rating: 3,
    price: "100.00",
  },
  {
    id: 2,
    img: "/shirt-1.jpg",
    title: "title",
    desc: "Woman jacket",
    rating: 4,
    price: "100.00",
  },
  {
    id: 3,
    img: "/jacket-1.jpg",
    desc: "Woman jacket",
    rating: 4,
    price: "100.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productDatas.map((data, index) => (
            <ProductCard
              img={data.img}
              title={data.title}
              desc={data.desc}
              rating={data.rating}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
