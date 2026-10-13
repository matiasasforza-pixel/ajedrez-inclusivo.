# Ajedrez Inclusivo 9.0 — candidata estable

Aplicación accesible de aprendizaje y ajedrez contra un rival incorporado o Stockfish 19 Lite. Conserva Jugar/Aprender, doce lecciones y progreso anterior.

- [Abrir aplicación](https://matiasasforza-pixel.github.io/ajedrez-inclusivo./)
- [Instalación y uso accesible](GUIA-9.0.md)
- [Cambios, pruebas y limitaciones](INFORME-9.0.md)

La compatibilidad final con Ferda, TalkBack y NVDA requiere validación real. Esta candidata no se declara versión 1.0 estable.

## Desarrollo y publicación

Node 22 y pnpm 11.25.0. Ejecutar `pnpm install --frozen-lockfile --ignore-scripts`, `pnpm exec playwright install chromium`, `pnpm build` y `pnpm test`. En Windows las pruebas utilizan Edge instalado; en Linux, Chromium de Playwright. Para servir localmente: `node scripts/serve.cjs`.

El workflow de main prueba antes de publicar con GitHub Pages. Stockfish se copia del paquete fijado 19.0.0; se distribuye con licencia GPL v3 y referencia al código fuente exacto. El código del motor no fue modificado: https://github.com/nmrugg/stockfish.js/tree/v19.0.0 .

El almacenamiento de partidas y progreso es local al navegador. No se envía a servicios externos. La etiqueta backup-v8.4-20261013 conserva la versión anterior.
