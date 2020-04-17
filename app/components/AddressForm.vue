<template>
    <Page class="page">
             





                <DockLayout  stretchLastChild="true" class="page__content">                            
                    <StackLayout dock="top" class="page">
                        <SearchBar hint="Location search string" v-model="searchString" @clear="SearchBarClear()"  @submit="onSubmit()"></SearchBar>
                        <Label :text="`Latitude: ${latitude}`"/>
                        <Label :text="`Longitude: ${longitude}`"/>
                    </StackLayout>
                    <Button dock="bottom" style="color:white; background-color:red; font-weight:800; border-radius:15px;" text="Add address"  />                   

                    <Mapbox 
                        accessToken="pk.eyJ1IjoicGxheWVyM2MiLCJhIjoiY2s4YWhsdnBhMGkxcTNrcG02YjkwZHZteCJ9.rOMXwXk61oEJ3oEhfHVwkw"
                        mapStyle="traffic_day"
                        :latitude="latitude" 
                        :longitude="longitude"
                        hideCompass="true"
                        zoomLevel="9"
                        showUserLocation="false"
                        disableZoom="false"
                        disableRotation="false"
                        disableScroll="false"
                        disableTilt="false" 
                        attributionControl="false"
                        hideAttribution="true"
                        dock="center"
                        v-if="this.latitude"
                        />    

                         
        </DockLayout>
                          
    </Page>
</template>

<script>
    import * as geocoding from "nativescript-geocoding";
    import { Accuracy } from "tns-core-modules/ui/enums";
    import * as utils from "~/shared/utils";
    export default {
        data() {
            return {
                searchString: '',
                    latitude: '',
                    longitude: '',
            }
        },
        methods: {
            onSubmit(){
                this.longitude = '';
                this.latitude = '';
                this.searchString = '';
                console.log("search: " + this.searchString);
                var geocoding = require("nativescript-geocoding");
                geocoding.getLocationFromName(this.searchString).then(loc => {
                    console.log('Found ', loc);
                    this.longitude = loc.longitude;
                    this.latitude = loc.latitude;
                    console.log('long ', this.longitude);
                    console.log('lati ', this.latitude);
                    mapbox.setCenter([this.longitude, this.latitude], {animated: false});                   
                
                }, function (e) {
                    console.log("Error: " + (e.message || e));
                });
            },           
            SearchBarClear() {
                this.searchString = '';
                this.longitude = '';
                this.latitude = '';
            },
            onMapReady(args) {
                args.map.addMarkers([
                    {
                        lat: this.latitude,
                        lon: this.longitude,
                        title: "Selected",
                        
                    }
                ]);
            }      
        }
    };
</script>

<style scoped lang="scss">
</style>