# Tasks App
Aplicación web para la gestión de tareas.
## Features 
* Permite la creación, edición y eliminación de tareas.
* Persistencia en memoria de las tareas.
* Autenticación con JWT.
## Sobre la aplicación
La aplicación acepta cualquier correo electrónico válido y cualquier contraseña mayor a 6 carácteres para la autenticación.
## Ejecución
### Instalación
Instalar las dependencias con la flag ``--legacy-peer-deps`` para evitar comflictos entre versiones.
```
npm i --legacy-peer-deps
```
Para ejecutar la aplicación en local utilice el comando 
```
npm run dev
```
Otros comandos importantes son:
* ``npm run build`` - Construye el proyecto.
* ``npm run test`` - Genera el reporte de pruebas.
* ``npm run test:coverage`` - Genera el reporte de coverage.

