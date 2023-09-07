const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Nm151K2U361dMY0ZUZ65CFmrVKUCWC3e1efYv03VSxTzQtZ8zqjxZMyMkjvfbvY7hkTr2qhuf3kFjH7MmJP1Otg00ZiwPMVzl"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;

  const lineItems = items.map((item) => ({
    price: item.price_id,
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(JSON.stringify({ url: session.url }));
});

app.listen(4000, () => console.log("listening on port: 4000!"));
