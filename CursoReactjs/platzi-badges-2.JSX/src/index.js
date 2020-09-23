import React from 'react';
import ReactDOM from 'react-dom';

//CREANDO ELEMENTO
//const element = document.createElement('h1')
//element.innerText = 'Hello, platzi badges!';
//LLAMANDO O TRALLENDO EL ELEMENTO
//const container = document.getElementById('app');
//AÑADIENDOLO A LA ETIQUETA
//container.appendChild(element);

const jsx = (
  <div>
    <h1>Hola, soy Richard</h1>
    <p>Soy ingeniero frontend.</p>
  </div>
);

const element = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'Hola, soy Richard'),
  React.createElement('p', {}, 'Soy ingeniero de la web.')
);
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
