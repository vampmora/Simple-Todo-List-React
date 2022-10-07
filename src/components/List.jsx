import React from "react";

function List(props) {
  return (
    <div
      onClick={() => {
        return props.onDelete(props.id);
      }}
    >
      <li>{props.line}</li>
    </div>
  );
}

export default List;
