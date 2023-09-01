# PT
 Índice

- [Introducción](#introducción)
- [Requisitos funcionales](#requisitos-funcionales)
- [Plus](#plus)
- [Instalación y Configuración](#instalación-y-configuración)
- [Estructura de Código](#estructura-de-código)
- [Uso](#uso)
- [Errores y Soluciones](#errores-y-soluciones)

 Introducción

Esta documentación describe una aplicación web que permite a los usuarios buscar perfiles de GitHub utilizando un campo de texto y un botón. La aplicación también muestra información detallada de cada perfil y proporciona funcionalidades adicionales.

Requisitos funcionales

1. **Campo de Entrada de Texto y Botón**
    - Incluir un campo de entrada de texto y un botón para que los usuarios puedan ingresar el nombre del usuario que desean buscar en GitHub.

2. **Mostrar Resultados**
    - Mostrar los primeros 10 resultados de la búsqueda, incluyendo el nombre de usuario (`user.login`) y el id (`user.id`).

3. **Enlace al Perfil de Usuario**
    - Hacer que cada perfil de usuario en los resultados sea un enlace. Al hacer clic en el enlace, se debe abrir un diálogo/modal que muestra más información sobre ese usuario.

4. **Componente Independiente**
    - Crear un componente independiente que lea un parámetro de la URL y luego obtenga los datos del usuario de GitHub mediante el API `https://api.github.com/users/YOUR_NAME`.

5. **Datos del Usuario**
    - Incluir la imagen del usuario (`avatar_url`) y algún otro dato a elección en el componente.

6. **Validadores**
    - Asegurarse de que el texto de búsqueda tenga un mínimo de 4 caracteres.
    - No permitir la búsqueda de la palabra "raspberry".

Plus

1. **Librería de Gráficos**
    - Incluir cualquier librería de gráficos y utilizar uno para mostrar el número de seguidores del usuario.

2. **Componente de Errores**
    - Añadir un componente que muestre mensajes de errores generales en toda la aplicación.

3. **Diseño Responsivo**
    - Asegurarse de que la aplicación sea responsive en distintos dispositivos.

 Instalación y Configuración

Requisitos previos

- Node.js
- Angular CLI
- Conexión a Internet para acceder a la API de GitHub

 Pasos

1. Clonar el repositorio
2. Ir al directorio del proyecto y ejecutar `npm install`
3. Ejecutar `ng serve` para iniciar el servidor de desarrollo
4. Abrir `http://localhost:4200` en el navegador

Estructura de Código

- `src/app/search`: Contiene la lógica para el campo de búsqueda y mostrar los resultados.
- `src/app/user-detail`: Componente para mostrar los detalles del usuario.
- `src/app/error-message`: Componente para mostrar mensajes de error.
- `src/assets`: Contiene assets como imágenes y CSS.
  
 Uso

1. Abra la aplicación web.
2. Ingrese el nombre del usuario de GitHub que desea buscar en el campo de texto.
3. Haga clic en el botón "Buscar".
4. Revise los 10 primeros resultados.
5. Haga clic en cualquier perfil para ver más detalles.

 Errores y Soluciones

- **Error de conexión a la API**: Asegúrese de tener una conexión a Internet activa.
- **Búsqueda insatisfactoria**: Verifique que su búsqueda tenga más de 4 caracteres y no contenga la palabra "raspberry".
