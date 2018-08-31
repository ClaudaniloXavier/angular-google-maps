import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { MapsComponent } from './maps.component';

@NgModule({
    imports: [
        SharedModule,
    ],
    exports: [],
    declarations: [
        MapsComponent,
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapsModule {
}
