<template>
    <Page class="page">
        <StackLayout class="page__content">                            
            <!--v for each address on file -->

            <button text.decode="&#xf067; New Payment" class="nt-icon fas" @ontap="PaymentForm"/>
        </StackLayout>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import PaymentForm from "./PaymentForm";

export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("PaymentList");
        },
        data () {
            return {
               PaymentForm: PaymentForm,

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