<template>
    <Page class="page">
        <StackLayout class="page__content">    
            <label class="formHeader" > Job History: </label>  
            <GridLayout rows="auto" columns="*,*,*,*,*">
                <label col="1" class="formField"> Date </label>
                <label col="2" class="formField"> Cost </label>
                <label col="3" class="formField"> Location </label>
            </GridLayout>   
           
        </StackLayout>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import AddressForm from "./AddressForm";
    import TermsAndConditions from "./TermsAndConditions";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("AccountList");
        },
        data () {
            return {
                AddressForm: AddressForm,
                TermsAndConditions: TermsAndConditions,
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
