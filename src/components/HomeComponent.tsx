import { createEffect, createSignal } from "solid-js";
import { SignalComponent } from "./SignalComponent";
import supabase from "../config/supabaseClient";
import { Routes, useNavigate, Route } from "@solidjs/router";
import { LoginComponent } from "./LoginComponent";

export const HomeComponent = () => {
  return (
    <div>
      <h1>chau</h1>

      <a href="/login">login</a>

      <SignalComponent />
      <a href="/addService">service</a>
      <button></button>
    </div>
  );
};
