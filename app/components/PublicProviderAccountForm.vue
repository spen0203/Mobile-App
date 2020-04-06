<template>
    <Page class="page">
        <GridLayout columns="*" rows="auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto" class="page__content">       
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

            <Button row="10" style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Continue" @tap="continueButtonTap" />                   


        </GridLayout>

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import AddressForm from "./AddressForm";
    import PublicProviderProfile from './PublicProviderProfile';
    import TermsAndConditions from "./TermsAndConditions";
    import { required, email, sameAs } from "vuelidate/lib/validators";


    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("PublicProviderAccountForm");
        },
        data () {
            return {
                PublicProviderProfile: PublicProviderProfile,
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
                this.$navigateTo(PublicProviderProfile);                    
             
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
