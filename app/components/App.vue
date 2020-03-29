<template lang="html">
  <RadSideDrawer ref="drawer" drawerLocation="Left" gesturesEnabled="false" :drawerTransition="transition">
    <StackLayout ~drawerContent backgroundColor="#989a9c">
      <slot name="drawerContent"></slot>
    </StackLayout>
    <Frame ~mainContent ref="drawerMainContent">
      <slot name="mainContent"></slot>

    </Frame>
  </RadSideDrawer>
</template>

<script>
    import { SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
    
    export default {
        data () {
          return {
            transition: new SlideInOnTopTransition()
          }
        }
  }
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
