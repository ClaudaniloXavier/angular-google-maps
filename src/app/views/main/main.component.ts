import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UiToolbarService, UiColor } from 'ng-smn-ui';

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
    title: String;
    menuOpen: boolean;
    user: any;

    constructor(private titleService: Title,
                private toolbarService: UiToolbarService) {
        toolbarService.change.subscribe(title => {
            this.title = title;
        });

        this.user = {
            cor: '#673AB7',
            nome: 'Claudanilo Xavier',
            email: 'claudaniloxavier@gmail.com'
        };
    }

    ngOnInit() {
        this.titleService.setTitle('Angular Google Maps');
        this.toolbarService.registerMainToolbar(document.getElementById('app-header'));

        this.toolbarService.set('');
        this.menuOpen = false;
        /**
         * Descomentar o código para deixar o menu persistente
         * const isNavDrawerPersistent = UiCookie.get('NavDrawerPersistent') === 'true';
         * if (isNavDrawerPersistent) {
         *      this.menuOpen = true;
         * }
         * */
    }

    ngAfterViewInit() {

    }

    isBright(color) {
        return UiColor.isBright(color);
    }
}
