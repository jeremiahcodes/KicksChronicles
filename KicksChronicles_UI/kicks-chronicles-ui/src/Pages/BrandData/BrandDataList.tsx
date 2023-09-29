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
    <section className="container pt-5 mt-md-2 mt-lg-3 mt-xl-4 mt-xxl-5">
      <div className="row g-4 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2">
      {brandItems.length > 0 &&
        brandItems.map((brandItem, index) => (
          <BrandDataCard brandItem={brandItem} key={index} />
        ))}
    </div>
    </section>
  );
}

export default BrandDataList; 