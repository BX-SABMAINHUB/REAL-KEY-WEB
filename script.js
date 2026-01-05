// script.js

// Seleccionamos el div donde vamos a mostrar la key
const keyDiv = document.getElementById("key");

// Hacemos la petición a tu API
fetch("/api/check")
  .then(response => response.text())
  .then(data => {
    // La API responde varias líneas, buscamos la línea que tenga la key
    // Ejemplo de línea: "KEY": 8393739
    const keyLine = data.split('\n').find(line => line.includes('"KEY"'));

    if (keyLine) {
      // Extraemos solo el número de 7 dígitos
      const key = keyLine.replace(/[^0-9]/g, '');
      keyDiv.innerText = key; // Mostramos la key en pantalla
    } else {
      keyDiv.innerText = "No se encontró la key";
    }
  })
  .catch(err => {
    keyDiv.innerText = "Error cargando la key";
    console.error("Error al obtener la key:", err);
  });
