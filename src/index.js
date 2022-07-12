import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './LandingPage';
import AntDesignPage from './pages/AntDesignPage';
import MaterialUIPage from './pages/MaterialUIPage';
import TestPage from './pages/TestPage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux';
import { init } from "@rematch/core";

import * as models from "./models/core"

const store = init({ models });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<LandingPage />} />
          <Route path="antdesign" element={<AntDesignPage />} />
          <Route path="materialui" element={<MaterialUIPage />} />
        </Routes >
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);