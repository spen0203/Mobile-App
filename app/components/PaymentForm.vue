<template>
    <Page class="page">
        <ScrollView orientation="horizontal">
        <StackLayout  class="page__content">       
            <label class="formHeader" >Payment Information: </label>                     
            <TextField  v-model="textFieldValue" hint="Payment Nickname" />
            <TextField  v-model="textFieldValue" hint="Account Number" />
            <TextField  v-model="textFieldValue" hint="Account Expiry" />
            <TextField  v-model="textFieldValue" hint="Security Code" />
            
            <label class="formHeader">Billing Address </label>
            <GridLayout columns="*,2*">
                <Switch row="0" col="0" v-model="useDefaultAddress"/> 
                <label row="0" col="1" > Use Default Address</label>
            </GridLayout>
            <StackLayout v-if="!useDefaultAddress" style="margin:0px;">
                <label class="formHeader" >Success </label>                     
            </StackLayout>
            <label class="formHeader" >Notes: </label>                     
            <TextView editable="true" hint="Enter any extra notes about your Payment.">

            </TextView>


            <GridLayout columns="*,2*">
                <Switch row="0" col="0" v-model="useDefaultAddress"/> 
                <label row="0" col="1" > Default Payment</label>
            </GridLayout>


                    <Button text="Continue" @tap="continueButtonTap" />                   

        </StackLayout >
    </ScrollView>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import PaymentForm from "./PaymentForm";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home");
        },
        data () {
            return {
                PaymentForm: PaymentForm,
                selectedPage: "",
                useDefaultAddress: false,
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
