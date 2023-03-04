// const express = require("express"); //init the npm and installed express in same folder.

// const app = express() //using app as functions of all express.

// const port = 3456; //creating local port.

// app.use(express.json()) //using json language in same server.

// app.post("/products",(req,res)=> {
//     console.log(req.body);
//     let product = req.body.product;
//     // console.log(product, "is your needed data");

//     res.json({message:"Your request is sent!"})
// })

// function findName(name) {
//     for (let i = 0; i < students.length; i++) {
//       if (students[i].name == name) {
//         return students[i];
//         break;
//       }
//     }
//   }

// app.listen(port, () => {
//     console.log("Server has been started on port 3000");
//   });

const express = require("express");
const app = express();
const port = 3456;

const products = [
  {
    id: 1,
    name: "Product1",
    total_quantity: 12,
    type_of_product: "shirt",
    price: 300,
  },
  {
    id: 2,
    name: "Product2",
    total_quantity: 5,
    type_of_product: "pants",
    price: 500,
  },
  // to add more items
  
];
app.use(express.json());

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Get product by id
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === Number(productId));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Get product by name
app.get("/products/name/:name", (req, res) => {
  const productName = req.params.name;
  const product = products.find((p) => p.name === productName);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Add product
app.post("/addproduct", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  //   res.json(newProduct);
  console.log(req.body);
  res.send(newProduct);
});

// Start server
app.listen(3000, () => console.log("Server started on port 3000"));
