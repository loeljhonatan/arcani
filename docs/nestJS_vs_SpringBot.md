📗 Manual de Vuelo: Flujo de Datos (NestJS / Spring)

# 1. Las 4 Capas del Poder


## Controller (La Puerta): 
Recibe la petición del explorador (Angular). Solo saluda, valida que el JSON sea correcto y le pasa la bola al Service.

## Service (El Cerebro):
Aquí vive la lógica (Regla 90/7/3, Penumbra, Veto). Decide qué datos pedir y, lo más importante, limpia el JSON antes de enviarlo al Front.

## Repository (El Minero): 
Su único trabajo es hablar con la Base de Datos. No sabe de reglas de negocio, solo sabe buscar, guardar y borrar.

## Model/Entity (El Contenedor):
Es la clase que representa exactamente tu tabla en MySQL. Tiene todos los campos, incluso los que no quieres mostrar.



# 2. El Proceso "Mágico": Hidratación

Cuando el Repository hace un SELECT, el ORM (TypeORM/JPA) actúa como un sub-proceso invisible que:
Toma los datos "secos" de la base de datos.
Los "hidrata" (los mete dentro de tu clase Model).
Te entrega un Objeto vivo en lugar de una simple fila de texto.

# 3. El Filtro de Seguridad (DTO)

Entidad: Es privada. Tiene todo (fechas, IDs internos, auditoría).
DTO (Data Transfer Object): Es el JSON limpio. Solo tiene lo que el Frontend de Angular necesita ver.
Acción: En el Service, conviertes la Entidad en un DTO.

# 💡 El "Pro-Tip" del Especialista: @Exclude()
Para no tener que limpiar campo por campo manualmente en el Service, usa el decorador @Exclude() de la librería class-transformer en tu Entity:
typescript
// En tu Entidad (libs/data-access/db-entities)
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Exclude() // 🛡️ Magia: Este campo nunca saldrá en el JSON hacia el Front
  internal_secret_code: string;

  @Exclude()
  createdAt: Date;
}
Usa el código con precaución.
Con esto, aunque el Service devuelva la entidad completa, el Interceptor de NestJS filtrará automáticamente los campos marcados al enviarlos por el cable.













1. Controller: El Receptor

Función: Es la puerta de entrada. Recibe las peticiones HTTP (GET, POST, etc.).
Interacción: Valida los datos de entrada (usando DTOs) y delega la responsabilidad al Service.
Regla de oro: El controlador no debe contener lógica de negocio ni acceder directamente a la base de datos. 
Medium
Medium
 +2
2. Service: El Cerebro

Función: Aquí reside la lógica de negocio. Es donde se procesan los datos, se aplican reglas, validaciones complejas o cálculos.
Interacción: Llama al Repository para obtener o guardar información. Puede orquestar múltiples repositorios si la operación lo requiere. 
LinkedIn
LinkedIn
 +4
3. Repository: El Mediador de Datos

Función: Se encarga exclusivamente del acceso a la base de datos.
Interacción: En Spring Data JPA, suele ser una interfaz que extiende JpaRepository. Traduce las llamadas de Java a consultas SQL de forma automática (o mediante @Query). 
LinkedIn
LinkedIn
 +5
4. Model (Entity): La Representación

Función: Son clases Java anotadas con @Entity que representan las tablas de tu base de datos.
Interacción: El Repository devuelve estas entidades al Service. El Model actúa como el "contenedor" de los datos que viajan entre la base de datos y la lógica de tu aplicación. 
Ramesh Fadatare – Medium
Ramesh Fadatare – Medium
 +3

# Resumen del Flujo de Datos

# Petición: El cliente envía un JSON al Controller.
# Delegación: El Controller pasa el DTO al Service.
# Lógica: El Service procesa y pide datos al Repository.
# Persistencia: El Repository consulta la DB y devuelve un Model (Entity).
# Respuesta: El Service transforma (opcionalmente) la Entity en un DTO y el Controller la envía al cliente.