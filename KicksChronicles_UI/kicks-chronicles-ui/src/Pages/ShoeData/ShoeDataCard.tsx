import React from "react";
import { shoeModel } from "../../Interfaces";

interface Props {
  shoeItem: shoeModel;
}

function ShoeDataCard(props: Props) {
  return (

    <div className="col-sm-6 col-md-4">
      <div className="card card-hover border-0 rounded-1 overflow-hidden"><img src={props.shoeItem.shoeThumbnailURL} alt="Image" />
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0">
          <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
          <div className="card-body d-flex flex-column justify-content-end dark-mode h-100 position-relative zindex-2 text-center">
            <h3 className="h5 mb-1">{props.shoeItem.name}</h3>
            <div className="d-flex justify-content-center"><a className="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="#"><i className="ai-facebook"></i></a><a className="btn btn-icon btn-sm btn-light btn-twitter rounded-circle mx-2" href="#"><i className="ai-twitter"></i></a><a className="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="#"><i className="ai-linkedin"></i></a></div>
          </div>
        </div>
      </div>
    </div>
  );

  // <div>{props.brandItem.name}</div>;
}

export default ShoeDataCard;