<template lang="html">
<GridLayout rows="auto, *" class="nt-drawer__content">
            <StackLayout row="0" class="nt-drawer__header">
                <Image class="nt-drawer__header-image fas t-36" src.decode="font://&#xf2bd;"></Image>
                <Label class="nt-drawer__header-brand" text="User Name"></Label>
                <Label class="nt-drawer__header-footnote" text="username@mail.com"></Label>
            </StackLayout>
        
            <ScrollView row="1" class="nt-drawer__body">
                <StackLayout>
                    



                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'AccountList' ? ' -selected': '')" @tap="onNavigationItemTap(AccountList)">
                        <Label col="0" text.decode="&#xf007;" class="nt-icon fas"></Label>
                        <Label col="1" text="Account" class="p-r-10"></Label>
                    </GridLayout>
                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'PaymentList' ? ' -selected': '')" @tap="onNavigationItemTap(PaymentList)">
                        <Label col="0" text.decode="&#xf53d;" class="nt-icon fas"></Label>
                        <Label col="1" text="Payment" class="p-r-10"></Label>
                    </GridLayout>
                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'AddressList' ? ' -selected': '')" @tap="onNavigationItemTap(AddressList)">
                        <Label col="0" text.decode="&#xf015;" class="nt-icon fas"></Label>
                        <Label col="1" text="Address" class="p-r-10"></Label>
                    </GridLayout>
                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'JobHistory' ? ' -selected': '')" @tap="onNavigationItemTap(JobHistory)">
                        <Label col="0" text.decode="&#xf274;" class="nt-icon fas"></Label>
                        <Label col="1" text="Job History" class="p-r-10"></Label>
                    </GridLayout>
                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Support' ? ' -selected': '')" @tap="onNavigationItemTap(Support)">
                        <Label col="0" text.decode="&#xf095;" class="nt-icon fas"></Label>
                        <Label col="1" text="Support" class="p-r-10"></Label>
                    </GridLayout>

                    <StackLayout class="hr"></StackLayout>
                    <StackLayout class="hr"></StackLayout>
                    <StackLayout class="hr"></StackLayout>
                    <StackLayout class="hr"></StackLayout>
                    <StackLayout class="hr"></StackLayout>


                    <GridLayout columns="auto, *" :class="'nt-drawer__list-item' + (selectedPage === 'Home' ? ' -selected': '')" @tap="onNavigationItemTap(Home)">
                        <Label col="0" text.decode="&#xf506;" class="logOut nt-icon fas"></Label>
                        <Label col="1" text="LogOut" class="logOut p-r-10"></Label>
                    </GridLayout>

                </StackLayout>
            </ScrollView>
        </GridLayout>
</template>

<script>
    import Home from "./Home";
    import Featured from "./Featured";
    import Settings from "./Settings";

    import AccountList from "./AccountList";
    import PaymentList from "./PaymentList";
    import AddressList from "./AddressList";
    import JobHistory from "./JobHistory";
    import Support from "./Support";



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
                AccountList: AccountList,
                PaymentList: PaymentList,
                AddressList: AddressList,
                JobHistory: JobHistory,
                Support: Support,
                selectedPage: "",
            };
        },
        components: {
            Home,
            AccountList,
            PaymentList,
            AddressList,
            JobHistory,
            Support,
        },
        methods: {
            onNavigationItemTap(component) {
                if(component == Home){
                    console.log("Home clicked")
                    this.$navigateTo(component, {
                       clearHistory: true
                    });
                  }
                  else{
                    this.$navigateTo(component);
                  }
                utils.closeDrawer();
            }
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/orange';
    // End custom common variables

    .logOut {
        color:red;
        font-weight: 700;
    }
    // Custom styles
</style>
