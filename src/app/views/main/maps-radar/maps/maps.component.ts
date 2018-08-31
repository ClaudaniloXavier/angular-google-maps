import {Component, AfterViewInit, ElementRef, OnInit, OnDestroy, ChangeDetectorRef, ViewChild} from '@angular/core';
import { Location } from '@angular/common';
import { UiToolbarService } from 'ng-smn-ui';
import { Title } from '@angular/platform-browser';
import { } from '@types/googlemaps';

@Component({
    selector: 'maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit, AfterViewInit, OnDestroy {
    latitude: any;
    longitude: any;

    loading: boolean;

    @ViewChild('gmap') gmapElement: any;
    map: google.maps.Map;

    constructor(private toolbarService: UiToolbarService,
                private titleService: Title,
                public _location: Location,
                private element: ElementRef,
                private changeDetectorRef: ChangeDetectorRef) {
        this.loading = true;
    }

    ngOnInit() {
        this.titleService.setTitle('Maps');

        setTimeout(() => {
            const mapProp = {
                center: new google.maps.LatLng(-20.548918, -47.428686),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                // disableDefaultUI: true
            };
            this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
            this.loading = false;
        }, 3000);
    }

    ngAfterViewInit() {
        this.toolbarService.set('Maps');
        this.toolbarService.activateExtendedToolbar(480);

        this.changeDetectorRef.detectChanges();
    }

    ngOnDestroy() {
        this.toolbarService.deactivateExtendedToolbar();
    }

    setCoordinates() {
        // Alterando o local central do mapa atraves de coordenadas
        this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
    }

    setMapType(mapType) {
        // Alterando o tipo de mapa que será visualizado
        this.map.setMapTypeId(mapType);
    }

    // TODO essa função ainda não funciona
    darkMode() {
        const styleMapType = new google.maps.StyledMapType(
            [
                {
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'color': '#212121'
                        }
                    ]
                },
                {
                    'elementType': 'labels.icon',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#757575'
                        }
                    ]
                },
                {
                    'elementType': 'labels.text.stroke',
                    'stylers': [
                        {
                            'color': '#212121'
                        }
                    ]
                },
                {
                    'featureType': 'administrative',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'color': '#757575'
                        }
                    ]
                },
                {
                    'featureType': 'administrative.country',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#9e9e9e'
                        }
                    ]
                },
                {
                    'featureType': 'administrative.land_parcel',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'administrative.locality',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#bdbdbd'
                        }
                    ]
                },
                {
                    'featureType': 'poi',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#757575'
                        }
                    ]
                },
                {
                    'featureType': 'poi.park',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'color': '#181818'
                        }
                    ]
                },
                {
                    'featureType': 'poi.park',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#616161'
                        }
                    ]
                },
                {
                    'featureType': 'poi.park',
                    'elementType': 'labels.text.stroke',
                    'stylers': [
                        {
                            'color': '#1b1b1b'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'geometry.fill',
                    'stylers': [
                        {
                            'color': '#2c2c2c'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#8a8a8a'
                        }
                    ]
                },
                {
                    'featureType': 'road.arterial',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'color': '#373737'
                        }
                    ]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'color': '#3c3c3c'
                        }
                    ]
                },
                {
                    'featureType': 'road.highway.controlled_access',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'color': '#4e4e4e'
                        }
                    ]
                },
                {
                    'featureType': 'road.local',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#616161'
                        }
                    ]
                },
                {
                    'featureType': 'transit',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#757575'
                        }
                    ]
                },
                {
                    'featureType': 'water',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'color': '#000000'
                        }
                    ]
                },
                {
                    'featureType': 'water',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#3d3d3d'
                        }
                    ]
                }
            ]
        );

        this.map.set('styled_map', styleMapType);
        this.map.setMapTypeId('styled_map');
    }
}
