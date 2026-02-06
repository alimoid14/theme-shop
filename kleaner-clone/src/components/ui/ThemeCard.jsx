import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/useContext";

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

  /* -------------------- DERIVED STATE -------------------- */
  const cartItem = state.items.find((item) => item.id === name);
  const isInCart = Boolean(cartItem);
  const quantity = cartItem?.count ?? 0;

  const isTheme = variant === "theme";
  const isFeatured = variant === "theme-ft";
  const isCart = variant === "theme-cart";
  const isDescHidden = variant === "theme-desc";

  /* -------------------- SAFE CLEANUP -------------------- */
  useEffect(() => {
    if (isCart && isInCart && quantity === 0) {
      dispatch({ type: "REMOVE_FROM_CART", payload: { id: name } });
    }
  }, [quantity, isCart, isInCart, dispatch, name]);

  /* -------------------- ACTIONS -------------------- */
  const addToCart = () =>
    dispatch({
      type: "ADD_TO_CART",
      payload: { id: name, name, price, count: 1 },
    });

  const increment = () =>
    dispatch({ type: "INCREMENT", payload: { id: name, price } });

  const decrement = () =>
    dispatch({ type: "DECREMENT", payload: { id: name, price } });

  /* -------------------- SUB COMPONENTS -------------------- */

  const ThemeImage = () => (
    <img
      src={image}
      alt={name}
      className={`mr-auto block ${isCart ? "w-[20%] h-fit py-4" : "w-full"}`}
    />
  );

  const ThemeMeta = () => (
    <>
      <div className="font-bold hover:underline">
        <p className="truncate">{name}</p>
      </div>

      <p className="text-[0.75rem] text-gray-400">
        by <span className="font-bold hover:underline">{author}</span>
        {(isFeatured || isCart) && (
          <>
            {" "}
            in <span className="font-bold">{category}</span>
          </>
        )}
      </p>
    </>
  );

  const CartCTA = () => {
    if (isTheme || isCart) return null;

    return isInCart ? (
      <Link
        to="/cart"
        className="h-fit self-end p-2 border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white"
      >
        View Cart
      </Link>
    ) : (
      <button
        onClick={addToCart}
        className="h-fit self-end p-2 border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white"
      >
        Add to Cart
      </button>
    );
  };

  const QuantityControls = () =>
    isCart && (
      <div className="flex gap-2 items-center font-bold text-[0.75rem]">
        <button
          className="px-2 rounded-full bg-red-300 hover:bg-red-500"
          onClick={decrement}
        >
          -
        </button>

        <span className="text-[1rem]">Qty: {quantity}</span>

        <button
          className="px-2 rounded-full bg-teal-300 hover:bg-teal-500"
          onClick={increment}
        >
          +
        </button>
      </div>
    );

  /* -------------------- RENDER -------------------- */

  return (
    <div
      className={`group rounded relative w-full overflow-hidden hover:-translate-y-2 transition-all duration-500 ${
        isCart ? "flex flex-row justify-between" : ""
      }`}
    >
      <ThemeImage />

      {!isDescHidden && (
        <div
          className={`bg-gray-50 p-4 transition-all duration-500 ${
            isTheme
              ? "lg:absolute lg:inset-x-0 lg:bottom-0 lg:opacity-0 lg:group-hover:opacity-100"
              : ""
          } ${isCart ? "flex flex-col w-[75%]" : ""}`}
        >
          <ThemeMeta />

          <div
            className={`flex-1 ${
              isFeatured || isCart ? "flex justify-between" : ""
            }`}
          >
            <div
              className={`text-[0.75rem] text-gray-400 ${
                isTheme ? "flex justify-between" : ""
              }`}
            >
              {(isFeatured || isCart) && (
                <p className="text-[1.25rem] text-black font-bold mt-4">
                  ${price}
                </p>
              )}

              <p>({reviews})</p>

              {isFeatured && <p>{sales}</p>}
            </div>

            <CartCTA />
            <QuantityControls />
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeCard;
