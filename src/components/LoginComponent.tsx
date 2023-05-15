import { createEffect } from "solid-js";
import { SignalComponent } from "./SignalComponent";
import supabase from "../config/supabaseClient";
import { SignOutComponent } from "./SignOutComponent";

export const LoginComponent = () => {
  createEffect(() => {
    console.log("hola");
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
    });
  });

  return (
    <div>
      <h1>Hola</h1>
      <button></button>
    </div>
  );
};
