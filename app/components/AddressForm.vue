<template>
    <Page class="page">
        <StackLayout  class="page__content">       
            <label class="formHeader" >Address Information: </label>                     
            <TextField  v-model="textFieldValue" hint="Property Nickname" />
            <TextField  v-model="textFieldValue" hint="Street Address" />
            <TextField  v-model="textFieldValue" hint="Country" />
            <TextField  v-model="textFieldValue" hint="City" />
            <TextField  v-model="textFieldValue" hint="Province" />
            <TextField  v-model="textFieldValue" hint="Postal Code" />

            <label class="formHeader" >Notes: </label>                     
            <TextView editable="true" hint="Enter any extra notes about your property.">

            </TextView>

                <label class="formHeader" >Home Details: </label>                     

            <GridLayout columns="*,2*" rows="50">
                <Switch row="0" col="0" checked="true"/> 
                <label row="0" col="1" > Default Address</label>
            </GridLayout>

            <Button style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Continue" @tap="continueButtonTap" />                   


        </StackLayout >

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
