# App Clima con React

_WebApp donde rellenas un pequeño formulario con el nombre de una ciudad y país para que te busque el clima de esa zona (Temperatura, máxima, mínima, icono del tiempo y breve descripción del tiempo)._

## Índice de Contenidos

-   [Demo](#demo-)
-   [Construido Con](#construido-con-%EF%B8%8F)
-   [Instalación](#instalación-)

## Demo 🚀

https://clima-con-react.netlify.app/

## Construido con 🛠️

-   [Create React App](https://github.com/facebook/create-react-app). - Usado para crear la base del proyecto con React
-   [API del Clima](https://openweathermap.org/api) - API de donde tomo los datos del tiempo
-   Conversión de grados Kelvin a grados Centígrados y traducción de las descripciones del tiempo con un switch (la API viene en inglés)
-   React useState Hook - Para el estado del formulario, los datos obtenidos de la API, errores y la carga condicional de la consulta
-   React useEffect Hook - Para hacer una consulta a la API, guardar los datos en un state y validar que no haya error
-   JavaScript ES6+ - Últimos estándares de JavaScript
-   Variables de Entorno - Guardo la API key en un archivo .env (oculto) como variable de entorno
-   [Materialize CSS](https://materializecss.com/) - Un framework responsivo basado en material design del que tomo alguna columna, color, etc
-   Hice una carga condicional de componentes
-   PropTypes - Valida los tipos de las props

### Instalación 🔧

_Clona o haz fork del repositorio. Abre el proyecto en tu consola y escribe el comando:_

```
npm install
```

_Te instalará las dependencias del proyecto, luego usa el comando:_

```
npm start
```

_Iniciará el proyecto en modo desarrollador en tu navegador. Se abrirá automáticamente:_

[http://localhost:3000](http://localhost:3000)

_La página se recargará si haces y guardas cambios en el código. También verás errores en la consola (si los hubiese)_
