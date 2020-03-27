<template>
    <Page class="page">
        <StackLayout  class="page__content">       
            <label class="formHeader" >Account Information: </label>                     
            <TextField  v-model="textFieldValue" hint="Email" />
            <TextField  v-model="textFieldValue" hint="Password" />
            <TextField  v-model="textFieldValue" hint="Confirm Password" />
            <TextField  v-model="textFieldValue" hint="First Name" />
            <TextField  v-model="textFieldValue" hint="Last Name" />
            <TextField  v-model="textFieldValue" hint="Phone Number" />

            <GridLayout columns="*,2*" rows="50">
                <Switch row="0" col="0" checked="false"/> 
                <label row="0" col="1" > Agree To Terms and Conditions</label>
            </GridLayout>

            <Button style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Continue" @tap="continueButtonTap" />                   


        </StackLayout >

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import AddressForm from "./AddressForm";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("AccountForm");
        },
        data () {
            return {
                AddressForm: AddressForm,
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
    // Custom styles
</style>
