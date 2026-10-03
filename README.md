# Melista

**Tu lista de compras para súper y farmacia, para que no se te olvide nada.**

Melista es una app web instalable (PWA) que funciona como el bloc de notas del celular, pero pensada para comprar: anotas lo que te falta durante el día, lo marcas al echarlo al carro y la app aprende cada cuánto compras cada cosa.

*Diseñado por Melitalove®*

---

## Funciones

- **Lista de compras** con categorías **Súper** y **Farmacia**, agrupadas al comprar.
- **Recordar**: una segunda lista para pendientes del día.
- **Agregar rápido**: separa con comas (`pan, huevos, café`) o dicta por voz.
- **Sugerencias** mientras escribes y accesos rápidos a lo que sueles comprar.
- **¿Se te está acabando?**: avisa cuando un producto ya debería reponerse según tu frecuencia de compra.
- **Registro**: promedio de compras al mes por producto y gráfico de los últimos 6 meses.
- **Resumen mes a mes**: compras, súper vs. farmacia, productos del mes y recordatorios cumplidos; se puede compartir.
- **Precios (opcional)**: anota lo que pagaste y ve el gasto del mes.
- **Respaldo**: descarga y restaura tus datos en un archivo.
- Funciona **sin conexión**, con **modo oscuro** automático.

## Privacidad

Todos los datos se guardan **solo en el dispositivo** (almacenamiento local del navegador). No hay cuentas ni servidores. Usa la opción *Respaldo* para guardar una copia o pasar tus datos a otro teléfono.

## Publicar con GitHub Pages

1. Sube estos archivos a la raíz del repositorio.
2. En **Settings → Pages**, elige *Deploy from a branch*, rama `main` y carpeta `/ (root)`.
3. Abre `https://<tu-usuario>.github.io/melista/` en el celular.
4. Instálala:
   - **Android (Chrome):** menú ⋮ → *Instalar app*.
   - **iPhone (Safari):** botón Compartir → *Agregar a pantalla de inicio*.

## Estructura

```
index.html             App completa (HTML, CSS y JS)
manifest.webmanifest   Datos de instalación de la PWA
sw.js                  Service worker para uso sin conexión
icons/                 Íconos de la app
```

## Actualizar la app

Al publicar cambios, sube el número en `const VERSION` dentro de `sw.js` (por ejemplo `melista-v1.0.1`) y en `VERSION` dentro de `index.html`. Así los teléfonos descargan la versión nueva.

## Versión

1.0.0

---

© 2026 Melitalove®. Todos los derechos reservados.
