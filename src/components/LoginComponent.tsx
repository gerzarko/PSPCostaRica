import { createEffect } from "solid-js";
import { SignalComponent } from "./SignalComponent";
import supabase from "../config/supabaseClient";
import { SignOutComponent } from "./SignOutComponent";
import { consolePersisten } from "./context/cartStore";

export const LoginComponent = () => {
  consolePersisten();
  createEffect(() => {
    console.log("hola");
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
    });
  });

  return (
    <div>
      <h1>Hola</h1>
      <h1>This is the count </h1>
      <button></button>
    </div>
  );
};
