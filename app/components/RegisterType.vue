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
    import AccountForm from "./AccountForm";
    import ServiceProviderType from "./ServiceProviderType";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("RegisterType");
        },
        data () {
            return {
               ServiceProviderType: ServiceProviderType
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
                this.$navigateTo(AccountForm);                    
            },
            serviceProviderButtonTap() {
                console.log("Service Provider Button was pressed");    
                this.$navigateTo(ServiceProviderType);                    
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
