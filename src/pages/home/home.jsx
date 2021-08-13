import React from "react";
import regionData from "./../lista/listData";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      dataModal: [],
      tituloRegion: "",
    };
    console.log(regionData);
  }
  changeDataModal(dataModel, titulo) {
    this.setState({
      dataModal: dataModel,
      openModal: true,
      tituloRegion: titulo,
    });
  }

  render() {
    return (
      <div>
        <h1>
          Bienvenido, a continuacion encontraras un listado con las regiones de
          Chile
        </h1>
        <div>
          <List component="nav" aria-label="secondary mailbox folder">
            {regionData.map((data, indice) => (
              <ListItem
                key={indice}
                button
                onClick={(event) =>
                  this.changeDataModal(data.comunas, data.region)
                }
              >
                <ListItemText primary={data.region} />
              </ListItem>
            ))}
          </List>
        </div>

        <Dialog
          open={this.state.openModal}
          onClose={() => this.setState({ openModal: false })}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="md"
        >
          <DialogTitle id="alert-dialog-title">
            Región seleccionada: {this.state.tituloRegion}
          </DialogTitle>
          <DialogContent>
            <div>
              {this.state.dataModal.map((data, indice) => (
                <DialogContentText key={indice}>{data}</DialogContentText>
              ))}
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              onClick={() => this.setState({ openModal: false })}
            >
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Home;
