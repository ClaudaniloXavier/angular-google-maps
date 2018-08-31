import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { MapsRadarModule } from './maps-radar/maps-radar.module';

@NgModule({
    imports: [
        SharedModule,
        HomeModule,
        MapsRadarModule
    ],
    exports: [],
    declarations: [MainComponent],
    providers: []
})
export class MainModule {
}
