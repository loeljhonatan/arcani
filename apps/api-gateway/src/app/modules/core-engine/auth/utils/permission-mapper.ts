/**
 * MAPEO DE CAPACIDADES ARCANI (OFUSCADO)
 * Este diccionario traduce los niveles técnicos del Oráculo en etiquetas
 * de interfaz para el Portal.
 *
 * NOTA: Los niveles CUSTOMER usan nombres no técnicos para seguridad
 * por oscuridad (arcani_stream, user_orbit, etc.)
 */
export const mapLevelToPermissions = (levelName: string): string[] => {
  switch (levelName) {
    // 🌌 NIVEL ESTRATÉGICO (Máximo Poder)
    case 'STRATEGIC':
      return [
        'access_admin_panel',    // Acceso al centro de mando
        'manage_finances',       // Control de tesorería
        'audit_global',          // Auditoría omnicanal
        'manage_identity_engine' // Control de sintonía de frecuencia
      ];

    // ⚙️ NIVEL TÁCTICO (Gestión y Veto)
    case 'TACTICAL':
      return [
        'manage_inventory',      // Control de stock
        'quality_veto_power',    // Poder de veto técnico
        'manage_marketing',      // Gestión de campañas
        'debug_systems',         // Soporte y estabilidad
        'edit_content'           // Edición de banners reactivos
      ];

    // 📦 NIVEL OPERATIVO (Ejecución)
    case 'OPERATIVE':
      return [
        'handle_sales',          // Ventas y facturación
        'process_orders',        // Logística y empaque
        'update_stock_status',   // Inventario físico
        'view_customer_data'     // Gestión de fans
      ];

    // 👤 NIVEL CLIENTE (Ofuscado para el Portal Público)
    case 'CUSTOMER':
      return [
        'arcani_stream_v1',      // Capacidad: Ver catálogo (View Catalog)
        'sync_order_active',     // Capacidad: Realizar compras (Make Purchase)
        'user_orbit_access'      // Capacidad: Ver perfil propio (Profile Access)
      ];

    default:
      // Si el nivel no existe, el usuario no tiene capacidades en el multiverso
      return [];
  }
};
