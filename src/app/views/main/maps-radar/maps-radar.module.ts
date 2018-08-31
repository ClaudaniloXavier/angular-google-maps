import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { MapsModule } from './maps/maps.module';

@NgModule({
    imports: [SharedModule],
    exports: [
        MapsModule
    ],
    declarations: [],
    providers: []
})

export class MapsRadarModule {
}
