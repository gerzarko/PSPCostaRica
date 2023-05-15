import { createSignal } from "solid-js";
import supabase from "../config/supabaseClient";

export const SignOutComponent = () => {
  const handleLogOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      alert("you are signed out");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
    }
  };

  return (
    <div class="row flex-center flex">
      <div class="col-6 form-widget" aria-live="polite">
        <button onclick={handleLogOut}> Sign out</button>
      </div>
    </div>
  );
};
