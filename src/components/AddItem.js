import React from "react";
import ItemsList from "./ItemsList.js";

export default function AddItem(props) {
  if (props.items.length === 0) {
    if (!props.val) {
      return (
        <>
          <form onSubmit={props.FormSubmit}>
            <div>
              <label htmlFor="name">Название: </label>
              <input
                id="name"
                value={props.item}
                type="text"
                onChange={(e) => props.setItem(e)}
                placeholder="Название товара"
                className="ui-textfield"
              />
            </div>

            <div>
              <label htmlFor="desc">Описание: </label>
              <input
                id="desc"
                value={props.desc}
                type="text"
                onChange={(e) => props.setDesc(e)}
                placeholder="Описание товара"
                className="ui-textfield"
              />
            </div>

            <div className="form-footer">
              <div align="center" className="validation"></div>
              <input type="submit" className="ui-button" value="Добавить" />
            </div>
          </form>

          <div>
            <p className="ui-title">Добавьте первый товар</p>
          </div>
          <ItemsList items={props.items} Delete={props.Delete} />
        </>
      );
    } else {
      return (
        <>
          <form onSubmit={props.FormSubmit}>
            <div>
              <label htmlFor="name">Название: </label>
              <input
                id="name"
                value={props.item}
                type="text"
                onChange={(e) => props.setItem(e)}
                placeholder="Название товара"
                className="ui-textfield"
              />
            </div>

            <div>
              <label htmlFor="desc">Описание: </label>
              <input
                id="desc"
                value={props.desc}
                type="text"
                onChange={(e) => props.setDesc(e)}
                placeholder="Описание товара"
                className="ui-textfield"
              />
            </div>

            <div className="form-footer">
              <div align="center" className="validation">
                Заполните поля
              </div>
              <input type="submit" className="ui-button" value="Добавить" />
            </div>
          </form>

          <div>
            <p className="ui-title">Добавьте первый товар</p>
          </div>

          <ItemsList items={props.items} Delete={props.Delete} />
        </>
      );
    }
  } else {
    if (!props.val) {
      return (
        <>
          <form onSubmit={props.FormSubmit}>
            <div>
              <label htmlFor="name">Название: </label>
              <input
                id="name"
                defaultValue=""
                value={props.item}
                type="text"
                onChange={(e) => props.setItem(e)}
                placeholder="Название товара"
                className="ui-textfield"
              />
            </div>

            <div>
              <label htmlFor="desc">Описание: </label>
              <input
                id="desc"
                value={props.desc}
                defaultValue=""
                onChange={(e) => props.setDesc(e)}
                type="text"
                placeholder="Описание товара"
                className="ui-textfield"
              />
            </div>

            <div className="form-footer">
              <input type="submit" className="ui-button" value="Добавить" />
            </div>
          </form>

          <ItemsList items={props.items} Delete={props.Delete} />
        </>
      );
    } else {
      return (
        <>
          <form onSubmit={props.FormSubmit}>
            <div>
              <label htmlFor="name">Название: </label>
              <input
                id="name"
                defaultValue=""
                value={props.item}
                type="text"
                onChange={(e) => props.setItem(e)}
                placeholder="Название товара"
                className="ui-textfield"
              />
            </div>

            <div>
              <label htmlFor="desc">Описание: </label>
              <input
                id="desc"
                value={props.desc}
                defaultValue=""
                onChange={(e) => props.setDesc(e)}
                type="text"
                placeholder="Описание товара"
                className="ui-textfield"
              />
            </div>

            <div className="form-footer">
              <div align="center" className="validation">
                Заполните поля
              </div>
              <input type="submit" className="ui-button" value="Добавить" />
            </div>
          </form>
          <ItemsList items={props.items} Delete={props.Delete} />
        </>
      );
    }
  }
}
