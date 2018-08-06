<template>
    <v-layout row wrap>
        <v-flex xs12
        v-bind:name = "name"
        >
            <h2>{{name}} Scorecard</h2>
            <pie-chart :donut="true"></pie-chart>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'College',
  computed: {
    collegeName () {
      return this.$store.state.college.name
    },
    collegeAlias () {
      return this.$store.state.college.alias
    },
    collegeWebsite () {
      return this.$store.state.college.website
    },
    collegeCity () {
      return this.$store.state.college.city
    },
    collegeState () {
      return this.$store.state.college.state
    },
    collegeZip () {
      return this.$store.state.college.zip
    },
    studentCount () {
      return this.$store.state.college.studentCount
    },
    programPercent () {
      return this.$store.state.college.programPercent
    },
    raceEthnicity () {
      return this.$store.state.college.raceEthnicity
    },
    netPrice () {
      return this.$store.state.college.netPrice
    }
  },
  data: () => ({

  }),
  methods: {
    getCollege: function () {
      this.$store.dispatch('collegeInfo')
    }
  }
}
</script>

<style>

</style>
