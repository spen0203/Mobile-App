<template>
    <Page class="page">
        <StackLayout class="page__content">    
            <label class="formHeader" > Support:  </label>  

           <!-- <label class="formField"> A sendgrid form will go here and connect to a stopgap email info@stopgaptpm.com </label> -->
            <GridLayout columns="*" rows="auto,auto,auto,auto,auto,auto,auto,auto,*,auto" class="page__content">       
                <label row="1" class="formHeader" >Account Information: </label>                     
                <TextField row="2" v-model="textFieldValue" hint="Email" class="formField form"/>
                <TextField row="3" v-model="textFieldValue" hint="First Name" class="formField form"/>
                <TextField row="4" v-model="textFieldValue" hint="Last Name" class="formField form"/>
                <TextField row="5" v-model="textFieldValue" hint="Phone Number" class="formField form"/>

                <label row="7" class="formHeader" >Message: </label>                     
                <TextView row="8" editable="true" hint="Let Us Know How We Can Help You!" class="formField form" >

                </TextView>

                <Button row="10" style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Send" @tap="continueButtonTap" />                   


            </GridLayout >
        </StackLayout>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Support");
        },
        data () {
            return {
                selectedPage: ""
            };
        },
        computed: {
            message() {
                return "<!-- Page content goes here -->";
            }
        },
        methods: {
            continueButtonTap() {
                console.log("Continue was pressed");   
                this.$navigateTo(AddressForm);                    
             
            },
           
            
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    .formHeader {
        font-weight: 700; 
        font-size: 20;
        padding-bottom:10;
    }

    .formField {
        font-size:15;
        font-weight:500;
    }
    // Custom styles
</style>
