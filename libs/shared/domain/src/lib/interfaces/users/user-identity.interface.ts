/**
 * IDENTIDAD DEL EXPLORADOR (ARCANI)
 * Esta interfaz mapea la respuesta blindada del Oráculo.
 */
export interface UserIdentity {
  uuid: string;           // Identificador público seguro (UUID)
  email: string;          // Correo del explorador
  name: string;           // Nombre sintonizado desde Google/MySQL
  photoURL: string | null;// Avatar del explorador
  roleName: string;       // Nombre del rol: "Director", "Cliente", etc.

  /**
   * CAPACIDADES (Permissions)
   * Lista de etiquetas (algunas ofuscadas) que habilitan
   * funcionalidades en la interfaz.
   */
  permissions: string[];
}
