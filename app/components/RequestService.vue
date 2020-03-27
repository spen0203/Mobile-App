<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <!-- 
            Use the NavigationButton as a side-drawer button in Android
            because ActionItems are shown on the right side of the ActionBar
            -->
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"></NavigationButton>
            <!-- 
            Use the ActionItem for IOS with position set to left. Using the
            NavigationButton as a side-drawer button in iOS is not possible,
            because its function is to always navigate back in the application.
            -->
            <ActionItem icon="res://menu" 
                android:visibility="collapsed" 
                @tap="onDrawerButtonTap"
                ios.position="left">
            </ActionItem>
            <Label class="action-bar-title" text="StopGapTPM"></Label>
        </ActionBar>

        <StackLayout  class="page__content">                            

            
            <Button style="color:white; background-color:red; font-weight:800; border-radius:15px;" text="Request Service" @tap="continueButtonTap" />                   
        </StackLayout >
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import AccountForm from "./AccountForm";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("RequestService");
        },
        data () {
            return {
               AccountForm: AccountForm
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
            onDrawerButtonTap() {
                utils.showDrawer();
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
