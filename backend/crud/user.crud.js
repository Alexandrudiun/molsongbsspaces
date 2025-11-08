import mongoose from 'mongoose';

export const getUserById = (req, res) => {
  const id = req.params.id;
  return res.status(200).json({ message: "Get user by ID route is working", data: { id, } });
}
