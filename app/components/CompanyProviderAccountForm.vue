<template>
    <Page class="page">
        <ScrollView >

            <StackLayout  class="page__content">       
                <label class="formHeader" >Account Information: </label>                     
                <TextField  v-model="textFieldValue" hint="Email" />
                <TextField  v-model="textFieldValue" hint="Password" />
                <TextField  v-model="textFieldValue" hint="Confirm Password" />
                <TextField  v-model="textFieldValue" hint="First Name" />
                <TextField  v-model="textFieldValue" hint="Last Name" />
                <TextField  v-model="textFieldValue" hint="Phone Number" />

                <GridLayout columns="*,2*" rows="50">
                    <Switch row="0" col="0" checked="false"/> 
                    <label row="0" col="1" > Agree To Terms and Conditions</label>
                </GridLayout>

                <label class="formHeader" >Provider Type: </label>                     
                <GridLayout columns="*,*">
                        <Button  row="0" col="0" text="Corporation"  />
                        <Button row="0" col="1" text="Sole Proprietor" />
                </GridLayout>


                <Button style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Continue" @tap="continueButtonTap" />                   


            </StackLayout >
        </ScrollView>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import CompanyProviderProfile from './CompanyProviderProfile.vue';
    import SolePropProviderProfile from "./SolePropProviderProfile.vue";
    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("CompanyProviderForm");
        },
        data () {
            return {
                CompanyProviderProfile: CompanyProviderProfile,
                SolePropProviderProfile: SolePropProviderProfile,
                selectedPage: "",
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
                //need an if for corp vs sole prop
                //this.$navigateTo(CompanyProviderProfile);                    
                this.$navigateTo(SolePropProviderProfile);                    

             
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
    // Custom styles
</style>
