export type Address = {
  id: number;
  street: string;
  city: string;
  country: string;
  zip: string;
  uid: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  dob: string;
  address: Address;
};

export type Item = {
  name: string;
  details: string;
  quantity: number;
  size: string;
  maker: string;
  model: string;
  link: string;
  id: number;
  uid: number;
};

export type Wishlist = {
  name: string;
  details: string;
  id: number;
  uid: number;
  items: [Item];
};

export type Member = {
  status: string;
  user: User;
  address: Address;
};

export type Group = {
  name: string;
  details: string;
  id: number;
  uid: number;
  wishlists: [Wishlist];
  members: [Member];
};

export type Notification = {
  id: number;
  category: string;
  details: string;
  isActive: boolean;
  uid: number;
};

export type Me = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  dob: string;
  items: [Item];
  wishlists: [Wishlist];
  groups: [Group];
  notifications: [Notification];
};
