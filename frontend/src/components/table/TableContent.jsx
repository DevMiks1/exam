/** @format */

import React from "react";
import { AmaiaData } from "../json/AmaiaData";
import TableCategory from "./TableCategory";

const TableContent = () => {
  return (
    <>
      {AmaiaData.Amaia.map((data) => {
        const { id, property, model, location, area, price, availability } =
          data;
        return (
          <div key={id} className="pb-[34px] mx-auto">
            <TableCategory
              property={property}
              model={model}
              location={location}
              area={area}
              price={price}
              availability={availability}
            />
          </div>
        );
      })}
    </>
  );
};

export default TableContent;
