<template>
    <Page class="page">
        <ScrollView>
            <StackLayout  class="page__content">       
                <label class="formHeader" >Company Information: </label>                     
                <TextField  v-model="textFieldValue" hint="License  Number" />
                <TextField  v-model="textFieldValue" hint="Company Name" />
    
                <label class="formHeader" >Profile Photo: </label>                     
                <WrapLayout>
                    <Image v-if="img" :src="img.src" width="75" height="75" />
                    <Image  v-if="!img" width="75" height="75" class="nt-drawer__header-image fas t-36" src.decode="font://&#xf2bd;"/>

                </WrapLayout>

                <GridLayout columns="*,*">
                        <Button  row="0" col="0" text="Take Photo" @tap="takePicture" />
                        <Button row="0" col="1" text="Gallery" @tap="selectPicture" />
                </GridLayout>

                <Button style="color:white; background-color:green; font-weight:800; border-radius:15px;" text="Continue" @tap="continueButtonTap" />                   


            </StackLayout >
        </ScrollView>
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
