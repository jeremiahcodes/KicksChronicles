import { useState, useEffect } from "react";
import { brandModel } from "../../Interfaces";
import BrandDataCard from "./BrandDataCard";

function BrandDataList() {
  const [brandItems, setBrandItems] = useState<brandModel[]>([]);

  useEffect(() => {
    fetch("https://kickschroniclesapi.azurewebsites.net/api/brand")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBrandItems(data.result);
      });
  }, []);

  return (
    <div className="container row">
      {brandItems.length > 0 &&
        brandItems.map((brandItem, index) => (
          <BrandDataCard brandItem={brandItem} key={index} />
        ))}
    </div>
  );
}

export default BrandDataList; 