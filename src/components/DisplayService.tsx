import { For, createEffect, createResource, createSignal } from "solid-js";
import supabase from "../config/supabaseClient";
import { BuyButton } from "./BuyButton";

export const DisplayService = () => {
  const [services, setServices] = createSignal();

  const fetchServices = async () => {
    const fetchedData = (await supabase.from("services1").select()).data;

    console.log(fetchedData);

    return fetchedData;
  };

  const [data] = createResource(fetchServices);

  createEffect(() => {
    setServices(fetchServices);
  });

  return (
    <main class="mx-auto px-4 max-w-7xl lg:py-20 py-16">
      <Show when={data()} fallback={<p>Loading..</p>}>
        <div class="grid md:grid-cols-2 gap-6 -mb-6 lg:grid-cols-4 row-gap-5"></div>
        <For each={data()}>
          {(service) => (
            <article>
              <h1 class="font-bold text-xl mb-2 font-heading leading-tight sm:text-2xl">
                {service.name}
              </h1>
              <p class="text-muted dark:text-slate-400 text-lg">
                {service.description}
              </p>
              <BuyButton />
            </article>
          )}
        </For>
      </Show>
    </main>
  );
};
