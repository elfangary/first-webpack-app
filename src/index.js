import displayMessage from './message';
import './index.scss';

const message = displayMessage();

const header = document.createElement('h1');
header.innerHTML = message;
document.body.prepend(header);
