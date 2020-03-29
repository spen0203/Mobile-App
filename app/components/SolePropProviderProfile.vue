<template>
    <Page class="page">
            <GridLayout columns="*" rows="*,*,*,*,*,*,*,*,*,*,*,*" class="page__content">       
                <label row="0" class="formHeader" >Sole Proprietor Information: </label>                     
                <TextField row="1" v-model="textFieldValue" hint="City License  Number" class="formField form"/>
                <TextField row="2" v-model="textFieldValue" hint="License Plate Number" class="formField form"/>
    
                <label row="3" class="formHeader" >Bank Deposit Information: </label>                     
                <TextField row="4" v-model="textFieldValue" hint="Account Number" class="formField form"/>
                <TextField row="5" v-model="textFieldValue" hint="Institution Number" class="formField form" />
                <TextField row="6" v-model="textFieldValue" hint="Branch Number" class="formField form"/>
    

                <label row="7" class="formHeader" >Profile Photo: </label>                     
                <GridLayout row="8" columns="*,*,*" rows="*">
                    <Image style="height:100; width:100;" column="1" class="nt-drawer__header-image fas  " v-if="!img"  src.decode="font://&#xf2bd;" ></Image>
                    <Image style="height:100; width:100;" column="1"  v-if="img" :src="img.src"  />
			    </GridLayout>
                <GridLayout row="9" columns="*,*">
                        <Button  row="0" col="0" text="Take Photo" @tap="takePicture" />
                        <Button row="0" col="1" text="Gallery" @tap="selectPicture" />
                </GridLayout>

                <Button row="11"  style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Continue" @tap="continueButtonTap" />                   


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

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("PublicProviderProfile");
        },
        data () {
            return {
                Home: Home,
                selectedPage: "",
                img: null,

            };
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
                console.log("Save was pressed");   
               // this.$navigateTo(Home);        
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
    // Custom styles
</style>
