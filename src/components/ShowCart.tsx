import { createEffect, createMemo, createSignal } from "solid-js";
import {
  consolePersisten,
  devolverNumeroDeElementos,
  shoppingCart,
} from "./context/cartStore";

export const ShowCart = () => {
  const [cart, setCart] = createSignal();
  setCart(devolverNumeroDeElementos());
  let h2 = "h";

  createEffect(() => {
    let qsy = shoppingCart;
    console.log(cart());
    h2 = <h2>esto es el segundo metodo {cart()}</h2>;
  });
  return (
    <div>
      <h1> esto es cart{1}</h1>
      {h2}
      <h3>{shoppingCart.get().length}</h3>
    </div>
  );
};
