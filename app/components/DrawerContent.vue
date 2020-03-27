<template lang="html">
<GridLayout rows="auto, *" class="nt-drawer__content">
            <StackLayout row="0" class="nt-drawer__header">
                <Image class="nt-drawer__header-image fas t-36" src.decode="font://&#xf2bd;"></Image>
                <Label class="nt-drawer__header-brand" text="User Name"></Label>
                <Label class="nt-drawer__header-footnote" text="username@mail.com"></Label>
            </StackLayout>
        
            <ScrollView row="1" class="nt-drawer__body">
                <StackLayout>
                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Home' ? ' -selected': '')" @tap="onNavigationItemTap(Home)">
                        <Label col="0" text.decode="&#xf015;" class="nt-icon fas"></Label>
                        <Label col="1" text="Login Screen" class="p-r-10"></Label>
                    </GridLayout>



                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Account' ? ' -selected': '')" @tap="onNavigationItemTap(Account)">
                        <Label col="0" text.decode="&#xf007;" class="nt-icon fas"></Label>
                        <Label col="1" text="Account" class="p-r-10"></Label>
                    </GridLayout>
                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Payment' ? ' -selected': '')" @tap="onNavigationItemTap(Payment)">
                        <Label col="0" text.decode="&#xf53d;" class="nt-icon fas"></Label>
                        <Label col="1" text="Payment" class="p-r-10"></Label>
                    </GridLayout>
                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Address' ? ' -selected': '')" @tap="onNavigationItemTap(Address)">
                        <Label col="0" text.decode="&#xf015;" class="nt-icon fas"></Label>
                        <Label col="1" text="Address" class="p-r-10"></Label>
                    </GridLayout>
                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'JobHistory' ? ' -selected': '')" @tap="onNavigationItemTap(JobHistory)">
                        <Label col="0" text.decode="&#xf274;" class="nt-icon fas"></Label>
                        <Label col="1" text="Job History" class="p-r-10"></Label>
                    </GridLayout>

                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Featured' ? ' -selected': '')" @tap="onNavigationItemTap(Featured)">
                        <Label col="0" text.decode="&#xf005;" class="nt-icon fas"></Label>
                        <Label col="1" text="Featured" class="p-r-10"></Label>
                    </GridLayout>
        
                    <StackLayout class="hr"></StackLayout>
                    <StackLayout class="hr"></StackLayout>

                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Settings' ? ' -selected': '')" @tap="onNavigationItemTap(Settings)">
                        <Label col="0" text.decode="&#xf013;" class="nt-icon fas"></Label>
                        <Label col="1" text="Settings" class="p-r-10"></Label>
                    </GridLayout>

                </StackLayout>
            </ScrollView>
        </GridLayout>
</template>

<script>
    import Home from "./Home";
    import Featured from "./Featured";
    import Settings from "./Settings";

    import Account from "./AccountForm";
    import Payment from "./PaymentForm";
    import Address from "./AddressForm";
    import JobHistory from "./JobHistory";


    import * as utils from "~/shared/utils";
    import SelectedPageService from "~/shared/selected-page-service";    
    
    export default {
        mounted() {
            SelectedPageService.getInstance().selectedPage$
                .subscribe((selectedPage) => this.selectedPage = selectedPage);
        },
        data () {
            return {
                Home: Home,
                Featured: Featured,
                Settings: Settings,
                Account: Account,
                Payment: Payment,
                Address: Address,
                JobHistory: JobHistory,

                selectedPage: ""
            };
        },
        components: {
            Home,
            Featured,
            Settings,
            Account,
            Payment,
            Address,
            JobHistory,
        },
        methods: {
            onNavigationItemTap(component) {
                this.$navigateTo(component, {
                    clearHistory: true
                });
                utils.closeDrawer();
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
