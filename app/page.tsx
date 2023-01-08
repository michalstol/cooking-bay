import React from "react";

import { Pill } from "./components";

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="columns-1">
          <div className="min-h-screen flex flex-col gap-8 items-stretch justify-start">
            {/* <header>header</header> */}

            <h1 className="pt-16 text-page-title font-cursive">Cooking Bay</h1>

            <section>
              <ul className="flex gap-4 flex-wrap">
                {[
                  "Cookies",
                  "Bake",
                  "Sweets",
                  "Vegetables",
                  "Bowl",
                  "Breakfast",
                  "Appetizer",
                  "Desserts",
                  "Japaness",
                ].map((category, index) => (
                  <li key={index} className="flex-none">
                    <Pill>{category}</Pill>
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex-1 -mx-5 px-5 py-8 text-white bg-black dark:text-black dark:bg-white">
              <ul className="flex flex-col gap-8">
                {[
                  {
                    title: "Ramen noodle soup",
                    desc: "We have to buy some fresh bread, fruit, and vegetables. Supply of water is runing out. We have to buy some fresh bread, fruit.",
                  },
                  {
                    title: "Browne Cookies",
                    desc: "We have to buy some fresh bread, fruit, and vegetables. Supply of water is runing out.",
                  },
                ].map((recipe, index) => (
                  <li key={index}>
                    <article className="flex gap-4 flex-col">
                      <h2 className="font-cursive text-5xl">{recipe.title}</h2>
                      <p className="my-0">{recipe.desc}</p>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
