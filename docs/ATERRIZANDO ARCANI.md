
la idea de arcani es manejar las ventas tanto en fisico (con varias tiendas) como virtual (tienda online), y un almacen para que sirva de reabastecimiento tanto para las tiendas fisicas, como para la tienda online, hay algunas reglas que se debe segir en este modelo de negocio, 

Regla 1. la tienda online sume el stock de las diferentes tiendas y el almacen, por ejemplo, si no tengo nungun funkoX en almacen, pero tengo un funkoX en la tienda A, y dos funkosX en la tienda B, para la web que aparesca que si hay stock (no estoy seguro si mostrar la cantidad pues por ahora manejamos poco stock, y para que no de una sensacion que no menejamos stocks grandes mejor que no salga o se desactive y active segun veamos conveniente, pero la palabra en en stock si se vea, la cantidad del stock si se  visualice en el dasboard de administrador, en este caso del ejemplo para la web habria 3 funkosX disponibles).

REGLA 2. no todos los productos que hay en stock tanto en almecen como en diferentes tiendas pueden ser visibles en la web, quiere decir que algunos productos se manejan como stock de las tiendas o almacen pero no estan visibles en la pagina web. Por ejemplo tengo una Taza X y la misma Taza X en tienda A y tienda B, pero no se visualizan en la web.

REGLA 3. Algunos productos pasan a ser descontinuado, pero no eliminado, para que no afecte a las ventas que se hicieron con ese producto para que no afecte a la contabilidad.

REGLA 4. Tambien se maneje un estado para productos en preventa, que estan proximos a arrivar, esta maneja dos logicas. Para productos en web y tienda como arribos para todo el negocio, y para productos a pedido exclusivos para un cliente que solo son uno o dos y no estaran disponmibles en el tienda pero tienen que formar parte del inventario para la contabilidad.


REGLA 5. algunas tiendas(Sucursales) son por temporada, asi que tambien maneje un estado de Activo(alta) o desactivado(baja), claro que cuando se ponga en estado desactivado primero tiene que haber vaciado su inventario, que haya una opcion general de super usuario en adelante, para manejar el retiro del stock general, si es posible con un solo click y todo ese stock se mueva al almacen, creando una guia de remision, para desde alli ser reasignadas a otras tiendas, asi mismo toda las ventas, ingresos y mas (ayudame que mas puedo poner aca) no se borran para no afectar la contabilidad.

REGLA 6. tambien sa maneja el movimiento de mercaderia entre tiendas eso es administrado desde el rol encargado de la tienda en adelante, ejemplo: si una tiendaA no tiene stock y la tienda B si lo tiene, el encargado de la tienda A solicita(SOLICITUD) el producto a la tienda B, el encargado de la tienda B autoriza(AUTORIZA) el movimiento cuando se va a realizar el traslado (el stock es retirado de la tiendaB fisicamente pero aun forma parte del stock sistematico de la tienda B (para cuando un usuario el ese transcurso quiere ver el stock de ese producto por ejempl un administrador que esta en otro lugar y no sabe de ese movimiento, salga un estado que diga movimiento de mercaderi o parecido, para que el administrador sepa que esa mercaderia esta en movimiento, asi si la quiere buscar, sepa que tiene que preguntar en que estado esta ese movimiento, para que no hayan dudas de donde esta la mercaderia)), el stock en el sistema para a estar en un estado de ESPERA(), cuando la mercaderia llega a la tienda A el encargado de la tienda A confirma que la mercaderia llego (CONFIRMACION) y alli el sistema retira el stock del producto de la tienda B y la asigna a la tienda B, alli el cajero o encargado ya puede ingresar su venta en la tienda A del producto.


REGLA 7. SE MAJENA DOS LOGICAS PARA TANTO PARA PEDIDOS PERSONALIZADOS, COMO PARA PEDIDOS A PEDIDO O PREVENTAS, CUANDO ES EL CASO DE PREVENTAS, EL CLIENTE PUEDE DEJAR UN % DEL COSTO TOTAL, CUANDO LLEGA EL PRODUCTO CANCELA LA DIFERENCIA. ESTO PUEDE MANEJARSE TANTO PARA WEB COMO PARA TIENDA. EN EL CASO DE PEDIDOS (SE MAJENA SOLO A NIVEL DE TIENDA, PUES EN LA WEB NO HAY MUCHA INTERACCION PARA PODER COORDINAR CON EL CLIENTE QUE ES LO QUE REALMENTE QUIERE, AQUI TAMBIEN IRIA LOS PEDIDOS DE COSPLAY PUES AQUI DE HACEN PEDIDOS DE IMPORTACION Y TAMBIEN DE PERSONALIZACION A MEDIDA, EN ESTE CASO SE MANEJA TAMBIEN QUE EL CLIENTE DEJA UN % DE ADELANTO Y CUANDO EL PEDIDO ESTA LISTO CANCELA LA DIFERENCIA), EN EL CASO DE PERSONALIZADOS QUE NO SON A MEDIDA, SINO SON TAZAS, CUADROS, Y OTROS QUE YA TIENEN ESTANDARES DE MEDIDA, TALLA, MODELO, SE MANEJA EN TIENDA CON UN % DE ADELANTO, Y CANCELAR CUANDO ESTA LISTO EL PEDIDO (SI QUIERE TAMBIEN SE PUEDE CANCELAR LA DIFERENCIA TOTAL) PERO POR LA WEB SE MANEJA QUE TIENE QUE CANELAR EL 100% DEL PRODUCTO. 

REGLA 8. EN LOS PRODUCTOS (originales y fanmade) QUE PASEN CON STOCK CERO TANTO EN ALMACEN COMO EN TIENDA EN LA SUMA DE EXISTENCIAS, SE RETIREN DE LA WEB AUTOMATICAMENTE, Y RETORNEN CUANDO SE RESTABLESCAN NUEVAMENTE. EN CASO DE PRODUCTOS EXCLUSIVOS DE ARCANI STUDIO, QUE SIEMPRE ESTEN EN STOCK WEB, SOLO SEAN RETIRADOS MANUALMENTE POR EL ENCARGADO DE STUDIO POR FALTA DE STOCK DE SUMINISTRSO O COSAS ASI.








REGLA 8: Productos Personalizados (ARCANI Studio):
Recomendación: Deben manejarse como "Productos de Inventario Técnico". A diferencia de un Funko, su stock es de insumos (ej. 100 tazas blancas). Al venderse, el sistema descuenta 1 unidad del insumo y genera un "Ítem de Servicio" en la contabilidad. Esto permite trackear el costo del material y el valor del trabajo creativo por separado.




la idea de Arcani, es manejar un inventario por tienda (varias tiendas) y el ese inventario se vea re


 web, que el inventario web se vea en la web, pero tambien majejar algunos protuctos solo en tienda (varias tiendas), es segun esta logica, los roles tambien se diferencian en vendedor, supervisor (segun tienda, es decir un vendedor de una tienda A no puede registar una venta de una tienda B, pero puede ver el stock de un producto) y el admin ve la configuracion general, pero hay otros como encargado de almacen que pieden ver el stock de varias tiendas para coordinar las entregas, pues si hacen un pedido por la web, el producto puede estar en la tiena A, pero no hay en la tienda B, entonces para que corrdine eso tiene que tener aceeso, pero no puede tener acceso a mas cosas 



masomenos asi es la idea, pero me gustaria que el stock de la tienda sea una suma del stock de las tiendas y del almacen, es decir si no tengo nungun funkoX en almacen, pero tengo un funkoX en la tienda A, y dos funkosX en la tienda B, para la web que aparesca que si hay stock (no necesariamente la cantidad, eso lo estoy evaluando si colocarlo o no, por que en este momento solo manejamos poco stock, y para que no de una sensacion que no menejamos stock grandes mejor creo que seria no colocarlo) y por ejemplo, si ya no tengo stock en ningun lugar se retire automaticamente de la web.


10.	DECKS & TCG (Mística): Destello Verde Esmeralda. "El rincón del estratega y la mística."