const productsData = [
  {
    id: crypto.randomUUID(),
    name: "Gradient Graphic T-shirt",
    image: "image 1.png",
    rating: 4,
    stock: 212,
    price: 145,
  },
  {
    id: crypto.randomUUID(),
    name: "Polo with Tipping Details",
    image: "image 10-1.png",
    rating: 1,
    stock: 320,
    price: 180,
  },
  {
    id: crypto.randomUUID(),
    name: "Black Striped T-shirt",
    image: "image 10-2.png",
    rating: 3,
    stock: 0,
    price: 120,
  },
  {
    id: crypto.randomUUID(),
    name: "Skinny Fit Jeans",
    image: "image 7-1.png",
    rating: 4,
    stock: 20,
    price: 240,
  },
  {
    id: crypto.randomUUID(),
    name: "Checkered Shirt",
    image: "image 8-2.png",
    rating: 3,
    stock: 40,
    price: 180,
  },
  {
    id: crypto.randomUUID(),
    name: "Sleeve Striped T-shirt",
    image: "image 8.png",
    rating: 4,
    stock: 140,
    price: 130,
  },
  {
    id: crypto.randomUUID(),
    name: "Vertical Striped Shirt",
    image: "image 1.png",
    rating: 4,
    stock: 30,
    price: 212,
  },
  {
    id: crypto.randomUUID(),
    name: "Courage Graphic T-shirt",
    image: "image 9-2.png",
    rating: 3,
    stock: 20,
    price: 145,
  },
  {
    id: crypto.randomUUID(),
    name: "Loose Fit Bermuda Shorts",
    image: "image 9.png",
    rating: 4,
    stock: 10,
    price: 80,
  },
];

function getAllProductData() {
  return productsData;
}

export { getAllProductData };
