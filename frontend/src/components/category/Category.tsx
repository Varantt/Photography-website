import { CategoryData } from "@/schema/category/types/types";
import React from "react";

export const Category: React.FC<CategoryData> = ({ id, attributes }) => {
  const { name } = attributes;
  return (
    <div className="category" key={id}>
      {name}
    </div>
  );
};
