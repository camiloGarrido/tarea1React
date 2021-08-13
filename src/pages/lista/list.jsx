import React from "react";
import regionData from "./listData";
import ItemList from "./../../component/itemList";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Regiones de chile</h1>
        {regionData.map((data, indice) => (
          <div key={indice}>
            <ItemList region={data.region} comunas={data.comunas} />
          </div>
        ))}
      </div>
    );
  }
}

export default List;
