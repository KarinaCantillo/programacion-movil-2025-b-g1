# Corporación Universitaria del Huila - Corhuila

---

## **Taller: Creación de APIs Simples para Usuarios**

### **Presentado por:**
**Karina Cantillo Plaza**

### **Presentado a:**
**Jesús Ariel Gonzales Bonilla**

---

### **Facultad de Ingeniería**  
**V Semestre - Programación Móvil**  
**Neiva - Huila**  
**2025**

---

##  **Descripción del Taller**

En este taller se aprendió a **diseñar, documentar y probar una API REST** para la gestión de usuarios, aplicando los principios de **arquitectura cliente-servidor**, **control de versiones** y **buenas prácticas en desarrollo backend**.

---

## **Objetivos y Pasos Realizados**

1. Definir endpoints básicos (**GET**, **POST**, **PUT**, **DELETE**).  
2. Implementar autenticación con **JWT (JSON Web Token)**.  
3. Validar y almacenar datos de usuarios de forma segura.  
4. Probar los servicios utilizando **Swagger** o **Postman**.

---

##  **Requerimientos para ejecutar el proyecto**

- **Node.js**  
- **Visual Studio Code (VS Code)**  
- **Swagger**  
- **Git**

---

##  **Diseño de la API**

### **Entidad:** `Usuario`

| Campo | Tipo de Dato | Descripción |
|--------|---------------|-------------|
| `id` | UUID | Identificador único del usuario (autogenerado). |
| `nombre` | String | Nombre completo del usuario. |
| `email` | String | Correo electrónico único (no repetido). |
| `password` | String | Contraseña cifrada (hash con bcrypt). |
| `fecha_creacion` | DateTime | Fecha y hora de creación del usuario. |

---

## **Endpoints Documentados**
![alt text](imagenes/image1.png)

### **`POST /api/usuarios`**
**Descripción:** Crear un nuevo usuario en el sistema.

**Request (Body JSON)**
```json
{
  "nombre": "Karen Reyes",
  "email": "karen@example.com",
  "password": "123456"
}
```

![](imagenes/image2.png)
![alt text](imagenes/image3.png)

### **`GET /api/usuarios`**
**Descripción:** Lista todos los usuarios registrados.Requiere token JWT en el encabezado Authorization. 

![alt text](imagenes/image4.png)

Para proteger los endpoints sensibles del sistema, se implementó un mecanismo de autenticación con JSON Web Tokens (JWT).
Este proceso garantiza que solo los usuarios autenticados puedan acceder a las rutas privadas, como la obtención, actualización o eliminación de usuarios.

Entonces en el inicio de sesión (Login).
El usuario debe autenticarse a través del endpoint:

**POST /api/usuarios/login**
```json
{
  "email": "karen@example.com",
  "password": "123456"
}
```
![alt text](imagenes/image5.png)

![alt text](imagenes/image6.png)

Este token es generado por el servidor y contiene información cifrada del usuario. 

Una vez obtenido el token, el usuario debe incluirlo en el encabezado de autorización en cada petición a rutas protegidas.

``` json
{
  "message": "Inicio de sesión exitoso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlmNDY3NWZhLTNmMjQtNDYzNC04NjVjLWJjYjg2ZjBjZWRiNyIsImlhdCI6MTc1OTcxNDAxMiwiZXhwIjoxNzU5NzE3NjEyfQ.R6UfEqcaOHz4p-3Nxop5Hbw5WG_m0KUflD2v6zKDVsw"
}
```

![alt text](imagenes/image7.png)

Una vez autenticado, el usuario puede ejecutar el siguiente endpoint para listar los usuarios: **GET /api/usuarios**


![alt text](imagenes/image8.png)

Para listar todos los usuarios registrados en la base de datos.
Requiere un token JWT válido en el encabezado Authorization.


### **`GET /api/usuarios/:id`**

**Descripción:**  
Permite obtener la información de un usuario específico mediante su identificador único.  
Este endpoint está protegido y requiere un **token JWT válido** en el encabezado `Authorization`.

**Requiere autenticación:** Sí (Bearer Token)

**Ejemplo de solicitud:**
![alt text](imagenes/image9.png)
![alt text](imagenes/image10.png)

### **`PUT /api/usuarios/{id}`**

**Descripción:**  
Permite actualizar los datos de un usuario existente.  
Este endpoint está protegido y requiere un **token JWT válido** en el encabezado `Authorization`.

**Ejemplo de solicitud:**

![alt text](imagenes/image.png)
(Primero busque los id de los usuarios y luego copie el id del usuario Karen)

![alt text](imagenes/image11.png)
![alt text](imagenes/image12.png)

Ahora si vuelvo a buscar el listado de los usuario me muestra lo siguiente: 

![alt text](imagenes/image13.png)


### **`DELETE /api/usuarios/:id`**

**Descripción:**  
Elimina un usuario existente de la base de datos de manera permanente.  
Este endpoint está protegido y requiere un **token JWT válido** en el encabezado `Authorization`.

**Ejemplo de solicitud:**

![alt text](imagenes/image14.png)
Elimiraré al segundo usuario de la imagen:

![alt text](imagenes/image15.png)
![alt text](imagenes/image16.png)
![alt text](imagenes/image17.png)
