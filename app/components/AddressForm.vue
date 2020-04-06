<template>
    <Page class="page">
        <ScrollView>
            <GridLayout columns="*" rows="auto, auto, auto,auto,auto,auto,auto,auto,auto,auto,*,auto,auto,auto,auto" class="page__content">       
                <label row="0" class="formHeader" >Address Information: </label> 
                <Label textWrap="true" row="1" v-if="formErrors"  style="color:red; font-weight: 700; font-size: 15; padding-left:30px;" >  {{formErrors.join(",")}}</Label>

                <TextField row="2" v-model="nickname" hint="Property Nickname" class="formField form"/>
                <TextField row="3" v-model="streetAddress" hint="Street Address" class="formField form"/>
                <TextField row="4" v-model="country" hint="Country" class="formField form" />
                <TextField row="5" v-model="city" hint="City" class="formField form"/>
                <TextField row="6" v-model="province" hint="Province" class="formField form"/>
                <TextField row="7" v-model="postalCode" hint="Postal Code" class="formField form" />
                <label row="8" class="formHeader" >Notes: </label>                     
                <TextView row="9" editable="true" v-model="notes" hint="Enter any extra notes about your property." class="formField form" >

                </TextView>

                    <label row="11" class="formHeader" >Home Details: </label>                     

                <GridLayout row="12" columns="*,2*" rows="50">
                    <Switch row="0" col="0" checked="false" color="#505250" backgroundColor="#f68f25"  /> 
                    <label row="0" col="1" class="formField" > Default Address</label>
                </GridLayout>

                <Button row="14" style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Continue" @tap="continueButtonTap" />                   


            </GridLayout >
        </ScrollView>

    </Page>

</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import PaymentForm from "./PaymentForm";
    import { required } from "vuelidate/lib/validators";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("AddressForm");
        },
        data () {
            return {
                PaymentForm: PaymentForm,
                formErrors: [],
                nickname: '', 
                streetAddress: '', 
                country: '', 
                city: '',
                province: '', 
                postalCode: '', 
                notes: '', 
                defaultAddress: false,

                selectedPage: ""
            };
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
        computed: {
            message() {
                return "<!-- Page content goes here -->";
            }
        },
        methods: {
            continueButtonTap() {
                console.log("Continue was pressed");   
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

    .formField {
        font-size:15;
        font-weight:500;
    }
    // Custom styles
</style>
