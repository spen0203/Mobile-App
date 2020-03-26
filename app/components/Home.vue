<template>
    <Page class="page">
                <StackLayout  class="page__content">
          
                    <Image style="margin-bottom:50;" src="~/assets/StopGap-Logo.png"/>

                    <Label style="font-weight: 700; font-size: 30;" > Login </Label>
                    <TextField  v-model="textFieldValue" hint="Username" />
                    <TextField v-model="textFieldValue" hint="Password" />
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
    import Featured from "./Featured";
    import RegisterType from "./RegisterType";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home");
        },
        data () {
            return {
                RegisterType: RegisterType,
                Featured: Featured,
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
                this.$navigateTo(Featured);                    
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

    // Custom styles
</style>
