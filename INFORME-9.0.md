# Informe de la candidata 9.0

Fecha: 13 de octubre de 2026. Base inspeccionada: `209f70ff03e0ba746488f8bef33edf2782a80cda` (8.4). Respaldo: etiqueta `backup-v8.4-20261013`. Se conserva el repositorio `matiasasforza-pixel/ajedrez-inclusivo.` y la rama `main`.

## Inspección y cambios

Se revisaron el HTML, las reglas propias, curso y claves de almacenamiento, historial Git, manifiesto, service worker y workflow de Pages. El despliegue de 8.4 estaba completado correctamente; el workflow incorporaba Stockfish 19.0.0 aunque los binarios no estaban en Git. El README original estaba desactualizado.

Se agregaron navegación espacial con un único punto de Tab, controles Android, coronación elegible en tablero y jugada guiada, reconocimiento de promoción UCI, consulta de atacantes y defensores, recordatorio de reyes/damas y ejercicio espacial independiente. Se conservaron las doce lecciones, memoria y sonido existentes.

Se incorporaron PGN con notación SAN, autoguardado separado de la copia manual, validación inicial de guardados, preferencias persistentes y confirmación al reemplazar la copia manual. Se corrigieron la clave de repetición con captura al paso imposible y el estado de enroques/captura al paso durante la búsqueda del rival incorporado. Se separaron tablas reclamables y automáticas y se detecta material insuficiente habitual.

Se cancelan búsquedas de Stockfish al reiniciar/recuperar y se evita iniciar búsquedas duplicadas. El motor recibe historial UCI en partidas nuevas. Los anuncios de jugadas usan foco sin anunciar a la vez mediante región viva. Las consultas conservan sus mecanismos previos; la ausencia de duplicaciones reales sigue pendiente de lectores físicos.

La PWA guarda conjuntamente HTML, recursos, iconos y motor; una actualización espera a que se cierren las ventanas anteriores. Se añadieron iconos PNG de 192 y 512 píxeles. El workflow instala dependencias fijadas, construye el paquete y ejecuta pruebas antes de publicar.

## Evidencia automática

Suite de navegador en Windows/Edge: 11 casos aprobados, incluida la revisión final de audio y el reclamo de tablas con jugada indicada. Incluye:

- Perft inicial de profundidad 3: 8902 posiciones.
- Comparación de jugadas legales con chess.js 1.4.0 en 120 posiciones de una secuencia determinista, más posiciones especiales.
- Enroques, captura al paso, exposición del rey, cuatro promociones, mate y ahogado.
- Triple/quíntuple repetición, 50/75 movimientos y material insuficiente habitual.
- Reproducción del PGN exportado con un lector independiente durante 40 medias jugadas.
- Flechas, Tab, selección, exploración Android sin mover, curso y aislamiento educativo.
- Recuperación de datos antiguos, rechazo de guardados dañados, separación manual/automática y preferencias.
- Motor real inicializado en línea, página recargada sin red y respuesta legal de Stockfish sin conexión.
- Adaptador de promoción UCI comprobado mediante respuesta controlada; no equivale a forzar que el motor elija esa promoción por evaluación.

## Límites y pendientes

La guía enumera el protocolo de Ferda, TalkBack, NVDA e instalación Android. No se han ejecutado esas validaciones físicas. Tampoco se certifica compatibilidad con todos los navegadores, cuotas de almacenamiento o todas las posiciones muertas complejas. Los ataques tácticos son geométricos, no una evaluación de rentabilidad material.

Para recuperar 8.4 sin reescribir historial: crear un commit de reversión de los commits 9.0 y publicar pasando los controles correspondientes. La etiqueta conserva el estado exacto de partida. No se han borrado datos locales de usuarios.

