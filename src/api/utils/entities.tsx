export type Address = {
  id: number;
  street: string;
  city: string;
  country: string;
  zip: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  dob: string;
};

export type Item = {
  id: number;
  name: string;
  details: string;
  quantity: number;
  size: string;
  maker: string;
  model: string;
  link: string;
};

export type Wishlist = {
  id: number;
  name: string;
  details: string;
  items: { item: Item }[];
};

export type Member = {
  id: number;
  status: string;
  user: User;
  address: Address;
};

export type Group = {
  id: number;
  name: string;
  details: string;
  wishlists: Wishlist[];
  users: User[];
};

export type MyNotification = {
  id: number;
  category: string;
  details: string;
};

export type Me = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  dob: string;
  address: Address;
  notifications: MyNotification[];
  groups: Group[];
};
