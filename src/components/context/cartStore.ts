import { atom, map } from "nanostores";
import { persistentAtom, persistentMap } from "@nanostores/persistent";

export type Product = {
  id: number;
  name: string;
  accountId: string;
  description: string;
  price: number;
};

export const shoppingCart = persistentAtom<Product[]>("cart", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function consolePersisten() {
  console.log(shoppingCart.get());
}

export function agregarPersisten(service: Product) {
  shoppingCart.set([...shoppingCart.get(), service]);

  consolePersisten();
}

export function eliminarUltimoElemento() {}

export function devolverNumeroDeElementos() {
  let number = shoppingCart.get().length;
  console.log(shoppingCart.get());
  return number;
}
