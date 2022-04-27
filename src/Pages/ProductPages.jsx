import { VscTriangleDown } from "react-icons/vsc";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../css/products.css";
import foods from "../Components/Foods";
import Product from "../Components/Product";

const ProductPages = () => {
  return (
    <div className="all-products">
      <h1 className="intro">Our Products</h1>

      <div className="">
        <div className="head">
          <h2 className="sec">Breakfast</h2>
          <div className="triangle">
            <VscTriangleDown size={25} />
          </div>
        </div>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            fixedWidth: "30%",
            drag: false,
            gap: "2rem",
            arrows: false,
            breakpoints: {
              640: {
                type: "slide",
                arrows: true,
                drag: true,
                perPage: 1,
                gap: "0.6rem",
                fixedWidth: "80%",
                start: 1,
              },
            },
          }}
        >
          {foods
            .filter((food) => food.type === "Breakfast")
            .map((food) => {
              return (
                <SplideSlide key={food.id}>
                  <Product
                    img={food.Image}
                    amount={food.amount}
                    des={food.desc}
                    key={food.id}
                  />
                </SplideSlide>
              );
            })}
        </Splide>
      </div>
      <div className="">
        <div className="head">
          <h2 className="sec">Lunch</h2>
          <div className="triangle">
            <VscTriangleDown size={25} />
          </div>
        </div>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            fixedWidth: "30%",
            drag: false,
            gap: "2rem",
            arrows: false,
            breakpoints: {
              640: {
                type: "slide",
                arrows: true,
                drag: true,
                perPage: 1,
                gap: "0.6rem",
                fixedWidth: "80%",
                start: 1,
              },
            },
          }}
        >
          {foods
            .filter((food) => food.type === "Lunch")
            .map((food) => {
              return (
                <SplideSlide key={food.id}>
                  <Product
                    img={food.Image}
                    amount={food.amount}
                    des={food.desc}
                    key={food.id}
                  />
                </SplideSlide>
              );
            })}
        </Splide>
      </div>

      <div className="">
        <div className="head">
          <h2 className="sec">Dinner</h2>
          <div className="triangle">
            <VscTriangleDown size={25} />
          </div>
        </div>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            fixedWidth: "30%",
            drag: false,
            gap: "2rem",
            arrows: false,
            breakpoints: {
              640: {
                type: "slide",
                arrows: true,
                drag: true,
                perPage: 1,
                gap: "0.6rem",
                fixedWidth: "80%",
                start: 1,
              },
            },
          }}
        >
          {foods
            .filter((food) => food.type === "Dinner")
            .map((food) => {
              return (
                <SplideSlide key={food.id}>
                  <Product
                    img={food.Image}
                    amount={food.amount}
                    des={food.desc}
                    key={food.id}
                  />
                </SplideSlide>
              );
            })}
        </Splide>
      </div>

      <div className="">
        <div>
          <div className="head">
            <h2 className="sec">Dessert</h2>
            <div className="triangle">
              <VscTriangleDown size={25} />
            </div>
          </div>
        </div>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            fixedWidth: "30%",
            drag: false,
            gap: "2rem",
            arrows: false,
            breakpoints: {
              640: {
                type: "slide",
                arrows: true,
                drag: true,
                perPage: 1,
                gap: "0.6rem",
                fixedWidth: "80%",
                start: 1,
              },
            },
          }}
        >
          {foods
            .filter((food) => food.type === "Dessert")
            .map((food) => {
              return (
                <SplideSlide key={food.id}>
                  <Product
                    img={food.Image}
                    amount={food.amount}
                    des={food.desc}
                  />
                </SplideSlide>
              );
            })}
        </Splide>
      </div>
    </div>
  );
};

export default ProductPages;
