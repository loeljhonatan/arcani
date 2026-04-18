



### promp
PRIMERO TE MENSIONO LA LOGICA DEL NEGOCIO RESPECTO AL MANEJO DE UN PRODUCTO, SE LOS PRODUCTOS SE MANEJAN 
ASI, EL PRODUCTO 

### respuesta 




### promp
con la informacion obtenida, que me recomiendas o que estructura segir para el diseño de una base de datos, por que todo el sistema reactivo tendria que tener una base de datos, asi mismp hay una base de datos para la logica de negocios donde el producto compratiria las 16 categorias y eso seria el gancho para unirlas y como manejar el tema de arcani studio, el desarrollo seria por modulos? asi mismo este proyecto esta para implementarlo en angular21 con señales, y realizar el desarrollo de la wep para el cliente, inventariado, y app, todo integrado, utilizando tailwind y con Prime NG, y Nest JS como Api que tambien estaria integrado en el mismo proyecto, quisiera ir avanzando con el la tematizacion reactiva

### respuesta 
Esta es una arquitectura técnica ambiciosa y muy bien alineada con el concepto de "ADN Reactivo" de ARCANI. Para que el frontend en Angular 21 con Signals reaccione en tiempo real y el backend en NestJS gestione la lógica matricial, necesitas una base de datos robusta y una estructura de módulos clara.
Aquí tienes la recomendación estratégica para tu base de datos y arquitectura:
1. Estructura de Base de Datos (Relacional - PostgreSQL recomendada)
Para manejar la "Matriz de Intersección" (Nicho vs. Línea de Producto), necesitas una estructura desacoplada:
A. Núcleo de Productos e Inventario
products: Datos base (SKU, nombre, precio, stock, origen: Original/Fanmade/Studio).
product_lines: Las 8 familias físicas (Apparel, Drinkware, etc.).
niches: Los 16 universos (Anime, K-Pop, etc.) con sus metadatos de "Energía" (Épica, Glow, etc.).
product_niches (Tabla Intermedia): Aquí ocurre la Sincronía de Nichos. Un producto (ej. Jersey Blue Lock) se vincula a "Anime" y "Deportes".
B. Sistema Reactivo (Tematización)
No metas los colores directamente en la tabla de productos. Crea una tabla de Configuración de Interfaz:
niche_themes:
niche_id (FK)
dominante_aura (Hex/Tailwind class)
soporte_destello (Hex/Tailwind class)
modo_entorno (Light/Dark)
cta_text (¡RECLAMAR TESORO!, etc.)
icon_path (Máscara Kitsune, etc.)
C. Módulo ARCANI Studio
Este requiere una lógica de Personalización:
custom_orders: Vincula al cliente con un product_line pero con un estado de "En Forja".
custom_attributes: Tabla tipo JSONB (en Postgres) para guardar las medidas anatómicas, referencias de imagen y "Skin de Interfaz" elegido por el usuario para su proceso de co-creación.
2. Arquitectura de Software: Modular y Monorepo
Dado que usarás NestJS y Angular en un mismo ecosistema, te recomiendo una estructura de Monorepo (puedes usar Nx):
Backend (NestJS - Microservicios o Monolito Modular)
Divide por módulos para escalar el inventariado y la app cliente por separado:
AuthModule: Gestión de roles (Admin para inventario, Cliente para la tienda).
CatalogModule: Gestión de la matriz (Productos, Nichos, Filtros).
StudioModule: Lógica exclusiva para pedidos personalizados y carga de archivos del cliente.
ReactiveModule: Un endpoint que devuelva la configuración temática (niche_themes) según el nicho activo.
Frontend (Angular 21 + Signals)
Aquí es donde brilla el "ADN Reactivo". Usa Signals para el estado global del tema:
ThemeService: Un Signal activeNiche que, al cambiar, actualice automáticamente los colores de Tailwind y los componentes de PrimeNG.
Directivas Estructurales: Crea una directiva [arcaniTheme] que aplique clases de Tailwind dinámicamente según el valor del Signal.
Layouts:
ShopLayout: Reactivo, cambia según el nicho.
InventoryLayout: Sobrio (Admin), enfocado en gestión de piezas.
StudioLayout: Inmersivo, con la "Skin" que elija el cliente.
3. Integración con Tailwind y PrimeNG
Para la tematización reactiva inicial, te recomiendo usar Variables de CSS controladas por Angular:
En tu styles.css, define variables: --arcani-aura y --arcani-destello.
En Tailwind, extiende el tema:
javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      aura: 'var(--arcani-aura)',
      destello: 'var(--arcani-destello)',
    }
  }
}
Usa el código con precaución.

Con un Effect en Angular, cuando el Signal del nicho cambie, actualiza las variables CSS en el body:
typescript
// Al cambiar a Anime (Naranja)
document.documentElement.style.setProperty('--arcani-aura', '#FF6B00');
Usa el código con precaución.

4. El "Bazar de los Mundos" (Lógica de Negocio)
En tu API de NestJS, crea una función que cuente los SKUs por nicho. Si un nicho tiene < 25 piezas, el backend debe marcar ese nicho como consolidado: true. El frontend de Angular recibirá este estado y automáticamente moverá esos productos a la sección "Bazar" y bloqueará el botón principal del menú.
¿Te gustaría que te ayude a definir el diagrama de clases para la tabla de ProductNiche o prefieres empezar con el código del ThemeService en Angular?


### ===============================================================================


Para la App móvil, tienes dos caminos principales integrados en el ecosistema de Angular:
1. Opción Recomendada: Ionic + Capacitor
Es la pareja perfecta para Angular. Usas el mismo código, componentes de PrimeNG y Tailwind, pero Capacitor lo convierte en una App nativa para iOS y Android.
Ventaja: Reutilizas casi el 90% de tus componentes de la web.
Comando Nx:
bash
npx nx g @nx/angular:app apps/client-mobile --directory=apps/client-mobile --routing --standalone
Usa el código con precaución.

2. Opción Nativa: NativeScript
Si necesitas un rendimiento extremo o acceso muy profundo al hardware del teléfono, NativeScript permite escribir código Angular que se renderiza con widgets 100% nativos de Apple/Android.
### ===============================================================================


### ===============================================================================






### ===============================================================================


### ===============================================================================



### ===============================================================================
¡No hay de qué pedir perdón! Es una excelente pregunta. En la estrategia de ARCANI, la App Móvil es un paso fundamental, pero la recomendación técnica es crearla después de tener la estructura de la Web del Cliente.
Aquí te explico por qué y cómo lo haremos:
1. ¿Por qué esperar un poco para la App?
Como vamos a usar Ionic + Capacitor, la App Móvil será básicamente un "espejo" de tu lógica web pero optimizada para teléfonos.
Primero definiremos el ADN Reactivo (los colores y Signals) en una Librería Compartida.
Una vez que esa lógica funcione en la Web, crear la App será tan simple como ejecutar un comando y reutilizar todo ese "ADN".
2. ¿Cómo la crearemos en el Monorepo?
Para que vayas preparando el terreno, el comando que usaremos en Nx (cuando estemos listos) será este:
bash
# Instalamos el soporte de Ionic para Nx
npm install -D @nxtend/ionic-angular

# Generamos la App Móvil vinculada al ADN de ARCANI
npx nx g @nxtend/ionic-angular:app apps/mobile-arcani --capacitor
Usa el código con precaución.

3. Lo que tenemos ahora (El Cimiento)
Tu monorepo ya tiene los dos pilares necesarios para alimentar a la futura App:
api-gateway: El cerebro que le dará datos a la App.
web-arcani: Donde probaremos los Signals de los 16 nichos antes de llevarlos al móvil.
¿Qué hacemos ahora para avanzar hacia la App?
Para que la App Móvil herede automáticamente los colores de los nichos, necesitamos crear la Librería de Lógica Compartida. Si metemos los colores solo en la Web, luego tendrías que copiarlos a la App (y eso rompe las buenas prácticas).
¿Te parece si creamos la librería libs/shared/reactive-engine?
Aquí es donde pondremos el ThemeService con los Signals que usarán tanto la Web como la App Móvil.
¿Quieres el comando para generar esta librería de "ADN" compartido? Es el paso más importante para que tu proyecto sea realmente un ecosistema.

### ===============================================================================



### ===============================================================================


### promp
Si, pero antes una consulta, el client-web, es solo para el cliente, me gustaria tener una seccion que solo sea ingresado por un administrador tipo dashboard donde se realicen configuraciones avanzadas, y otra seccion donde pueda ingresar el vendedor para registrar las ventas, esta logica tambien se use en la aplicacion para celular, con esta logica como se aplicaria y el admin dashboard para que sirve o es que el admin dashboard sirve para eso, pero como no lo veop en el paquete de la web, como se maneja?

### respuesta 


Esta es una de las dudas más importantes al trabajar con un Monorepo. La clave aquí es entender que no todo vive dentro de la misma "caja" (App).
En tu estructura de ARCANI, el manejo de roles (Admin, Vendedor, Cliente) se resuelve separando las aplicaciones por responsabilidad, pero compartiendo el ADN (Librerías).
Aquí te explico cómo se organiza esa lógica:
1. ¿Para qué sirve cada App en tu Monorepo?
web-arcani (La Tienda): Es exclusiva para el Cliente. Solo tiene la interfaz de compra, los 16 nichos y el catálogo. No tiene código de inventario ni de ventas para que sea ligera y segura.
admin-dashboard (El Panel de Control): Esta es la App que ya creamos en apps/admin-dashboard. Aquí es donde entran el Administrador y el Vendedor.
Admin: Ve configuraciones avanzadas, edita colores de nichos y gestiona usuarios.
Vendedor: Tiene una sección de "Punto de Venta" (POS) para registrar ventas de figuras, snacks o pedidos de ARCANI Studio.
mobile-arcani (La App Móvil): Al igual que la web, se enfoca en el Cliente, pero podrías crear una segunda App móvil pequeña solo para que el vendedor registre ventas desde su celular usando la cámara como escáner de códigos de barras.
2. ¿Cómo se maneja esto en la App Celular?
Para el celular, tienes dos caminos estratégicos:
App Única con Roles: El usuario se loguea. Si su ADN (rol) es CLIENTE, ve la tienda. Si es VENDEDOR, la App cambia su interfaz (gracias a tus Signals) y le muestra el registro de ventas.
App de Cliente + Web Pro: El cliente usa la App descargada de la PlayStore, y el vendedor usa el admin-dashboard desde el navegador de una tablet o celular (ya que al usar Tailwind 4, tu dashboard será 100% responsivo).
3. ¿Cómo se "ven" entre ellas?
No ves el "Dashboard" dentro del paquete de la "Web" porque son proyectos independientes. Para que esto funcione, la magia ocurre en la API (api-gateway) y en las Librerías:
Librería shared-auth: Aquí crearemos un AuthService que diga: "Este usuario es Admin".
API NestJS: Cuando el Vendedor intente registrar una venta, la API verificará su token de Google y dirá: "Permiso concedido". Si un cliente intenta hacerlo, la API dirá: "Acceso denegado".
4. ¿Qué sigue para implementar esto?
Para que esto sea una realidad, necesitamos el Login con Google (Firebase). El flujo será así:
El usuario hace Login.
Firebase nos da su correo.
Tu API de NestJS busca ese correo en MySQL.
La base de datos responde: "Rol: VENDEDOR".
Angular recibe ese rol y activa las rutas del Dashboard o del Punto de Venta.
¿Te parece si configuramos Firebase ahora para obtener las llaves (API Keys) y empezar a programar el sistema de Roles? Esto es lo que unirá el "ADN" de todas tus Apps.
Dime si quieres que te guíe para crear el proyecto en la Consola de Firebase.




### ===============================================================================


### promp
si esta bien esa logica, una ultima consulta, entonces tedria dos dominios para la web o el dashboard?

### respuesta 

Esa es la pregunta del millón al configurar un proyecto profesional. En la práctica, tienes dos caminos, pero uno es el estándar de oro para proyectos como ARCANI.
Aquí te explico las opciones para manejar tus dominios:
1. La Opción Profesional: Subdominios (Recomendada)
Es la forma más limpia de separar las experiencias. Usas un solo dominio principal y creas "ramas" para cada aplicación del monorepo.
Tienda del Fan: ://arcani.com (Aquí despliegas web-arcani).
Panel de Control: ://arcani.com (Aquí despliegas admin-dashboard).
Cerebro (API): ://arcani.com (Aquí vive tu api-gateway de NestJS).
Ventajas:
Seguridad: Si alguien intenta atacar la tienda, el panel de administración está en una "puerta" distinta.
Carga: El cliente no descarga el código pesado de inventariado y ventas, haciendo que la web vuele.
Orden: En el celular, la App Móvil simplemente apunta a ://arcani.com para pedir los datos.
2. La Opción de "Subcarpetas" (Menos común en Monorepos)
Todo vive bajo el mismo dominio pero en rutas distintas.
://arcani.com (Tienda)
://arcani.com (Dashboard)
Desventaja: Configurar esto en un monorepo de Nx es más tedioso (requiere un Proxy o un servidor como Nginx muy bien ajustado) y mezclas las cookies de sesión del cliente con las del administrador, lo cual no es ideal.
¿Cómo se conecta esto con Firebase y MySQL?
Independientemente del dominio que elijas, Firebase es el que unifica todo:
El Administrador entra a ://arcani.com, se loguea con Google.
El Cliente entra a ://arcani.com (o la App), se loguea con Google.
Firebase le dice a tu API: "Este es el usuario vendedor@arcani.com".
Tu API consulta en MySQL: "¿Qué puede hacer este correo?".
La API responde: "Es Vendedor, déjalo entrar al Dashboard".
¡Manos a la obra con Firebase! 🚀
Para que esto funcione, necesitamos las "llaves" del reino. Sigue estos pasos:
Ve a la Consola de Firebase.
Haz clic en "Agregar proyecto" y ponle de nombre arcani-fandom.
Desactiva Google Analytics por ahora (para ir más rápido) y dale a "Crear proyecto".
Una vez creado, en el menú lateral ve a Build > Authentication y dale a "Get Started".
En la pestaña Sign-in method, elige Google y actívalo.
¿Ya tienes el proyecto de Firebase creado y el método de Google activado? Avísame para darte el código del AuthService que usaremos en tu librería compartida para que el Admin y la Web empiecen a reconocer a los usuarios.
¿Configuramos las API Keys ahora?


### promp
me gusta la opcion uno, asi mismo si se maneja una app para ventas tambien, solo apuntaria al dominio del Dashboard verdad?

### respuesta 

¡Exacto! Esa es la arquitectura más profesional. Al usar la Opción 1, tu ecosistema de dominios y apps quedaría sincronizado de esta manera:
1. La "Hoja de Ruta" de tus Dominios
://arcani.com (El Corazón): Aquí vive tu NestJS. Todas las aplicaciones (Web, Admin y App Móvil) se conectan exclusivamente a este dominio para pedir datos de MySQL.
://arcani.com (El Centro de Mando): Aquí despliegas tu admin-dashboard. Solo entran administradores y vendedores.
://arcani.com (La Tienda): Aquí despliegas tu web-arcani. Es la cara pública para el fan.
2. ¿A dónde apunta la App de Ventas?
Si creas una App Móvil para el Vendedor, la respuesta técnica es: Apunta al dominio de la API (://arcani.com).
¿Por qué?
El Dashboard Web es una "cara" (interfaz).
La App Móvil es otra "cara".
Pero el Cerebro (donde se guardan las ventas en MySQL) es el mismo para ambas.
Al apuntar a la API, el vendedor puede registrar una venta desde su celular en la tienda física, y tú, como administrador, verás esa venta reflejada al instante en tu computadora entrando a ://arcani.com. ¡Esa es la magia del Monorepo!
3. Configuración de Firebase para Multidominio
Para que esto funcione, en la Consola de Firebase que acabas de abrir, hay un paso vital:
Ve a Authentication > Settings > Authorized Domains.
Allí deberás agregar tus tres dominios cuando los tengas: arcani.com, ://arcani.com y ://arcani.com. (Por ahora, Firebase ya pone localhost automáticamente para que podamos probar).


### ===============================================================================

### promp

la idea de Arcani, es manejar un inventario por tienda (varias tiendas) y web, que el inventario web se vea en la web, pero tambien majejar algunos protuctos solo en tienda (varias tiendas), es segun esta logica, los roles tambien se diferencian en vendedor, supervisor (segun tienda, es decir un vendedor de una tienda A no puede registar una venta de una tienda B, pero puede ver el stock de un producto) y el admin ve la configuracion general, pero hay otros como encargado de almacen que pieden ver el stock de varias tiendas para coordinar las entregas, pues si hacen un pedido por la web, el producto puede estar en la tiena A, pero no hay en la tienda B, entonces para que corrdine eso tiene que tener aceeso, pero no puede tener acceso a mas cosas 
### respuesta 

Esta estructura que planteas es un sistema de Logística Multitienda y es el núcleo de un ERP real para ARCANI. Para que esto funcione sin errores y con seguridad, necesitamos evolucionar la base de datos de MySQL para manejar Relaciones Complejas.
Aquí te presento cómo estructurar esta lógica en tu Monorepo:
1. Evolución del Modelo de Datos (MySQL)
Necesitas 4 tablas clave para que el api-gateway gestione los permisos:
stores (Tiendas): ID, Nombre (Tienda A, Tienda B, Almacén Central, Web).
users: ID, Email (Google), role (ADMIN, SUPERVISOR, VENDEDOR, ALMACEN, CLIENTE) y storeId (FK a la tienda a la que pertenece).
products: Datos generales (Nombre, ADN/Nicho, Precio).
inventory (La tabla maestra):
productId + storeId + stock.
Ejemplo: El Funko de Naruto tiene 10 unidades en "Tienda A" y 0 en "Web".
2. Lógica de Roles y Permisos (El "ADN de Acceso")
En NestJS, implementaremos Guards (Guardianes) que verifiquen el Token de Google y el Rol en MySQL:
Rol	Alcance	Restricción Técnica
Vendedor	Su Tienda	where storeId = user.storeId. Solo puede vender lo que tiene a mano.
Supervisor	Su Tienda	Igual que el vendedor, pero puede editar stock y ver reportes de su tienda.
Almacenista	Global	Puede hacer SELECT * FROM inventory. Ve todo el stock para coordinar traslados.
Admin	Total	Acceso a config-niche, crear tiendas y cambiar roles.
3. Implementación del "Stock Web" vs "Stock Tienda"
En tu web-arcani, la consulta a la API será:
GET /products?availableInStore=WEB_ID
Esto filtrará automáticamente los productos que tengan stock asignado al nodo "Web", ocultando los que son exclusivos de tienda física.
4. ¿Cómo lo manejamos en el Monorepo?
Para que no te vuelvas loco con tanto código, usaremos Librerías Compartidas:
libs/shared/domain: Actualizaremos la interfaz de User para incluir el role y el storeId.
libs/shared/auth: El AuthService ahora, después del login de Google, irá a la API a preguntar: "¿Qué rol tiene este correo y a qué tienda pertenece?".
apps/admin-dashboard: Usaremos Angular Signals para ocultar o mostrar pestañas. Si el usuario es VENDEDOR, la pestaña de "Configuración de Nichos" desaparece y solo queda "Ventas".

### ===============================================================================

1. Evolución del Modelo de Datos (MySQL)
Necesitas 4 tablas clave para que el api-gateway gestione los permisos:
stores (Tiendas): ID, Nombre (Tienda A, Tienda B, Almacén Central, Web).
users: ID, Email (Google), role (ADMIN, SUPERVISOR, VENDEDOR, ALMACEN, CLIENTE) y storeId (FK a la tienda a la que pertenece).
products: Datos generales (Nombre, ADN/Nicho, Precio).
inventory (La tabla maestra):
productId + storeId + stock.
Ejemplo: El Funko de Naruto tiene 10 unidades en "Tienda A" y 0 en "Web".

### promp conversacion
masomenos asi es la idea, pero me gustaria que el stock de la tienda sea una suma del stock de las tiendas y del almacen, es decir si no tengo nungun funkoX en almacen, pero tengo un funkoX en la tienda A, y dos funkosX en la tienda B, para la web que aparesca que si hay stock (no necesariamente la cantidad, eso lo estoy evaluando si colocarlo o no, por que en este momento solo manejamos poco stock, y para que no de una sensacion que no menejamos stock grandes mejor creo que seria no colocarlo) y por ejemplo, si ya no tengo stock en ningun lugar se retire automaticamente de la web.

### respuesta 

Esta lógica es la que diferencia a un E-commerce reactivo de uno estático. Para lograr que la web sume existencias de todos los puntos físicos y se oculte cuando no hay nada, el truco está en usar una Vista de Base de Datos o un Query Agregado en tu API de NestJS.
Aquí tienes cómo implementar esta "Sintonía de Inventario Global":
1. La Lógica del "Stock Virtual" (Backend)
En lugar de que la Web pregunte por una tienda específica, crearemos una función en el ProductService de api-gateway que sume todo el inventario:
typescript
// Lógica para calcular disponibilidad Web en NestJS
async getWebCatalog() {
  return this.productRepo.createQueryBuilder('product')
    .leftJoinAndSelect('product.inventory', 'inventory')
    .select([
      'product.id',
      'product.name',
      'product.price',
      'SUM(inventory.stock) as totalStock' // Suma Tienda A + Tienda B + Almacén
    ])
    .groupBy('product.id')
    .having('totalStock > 0') // ⚡ DESAPARECE AUTOMÁTICAMENTE si es 0
    .getRawMany();
}
Usa el código con precaución.

2. Manejo de la "Sensación de Stock" (Frontend)
Como mencionas que manejas poco stock, el ADN de ARCANI debe ser estratégico. En lugar de números que puedan verse "pobres", usaremos Estados de Disponibilidad en tu web-arcani:
Stock > 5: "Disponible" (o no poner nada).
Stock 1 a 5: "¡Últimas unidades!" (Crea urgencia en el fan).
Stock 0: El producto no se renderiza en el catálogo (gracias al having del SQL).
3. Ajuste en las Entidades (MySQL)
Para que esto funcione, debemos relacionar las tablas que mencionamos. En api-gateway, la entidad Product debe tener una relación con Inventory:
typescript
// apps/api-gateway/src/entities/product.entity.ts
@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @OneToMany(() => InventoryEntity, (inventory) => inventory.product)
  inventory!: InventoryEntity[]; // Conexión a todas las tiendas
}
Usa el código con precaución.

4. El flujo para el Encargado de Almacén
Cuando entre el pedido por la web:
El sistema marca que hay 3 en total.
El Encargado de Almacén entra a su app, ve que la web vendió uno.
El sistema le dice: "Hay 1 en Tienda A y 2 en Tienda B. Solicita traslado de Tienda B para entrega".
Siguiente Paso Técnico
Para que esto empiece a correr, necesitamos crear las Entidades de Producto y Tienda en NestJS. Con esto, podrás empezar a registrar stock real en tu MySQL de XAMPP.
¿Quieres que definamos ahora la Entidad Product y la tabla Store para empezar a cargar tu inventario real? Esto nos permitirá probar que, al poner stock en 0 en MySQL, el producto desaparezca de la web de Angular.
¿Procedemos con las tablas de Inventario?


### ===============================================================================
### promp conversacion
podriamos añadir manejar un producto con un status o algo, para que pueda ejegirse de retirarlo de la visualizacion web, pero que si pertenezca a su tienda, como se manejaria eso? se maneja en la misma tabla del producto con status? o como

### respuesta 


Para manejar esta lógica de "Exclusividad de Tienda" o "Retiro Estratégico" de la web sin afectar el stock físico, la mejor práctica es añadir una columna de visibilidad en la tabla de productos.
Aquí te explico cómo estructurarlo para que sea flexible:
1. Evolución de la Tabla products (MySQL)
No basta con un status (activo/inactivo), necesitamos un interruptor específico para el canal digital. En tu ProductEntity de NestJS, añade estos campos:
typescript
@Column({ default: true })
isVisibleWeb: boolean; // El interruptor para mostrarlo u ocultarlo de la tienda online

@Column({ default: 'ACTIVO' })
status: string; // ACTIVO, DESCONTINUADO, PREVENTA
Usa el código con precaución.

2. ¿Cómo funcionaría la lógica de negocio?
Tu API de api-gateway ahora aplicará un "doble filtro" antes de enviar los datos a la web-arcani:
Filtro 1 (Manual): isVisibleWeb === true. (Si el administrador decide que ese Funko raro solo se vende en la Tienda A, pone este campo en false).
Filtro 2 (Automático): totalStock > 0. (Si alguien compra la última unidad en cualquier tienda, el producto desaparece solo).
3. Ejemplo de Consulta en NestJS
Para tu catálogo web, la consulta quedaría así:
typescript
const webProducts = await this.productRepo.find({
  where: {
    isVisibleWeb: true,    // Solo si el Admin quiere
    status: 'ACTIVO',      // Solo si no está descontinuado
    inventory: {
      stock: MoreThan(0)   // Solo si hay existencias globales
    }
  },
  relations: ['inventory']
});
Usa el código con precaución.

4. ¿Cómo lo ve el Administrador?
En tu admin-dashboard, el administrador verá una lista de todos los productos. Junto a cada uno, tendrá un Toggle (Interruptor) de PrimeNG:
Si el Admin apaga el interruptor, isVisibleWeb pasa a false en MySQL.
Resultado: El producto sigue existiendo en el sistema para que el Vendedor de la Tienda A pueda escanearlo y venderlo, pero el Cliente en la web ya no lo ve.
5. Beneficio para ARCANI Studio
Esto es ideal para productos "Originales" de edición limitada. Puedes tener stock en la tienda física pero mantenerlos ocultos de la web para generar exclusividad o guardarlos para un evento presencial.
Siguiente Movimiento: Crear las Entidades Maestro-Detalle
Para que esto funcione, necesitamos crear la relación entre Producto, Tienda e Inventario.
¿Quieres que definamos ahora la Entidad Store (Tiendas) y la tabla de Inventory para que puedas empezar a asignar stock real en tu MySQL? Esto nos permitirá probar el filtro de "desaparecer de la web" cuando el stock llegue a cero.
¿Procedemos a crear la estructura de Inventario Multitienda?




### ===============================================================================
Estructura del Documento: ARCANI-CORE-LOGISTICS.md
1. Introducción y Propósito
Definición del ecosistema (Web, App, Admin, API).
Objetivo del sistema multitienda.
2. Arquitectura de Datos (Modelo Entidad-Relación)
2.1 Entidad Niche (Los 16 Universos): Atributos de "ADN Geek" y sintonía reactiva.
2.2 Entidad Product: Catálogo maestro y flags de visibilidad.
2.3 Entidad Store: Definición de puntos de venta físicos y nodo virtual (Web).
2.4 Entidad Inventory: Tabla relacional de existencias (Stock por ubicación).
3. Reglas de Negocio: Visibilidad y Stock Virtual
3.1 Algoritmo de Disponibilidad Web: Lógica de sumatoria global de stock.
3.2 Estados de Producto: Definición de ACTIVO, INACTIVO y PREVENTA.
3.3 El Interruptor de Exclusividad (isVisibleWeb): Comportamiento manual vs. automático.
4. Matriz de Roles y Permisos (RBAC - Role Based Access Control)
4.1 Perfil Administrador: Control total del sistema.
4.2 Perfil Encargado de Almacén: Visión global de stock para logística.
4.3 Perfil Supervisor de Tienda: Gestión operativa de una sede específica.
4.4 Perfil Vendedor: Registro de ventas y consulta de stock.
4.5 Perfil Cliente: Acceso al catálogo sintonizado.
5. Flujos Operativos Críticos
5.1 Flujo de Venta en Tienda Física: Impacto inmediato en el stock global.
5.2 Flujo de Pedido Web: Detección de ubicación física y coordinación de despacho.
5.3 Flujo de Traslado entre Tiendas: Movimiento de inventario sin venta.
6. Integración de Identidad (Firebase & MySQL)
6.1 Mapeo de Usuario: Vinculación del UID de Google con el Rol en la base de datos.
### ===============================================================================
¿Cómo crearlo en tu proyecto?
Crea una carpeta llamada docs en la raíz de tu monorepo Nx.
Crea el archivo ARCANI-CORE-LOGISTICS.md.
Copia estos títulos y ve completando la descripción de cada uno según lo que hemos conversado.
¿Quieres que te ayude a redactar el contenido detallado de la "Sección 3: Reglas de Visibilidad" para que quede claro cómo el stock de las tiendas se suma para la web? Es el punto más sensible de tu logística.


### ===============================================================================

