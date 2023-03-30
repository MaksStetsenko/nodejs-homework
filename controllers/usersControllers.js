const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateSubscription,
} = require("../models/users");
const { asyncWrapper } = require("../utils/asyncWrapper");

const registerController = asyncWrapper(async (req, res, _) => {
  const { email, password, subscription } = req.body;

  const newUser = await registerUser(email, password, subscription);

  res.status(201).json({
    user: { email: newUser.email, subscription: newUser.subscription },
  });
});

const loginController = asyncWrapper(async (req, res, _) => {
  const { email, password } = req.body;

  const user = await loginUser(email, password);
  res.status(200).json({
    token: user.token,
    user: { email: user.email, subscription: user.subscription },
  });
});

const logoutController = asyncWrapper(async (req, res, _) => {
  const id = req.user.id;

  await logoutUser(id);

  res.status(204).end();
});

const getCurrentUserController = asyncWrapper(async (req, res, _) => {
  const { id } = req.user;

  const { email, subscription } = await getCurrentUser(id);

  res.status(200).json({
    email,
    subscription,
  });
});

const updateUsersSubscriptionController = asyncWrapper(async (req, res, _) => {
  const { id } = req.user;
  const { subscription } = req.body;

  const updatedUser = await updateSubscription(id, subscription);

  res.status(200).json({
    email: updatedUser.email,
    subscription: updatedUser.subscription,
  });
});

module.exports = {
  registerController,
  loginController,
  logoutController,
  getCurrentUserController,
  updateUsersSubscriptionController,
};
