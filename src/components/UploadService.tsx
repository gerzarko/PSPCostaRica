import { createSignal } from "solid-js";
import supabase from "../config/supabaseClient";

export const UploadService = () => {
  const [nameServiceToSubmit, setNameServiceToSubmit] = createSignal();
  const [descriptionServiceToSubmit, setDescriptionServiceToSubmit] =
    createSignal();
  const [priceServiceToSubmit, setPriceServiceToSubmit] = createSignal();

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    console.log(
      nameServiceToSubmit(),
      descriptionServiceToSubmit(),
      priceServiceToSubmit()
    );

    try {
      const user = (await supabase.auth.getUser()).data.user;
      console.log(user);
      await supabase.from("services1").insert({
        accountId: user?.id,
        name: nameServiceToSubmit(),
        description: descriptionServiceToSubmit(),
        price: priceServiceToSubmit(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchServices = async () => {
    const services = await supabase.from("services").select();
    console.log(services);
  };

  return (
    <div>
      <h1>task form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskName"
          placeholder="write task name"
          onChange={(e) => setNameServiceToSubmit(e.target.value)}
        />
        <input
          type="text"
          name="Description"
          placeholder="Describe your service"
          onChange={(e) => setDescriptionServiceToSubmit(e.target.value)}
        />
        <input
          type="number"
          name="priceService"
          placeholder="your service price"
          onChange={(e) => setPriceServiceToSubmit(e.target.value)}
        />
        <button>save task</button>
      </form>

      <button onclick={fetchServices}>fetchear services</button>
    </div>
  );
};
