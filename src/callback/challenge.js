// Llamado a la librería XmlHttpRequest
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// API en mayúscula porque es una referencia que no va a cambiar
const API = "https://api.escuelajs.co/api/v1";

// urlApi: no confundir y colocar 'API'
function fetchData(urlApi, callback) {
  // Referencia a 'new XMLHttpRequest'
  let xhttp = new XMLHttpRequest();

  // Petición "obtener" = Protocolo "GET", con 'true' para habilitarlo
  xhttp.open("GET", urlApi, true);
  // Observa diferentes estados de la solicitud y conoce cuando está disponible la información
  xhttp.onreadystatechange = function (event) {
    // Verificar el estado, si ha sido completada la llamada
    if (xhttp.readyState === 4) {
      // Validar si el servidor responde de forma correcta
      if (xhttp.status === 200) {
        /*
					El servidor envía los datos en formato de texto a 'xhttp.responseText', se debe hacer
					la transformación a formato JSON
				*/
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error" + urlApi);
        // Es null porque no se está regresando ningún dato
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

/*
	Como argumentos pasamos la url 'API' concatenada con la cadena '/products' para acceder a la URL de la API deseada y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo que almacena todos los objetos traídos por la API).
*/
fetchData(`${API}/products`, function (error1, data1) {
  // Se valida si existe un error, en caso de que exista la funcion retorna el error
  if (error1) return console.error(error1);
  /*
		Se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del arreglo data1, se envía como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1 y nuevamente una función anónima.
	*/
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    // Si en este punto se identifica un error se imprime en consola y se detiene el proceso
    if (error2) return console.error(error2);
    /*
			Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria, se envían como parámetros la url de la API con la concatenación de 'Categories' y el atributo Id de categoria del objeto data2 de la función anterior.
			En este caso puntual se hace uso de Optional Canning el cual hace una evaluación de las propiedades de un objeto y en vez de arrojar un error devuelve undefined en caso que la propiedad no exista o sea null.
			Igual que las anteriores se envía una funcion anónima con 2 argumentos, un objeto Error y un objeto de datos.
		*/
    fetchData(
      `${API}/categories/${data2?.category?.id}`,
      function (error3, data3) {
        //se valida si existe error, en caso de que exista se detiene el proceso y se imprime el error
        if (error3) return console.error(error3);
        //Se imprime el objeto en la posición 1 del arreglo de los objetos obtenidos en el método invocado inicialmente
        console.log(data1[0]);
        //Se imprime el titulo del objeto que se consultó en la segunda invocación de la función
        console.log(data2.title);
        //Se imprime el nombre de la categoria a la que pertenece el objeto que se consultó en la segunda invocación del método.
        console.log(data3.name);
      }
    );
  });
});
