import React, { useEffect, Fragment } from 'react';
import SeatchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModel';
import EditLogModal from './components/logs/EditLogModel';
import AddTechModal from './components/techs/AddTechModel';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Auto init Materialize
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SeatchBar />
        <div className='container'>
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
