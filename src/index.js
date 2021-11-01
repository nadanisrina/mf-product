import faker from "faker";

let product = "";

for (let i = 0; i <= 3; i++) {
  const name = faker.commerce.productName();
  product += "<div>{name}</div>";
}

console.log(product);
