import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return props.items.map((el) => (
    <ul className="ui-list">
      <li className="ui-item-list" key={el.id}>
        <Item key={el.id} info={el} />
        <button className="item-button" onClick={() => props.Delete(el)}>
          Удалить
        </button>
      </li>
    </ul>
  ));
}
