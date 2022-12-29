import React from "react";

import { Pill } from "../../components";

import { Title, CookingTime } from "./components";

export default function RecipePage() {
  return (
    <React.Fragment>
      <ul className="-mx-5 px-5 flex gap-4 overflow-x-auto scroll-smooth">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <li className="flex-none">
              <Pill>Sweet Home</Pill>
            </li>
          ))}
      </ul>

      <Title>Grocery Shopping</Title>
      <CookingTime hours="2" minutes="45" label="Cooking time" />
    </React.Fragment>
  );
}
