<template>
    <Page class="page">
        <StackLayout  class="page__content">                            
            <Button text="Public Provider" @tap="PublicProviderButtonTap" />
            <Button text="Company Provider" @tap="CompanyProviderButtonTap" />
        </StackLayout >

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import PublicProviderAccountForm from "./PublicProviderAccountForm";
    import CompanyProviderAccountForm from "./CompanyProviderAccountForm";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("ServiceProviderType");
        },
        data () {
            return {
               PublicProviderAccountForm: PublicProviderAccountForm,
               CompanyProviderAccountForm: CompanyProviderAccountForm,
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
            CompanyProviderButtonTap() {
                console.log("Company Provider Button was pressed");    
                this.$navigateTo(CompanyProviderAccountForm);                    
            },
            PublicProviderButtonTap() {
                console.log("Public Provider Button was pressed");    
                this.$navigateTo(PublicProviderAccountForm);                    
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
