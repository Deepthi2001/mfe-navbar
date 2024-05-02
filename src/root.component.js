import React from "react";
// import { Provider } from "react-redux";
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import App from "./App";
// import configStore from "./redux/store/store";
// import "./styles/global-nav.css";

const generateClassName = createGenerateClassName({
  seed: 'main-child',
});

export default function Root(props) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      {/* <Provider store={configStore}> */}
        <App />
      {/* </Provider> */}
    </StylesProvider>
  );
}
