import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class  MapPage{

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];
  markers: any = [
    {
      title: "My Galery",
      latitude: "-19.581194",
      longitude: "-65.763337"
    }
  ];

  constructor() { }

  ionViewDidEnter(){
    this.showMap();
  }

  addMarkersToMap(markers){
    for (let marker of markers){
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker){
    let infoWindowContent = '<div id="content">' +
                                '<h2 id="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
                                '<p>Latitude: ' + marker.latitude + '</p>' +
                                '<p>Longitude: ' + marker.longitude + '</p>' +
                                '<ion-button id="navigate">Navigate</ion-button>' +
                              '</div>';
    let infoWindow = new google.maps.infoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
        this.closeAllInfoWindows();
        infoWindow.open(this.map, marker);

        google.maps.event.addListenerOnce(infoWindow, 'domready', () =>{
          document.getElementById('navigate').addEventListener('click', () => {
          console.log('navigate button clicked!');
          //code to navigate using google maps app
          window.open('https://www.google.com/maps/dir?api=1&destination=' + marker.latitude + ',' + marker.longitude);
        });
      });
     });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows(){
    for(let window of this.infoWindows){
      window.close();
    }
  }

  showMap() {
    const location = new google.maps.LatLng(-19.581228, -65.763378);
    const options = {
      center: location,
      zoom: 8,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }



}
