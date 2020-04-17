<template>
    <Page class="page">
             





                <DockLayout  stretchLastChild="true" class="page__content">                            
                   <GridLayout dock="top" columns="*" rows="auto, auto, auto, auto, auto, auto, auto, auto, auto" class="page__content">       
                        <label row="0" class="formHeader" >Address Information: </label> 
                        <Label textWrap="true" row="1" v-if="formErrors"  style="color:red; font-weight: 700; font-size: 15; padding-left:30px;" >  {{formErrors.join(",")}}</Label>

                        <TextField row="2" v-model="nickname" hint="Property Nickname" class="formField form"/>
                        <TextField row="3" v-model="streetAddress" hint="Street Address" class="formField form"/>
                        <TextField row="4" v-model="country" hint="Country" class="formField form" />
                        <TextField row="5" v-model="city" hint="City" class="formField form"/>
                        <TextField row="6" v-model="province" hint="Province" class="formField form"/>
                        <TextField row="7" v-model="postalCode" hint="Postal Code" class="formField form" />
                        <Button row="9" style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Continue" @tap="onSubmit" />                   

                   </GridLayout>
                  

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
                        dock="bottom"
                        @mapReady="onMapReady($event)"
                        v-if="this.latitude"
                        />    

                         
        </DockLayout>
                          
    </Page>
</template>

<script>
    import * as geocoding from "nativescript-geocoding";
    import { Accuracy } from "tns-core-modules/ui/enums";
    import * as utils from "~/shared/utils";
    import PaymentForm from "./PaymentForm";
    import { required } from "vuelidate/lib/validators";

    export default {
        data() {
            return {
                searchString: '',
                    latitude: '',
                    longitude: '',
                    formErrors: [],
                    nickname: '', 
                    streetAddress: '', 
                    country: '', 
                    city: '',
                    province: '', 
                    postalCode: '', 

            }
        },
         validations: {
            nickname: {
                    required
            },
            streetAddress: {
                 required, 
             },
             country: {
                 required
             },
             city:{
                 required
             },
             province:{
                 required
             },
             postalCode: { // will need formated still
                required
             },
             
        },
        methods: {
            onSubmit(){
  this.formErrors = [];
                this.$v.$touch();
                if(this.$v.$invalid){
                    if(!this.$v.nickname.required){
                        this.formErrors.push("Nickname is required");
                    }
                    if(!this.$v.streetAddress.required){
                        this.formErrors.push("Street Address is required");
                    }
                    if(!this.$v.country.required){
                        this.formErrors.push("Country is required");
                    }
                    if(!this.$v.city.required){
                        this.formErrors.push("City is required");
                    }
                    if(!this.$v.province.required){
                        this.formErrors.push("Province is required");
                    }
                    if(!this.$v.postalCode.required){
                        this.formErrors.push("Postal Code is required");
                    }
                    
                    return;
                }

                this.longitude = '';
                this.latitude = '';
                this.searchString = this.streetAddress + " " + this.city + " " + this.postalCode + " " + this.province + " " + this.country;
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
           
            onMapReady(args) {
                args.map.addMarkers([
                    {
                        lat: this.latitude,
                        lng: this.longitude,
                        title: "Selected",
                        
                    }
                ]);

                confirm({
                    title: "Confirm Address to Add",
                    message: this.searchString,
                    okButtonText: "Submit",
                    cancelButtonText: "Cancel"
                    })
                .then(result => {
                    console.log(result);
                    if(result){
                        this.$navigateTo(PaymentForm);                    
                    }
                    else{
                        this.searchString = '';
                    }
                });

            }      
        }
    };
</script>

<style scoped lang="scss">
</style>