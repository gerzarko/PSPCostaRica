import { createEffect, createSignal } from "solid-js";
import { SignalComponent } from "./SignalComponent";
import supabase from "../config/supabaseClient";
import { Routes, useNavigate, Route } from "@solidjs/router";
import { LoginComponent } from "./LoginComponent";
import { useStore } from "@nanostores/solid";
import { agregarPersisten, consolePersisten } from "./context/cartStore";
// import { addItem, cartItems } from "../context/cartStore";

export const HomeComponent = () => {
  // const $cartItems = useStore(cartItems);

  // addItem();

  return (
    <div>
      <h1>chau</h1>

      <a href="/login">login</a>

      <SignalComponent />
      <a href="/addService">service</a>
      <button onclick={agregarPersisten}>addicionar</button>
    </div>
  );
};
