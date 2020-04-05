<template>
    <Page class="page" style="background-color:#989a9c;">
                <StackLayout  class="page__content">
          
                    <Image style="margin-bottom:50;" src="~/assets/StopGap-Logo.png"/>
                    <Label   style="font-weight: 700; font-size: 20; padding-left:30px;" > Login </Label>
                    <TextField  v-model="Email" type="email" hint="Email" class="loginForm" />
                    <TextField v-model="Password" type="password" hint="Password" class="loginForm" />
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
                loginErrors: [],
                selectedPage: ""
            };
        },
        computed: {
            message() {
                return "<!-- Page content goes here -->";
            }
        },
        methods: {
            onButtonTap() {
                console.log("Button was pressed");                         
            },
            loginButtonTap() {
                console.log("Login Button was pressed");  
                if(this.Email && this.Password){
                        /*var emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;              
                        if(emailRegEx.test(email)){
                            this.loginErrors.push('Email Invalid!')
                        } */
                                               this.$navigateTo(RequestService);       
                           // this.$navigateTo(RequestService);       
                           
                }
                else{
                    if(!this.Email){
                        this.loginErrors.push('Email Required!')
                    }
                    if(!this.Password){
                        this.loginErrors.push('Password Required!')
                    }

                    console.log("Login Error");  

                }  
            },
            registerButtonTap() {
                console.log("Register Button was pressed");    
                this.$navigateTo(RegisterType);                           
            },
            forgotPasswordButtonTap() {
                console.log("Forgot Password Button was pressed");                         
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
