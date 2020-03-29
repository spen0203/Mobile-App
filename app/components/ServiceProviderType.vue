<template>
    <Page class="page" style="background-color:#989a9c;" >
        <GridLayout rows="*, *, *, *, *" columns="*" class="page__content">    
            <Button row="1" col="0" text.decode="&#xf508; Public Provider"  @tap="PublicProviderButtonTap" class="nt-icon fas typeButton"/>
            <Button row="3" col="0" text.decode="&#xf1ad; Company Provider" @tap="CompanyProviderButtonTap" class="nt-icon fas typeButton"/>
        </GridLayout >
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
   .typeButton {
        background-color:#3f3f40;
        color:white;
        font-weight:700;
        font-size:25px;
        margin-left:50px;
        margin-right:50px;
        height:75;
        border-color:white;
        border-width:5px;
    }

    .typeButton a {
        color:white;
    }
    // Custom styles
</style>
