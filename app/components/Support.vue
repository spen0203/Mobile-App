<template>
    <Page class="page">
        <StackLayout class="page__content">    
            <label class="formHeader" > Support: </label>  
            <label class="formField"> A sendgrid form will go here and connect to a stopgap email info@stopgaptpm.com </label>
           
        </StackLayout>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Support");
        },
        data () {
            return {
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
