import React from "react";
import { brandModel } from "../../Interfaces";

 interface Props {
   brandItem: brandModel;
 }

 function BrandDataCard(props: Props) {
    return <div>{props.brandItem.name}</div>;
 }

 export default BrandDataCard;