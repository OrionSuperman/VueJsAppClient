<template>
    <v-layout row wrap>
        <v-flex xs12 v-if="collegeName">
          <h2>{{latestYearData.year}} {{collegeName}} Scorecard</h2>
          <ul>
            <li>Name: {{collegeName}}</li>
            <li v-if="collegeAlias">Alias: {{collegeAlias}}</li>
            <li>Website: {{collegeWebsite}}</li>
            <li>Location: {{collegeCity}}, {{collegeState}} {{collegeZip}}</li>
            <li>Students Enrolled: {{latestYearData.student.size}}</li>
          </ul>
          <v-spacer></v-spacer>
          <v-divider inset></v-divider>
          <v-flex xs12 >
            <h2>Program Percentages</h2>
            <pie-chart :donut="true"
              :data="programPercent"
              ></pie-chart>
          </v-flex>
          <v-spacer></v-spacer>
          <v-divider inset></v-divider>
          <v-flex xs12>
            <h2>Race and Ethnicity</h2>
            <pie-chart :donut="true"
              :data="raceEthnicity"
              ></pie-chart>
          </v-flex>
          <v-spacer></v-spacer>
          <v-divider inset></v-divider>
          <v-flex xs12>
            <h2>Net Price by Income Level</h2>
            <line-chart
              :data="netPrice"
              ></line-chart>
          </v-flex>
        </v-flex>
        <v-flex xs12 v-else>
          <h2>Please search for a college to view it's scorecard</h2>
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
    latestYearData () {
      return this.$store.state.college.latestYearData
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
    },
    getLatestYearData: function () {
      this.$store.dispatch('getLatestYearData')
    }
  }
}
</script>

<style>

</style>
