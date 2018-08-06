<template>
<v-app id="inspire">
    <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="blue darken-3"
    dark
    app
    fixed
    >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <span class="hidden-sm-and-down">College Scorecard</span>
    </v-toolbar-title>
    <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search by College Name"
        class="hidden-sm-and-down"
        v-model="collegeName"
        v-on:keyup.enter="search(collegeName)"
    ></v-text-field>
    <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
    <v-container fluid fill-height>
        <v-layout justify-center align-center>
            <college></college>
        </v-layout>
    </v-container>
    </v-content>
</v-app>
</template>

<script>
import College from './College.vue'

export default {
  name: 'Home',
  components: {
    College
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'contacts', text: 'User Dashboard' }
    ]
  }),
  props: {
    source: String
  },
  methods: {
    search: function (collegeName) {
      console.log(collegeName)
      this.$http.get('/college/' + collegeName)
        .then((resp) => {
          if (resp.data && resp.data.results && resp.data.results.length) {
            this.$store.dispatch('collegeInfo', resp.data.results[0].school)
            this.$store.dispatch('latestYearData', resp.data.results[0])
          }
        })
    }
  },
  mounted: function () {
    if (!this.isLoggedIn) {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
