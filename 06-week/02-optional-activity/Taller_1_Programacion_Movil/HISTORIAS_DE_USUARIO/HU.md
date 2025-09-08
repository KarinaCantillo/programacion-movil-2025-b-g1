## HU-01

| Requisito                  | Historia | Caso de Uso | Criterios de aceptación                                                                                               | Tipo de prueba (TC)                                                         | Prioridad (MoSCoW) | Estado    |
| -------------------------- | -------- | ----------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------ | --------- |
| RF-01 Registro de usuarios | HU-01    | UC-01       | Dado un email válido y contraseña ≥8, cuando envío el formulario, entonces se crea la cuenta y se recibe confirmación | TC-01 Registro válido; TC-02 Email inválido; TC-03 Contraseña <8 caracteres | Must Have          | Pendiente |


Funcionalidad: Publicar receta
Escenario: Publicar receta válida
  Dado que el usuario ha iniciado sesión
  Y ha ingresado título, ingredientes, pasos y foto
  Cuando presiona "Publicar"
  Entonces la receta se guarda en backend
  Y está disponible para otros usuarios

Escenario: Publicar receta sin título
  Dado que el usuario ha ingresado ingredientes y pasos pero no título
  Cuando presiona "Publicar"
  Entonces debe mostrarse un mensaje de error
  Y la receta no se guarda

## HU-02

| Requisito              | Historia | Caso de Uso | Criterios de aceptación                                                                                                     | Tipo de prueba (TC)                                        | Prioridad (MoSCoW) | Estado    |
| ---------------------- | -------- | ----------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------ | --------- |
| RF-02 Inicio de sesión | HU-02    | UC-02       | Dado que el usuario tiene cuenta registrada, cuando ingresa sus credenciales correctas, entonces inicia sesión exitosamente | TC-01 Inicio sesión válido; TC-02 Credenciales incorrectas | Must Have          | Pendiente |

Funcionalidad: Inicio de sesión

Escenario: Inicio exitoso
  Dado que el usuario tiene cuenta registrada
  Cuando ingresa email y contraseña correctos
  Entonces inicia sesión y accede al perfil

Escenario: Credenciales incorrectas
  Dado que el usuario ingresa email o contraseña incorrectos
  Cuando intenta iniciar sesión
  Entonces se muestra mensaje de error y no accede

## HU-03

| Requisito                 | Historia | Caso de Uso | Criterios de aceptación                                                                                                            | Tipo de prueba (TC)                                                   | Prioridad (MoSCoW) | Estado    |
| ------------------------- | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------ | --------- |
| RF-04 Búsqueda de recetas | HU-03    | UC-03       | Dado que el usuario busca por título, ingrediente o categoría, cuando realiza la búsqueda, entonces se muestran recetas relevantes | TC-01 Búsqueda por título; TC-02 Por ingrediente; TC-03 Por categoría | Must Have          | Pendiente |

Funcionalidad: Búsqueda de recetas

Escenario: Búsqueda por título
  Dado que el usuario ingresa un título válido
  Cuando ejecuta la búsqueda
  Entonces se muestran recetas que coinciden

Escenario: Búsqueda por ingrediente
  Dado que el usuario ingresa un ingrediente
  Cuando ejecuta la búsqueda
  Entonces se muestran recetas que contienen ese ingrediente

Escenario: Búsqueda por categoría
  Dado que el usuario selecciona una categoría
  Cuando ejecuta la búsqueda
  Entonces se muestran recetas dentro de esa categoría

