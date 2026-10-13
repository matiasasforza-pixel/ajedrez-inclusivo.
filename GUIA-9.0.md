# Ajedrez Inclusivo 9.0 — candidata estable

Esta versión es candidata. La aprobación final depende de pruebas reales con Ferda, TalkBack y NVDA y de la aprobación del usuario. No es una declaración de versión 1.0 estable.

## Abrir e instalar

1. Abrí https://matiasasforza-pixel.github.io/ajedrez-inclusivo./ con Internet.
2. Esperá el mensaje «Paquete sin conexión preparado, incluido Stockfish».
3. En Chrome para Android, abrí el menú del navegador y elegí Instalar aplicación o Agregar a pantalla de inicio, según lo que ofrezca el dispositivo.
4. Abrí el icono de la pantalla de inicio. Probá desconectarte y jugar una partida corta. La instalación física en Android queda pendiente de validación.

Para recibir una actualización, guardá primero la partida y cerrá todas las ventanas de la aplicación. Volvé a abrirla con Internet. No se fuerza una actualización dentro de una partida abierta. Si el navegador borra sus datos, se pierden también las copias locales y el paquete offline.

El archivo HTML descargado abre las lecciones y el rival incorporado. Stockfish y la instalación PWA requieren el paquete servido desde la web; el HTML por sí solo no contiene el motor.

## Jugar sin visión

Jugar y Aprender conservan sus menús desplegables. Jugada guiada abre inicialmente y permite seleccionar pieza, destino y confirmar. Al coronar podés elegir dama, torre, alfil o caballo; las opciones de jugada guiada incluyen la pieza de coronación.

En Tablero interactivo, Tab entra en una única casilla y vuelve a salir. Desde A1, arriba lleva a A2 y derecha a B1. No hay salto al otro extremo en los bordes. Enter o Espacio seleccionan origen y después destino. Las flechas únicamente exploran. Con NVDA, puede ser necesario activar el modo foco. No se interceptan Control + flechas.

En Android, Arriba, Abajo, Izquierda y Derecha anuncian la casilla explorada y conservan el foco en el botón. Seleccionar casilla explorada confirma origen o destino; Escuchar casilla explorada reproduce su referencia sonora si el audio está activado. La información textual siempre está disponible.

El sonido conserva el timbre, la duración y el estéreo de 8.4. Se recuerdan volumen, secuencia, retraso y habilitación. El navegador puede exigir una interacción al abrir para habilitar audio. Desactivá Voz artificial adicional si se superpone con tu lector.

Memoria conserva las consultas existentes. Atacantes y defensores consulta la casilla explorada; incluye ataques geométricos de piezas clavadas y no evalúa si una captura conviene. Recordar reyes y damas enumera esas piezas. Las ayudas actúan a pedido.

## Guardado, reglas y aprendizaje

- Guardar partida conserva la copia manual existente y pide confirmación al reemplazarla. Recuperar partida abre esa copia.
- Cada jugada actualiza un autoguardado separado. Recuperar autoguardado lo abre. Una nueva partida no borra la copia manual. Exportá PGN para tener una copia fuera del navegador.
- Las claves antiguas de partida y de las doce lecciones se conservan. Las partidas anteriores a 9.0 exportan PGN desde la posición recuperada; su historial hablado anterior sigue disponible.
- Triple repetición y cincuenta movimientos habilitan Reclamar tablas durante tu turno. Cinco repeticiones, setenta y cinco movimientos, ahogado y material insuficiente reconocido terminan automáticamente; el mate tiene precedencia.
- También podés seleccionar la próxima jugada en Jugada guiada y activar Reclamar tablas con la jugada guiada indicada. La jugada no se ejecuta al aceptar el reclamo. La detección de todas las posiciones muertas por bloqueo queda fuera de esta candidata; no se presenta como árbitro de torneos FIDE.
- Las doce lecciones conservan el progreso. El ejercicio de orientación A1 a H8 usa un estado independiente y no cambia la partida.

## Validación manual pendiente

Con Ferda y TalkBack en Android, y NVDA en Windows:

1. Recorrer ambos menús y volver usando los enlaces; comprobar que los nombres conocidos siguen siendo reconocibles.
2. Jugar E2–E4, escuchar una sola respuesta, pedir la jugada de negras y cambiar entre respuesta manual y automática.
3. Probar exploración, selección, cancelación y las cuatro coronaciones sin visión.
4. Avanzar fragmentos y lecciones y verificar lectura automática sin repeticiones; recuperar el progreso tras cerrar.
5. Escuchar ambos canales, comprobar volumen y retraso, y comprobar que la voz del lector no se superpone.
6. Guardar, cerrar, recuperar, exportar PGN, instalar en Android, reiniciar el dispositivo y abrir sin Internet.

Las pruebas automáticas verifican estructura y comportamiento del navegador; no pueden certificar qué pronuncia un lector real ni la instalación en un teléfono físico.
