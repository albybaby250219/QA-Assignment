import './style.scss';

import {title} from './title.js';

import json from './heading.json';

const app = document.getElementById('app');

title(app, json.homepage.title);
