<template>
    <Page class="page" style="background-color:#989a9c;">
                <StackLayout  class="page__content">
          
                    <Image style="margin-bottom:50;" src="~/assets/StopGap-Logo.png"/>
                    <Label   style="font-weight: 700; font-size: 20; padding-left:30px;" > Login </Label>
                    <ListView for="msg in emailErrors"> <Label :text="msg" /> </ListView>
                    <TextField
                         v-model="Email" 
                         type="email" 
                         hint="Email" 
                         class="loginForm"
                       
                    />

                    <Button text="test" @tap="loginButtonTap" />                   

               
                    
        </StackLayout >

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import { required, email } from "vuelidate/lib/validators";

   
   export default {
        mounted() {
        },
        data () {
            return {
                Email: null,
                emailErrors: [],
                msg: '',
            };
        },
        
        computed: {
           
            
        },
        validations: {
            Email: {
                    required, email
            } 

        },
        methods: {
            onButtonTap() {
                console.log("Button was pressed");                         
            },
            loginButtonTap() {
                console.log("Login Button was pressed");  
                this.emailErrors = [];
                this.$v.$touch();
                if(this.$v.$invalid){
                    if(!this.$v.Email.required){
                        console.log("required");  
                        this.emailErrors.push("required");
                        console.log("required 2");  

                    }
                        console.log("check");  

                    if(!this.$v.email){
                      console.log("email");  
                        this.emailErrors.push("invalid email");

                    }

                    return
                }
                console.log("success");
                    
            },



            
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
