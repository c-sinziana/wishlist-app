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
  items: Item[];
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
};

export type Notification = {
  id: number;
  category: string;
  details: string;
  isActive: boolean;
};

export type Me = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  dob: string;
  address: Address;
  notifications: Notification[];
  groups: Group[];
};
