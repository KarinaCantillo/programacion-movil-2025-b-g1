## Casos de Uso del Sistema de Recetas

### **UC-01: Registrarse**
* **ID:** UC-01
* **Actor principal:** Invitado / Usuario
* **Objetivo:** Permitir a un usuario crear una cuenta en la aplicación.
* **Precondición:** El usuario no está autenticado; conexión a internet disponible.
* **Postcondición (éxito):** Usuario creado en la base de datos, email (opcionalmente) verificado; estado listo para el inicio de sesión.
* **Flujo principal:**
    1.  El invitado selecciona la opción **"Registrarse"**.
    2.  Ingresa correo, contraseña, nombre (opcional) y acepta las políticas.
    3.  El sistema valida el formato y la unicidad del correo.
    4.  El sistema crea el usuario (con contraseña hasheada) y confirma la creación.
* **Flujos alternos:**
    * **A1: Correo ya registrado** → El sistema muestra un mensaje de error y ofrece la opción de recuperar la contraseña.
    * **A2: Contraseña no cumple la política** → El sistema muestra las reglas de la contraseña.
* **Reglas de negocio:** La contraseña debe tener al menos 8 caracteres, 1 mayúscula y 1 dígito. El consentimiento para el tratamiento de datos es obligatorio.
* **RF asociado:** RF-01
* **Prioridad:** Must Have
* **Criterios de aceptación:** El registro con un correo válido se completa en ≤ 2 segundos. El usuario es creado con una contraseña hasheada y verificable.
* **Notas:** Se debe registrar la IP y la marca temporal para auditoría.


---

### **UC-02: Iniciar sesión**
* **ID:** UC-02
* **Actor principal:** Usuario
* **Objetivo:** Permitir que un usuario acceda con sus credenciales.
* **Precondición:** El usuario ya está registrado en la base de datos.
* **Postcondición (éxito):** El usuario tiene una sesión válida (JWT/ticket) y navega a la pantalla de inicio.
* **Flujo principal:**
    1.  El usuario ingresa su correo y contraseña.
    2.  El sistema valida las credenciales.
    3.  Si las credenciales son válidas, el sistema genera un token y redirige al usuario a la página de inicio.
* **Flujos alternos:**
    * **A1: Credenciales incorrectas** → El sistema muestra un mensaje de error.
    * **A2: 5 intentos fallidos** → El sistema bloquea temporalmente la cuenta y envía una notificación.
* **RF asociado:** RF-01
* **Prioridad:** Must Have
* **Criterios de aceptación:** El inicio de sesión se completa en ≤ 1.5 segundos. La cuenta se bloquea temporalmente después de 5 intentos fallidos.

![alt text](UC-01,02.png)
---

### **UC-03: Crear receta**
* **ID:** UC-03
* **Actor principal:** Usuario autenticado
* **Objetivo:** Permitir a un usuario publicar una receta con título, ingredientes, pasos e imagen.
* **Precondición:** Usuario autenticado.
* **Postcondición (éxito):** Receta publicada en el sistema.
* **Flujo principal:**
    1.  El usuario selecciona la opción **"Crear receta"**.
    2.  Ingresa título, ingredientes, pasos e imagen.
    3.  El sistema valida los campos obligatorios.
    4.  El sistema guarda la receta y la publica.
* **Flujos alternos:**
    * **A1: Campos incompletos** → Se muestra un mensaje de error.
    * **A2: Imagen inválida** → Se muestra un mensaje de error.
* **RF asociado:** RF-02
* **Prioridad:** Must Have
* **Criterios de aceptación:** La receta válida se publica en ≤ 2 segundos.
![alt text](UC-03.png)
---

### **UC-04: Buscar / Filtrar recetas**
* **ID:** UC-04
* **Actor principal:** Invitado / Usuario
* **Objetivo:** Encontrar recetas por texto, ciudad, categoría o ingredientes.
* **Precondición:** Conexión activa o caché disponible.
* **Postcondición (éxito):** Lista paginada de recetas mostrada.
* **Flujo principal:**
    1.  El usuario ingresa un término de búsqueda o selecciona un filtro.
    2.  El sistema devuelve una lista paginada de recetas, ordenadas por relevancia o calificación.
* **Flujos alternos:**
    * **A1: No hay resultados** → El sistema muestra sugerencias.
* **RF asociado:** RF-05
* **Prioridad:** Must Have
* **Criterios de aceptación:** La respuesta paginada se devuelve en ≤ 800 ms.

![alt text](UC-04.png)
---

### **UC-05: Guardar / Eliminar receta favorita offline**
* **ID:** UC-05
* **Actor principal:** Usuario autenticado
* **Objetivo:** Permitir guardar o eliminar una receta en favoritos para consulta offline.
* **Precondición:** Usuario autenticado.
* **Postcondición (éxito):** La receta queda marcada o desmarcada como favorita en caché local.
* **Flujo principal:**
    1.  El usuario selecciona una receta y presiona **"Guardar en favoritos"**.
    2.  El sistema guarda la receta en caché local.
    3.  Si ya está guardada y la selecciona nuevamente, se elimina de favoritos.
* **RF asociado:** RF-06
* **Prioridad:** Should Have
* **Criterios de aceptación:** Guardar/eliminar favorito se completa en ≤ 500 ms.

![alt text](UC-05.png)
---

### **UC-06: Calificar receta**
* **ID:** UC-06
* **Actor principal:** Usuario autenticado
* **Objetivo:** Permitir calificar una receta con estrellas (1 a 5).
* **Precondición:** Usuario autenticado; receta existente.
* **Postcondición (éxito):** La calificación se almacena y actualiza el promedio.
* **Flujo principal:**
    1.  El usuario selecciona una receta.
    2.  Elige la cantidad de estrellas (1–5).
    3.  El sistema registra la calificación y actualiza el promedio visible.
* **Flujos alternos:**
    * **A1: Error de conexión** → El sistema guarda la calificación en caché y la sincroniza después.
* **RF asociado:** RF-08
* **Prioridad:** Must Have
* **Criterios de aceptación:** La calificación se refleja en ≤ 1 segundo.
![alt text](UC-06.png)
---

### **UC-07: Ver detalle de receta**
* **ID:** UC-07
* **Actor principal:** Invitado / Usuario
* **Objetivo:** Visualizar la información completa de una receta.
* **Precondición:** La receta existe.
* **Postcondición (éxito):** La receta se muestra con título, ingredientes, pasos, imagen, autor y valoraciones.
* **Flujo principal:**
    1.  El usuario selecciona una receta.
    2.  El sistema carga y muestra el detalle de la receta.
* **RF asociado:** RF-09
* **Prioridad:** Must Have
* **Criterios de aceptación:** El detalle se carga en ≤ 1 segundo.

![alt text](UC-07.png)
---

### **UC-08: Eliminar receta**
* **ID:** UC-08
* **Actor principal:** Usuario autenticado (autor de la receta)
* **Objetivo:** Permitir al autor eliminar su propia receta.
* **Precondición:** Usuario autenticado; receta creada previamente por él.
* **Postcondición (éxito):** Receta eliminada de la base de datos y no visible para otros usuarios.
* **Flujo principal:**
    1.  El usuario selecciona una de sus recetas.
    2.  Presiona la opción **"Eliminar"**.
    3.  El sistema solicita confirmación.
    4.  El usuario confirma la eliminación.
    5.  El sistema elimina la receta y muestra un mensaje de éxito.
* **Flujos alternos:**
    * **A1: Usuario intenta eliminar una receta que no es suya** → El sistema muestra un error de permisos.
    * **A2: El usuario cancela en la confirmación** → No se elimina la receta.
* **RF asociado:** RF-10 (Eliminar receta)
* **Prioridad:** Should Have
* **Criterios de aceptación:** La eliminación se refleja en ≤ 1 segundo y la receta ya no es accesible desde ninguna vista.
![alt text](UC-08.png)

### PRIORIZACION MOSCOW

| **ID**    | **Descripción**                      | **MoSCoW**      | **Justificación**                                                                    |
| --------- | ------------------------------------ | --------------- | ------------------------------------------------------------------------------------ |
| **RF-01** | Registro y autenticación de usuarios | **Must Have**   | Esencial para acceder a la aplicación; sin esto no hay usuarios autenticados.        |
| **RF-02** | Crear receta                         | **Must Have**   | Core de la aplicación, sin esta función no hay contenido.                            |
| **RF-03** | Buscar y explorar recetas            | **Must Have**   | Clave para que los usuarios encuentren recetas fácilmente.                           |
| **RF-04** | Guardar recetas favoritas offline    | **Should Have** | Aporta valor y mejora la experiencia, pero no es crítico en la primera versión.      |
| **RF-05** | Valorar receta                       | **Should Have** | Fomenta la interacción de la comunidad, pero puede implementarse después del MVP.    |
| **RF-06** | Visualizar detalle de receta         | **Must Have**   | Necesario para ver información completa de cada receta.                              |
| **RF-07** | Eliminar receta                      | **Should Have** | Importante para la gestión del usuario, pero no bloquea el funcionamiento principal. |
