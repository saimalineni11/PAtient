import React from "react";

function CardComponent(props) {
  return (
    <div className="h-100 card card-small">
      {props.heading && (
        <div className="border-bottom card-header">
          <h6 className="m-0">{props.heading}</h6>
        </div>
      )}
      <div className="pt-0 px-3 card-body">{props.children}</div>
      {props.footer && (
        <div className="border-top card-footer">{props.footer}</div>
      )}
    </div>
  );
}
export default CardComponent;
