import { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SeaarchBar from "./components/layouts/SeaarchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/Techs/AddTechModal";
import TechListModal from "./components/Techs/TechListModal";
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  useEffect(() => {
    // Init Material JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SeaarchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
