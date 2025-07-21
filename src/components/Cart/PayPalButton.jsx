import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPalButton({ amount, onSuccess, onError }) {
  return (
    <PayPalScriptProvider options={{ clientId: "test" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, action) => {
          return action.order.create({
            purchase_unit: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, action) => {
          return action.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
}

export default PayPalButton;
