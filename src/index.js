import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import { store } from './app.store';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';


const render = (Component) => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      <AppContainer>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  })
}


// ReactDOM.render(
//   (<Provider store={store}>
//     <BrowserRouter>
//       {routes}
//     </BrowserRouter>
//   </Provider>),
//   document.getElementById('root')
// );

// if (module.hot) {
//   module.hot.accept()
// }
registerServiceWorker();
