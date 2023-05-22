import { createMemo, createResource, createSignal } from "solid-js";
import supabase from "../config/supabaseClient";
import { BuyButton } from "./BuyButton";
import { ShowCart } from "./ShowCart";

export const Cart = () => {
  return (
    <main>
      <div>
        <h1>This is your cart</h1>
        <ShowCart />
      </div>
      <BuyButton />
    </main>
  );
};
