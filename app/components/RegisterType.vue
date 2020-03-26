<template>
    <Page class="page">
        <StackLayout  class="page__content">                            
            <Button text="Customer" @tap="customerButtonTap" />
            <Button text="Service Provider" @tap="serviceProviderButtonTap" />
        </StackLayout >

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import AddressForm from "./AddressForm";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home");
        },
        data () {
            return {
               AddressForm: AddressForm
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
            customerButtonTap() {
                console.log("Customer Button was pressed");    
                this.$navigateTo(AddressForm);                    
            },
            serviceProviderButtonTap() {
                console.log("Service Provider Button was pressed");    
                this.$navigateTo(AddressForm);                    
            },         
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
