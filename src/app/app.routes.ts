import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ERROR_ROUTES } from './views/error/error.routes';
import { MAIN_ROUTES } from './views/main/main.routes';

const routes: Routes = [
    // Your routes here
    ...MAIN_ROUTES,
    // Errors aplication
    ...ERROR_ROUTES
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes {
}
