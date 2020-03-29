<template>
    <Page class="page">
        <GridLayout columns="*" rows="*,*,*,*,*,*,*,*,*" class="page__content">       
            <label row="0" class="formHeader" >Account Information: </label>                     
            <TextField row="1" v-model="textFieldValue" hint="Email" class="formField form"/>
            <TextField row="2" v-model="textFieldValue" hint="Password" class="formField  form"/>
            <TextField row="3" v-model="textFieldValue" hint="Confirm Password" class="formField form"/>
            <TextField row="4" v-model="textFieldValue" hint="First Name" class="formField form"/>
            <TextField row="5" v-model="textFieldValue" hint="Last Name" class="formField form"/>
            <TextField row="6" v-model="textFieldValue" hint="Phone Number" class="formField form"/>

            <GridLayout row="7" columns="*,2*" rows="50">
                <Switch row="0" col="0" checked="false" color="#505250" backgroundColor="#f68f25"  /> 
                <label row="0" col="1" class="formField" @tap="$navigateTo(TermsAndConditions);"> Agree To Terms and Conditions</label>
            </GridLayout>

            <Button row="9" style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Continue" @tap="continueButtonTap" />                   


        </GridLayout >

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import AddressForm from "./AddressForm";
    import TermsAndConditions from "./TermsAndConditions";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("AccountForm");
        },
        data () {
            return {
                AddressForm: AddressForm,
                TermsAndConditions: TermsAndConditions,
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
    }

    .formField {
        font-size:15;
        font-weight:500;
    }
    // Custom styles
</style>
