<template>
    <Page class="page">
        <ScrollView >
            <StackLayout  class="page__content"> 
                <GridLayout rows="*,*,*,*,*" columns="*">
                    <label row="0" class="formHeader" >Payment Information: </label>                     
                    <TextField row="1" v-model="textFieldValue" hint="Payment Nickname" class="formField form" />
                    <TextField row="2" v-model="textFieldValue" hint="Account Number" class="formField form"  />
                    <TextField row="3" v-model="textFieldValue" hint="Account Expiry" class="formField form" />
                    <TextField row="4" v-model="textFieldValue" hint="Security Code" class="formField form" />
                </GridLayout>
                <GridLayout rows="*,*,*,*,*,*" columns="*">
                    <label row="0" class="formHeader">Billing Address </label>
                    <GridLayout row="1" columns="*,2*">
          
                        <Switch row="0" col="0" v-model="useDefaultAddress" color="#505250" backgroundColor="#f68f25" /> 
                        <label row="0" col="1" class="formField" > Use Default Address</label>
                    </GridLayout>
                    <StackLayout row="2" v-if="!useDefaultAddress" style="margin:0px;">
                        <TextField  v-model="textFieldValue" hint="Street Address" class="formField form" />
                        <TextField  v-model="textFieldValue" hint="Country" class="formField form" />
                        <TextField  v-model="textFieldValue" hint="City" class="formField form" />
                        <TextField  v-model="textFieldValue" hint="Province" class="formField form" />
                        <TextField  v-model="textFieldValue" hint="Postal Code" class="formField form" />
                    </StackLayout>
                    <StackLayout row="2" v-if="useDefaultAddress" style="margin:0px;">
                        <TextField editable="false"  class="formDisable" />
                        <TextField editable="false"  class="formDisable" />
                        <TextField editable="false"  class="formDisable"/>
                        <TextField editable="false"  class="formDisable" />
                        <TextField editable="false"  class="formDisable" />
                    </StackLayout>
                    <GridLayout row="3" columns="*,2*">
                              <Switch row="0" col="0" checked="false" color="#505250" backgroundColor="#f68f25"  /> 
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

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("PaymentForm");
        },
        data () {
            return {
                RequestService: RequestService,
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
