# Historias de Usuario

**Fecha:** 2025-09-07  
**Versión:** 1.2  
**Responsables:**  
- Angie Valentina Flórez Vargas  
- Sergio Alejandro Muñoz Cabrera  
- Karina Cantillo Plaza  

---

## Listado General de Historias de Usuario

| **ID** | **Historia de Usuario** |
|--------|--------------------------|
| **HU1** | Como usuario quiero registrarme con correo y contraseña para acceder a la app. |
| **HU2** | Como usuario quiero iniciar sesión para acceder a mis recetas. |
| **HU3** | Como usuario quiero publicar una receta con título, ingredientes, pasos e imagen. |
| **HU4** | Como usuario quiero eliminar una receta que haya publicada|
| **HU5** | Como usuario quiero ver un listado de recetas públicas para explorar ideas de cocina. |
| **HU6** | Como usuario quiero buscar recetas por nombre de ciudad para encontrarlas fácilmente. |
| **HU7** | Como usuario quiero marcar recetas como favoritas para revisarlas offline. |
| **HU8** | Como usuario quiero calificar en recetas para la comunidad. |
| **HU9** | Visualizar detalle de receta. |
| **HU10** | Reportar receta. (Won’t Have) |
| **HU11** | Notificaciones push. (Won’t Have) |
| **HU12** | Compartir recetas. (Won’t Have) |
| **HU13** | Editar perfil. (Won’t Have) |

---

## HU-01 Registro de usuario

| Requisito | Historia | Caso de Uso | Criterios de aceptación | Tipo de prueba (TC) | Prioridad (MoSCoW) | Estado |
|-----------|----------|-------------|-------------------------|----------------------|---------------------|--------|
| RF-01 Registro de usuarios | HU-01 | UC-01 | Dado un email válido y contraseña ≥8, cuando envío el formulario, entonces se crea la cuenta y se recibe confirmación | TC-01 Registro válido; TC-02 Email inválido; TC-03 Contraseña <8 caracteres | Must Have | Pendiente |

**Funcionalidad:** Registro de usuario  

**Escenarios:**  
- **Registro exitoso:** Dado que el usuario ingresa un email válido y contraseña ≥8, cuando envía el formulario, entonces se crea la cuenta y se envía confirmación.  
- **Email inválido:** Dado que el usuario ingresa un email no válido, cuando envía el formulario, entonces se muestra mensaje de error y no se registra.  
- **Contraseña inválida:** Dado que la contraseña es menor a 8 caracteres, cuando envía el formulario, entonces se muestra mensaje de error y no se registra.  

---

## HU-02 Inicio de sesión

| Requisito | Historia | Caso de Uso | Criterios de aceptación | Tipo de prueba (TC) | Prioridad (MoSCoW) | Estado |
|-----------|----------|-------------|-------------------------|----------------------|---------------------|--------|
| RF-02 Inicio de sesión | HU-02 | UC-02 | Dado que el usuario tiene cuenta registrada, cuando ingresa sus credenciales correctas, entonces inicia sesión exitosamente | TC-01 Inicio sesión válido; TC-02 Credenciales incorrectas | Must Have | Pendiente |

**Funcionalidad:** Inicio de sesión  

**Escenarios:**  
- **Inicio exitoso:** Dado que el usuario tiene cuenta registrada, cuando ingresa email y contraseña correctos, entonces inicia sesión y accede al perfil.  
- **Credenciales incorrectas:** Dado que el usuario ingresa email o contraseña incorrectos, cuando intenta iniciar sesión, entonces se muestra mensaje de error y no accede.  

---

## HU-03 Publicar receta

| Requisito | Historia | Caso de Uso | Criterios de aceptación | Tipo de prueba (TC) | Prioridad (MoSCoW) | Estado |
|-----------|----------|-------------|-------------------------|----------------------|---------------------|--------|
| RF-03 Publicar recetas | HU-03 | UC-03 | Dado que el usuario ingresa título, ingredientes, pasos e imagen, cuando envía la receta, entonces se publica correctamente | TC-01 Publicación válida; TC-02 Campos incompletos; TC-03 Imagen inválida | Must Have | Pendiente |

**Funcionalidad:** Publicar receta  

**Escenarios:**  
- **Publicación exitosa:** Dado que el usuario completa título, ingredientes, pasos e imagen, cuando envía la receta, entonces se guarda y aparece publicada.  
- **Campos incompletos:** Dado que el usuario no completa todos los campos obligatorios, cuando intenta publicar, entonces se muestra mensaje de error y no se publica.  
- **Imagen inválida:** Dado que la imagen no cumple el formato/tamaño permitido, cuando intenta publicar, entonces se muestra mensaje de error.  



---
## HU-04 Eliminar receta

| Requisito            | Historia | Caso de Uso | Criterios de aceptación                                                                                              | Tipo de prueba (TC)                                              | Prioridad (MoSCoW) | Estado    |
|-----------------------|----------|-------------|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|---------------------|-----------|
| RF-10 Eliminar receta | HU-10    | UC-08       | Dado que el usuario selecciona una receta propia, cuando confirma la eliminación, entonces la receta se elimina del backend y de favoritos offline | TC-01 Eliminación válida; TC-02 Intento de eliminar receta ajena; TC-03 Cancelación de eliminación | Could Have          | Pendiente |

**Funcionalidad: Eliminar receta**

**Escenarios** 
---

## HU-05 Visualizar detalle de receta

| Requisito | Historia | Caso de Uso | Criterios de aceptación | Tipo de prueba (TC) | Prioridad (MoSCoW) | Estado |
|-----------|----------|-------------|-------------------------|----------------------|---------------------|--------|
| RF-04 Ver detalle de receta | HU-04 | UC-04 | Dado que el usuario selecciona una receta, cuando abre el detalle, entonces ve ingredientes, pasos, tiempo, dificultad, autor e imagen | TC-01 Visualizar ingredientes; TC-02 Visualizar pasos; TC-03 Visualizar info adicional | Must Have | Pendiente |

**Funcionalidad:** Visualizar detalle de receta  

**Escenarios:**  
- **Detalle completo:** Dado que el usuario selecciona una receta, cuando abre la vista de detalle, entonces ve todos los ingredientes, pasos, tiempo, dificultad, autor e imagen.  

---

## HU-06 Búsqueda de recetas

| Requisito | Historia | Caso de Uso | Criterios de aceptación | Tipo de prueba (TC) | Prioridad (MoSCoW) | Estado |
|-----------|----------|-------------|-------------------------|----------------------|---------------------|--------|
| RF-05 Búsqueda de recetas | HU-05 | UC-05 | Dado que el usuario busca por ciudad de Colombia, cuando realiza la búsqueda, entonces se muestran recetas correspondientes | TC-01 Búsqueda válida; TC-02 Ciudad inexistente | Must Have | Pendiente |

**Funcionalidad:** Búsqueda de recetas por ciudad  

**Escenarios:**  
- **Ciudad válida:** Dado que el usuario ingresa una ciudad registrada, cuando ejecuta la búsqueda, entonces se muestran las recetas asociadas.  
- **Ciudad inexistente:** Dado que el usuario ingresa una ciudad no registrada, cuando ejecuta la búsqueda, entonces se muestra mensaje “No se encontraron resultados”.  

---

## HU-07 Favoritos offline

| Requisito | Historia | Caso de Uso | Criterios de aceptación | Tipo de prueba (TC) | Prioridad (MoSCoW) | Estado |
|-----------|----------|-------------|-------------------------|----------------------|---------------------|--------|
| RF-06 Favoritos | HU-06 | UC-06 | Dado que el usuario marca una receta como favorita, cuando accede offline, entonces puede verla en su lista de favoritos | TC-01 Marcar favorita; TC-02 Consultar offline | Must Have | Pendiente |

**Funcionalidad:** Favoritos offline  

**Escenarios:**  
- **Consultar favoritos sin conexión:** Dado que el usuario marcó recetas como favoritas con conectividad, cuando activa el modo avión, entonces las recetas siguen visibles y no aparece error.  

---

## HU-08 Calificar recetas

| Requisito | Historia | Caso de Uso | Criterios de aceptación | Tipo de prueba (TC) | Prioridad (MoSCoW) | Estado |
|-----------|----------|-------------|-------------------------|----------------------|---------------------|--------|
| RF-07 Calificar recetas | HU-07 | UC-07 | Dado que el usuario selecciona entre 1-5 estrellas, cuando envía la calificación, entonces se refleja en el promedio en la app y backend | TC-01 Calificación válida; TC-02 Calificación inválida | Must Have | Pendiente |

**Funcionalidad:** Calificar receta  

**Escenarios:**  
- **Calificación válida:** Dado que el usuario selecciona 1 a 5 estrellas, cuando envía la calificación, entonces se actualiza el promedio visible en la receta.  
- **Calificación inválida:** Dado que el usuario intenta enviar calificación fuera del rango, cuando lo hace, entonces se muestra mensaje de error y no se guarda.  

---

# Historias fuera de alcance (Won’t Have)

- **HU-09 Reportar receta** (Won’t Have)  
- **HU-10 Notificaciones push** (Won’t Have)  
- **HU-11 Compartir recetas** (Won’t Have)  
- **HU-12 Editar perfil** (Won’t Have)  


