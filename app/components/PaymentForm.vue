<template>
    <Page class="page">
        <ScrollView >
            <StackLayout  class="page__content"> 
                <GridLayout rows="auto, auto, auto, auto, auto, auto" columns="*">
                    <label row="0" class="formHeader" >Payment Information: </label>  
                    <Label row="1" textWrap="true" v-if="formErrors"  style="color:red; font-weight: 700; font-size: 15; padding-left:30px;" >  {{formErrors.join(",")}}</Label>            
                    <TextField row="2" v-model="payNickName" hint="Payment Nickname" class="formField form" />
                    <TextField row="3" v-model="acctNum" hint="Account Number" class="formField form"  />
                    <TextField row="4" v-model="acctExp" hint="Account Expiry" class="formField form" />
                    <TextField row="5" v-model="acctSecCode" hint="Security Code" class="formField form" />
                </GridLayout>
                <GridLayout rows="*,*,*,*,*,*" columns="*">
                    <label row="0" class="formHeader">Billing Address </label>
                    <GridLayout row="1" columns="*,2*">
          
                        <Switch row="0" col="0" v-model="useDefaultAddress" color="#505250" backgroundColor="#f68f25" /> 
                        <label row="0" col="1" class="formField" > Use Default Address</label>
                    </GridLayout>
                    <StackLayout row="2" v-if="!useDefaultAddress" style="margin:0px;">
                        <TextField  v-model="streetAddress" hint="Street Address" class="formField form" />
                        <TextField  v-model="country" hint="Country" class="formField form" />
                        <TextField  v-model="city" hint="City" class="formField form" />
                        <TextField  v-model="province" hint="Province" class="formField form" />
                        <TextField  v-model="postalCode" hint="Postal Code" class="formField form" />
                    </StackLayout>
                    <StackLayout row="2" v-if="useDefaultAddress" style="margin:0px;">
                        <TextField editable="false"  class="formDisable" />
                        <TextField editable="false"  class="formDisable" />
                        <TextField editable="false"  class="formDisable"/>
                        <TextField editable="false"  class="formDisable" />
                        <TextField editable="false"  class="formDisable" />
                    </StackLayout>
                    <GridLayout row="3" columns="*,2*">
                              <Switch row="0" col="0" v-model="setDefaultPayment" color="#505250" backgroundColor="#f68f25"  /> 
                        <label row="0" col="1" class="formField" >Save As Default Payment</label>
                    </GridLayout>  
                </GridLayout>

            <Button style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Continue" @tap="continueButtonTap" />                   

            </StackLayout >
        </ScrollView>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import RequestService from "./RequestService";
    import { required, requiredIf} from "vuelidate/lib/validators";


    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("PaymentForm");
        },
        data () {
            return {
                RequestService: RequestService,
                selectedPage: "",
                
                formErrors: [],


                payNickName: '',
                acctNum: '',
                acctExp: '',
                acctSecCode: '',

                useDefaultAddress: false,

                streetAddress: '', 
                country: '', 
                city: '',
                province: '', 
                postalCode: '', 

                setDefaultPayment: false,
            };
        },
        validations: {
            payNickName: {
                    required
            },
            acctNum: {
                required
            },
            acctExp: {
                    required
            },
            acctSecCode: {
                    required
            },

            
            streetAddress: {
                 required: requiredIf(function(){ 
                 return !this.useDefaultAddress;
                 }), 
             },
             country: {
                 required: requiredIf(function(){ 
                 return !this.useDefaultAddress;
                 }), 
             },
             city:{
                 required: requiredIf(function(){ 
                 return !this.useDefaultAddress;
                 }),  
             },
             province:{
                  required: requiredIf(function(){ 
                 return !this.useDefaultAddress;
                 }), 
             },
             postalCode: { // will need formated still
                required: requiredIf(function(){ 
                 return !this.useDefaultAddress;
                 }), 
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
                                    console.log(" INVALID");   

                    if(!this.$v.payNickName.required){
                        this.formErrors.push("Nickname is required");
                    }
                    if(!this.$v.acctNum.required){
                        this.formErrors.push("Account Number is required");
                    }
                    if(!this.$v.acctExp.required){
                        this.formErrors.push("Account Expiry is required");
                    }
                    if(!this.$v.acctSecCode.required){
                        this.formErrors.push("Account Security Code is required");
                    }
                  
                    if(!this.useDefaultAddress){
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
                    }

                    return
                }   
                
                this.$navigateTo(RequestService);                    
             
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
