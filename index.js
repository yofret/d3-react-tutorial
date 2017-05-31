'use strict';

import React from 'react';
import { render } from 'react-dom';
import Home  from './react-components/Home';
import "./scss/main.scss";


render(
  React.createElement(Home),
  document.getElementById('root')
);
