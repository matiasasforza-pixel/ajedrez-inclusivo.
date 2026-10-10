# Ajedrez Inclusivo

Aplicación de ajedrez inclusiva y accesible para personas ciegas, compatible con lectores de pantalla.

## Propósito

Facilitar el aprendizaje y la práctica del ajedrez mediante una interfaz que pueda utilizarse sin visión, con teclado y lectores de pantalla.

## Estado del proyecto

El repositorio es público y utiliza la rama principal `main`. Actualmente contiene documentación preparatoria. El HTML real de la aplicación y sus dependencias todavía deben incorporarse. No se incluye ni se afirma el funcionamiento de ninguna versión de la aplicación.

Stockfish no está incorporado ni se ha comprobado su funcionamiento. La activación y el funcionamiento de GitHub Pages están pendientes de verificación.

## Requisitos de accesibilidad

- Compatibilidad con Ferda y TalkBack en Android y NVDA en Windows.
- Controles con nombres accesibles y navegación mediante teclado.
- Identificación de casillas, piezas, turnos y movimientos mediante texto accesible.
- Información que no dependa exclusivamente de imágenes, colores o sonidos.
- Anuncios comprensibles, evitando superposición con la voz del lector de pantalla.

Estos son requisitos del proyecto. La compatibilidad efectiva debe probarse con la aplicación real y cada lector de pantalla antes de anunciarla como confirmada.

## Publicación prevista

Se prevé utilizar GitHub Pages desde la raíz de `main`, en el dominio gratuito `github.io`, con HTTPS. GitHub Pages admite repositorios públicos con GitHub Free: no es necesario contratar alojamiento ni comprar un dominio.

Cuando se disponga del HTML real, se revisará y se incorporará como `index.html`, junto con sus dependencias. Antes de afirmar que el sitio funciona, se comprobarán el despliegue y la dirección pública HTTPS.

Documentación oficial:

- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

## Incorporación posterior de Stockfish

La integración del motor queda pendiente. Se deberá elegir una distribución adecuada para el navegador, revisar sus requisitos y licencia, incorporar los archivos reales y comprobar que el motor se inicia y responde a las solicitudes de la aplicación.

## Privacidad

El repositorio y el sitio serán públicos. No deben incorporarse contraseñas, credenciales, datos privados ni información personal.
