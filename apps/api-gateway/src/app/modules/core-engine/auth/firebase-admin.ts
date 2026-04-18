import * as admin from 'firebase-admin';
import * as path from 'path';
/**
 * Inicialización del Oráculo con los poderes de Firebase Admin.
 * Asegúrate de usar variables de entorno para las credenciales en producción.
 */
export const initializeFirebaseAdmin = () => {
  if (admin.apps.length === 0) {
    // Calculamos la ruta hacia la raíz del monorepo desde esta ubicación
    const serviceAccountPath = path.resolve(process.cwd(), 'firebase-service-account.json');

    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccountPath),
      });
      console.log('🔥 Motor de Identidad Firebase: CONECTADO');
    } catch (error:any) {
      console.error('❌ Error al conectar con Firebase Admin:', error.message);
      process.exit(1); // Si no hay Auth, el portal no puede operar con seguridad
    }
  }
};
