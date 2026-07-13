import ProductList from "./ProductList";

function App() {
  const products = [
  {
    name: "Laptop",
    price: 800,
    img: "laptop.jpg"
    
  },
  {
    name: "Phone",
    price: 500,
    img: "phone.jpg"
  },
  {
    name: "Headphone",
    price: 100,
    img: "headphone.jpg"
  }
];

  return (
    <ProductList products = {products}/>
  );
}

export default App;