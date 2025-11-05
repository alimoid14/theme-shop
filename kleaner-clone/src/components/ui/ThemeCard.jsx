import React from "react";
import { useCart } from "../../context/useContext";
import { Link } from "react-router-dom";

function ThemeCard({
  name,
  author,
  image,
  category,
  price,
  sales,
  reviews,
  variant,
}) {
  const { state, dispatch } = useCart();
  return (
    <div
      className={`group rounded relative group w-full overflow-hidden hover:-translate-y-2 transition-all duration-500 ${
        variant === "theme-cart" ? "flex flex-row justify-between" : ""
      }`}
    >
      {/* ------------------IMAGE----------------------- */}

      <img
        src={image}
        className={`mr-auto block ${
          variant === "theme-cart" ? "w-[20%] h-fit py-4" : "w-full"
        }`}
      />

      {/* -------------------DETAILS-PARENT-CONTAINER-------------- */}

      <div
        className={`bg-gray-50 p-4 transition-all duration-500 ${
          variant === "theme"
            ? "lg:py-4 lg:absolute lg:inset-x-0 lg:bottom-0 lg:opacity-0 lg:group-hover:opacity-100"
            : ""
        } ${variant === "theme-desc" ? "hidden" : ""}
        ${variant === "theme-cart" ? "flex flex-col w-[75%]" : ""}`}
      >
        {/* ---------------------THEME-NAME------------------- */}

        <div className="font-bold hover:underline">
          <p className="truncate">{name}</p>
        </div>

        {/* ---------------------AUTHOR-DETAILS-------------- */}

        <p className="w-full text-[0.75rem] text-gray-400">
          by <span className="font-bold hover:underline">{author}</span>{" "}
          <span
            className={`${
              variant === "theme-ft" || variant === "theme-cart"
                ? "inline"
                : "hidden"
            }`}
          >
            in <span className="font-bold">{category}</span>
          </span>
        </p>

        {/* -----------------DETAILS-CONTAINER---------------- */}
        <div
          className={`flex-1 ${
            variant === "theme-ft" || variant === "theme-cart"
              ? "flex flex-row justify-between"
              : ""
          }`}
        >
          <div
            className={`text-[0.75rem] text-gray-400 ${
              variant === "theme" ? "flex flex-row justify-between" : ""
            }`}
          >
            {/* -----------------PRICE-AND-DETAILS------ */}

            {/* -----------------PRICE------------------ */}

            <p
              className={`${
                variant === "theme-ft" || variant === "theme-cart"
                  ? "inline-block text-[1.25rem] text-black font-bold mt-4"
                  : "hidden"
              }`}
            >{`$${price}`}</p>

            {/* -----------------REVIEWS----------- */}

            <p>{`(${reviews})`}</p>

            {/* -----------------SALES-------------- */}
            <p
              className={`${
                variant === "theme-ft" ? "inline-block" : "hidden"
              }`}
            >{`${sales}`}</p>
          </div>
          <div
            className={`${
              variant === "theme" || variant === "theme-cart" ? "hidden" : ""
            } ${
              variant === "theme-ft"
                ? "w-fit text-right h-fit self-end font-bold text-[0.75rem]"
                : ""
            }`}
          >
            {state.items.find((item) => item.id === name) ? (
              <button className="p-2 mr-[2px] border-[1px] border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500">
                <Link to="/cart">View Cart</Link>
              </button>
            ) : (
              <button
                className="p-2 mr-[2px] border-[1px] border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { id: name, name: name, price: price, count: 1 },
                  });
                  console.log("Added to cart");
                }}
              >
                Add to Cart
              </button>
            )}
            {/* <button className="p-2 ml-[2px] border-[1px] border-teal-800 text-teal-800 hover:text-white hover:bg-teal-800">
              Live Preview
            </button> */}
          </div>
          <div
            className={`${
              variant === "theme-cart"
                ? "w-fit text-right h-fit self-end font-bold text-[0.75rem] flex gap-2"
                : "hidden"
            }`}
          >
            <button
              className="px-2 rounded-full bg-red-300 hover:bg-red-500"
              onClick={() => {
                dispatch({
                  type: "DECREMENT",
                  payload: { id: name, price: price },
                });
                console.log("Removed from cart");
              }}
            >
              -
            </button>
            <span className="text-[1rem]">
              Qty:
              {state.items.find((item) => item.id === name)?.count === 0
                ? dispatch({ type: "REMOVE_FROM_CART", payload: { id: name } })
                : state.items.find((item) => item.id === name)?.count}
            </span>
            <button
              className="px-2 rounded-full bg-teal-300 hover:bg-teal-500"
              onClick={() => {
                dispatch({
                  type: "INCREMENT",
                  payload: { id: name, price: price },
                });
                console.log("Added to cart");
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeCard;
