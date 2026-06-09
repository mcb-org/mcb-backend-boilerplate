export type TUser = {
  id?: string;
  name: string | null;
  email: string;
  image?: string | null;
  hashedPassword: string;
  createdAt?: Date;
  updatedAt?: Date;
};

// type for user save method
export type TUserAdd = {
  save(): TUserAdd | PromiseLike<TUserAdd>;
  name: string | null;
  email: string;
  hashedPassword: string;
};
