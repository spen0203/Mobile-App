<template>
    <Page class="page" style="background-color:#989a9c;">
        <StackLayout  class="page__content">    
            <label style="font-weight:700; font-size:30;">Terms and Condtions</label>
        
        </StackLayout>

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("RegisterType");
        },
        data () {
            return {
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
           
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables
   
    // Custom styles
</style>
