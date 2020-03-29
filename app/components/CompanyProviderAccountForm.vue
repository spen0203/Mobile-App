<template>
    <Page class="page">
        <GridLayout columns="*" rows="*,*,*,*,*,*,*,*,*,*,*,*" class="page__content">       
            <label row="0" class="formHeader" >Account Information: </label>                     
            <TextField row="1" v-model="textFieldValue" hint="Email" class="formField form"/>
            <TextField row="2" v-model="textFieldValue" hint="Password" class="formField form"/>
            <TextField row="3" v-model="textFieldValue" hint="Confirm Password" class="formField form" />
            <TextField row="4" v-model="textFieldValue" hint="First Name" class="formField form"/>
            <TextField row="5" v-model="textFieldValue" hint="Last Name" class="formField form"/>
            <TextField row="6" v-model="textFieldValue" hint="Phone Number" class="formField form"/>

            <GridLayout row="7" columns="*,2*" rows="50">
                <Switch row="0" col="0" checked="false" color="#505250" backgroundColor="#f68f25"  /> 
                <label row="0" col="1" class="formField" @tap="$navigateTo(TermsAndConditions);"> Agree To Terms and Conditions</label>
            </GridLayout>
            <label row="8" class="formHeader">Provider Type: </label>
            
            <GridLayout v-if="companyType == 1" row="9" columns="*,*" rows="50">
                <Button row="0" col="0" class="formField form switchSelected switchButton" text="Corporation" @tap="companyType = 1;" />
                <Button row="0" col="1" class="formField form switchUnselected switchButton" text="Sole Provider" @tap="companyType = 2;" />
            </GridLayout>

            <GridLayout v-if="companyType == 2" row="9" columns="*,*" rows="50">
                <Button row="0" col="0" class="formField form switchUnselected switchButton" text="Corporation" @tap="companyType = 1;" />
                <Button row="0" col="1" class="formField form switchSelected switchButton" text="Sole Provider" @tap="companyType = 2;" />
            </GridLayout>

            <Button row="11" style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Continue" @tap="continueButtonTap" />                   


        </GridLayout>

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import CompanyProviderProfile from './CompanyProviderProfile.vue';
    import SolePropProviderProfile from "./SolePropProviderProfile.vue";
    import TermsAndConditions from "./TermsAndConditions";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("CompanyProviderForm");
        },
        data () {
            return {
                CompanyProviderProfile: CompanyProviderProfile,
                SolePropProviderProfile: SolePropProviderProfile,
                TermsAndConditions: TermsAndConditions,
                selectedPage: "",
                companyType: 1,
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
                if(this.companyType == 1){ //Corportation
                    this.$navigateTo(CompanyProviderProfile);                    
                }
                if(this.companyType == 2){//Sole Prop
                    this.$navigateTo(SolePropProviderProfile);                    
                }
            },
            switchCompanyType(type) {

                if(type == 1){ //Corportation
                companyType = 1;
                }
                if(type == 2){//Sole Prop
                companyType = 2;
                }
              
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

    .switchButton {
        margin-left:0;
        margin-right: 0;
    }

    .switchSelected {
        background-color: #f68f25;
        color:black;
        font-weight:700;
        border-color:white;
    }
    
    .switchUnselected {
        background-color:#ffffff;
        color:#8f8f8f;
    }


    // Custom styles
</style>
