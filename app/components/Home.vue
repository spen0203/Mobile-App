<template>
    <Page class="page" style="background-color:#989a9c;">
                <StackLayout  class="page__content">
          
                    <Image style="margin-bottom:50;" src="~/assets/StopGap-Logo.png"/>
                    <Label   style="font-weight: 700; font-size: 20; padding-left:30px;" > Login </Label>
                    <Label textWrap="true" v-if="formErrors"  style="color:red; font-weight: 700; font-size: 15; padding-left:30px;" >  {{formErrors.join(",")}}</Label>

                    <TextField
                         v-model="Email" 
                         type="email" 
                         hint="Email" 
                         class="loginForm"
                       
                    />

                    <TextField type="password" 
                        v-model="Password" 
                        hint="Password" 
                        class="loginForm" 
                    > </TextField>

                    <Button text="Login" @tap="loginButtonTap" />                   
                  <GridLayout columns="*,*">
                    <Button  row="0" col="0" text="Register" @tap="registerButtonTap" />
                    <Button row="0" col="1" text="Forgot Password" @tap="forgotPasswordButtonTap" />
                  </GridLayout>
                    
        </StackLayout >

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import RequestService from "./RequestService";
    import RegisterType from "./RegisterType";
    import { required, email } from "vuelidate/lib/validators";

   
   export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home");
        },
        data () {
            return {
                RegisterType: RegisterType,
                RequestService: RequestService,
                Email: null,
                Password: null,
                 formErrors: [],
                msg: '',
                selectedPage: ""
            };
        },
        validations: {
            Email: {
                    required, email
            },
            Password: {
                 required
             }

        },
        computed: {
                        
        },
        methods: {
            onButtonTap() {
                console.log("Button was pressed");                         
            },
            loginButtonTap() {
                console.log("Login Button was pressed");  
                this.formErrors = [];
                this.$v.$touch();
                if(this.$v.$invalid){
                    if(!this.$v.Email.required){
                        console.log("required");  
                        this.formErrors.push("Email is required");

                    }
                    else if(!this.$v.email){
                      console.log("email");  
                        this.formErrors.push("Email is invalid");

                    }
                    if(!this.$v.Password.required){

                        this.formErrors.push("Password required");

                    }

                    return
                }// end error handling
                
                this.$navigateTo(RequestService);       
                  
            },
            registerButtonTap() {
                console.log("Register Button was pressed");    
                this.$navigateTo(RegisterType);                           
            },
            forgotPasswordButtonTap() {
                console.log("Forgot Password Button was pressed"); 
               // this.$navigateTo();                           

            }


            
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables


    .loginForm {
        border-radius:15px;
        border-color:#ffffff;
        background-color:#d2d4d6;
        padding:10;
        font-weight:600;
    }
    // Custom styles
</style>
