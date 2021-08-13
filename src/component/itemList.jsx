import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function ItemList(props) {
  return (
    <div>
      <h2>Region: {props.region}</h2>
      <h3>Comunas: (cantidad {props.comunas.length})</h3>
      <List component="nav" aria-label="secondary mailbox folders">
        {props.comunas.map((data, indice) => (
          <ListItem key={indice}>
            <ListItemText primary={indice + 1 + " - " + data} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
export default ItemList;
