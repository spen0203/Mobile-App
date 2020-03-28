<template>
    <Page class="page" style="background-color:#989a9c;">
        <GridLayout rows="*, *, *, *, *" columns="*" class="page__content">    
            <Button row="1" col="0" text.decode="&#xf015; Customer "  @tap="customerButtonTap" class="nt-icon fas typeButton" />

            <Button row="3" col="0" text.decode="&#xf1e6; Service Provider " @tap="serviceProviderButtonTap" class="nt-icon fas typeButton" />
        </GridLayout>

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
    .typeButton {
        background-color:#3f3f40;
        color:white;
        font-weight:700;
        font-size:20px;
        margin-left:50px;
        margin-right:50px;
    }

    .typeButton a {
        color:white;
    }
    // Custom styles
</style>
