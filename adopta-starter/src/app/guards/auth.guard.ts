import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

// Bloquea el acceso a rutas de la app si nadie ha entrado con login.
export const authGuard: CanActivateFn = () => {
  const usuariosService = inject(UsuariosService);
  const router = inject(Router);

  if (usuariosService.estaAutenticado()) {
    return true;
  }
  return router.createUrlTree(['/login']);
};
