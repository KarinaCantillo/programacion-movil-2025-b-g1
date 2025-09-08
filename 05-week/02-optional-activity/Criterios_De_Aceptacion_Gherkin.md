## HU-01
Feature: Iniciar sesión

  Scenario: Inicio de sesión exitoso
    Given que el usuario está en la pantalla de login
    When ingresa usuario "correo@ejemplo.com" y contraseña "12345"
    And presiona el botón "Ingresar"
    Then el sistema valida las credenciales
    And muestra el panel principal

  Scenario: Campos vacíos
    Given que el usuario está en la pantalla de login
    When deja el campo usuario o contraseña vacío
    And presiona el botón "Ingresar"
    Then el sistema muestra el mensaje "Todos los campos son obligatorios"

  Scenario: Credenciales incorrectas
    Given que el usuario está en la pantalla de login
    When ingresa usuario "correo@ejemplo.com" y contraseña "claveInvalida"
    And presiona el botón "Ingresar"
    Then el sistema muestra el mensaje "Credenciales incorrectas"

  Scenario: Error de conexión
    Given que el servidor no está disponible
    When el usuario ingresa sus credenciales
    And presiona el botón "Ingresar"
    Then el sistema muestra el mensaje "Error de conexión, intente nuevamente"


## HU-02 
Feature: Ver estado del vehículo

  Scenario: Vehículo estacionado
    Given que el usuario inició sesión
    When consulta el estado de su vehículo
    Then el sistema muestra la placa, alias y estado "Estacionado"

  Scenario: Vehículo no estacionado
    Given que el usuario inició sesión
    When consulta el estado de su vehículo
    Then el sistema muestra la placa, alias y estado "No estacionado"

  Scenario: Sin alias registrado
    Given que el usuario tiene un vehículo sin alias
    When consulta el estado
    Then el sistema muestra únicamente la placa y el estado

  Scenario: Sin vehículo registrado
    Given que el usuario inició sesión
    And no tiene vehículo asociado
    When consulta el estado
    Then el sistema muestra el mensaje "No tienes un vehículo registrado"

  Scenario: Error de servidor
    Given que ocurre una falla en el servidor
    When el usuario consulta el estado del vehículo
    Then el sistema muestra "Error al cargar información del vehículo"

## HU-03
Feature: Ver cronómetro, tarifa y monto acumulado

  Scenario: Mostrar cronómetro y monto acumulado
    Given que el vehículo está estacionado
    When el usuario consulta la pantalla principal
    Then se muestra el cronómetro en formato hh:mm:ss
    And la tarifa vigente
    And el monto acumulado = tarifa x tiempo

  Scenario: Tarifa no disponible
    Given que el vehículo está estacionado
    And la tarifa no está configurada
    When el usuario consulta la pantalla
    Then el sistema muestra "Tarifa no disponible"

  Scenario: Error en cálculo de deuda
    Given que ocurre un error en el cálculo
    When el usuario consulta la pantalla
    Then el monto acumulado se muestra en $0
    And el sistema muestra una alerta

 ## HU-04
Feature: Visualizar estado sin deuda

  Scenario: Vehículo no estacionado
    Given que el vehículo está registrado con estado "No estacionado"
    When el usuario consulta su estado
    Then el sistema muestra el mensaje "No estás estacionado"

  Scenario: Estado indeterminado
    Given que ocurre un error en la consulta de estado
    When el usuario accede a la pantalla
    Then el sistema muestra "No se pudo determinar tu estado, recarga la página"

  Scenario: Más de un vehículo registrado
    Given que el usuario tiene varios vehículos
    When accede a la pantalla principal
    Then el sistema solicita seleccionar cuál mostrar

 ## HU-05
Feature: Actualización periódica

  Scenario: Refresco automático cada 15 segundos
    Given que el vehículo está estacionado
    When han transcurrido 15 segundos
    Then el cronómetro y el monto acumulado se actualizan automáticamente

  Scenario: Error en actualización
    Given que ocurre una falla en la actualización
    When el sistema intenta refrescar datos
    Then se mantiene el último valor visible
    And se muestra el mensaje "Error al actualizar datos"

  Scenario: Cambio de pantalla
    Given que el usuario sale de la pantalla principal
    When regresa a la pantalla
    Then la actualización periódica se retoma

## HU-06 
Feature: Consultar detalle de la tarifa

  Scenario: Mostrar detalle de tarifa
    Given que existe una tarifa configurada
    When el usuario selecciona "Ver detalle de tarifa"
    Then se muestra un modal con:
      Fórmula = Monto = Tarifa x Tiempo |
      Tarifa vigente = $5000 COP / Horas          |
      Ejemplo  = 6 horas → $30.000         |

  Scenario: Tarifa no configurada
    Given que no existe tarifa configurada
    When el usuario intenta ver el detalle
    Then el sistema muestra "No hay tarifa disponible"

  Scenario: Error al abrir el modal
    Given que ocurre un error al cargar el modal
    When el usuario intenta ver el detalle
    Then el sistema muestra "No se pudo abrir el detalle de tarifa"





