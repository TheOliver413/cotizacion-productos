# Cotizacion

## Requisitos Técnicos

1. Responsividad
   - La aplicación debe ser responsiva y funcionar en dispositivos móviles y de escritorio.

2. Base de datos
   - Implementa una base de datos simple o una estructura de datos en el backend para almacenar información sobre los productos.

3. Eficiencia del código
   - Organiza el código de manera eficiente y sigue las mejores prácticas de desarrollo.

4. Instrucciones de configuración y ejecución
   - Proporciona instrucciones claras sobre cómo configurar y ejecutar tanto el frontend como el backend de la aplicación.

## Configuración

A continuación se detallan los pasos necesarios para configurar y ejecutar la aplicación en un entorno local.

### Frontend

1. Instala las dependencias del frontend: npm i

2. Ejecuta el servidor de desarrollo del frontend: npm start

### Backend

1. Instala las dependencias del backend: npm i

2. Configura las variables de entorno necesarias en un archivo `.env`.

```env
PORT=3001
DB_USER='postgres'
DB_PASSWORD='admin'
DB_HOST='localhost'
DB_NAME='tienda'
DB_PORT='5432'
```

3. Ejecuta el servidor de desarrollo del backend: npm run dev.


# Preguntas Técnicas:

## ¿Qué medidas tomaría para asegurar la seguridad y la validación de datos en su aplicación?

- Validación en el lado del cliente: Implementaría validaciones en el lado del cliente para garantizar que los datos ingresados cumplan con ciertos criterios, como formato, longitud o tipo de datos.

- Validación en el lado del servidor: Realizaría validaciones adicionales en el lado del servidor para asegurarme de que los datos recibidos sean válidos y seguros. Esto puede incluir la validación de campos obligatorios, la detección de posibles ataques de inyección de código o la verificación de permisos de acceso.

- Encriptación de datos sensibles: Utilizaría técnicas de encriptación para proteger datos sensibles, como contraseñas o información personal.

- Implementación de medidas de seguridad: Aplicaría medidas de seguridad adicionales, como autenticación y autorización, para garantizar que solo los usuarios autorizados puedan acceder y modificar los datos.



## Explique la diferencia entre una base de datos relacional y una base de datos NoSQL. ¿Cuándo usaría uno u otro?

- Base de datos relacional: Una base de datos relacional utiliza tablas para almacenar datos y establece relaciones entre ellas mediante claves primarias y claves externas. Uso en aplicaciones que requieren una estructura de datos predefinida y relaciones complejas entre entidades.

- Base de datos NoSQL: Una base de datos NoSQL es una base de datos que no utiliza un esquema fijo y no establece relaciones entre los datos. Puede ser más flexible y escalable que una base de datos relacional, ya que permite almacenar datos no estructurados o semi estructurados. Uso en aplicaciones que necesitan manejar grandes volúmenes de datos y requieren una alta escalabilidad y rendimiento.

## ¿Qué patrones de diseño conoce, mencione y explique brevemente los que conoce?

- Singleton: Este patrón garantiza que solo exista una instancia de una clase en todo el sistema.

- Factory: Este patrón se utiliza para crear objetos de diferentes tipos sin especificar su clase concreta.

- Observer: Este patrón permite que un objeto notifique automáticamente a otros objetos cuando se produce un cambio en su estado.

- MVC (Model-View-Controller): Este patrón separa la lógica de negocio (modelo), la presentación (vista) y la interacción del usuario (controlador) en componentes independientes.

## ¿Cuáles son los métodos usados en la interfaz RESTful y explique cada uno?

- GET: Para obtener recursos existentes del servidor.

- POST: Para crear nuevos recursos en el servidor.

- PUT: Para actualizar recursos existentes en el servidor.

- DELETE: Para eliminar recursos existentes en el servidor.

- PATCH: Para actualizar parcialmente recursos existentes en el servidor.
