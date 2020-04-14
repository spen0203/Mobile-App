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
                        <StackLayout slot="bottom" >
                            <ScrollView scrollBarIndicatorVisible="true">
                                <GridLayout columns="30,*,30" >
                                    <StackLayout col="1">
                                    <Button style="color:red;  font-weight:800; " text="X Close" @tap="onSubmit" />                   

                                    <Label text="Service Request info will go here, list picker of address, time,  list picker payment, confirm" />  
                                        
                                    
                                    <GridLayout columns="*,*" rows="auto,auto" >
                                        <Label text="MM/DD/Y" col="0" row="0" class="Header"/>
                                        <Label text="Time:" col="1" row="0" class="Header"/>

                                        <DatePicker minDate="`${currentDate}`" date="`${currentDate}`" col="0" row="1" v-model="selectedDate"/>
                                        <TimePicker col="1" row="1" v-model="selectedTime"/>
                                    </GridLayout>
                                    <Label text="Address to service:" col="1" row="0" class="Header"/>
                                    <ListPicker :items="listOfAdresses" v-model="selectedAddress" />


                                    <Label text="Cost est if needed here / stripe " />  

                                    <Label text="Time:" col="1" row="0" class="Header"/>
                                    <ListPicker :items="listOfPayments" v-model="selectedPayment" />
                                    <Button style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Continue" @tap="ConfirmRequest" />                   

                                    
                                    </StackLayout>
                                </GridLayout>
                            </ScrollView>
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
            SelectedPageService.getInstance().updateSelectedPage("Request Service");
        },
        data() {
            return {
              drawerState: false,
              selectedDate: '',
              selectedTime: '',
              selectedPayment:  '',
              listOfAdresses: [ 'a', 'b', 'c'],
              selectedAddress: '',
              listOfPayments:  [ 'a', 'b', 'c'],
              cost: 123.11,
              currentDate: new Date(),
            };
               
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
            ConfirmRequest() {
                //will have to open modal to confirm again
                console.log("confirm request");
                confirm({
                    title: "Confirm Request",
                    message: "to "+ this.listOfAdresses[this.selectedAddress] +" at "+ this.selectedTime + " on "+ this.selectedDate+ " for $"+this.cost,
                    okButtonText: "Submit",
                    cancelButtonText: "Cancel"
                    })
                .then(result => {
                    console.log(result);
                });

                //submit stripe request return success or fail || confirm membership is paid


            }
        }
    };
</script>

<style scoped lang="scss">
.timeHeader {
    margin-bottom: 0;
    font-weight: 700;
}
</style>