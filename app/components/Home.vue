<template>
    <Page class="page" style="background-color:#989a9c;">
                <StackLayout  class="page__content">
          
                    <Image style="margin-bottom:50;" src="~/assets/StopGap-Logo.png"/>
                    <Label   style="font-weight: 700; font-size: 20; padding-left:30px;" > Login </Label>
                    <TextField
                         v-model="Email" 
                         type="email" 
                         hint="Email" 
                         class="loginForm"
                       
                    />

                    <TextField 
                        v-model="Password" 
                        type="password" 
                        hint="Password" 
                        class="loginForm" 
                    />

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
    import test from "./test";

   
   export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home");
        },
        data () {
            return {
                RegisterType: RegisterType,
                RequestService: RequestService,
                test: test,
                Email: null,
                Password: null,
                loginErrors: [],
                selectedPage: ""
            };
        },
        
        computed: {
            message() {
                return "<!-- Page content goes here -->";
            },
            
        },
        methods: {
            onButtonTap() {
                console.log("Button was pressed");                         
            },
            loginButtonTap() {
                console.log("Login Button was pressed");  
                
                this.$navigateTo(RequestService);       
                    
            },
            registerButtonTap() {
                console.log("Register Button was pressed");    
                this.$navigateTo(RegisterType);                           
            },
            forgotPasswordButtonTap() {
                console.log("Forgot Password Button was pressed"); 
                this.$navigateTo(test);                           

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
