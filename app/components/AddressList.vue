<template>
    <Page class="page">
        <StackLayout class="page__content">                            
            <!--v for each address on file -->

            <button text.decode="&#xf067; New Address" class="nt-icon fas" @ontap="AddressForm"/>
        </StackLayout>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import AddressForm from "./AddressForm";

export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("AddressList");
        },
        data () {
            return {
               AddressForm: AddressForm,

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
    @import '~@nativescript/theme/scss/variables/orange';
    // End custom common variables
    // Custom styles
</style>