<template>
    <Page class="page">
            <GridLayout columns="*" rows="*,*,*,*,*,*,*,*,*,*,*,*,*,*" class="page__content">       
                <label row="0" class="formHeader" >Address Information: </label>                     
                <TextField row="1" v-model="textFieldValue" hint="Property Nickname" />
                <TextField row="2" v-model="textFieldValue" hint="Street Address" />
                <TextField row="3" v-model="textFieldValue" hint="Country" />
                <TextField row="4" v-model="textFieldValue" hint="City" />
                <TextField row="5" v-model="textFieldValue" hint="Province" />
                <TextField row="6" v-model="textFieldValue" hint="Postal Code" />

                <label row="7" class="formHeader" >Notes: </label>                     
                <TextView row="8" editable="true" hint="Enter any extra notes about your property.">

                </TextView>

                    <label row="10" class="formHeader" >Home Details: </label>                     

                <GridLayout row="11" columns="*,2*" rows="50">
                    <Switch row="0" col="0" checked="true"/> 
                    <label row="0" col="1" > Default Address</label>
                </GridLayout>

                <Button row="13" style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Continue" @tap="continueButtonTap" />                   


            </GridLayout >
        
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import PaymentForm from "./PaymentForm";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("AddressForm");
        },
        data () {
            return {
                PaymentForm: PaymentForm,
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
                this.$navigateTo(PaymentForm);                    
             
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
    }
    // Custom styles
</style>
