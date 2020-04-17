# Mobile-App
Using NativeScript-Vue im looking to develop a service app for ios and andriod. This app will allow users to request a service to their location and proccess a stripe payment. 

<h5>More images at the end of page or under "/Github Preview Images"<h5> 

![](Github%20Preview%20Images/RequestService:Home.png)

![](Github%20Preview%20Images/Login.png)


<h2>System:</h2>
Vmware Workstation Pro 14 -> MacOs HighSierra 
https://hackintoshpro.com/install-macos-high-sierra-vmware/

<h2>Resources:</h2>
NativeScript Vue:
https://nativescript-vue.org/en/docs/getting-started/quick-start/

Vuex:
https://nativescript-vue.org/en/docs/getting-started/vue-plugins/#vuex

MapBox:
 https://www.mapbox.com/
https://www.nativescript.org/blog/include-feature-rich-maps-in-a-nativescript-vue-app-with-mapbox

Geocoding:
https://market.nativescript.org/plugins/nativescript-geocoding

Axios:
https://www.nativescript.org/blog/make-http-requests-to-remote-web-services-in-a-nativescript-vue-app


Camera/Gallery:
https://www.raymondcamden.com/2018/11/15/working-with-the-camera-in-a-nativescript-vue-app

Vuelidate:
https://vuelidate.js.org/#sub-basic-usage



<h2> Things to be completed: </h2>
- Backend Created
- Phone needs validations
- DataBase and Email Connections need setup
- Firebase or AWS Cognito
- T&C content required
- Stripe
- lots of UI updates and tweaks

<h2> Images </h2>
<h3> Address Form </h3>
<p> This was a notable challenge, how do you validate an address when so many people will slightly modify how they type it. To solve this I decided to use mapbox to return the location the user entered on a map for confirmation. This is still not perfect but will ensure that the search string always results in the correct location </p>

![](Github%20Preview%20Images/AddressForm%20-%20Blank.png)
![](Github%20Preview%20Images/AddressForm%20-%20Confirm.png)



<h3>Home Screen </h3>
<p> After loging in a user will be met with a minimalist UI where they can open the sideDrawer to modify account settings, or Begin requesting their service </p>

![](Github%20Preview%20Images/RequestService:Home.png)
![](Github%20Preview%20Images/RequestService%20-%20service%20menu.png)
![](Github%20Preview%20Images/RequestService%20-%20SideDrawer.png)
