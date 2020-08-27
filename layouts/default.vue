<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSidenav 
      :show="displaySidenav"
      @close="displaySidenav = false"
      />
    <Nuxt />
  </div>
</template>
<script>
import TheHeader from '@/components/navigation/TheHeader'
import TheSidnav from '@/components/navigation/TheSidenav'
import TheSidnavToggle from '@/components/navigation/TheSidenavToggle'

export default {
  components :{
    TheHeader,
    TheSidnav,
    TheSidnavToggle,
  },
  data () {
    return {
      displaySidenav : true,
    }

  }
}
</script>
<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}

</style>
