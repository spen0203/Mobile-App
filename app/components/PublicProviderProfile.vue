<template>
    <Page class="page">
        <GridLayout columns="*" rows="auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto" class="page__content">       
            <label row="0"  class="formHeader" >Bank Deposit Information: </label>                     
            <Label textWrap="true" row="1" v-if="formErrors"  style="color:red; font-weight: 700; font-size: 15; padding-left:30px;" >  {{formErrors.join(",")}}</Label>

            <TextField row="2" v-model="acctNum" hint="Account Number" class="formField form" />
            <TextField row="3" v-model="acctInstNum" hint="Institution Number" class="formField form" />
            <TextField row="4" v-model="acctBranchNum" hint="Branch Number"  class="formField form"/>
 
            <label row="6" class="formHeader" >Profile Photo: </label>                     
            <GridLayout row="7" columns="*,*,*" rows="*">
                <Image style="height:100; width:100;" column="1" class="nt-drawer__header-image fas  " dock="center" v-if="!img"  src.decode="font://&#xf2bd;" ></Image>
                <Image column="1" dock="center" v-if="img" :src="img.src"  />
			</GridLayout>

            <GridLayout row="8" columns="*,*" rows="*">
                    <Button row="0" col="0" text="Take Photo" @tap="takePicture" class="formField form" />
                    <Button row="0" col="1" text="Gallery" @tap="selectPicture" class="formField form" />
            </GridLayout>

            <Button row="10" style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Continue" @tap="continueButtonTap" />                   


        </GridLayout >

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import Home from "./Home";
    import * as camera from "nativescript-camera";
    import * as imagepicker from "nativescript-imagepicker";
    import { Image } from "tns-core-modules/ui/image";
    import { required } from "vuelidate/lib/validators";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("PublicProviderProfile");
        },
        data () {
            return {
                Home: Home,
                selectedPage: "",
                formErrors: [],
                img: null,
                acctNum: '',
                acctInstNum: '',
                acctBranchNum: '',
            };
        },
        validations: {
            acctNum: {
                    required, 
            },
            acctInstNum: {
                    required, 
            },
            acctBranchNum: {
                    required, 
            },
            img: {
                    required, 
            },
           

        },
        computed: {
            message() {
                return "<!-- Page content goes here -->";
            }
        },
        methods: {
            photoButtonTap() {
                console.log("Photo was pressed");   
                //this.$navigateTo(AddressForm);                    
             
            },
            galleryButtonTap() {
                console.log("Gallery was pressed");   
            },
            continueButtonTap() {
                console.log("Continue was pressed");   
                this.formErrors = [];
                this.$v.$touch();
                if(this.$v.$invalid){
                    if(!this.$v.acctNum.required){
                        console.log("required");  
                        this.formErrors.push("Account Number is required");
                    }
                    if(!this.$v.acctInstNum.required){
                        console.log("required");  
                       this.formErrors.push("Institution Number Required");
                    }
                    if(!this.$v.acctBranchNum.required){
                        console.log("required");  
                       this.formErrors.push("Branch Number Required");
                    }
                    if(!this.$v.img.required){
                        console.log("required");  
                        this.formErrors.push("Profile Image Required");
                    }
                     

                    return
                }   

                this.$navigateTo(Home);        
            
        
            
            },
            selectPicture() {

			let context = imagepicker.create({
				mode: 'single' 
			});

			context.authorize()
			.then(function() {
                return context.present();
			})
			.then(selection => {
				selection.forEach(selected => {
					console.log(JSON.stringify(selected));

					this.img = new Image();
					this.img.src = selected;
				});
			}).catch(function (e) {
				console.log('error in selectPicture', e);
			});

        },
        takePicture() {
			camera.requestPermissions()
			.then(() => {
				camera.takePicture({ width: 300, height: 300, keepAspectRatio: true, saveToGallery:false })
				.then(imageAsset => {
					let img = new Image();
					img.src = imageAsset;
					this.images.push(img);
					console.log('ive got '+this.images.length+' images now.');
				})
				.catch(e => {
					console.log('error:', e);
				});
			})
			.catch(e => {
				console.log('Error requesting permission');
			});
		}            
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

    .formField {
        font-size:15;
        font-weight:500;
    }

 
    // Custom styles
</style>
