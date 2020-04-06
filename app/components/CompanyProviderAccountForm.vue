<template>
    <Page class="page">
        <GridLayout columns="*" rows="auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto" class="page__content">       
            <label row="0" class="formHeader" >Account Information: </label>                     
            <Label textWrap="true" row="1" v-if="formErrors"  style="color:red; font-weight: 700; font-size: 15; padding-left:30px;" >  {{formErrors.join(",")}}</Label>

            <TextField row="2" v-model="Email" hint="Email" class="formField form"/>
            <TextField row="3" secure="true" v-model="Password" hint="Password" class="formField  form"/>
            <TextField row="4" secure="true" v-model="confPassword" hint="Confirm Password" class="formField form"/>
            <TextField row="5" v-model="firstName" hint="First Name" class="formField form"/>
            <TextField row="6" v-model="lastName" hint="Last Name" class="formField form"/>
            <TextField row="7" v-model="phone" hint="Phone Number" class="formField form"/>
            <GridLayout row="8" columns="*,2*" rows="50">
                <Switch row="0" col="0" v-model="tacChecked" color="#505250" backgroundColor="#f68f25"  /> 
                <label row="0" col="1" class="formField" @tap="$navigateTo(TermsAndConditions);"> Agree To Terms and Conditions</label>
            </GridLayout>

            <label row="9" class="formHeader">Provider Type: </label>
            
            <GridLayout v-if="companyType == 1" row="10" columns="*,*" rows="50">
                <Button row="0" col="0" class="formField form switchSelected switchButton" text="Corporation" @tap="companyType = 1;" />
                <Button row="0" col="1" class="formField form switchUnselected switchButton" text="Sole Provider" @tap="companyType = 2;" />
            </GridLayout>

            <GridLayout v-if="companyType == 2" row="10" columns="*,*" rows="50">
                <Button row="0" col="0" class="formField form switchUnselected switchButton" text="Corporation" @tap="companyType = 1;" />
                <Button row="0" col="1" class="formField form switchSelected switchButton" text="Sole Provider" @tap="companyType = 2;" />
            </GridLayout>

            <Button row="12" style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Continue" @tap="continueButtonTap" />                   


        </GridLayout>

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import CompanyProviderProfile from './CompanyProviderProfile.vue';
    import SolePropProviderProfile from "./SolePropProviderProfile.vue";
    import TermsAndConditions from "./TermsAndConditions";
    import { required, email, sameAs } from "vuelidate/lib/validators";

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

                formErrors: [],
                Email: '',
                Password: '',
                confPassword: '',
                firstName: '',
                lastName: '',
                phone: '',
                tacChecked: false,

                companyType: 1,
            };
        },
        validations: {
            Email: {
                    required, email
            },
            Password: {
                 required, sameAs
             },
             confPassword: {
                 required, sameAsPassword: sameAs('Password')
             },
             firstName:{
                 required
             },
             lastName:{
                 required
             },
             phone: { // will need formated still
                required
             },
             tacChecked: {
                required
             }

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
                    if(!this.$v.Email.required){
                        console.log("required");  
                        this.formErrors.push("Email is required");
                    }
                     else if(!this.$v.Email.email){
                      console.log("email");  
                        this.formErrors.push("Email is invalid");
                    }
                    if(!this.$v.Password.required){
                        this.formErrors.push("Password required");
                    }
                    if(!this.$v.confPassword.required){
                        this.formErrors.push("Password Confirmation required");
                    }
                    else if(!this.$v.confPassword.sameAsPassword){
                        this.formErrors.push("Passwords don't match");
                    }

                    if(!this.$v.firstName.required){
                        this.formErrors.push("First name required");
                    }
                    if(!this.$v.lastName.required){
                        this.formErrors.push("Last name required");
                    }
                    if(!this.$v.phone.required){
                        this.formErrors.push("phone required");
                    }
                     if(!this.tacChecked){
                        this.formErrors.push("T&C required");
                    }

                    return
                }
              
              
              if(!this.tacChecked){
                    this.formErrors.push("T&C required");
                    return
                }

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
