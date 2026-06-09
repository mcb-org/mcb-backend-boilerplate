import type { Request, Response, NextFunction } from "express";
import { catchAsync, AppError } from "../utils";
import prisma from "../config/dbConnect";

// get all users
const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await prisma.user.findMany().catch(() => {
      throw new AppError("Failed to fetch users", 500);
    });

    if (!users) return next(new AppError("Users not found", 404));

    res
      .status(200)
      .json({ users, success: true, message: "Users found successfully" });
  },
);

// get single user
const getUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user
      .findUnique({
        where: {
          id: req.params.id,
        },
      })
      .catch(() => {
        throw new AppError("Failed to fetch user", 500);
      });
    if (!user) return next(new AppError("User not found", 404));
    res.status(200).json({ user, success: true, message: "User found 🔥" });
  },
);

export { getAllUsers, getUser };
