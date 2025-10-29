import { User } from "../models/user.model.js";

export const getCart = async (req, res) => {
  const user = await User.findById(req.userId);
  res.json(user.cart);
};

export const updateCart = async (req, res) => {
  const user = await User.findById(req.userId);
  user.cart = req.body.items;
  await user.save();
  res.json(user.cart);
};

export const mergeCart = async (req, res) => {
  const { localCart } = req.body;
  const user = await User.findById(req.userId);

  localCart.forEach((localItem) => {
    const existing = user.cart.find((item) => item.id === localItem.id);
    if (existing) {
      existing.count += localItem.count;
    } else {
      user.cart.push(localItem);
    }
  });

  await user.save();
  res.json(user.cart);
};

export const clearCart = async (req, res) => {
  const user = await User.findById(req.userId);
  user.cart = [];
  await user.save();
  res.json({ message: "Cart cleared" });
};
