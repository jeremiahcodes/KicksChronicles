import { useState, useEffect } from "react";
import { shoeModel } from "../../Interfaces";
import ShoeDataCard from "./ShoeDataCard";

function ShoeDataList() {
  const [shoeItems, setShoeItems] = useState<shoeModel[]>([]);

  useEffect(() => {
    fetch("https://kickschroniclesapi.azurewebsites.net/api/shoe")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShoeItems(data.result);
      });
  }, []);

  return (
    <section className="container pt-5 mt-md-2 mt-lg-3 mt-xl-4 mt-xxl-5">
      <div className="row g-4 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2">
      {shoeItems.length > 0 &&
        shoeItems.map((shoeItem, index) => (
          <ShoeDataCard shoeItem={shoeItem} key={index} />
        ))}
    </div>
    </section>
  );
}

export default ShoeDataList; 