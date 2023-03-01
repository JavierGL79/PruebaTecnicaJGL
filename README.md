# Prueba Técnica Javier Girón López

Para la ejecución del programa es necesario iniciar la consola en un terminal de un editor de código como por ejemplo, Visual Studio Code (https://code.visualstudio.com/download) y tener instalado NodeJS. Además deberán haberse descargado los archivos "datos_prueba_tecnica.xlsx" y "app.js", necesarios para poder ejecutar el programa.

### Instalar NodeJs

#### Para SO Windows:
Descargue e instale NodeJS (https://nodejs.org/en/download/). Al terminar la instalación, checkear la correcta instalación
Siga las indicaciones del programa de instalación. Puede que necesite reiniciar su PC.

Compruebe que la instalación se ha realizado correctamente.

    ```sh
    node -v
    ```

Debería indicar la versión de node instalada.

    ```sh
    npm -v
    ```
Debería indicar la versión de npm instalada.

#### Para MacOS:

Descargue el instalador .pkg (https://nodejs.org/en/download/) clickando en "macOS installer" y siga las indicaciones del instalador.

Compruebe que la instalación se ha realizado correctamente.

    ```sh
    node -v node -v
    ```
Debería indicar la versión de node instalada.

    Actualice la versión de npm.

    ```sh
    $ sudo npm install npm --global // Update thenpmCLI client
    ```


### Iniciar el proyecto

En la consola, acceder a la carpeta donde haya descargado los archivos para ejecutar el programa y escribir:


```sh
npm init -y
```

### Instalar la librería para poder leer archivos xlsx.

En la cosola y en la carpeta donde se vaya a ejecutar el programa, escribir:

```sh
npm i xlsx
```

### Iniciar la API

En la cosola y en la carpeta donde se vaya a ejecutar el programa, escribir:
```sh
node app.js
```

#Resultados

Tras la ejecución del programa, los resultados se mostrarán en la consola.
