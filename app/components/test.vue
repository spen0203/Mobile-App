<template>
    <Page class="page">
             


<ListView for="p in pokemon" class="list-group">
                <v-template>
                    <StackLayout class="list-group-item">
                        <Label :text="p.name" />
                    </StackLayout>
                </v-template>
            </ListView>


                   
                  

                    

                         
                          
    </Page>
</template>

<script>
    import * as geocoding from "nativescript-geocoding";
    import { Accuracy } from "tns-core-modules/ui/enums";
    import * as utils from "~/shared/utils";
    import PaymentForm from "./PaymentForm";
    import { required } from "vuelidate/lib/validators";
    import axios from "axios";


    export default {
        data() {
            return {
               
                    formErrors: [],
                    
                    pokemon: []
            };
        },
        mounted() {
            axios({ method: "GET", "url": "https://pokeapi.co/api/v2/pokemon/?limit=50" }).then(result => {
                this.pokemon = result.data.results;
            }, error => {
                console.error(error);
            });
        },
       
        methods: {

                 
        }
    };
</script>

<style scoped lang="scss">
</style>