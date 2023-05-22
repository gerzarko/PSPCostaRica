import { agregarPersisten } from "./context/cartStore";

export const BuyButton = (props: any) => {
  const agregar = () => {
    agregarPersisten(props.id);
  };

  return <button onClick={agregar}>buy</button>;
};
