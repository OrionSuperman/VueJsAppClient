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
    <v-btn
    fab
    bottom
    right
    color="pink"
    dark
    fixed
    @click.stop="dialog = !dialog"
    >
    <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
    <v-card>
        <v-card-title
        class="grey lighten-4 py-4 title"
        >
        Create contact
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
        <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
            <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                >
                </v-avatar>
                <v-text-field
                placeholder="Name"
                ></v-text-field>
            </v-layout>
            </v-flex>
            <v-flex xs6>
            <v-text-field
                prepend-icon="business"
                placeholder="Company"
            ></v-text-field>
            </v-flex>
            <v-flex xs6>
            <v-text-field
                placeholder="Job title"
            ></v-text-field>
            </v-flex>
            <v-flex xs12>
            <v-text-field
                prepend-icon="mail"
                placeholder="Email"
            ></v-text-field>
            </v-flex>
            <v-flex xs12>
            <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone"
            ></v-text-field>
            </v-flex>
            <v-flex xs12>
            <v-text-field
                prepend-icon="notes"
                placeholder="Notes"
            ></v-text-field>
            </v-flex>
        </v-layout>
        </v-container>
        <v-card-actions>
        <v-btn flat color="primary">More</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
        <v-btn flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>
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
      // const vm = this
      console.log(collegeName)
      // let me = this
      this.$http.get('/college/' + collegeName)
        .then((resp) => {
          //console.log(resp.data.results)
          if (resp.data.results && resp.data.results.length) {
            //console.log(resp.data.results[0].school)
            this.$store.collegeInfo(resp.data.results[0].school)
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
