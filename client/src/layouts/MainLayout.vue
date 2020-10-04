<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="closeBurger()"
        />

        <q-toolbar-title>
          Starwars characters
        </q-toolbar-title>

        <div>by Jonas Gertz</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="leftDrawerOpen"
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Made with',
    caption: 'Quasar',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'My github',
    icon: 'code',
    link: 'https://github.com/ztreg'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  mounted () {
    this.leftDrawerOpen = false
  },
  methods: {
    closeBurger () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>
