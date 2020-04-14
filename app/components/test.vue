<template>
    <Page class="page">
                        <ActionBar class="action-bar">
                            <!-- 
                            Use the NavigationButton as a side-drawer button in Android
                            because ActionItems are shown on the right side of the ActionBar
                            -->
                            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"></NavigationButton>
                            <!-- 
                            Use the ActionItem for IOS with position set to left. Using the
                            NavigationButton as a side-drawer button in iOS is not possible,
                            because its function is to always navigate back in the application.
                            -->
                            <ActionItem icon="res://menu" 
                                android:visibility="collapsed" 
                                @tap="onDrawerButtonTap"
                                ios.position="left">
                            </ActionItem>
                            <Label class="action-bar-title" text="StopGapTPM"></Label>
                        </ActionBar> 
                    <MultiDrawer v-model="drawerState" class="page__content" >
                        <StackLayout slot="bottom">
                            <Button style="color:red;  font-weight:800; " text="X" @tap="onSubmit" />                   

                            <Label text="Im in the bottom drawer" />  
                                           </StackLayout>

                        <DockLayout stretchLastChild="true" class="page__content">                            
                                    
                                    <Button dock="bottom" style="color:white; background-color:red; font-weight:800; border-radius:15px;" text="Request Service" @tap="onSubmit" />                   

                                    

                                    <Mapbox 
                                        accessToken="pk.eyJ1IjoicGxheWVyM2MiLCJhIjoiY2s4YWhsdnBhMGkxcTNrcG02YjkwZHZteCJ9.rOMXwXk61oEJ3oEhfHVwkw"
                                        mapStyle="traffic_day"
                                        latitude="45.382750"
                                        longitude="-75.693839"
                                        hideCompass="true"
                                        zoomLevel="9"
                                        showUserLocation="false"
                                        disableZoom="false"
                                        disableRotation="false"
                                        disableScroll="false"
                                        disableTilt="false" 
                                        attributionControl="false"
                                        dock="center"
                                        />

                                    
                                        
                            
                        </DockLayout>


                    </MultiDrawer>                      
    </Page>
</template>

<script>
    import * as geocoding from "nativescript-geocoding";
    import { Accuracy } from "tns-core-modules/ui/enums";
    import SelectedPageService from "../shared/selected-page-service";

    import * as utils from "~/shared/utils";

export default {
    mounted() {
            SelectedPageService.getInstance().updateSelectedPage("test");
        },
        data() {
            return {
              drawerState: false  
            }
        },
        methods: {
            onSubmit(){
                if(!this.drawerState){
                   this.drawerState = 'bottom'; // this will open the left drawer
                }else{
                this.drawerState = false; // this will open the left drawer
                }
            },
            onDrawerButtonTap() {
                utils.showDrawer();
            },         
        }
    };
</script>

<style scoped lang="scss">
</style>