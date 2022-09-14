export const Initializers = {
  ITEM: {
    id: 0,
    name: "",
    details: "",
    quantity: 0,
    size: "",
    maker: "",
    model: "",
    link: "",
  },
  WISHLIST: {
    id: 0,
    name: "",
    details: "",
    items: [
      {
        id: 0,
        name: "",
        details: "",
        quantity: 0,
        size: "",
        maker: "",
        model: "",
        link: "",
      },
    ],
  },
  MEMBER: {
    status: "",
    user: "",
    address: "",
  },
  ADDRESS: {
    id: 0,
    country: "",
    city: "",
    street: "",
    zip: "",
    uid: 0,
  },
  NOTIFICATION: {
    id: 0,
    category: "",
    details: "",
    isActive: true,
  },
  GROUP: {
    id: 0,
    name: "",
    details: "",
  },
};
