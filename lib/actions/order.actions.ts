"user server";

import { CheckoutOrderParams } from "@/types";
import { handleError } from "../utils";
import Stripe from "stripe";
export const checkoutOrder = async (order: CheckoutOrderParams) => {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "{{PRICE_ID}}",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
    });
    res.redirect(303, session.url);
  } catch (error) {
    handleError(error);
  }
};
