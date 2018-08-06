const state = {
  name: '',
  alias: '',
  website: '',
  city: '',
  state: '',
  zip: '',
  studentCount: '',
  latestYearData: {},
  programPercent: {},
  raceEthnicity: {},
  netPrice: {},
  rawResp: {}
}

const getters = {
  name: state => state.name,
  alias: state => state.alias,
  website: state => state.website,
  city: state => state.city,
  state: state => state.state,
  zip: state => state.zip,
  studentCount: state => state.studentCount,
  programPercent: state => state.programPercent,
  raceEthnicity: state => state.raceEthnicity,
  netPrice: state => state.netPrice,
  rawResp: state => state.rawResp
}

const actions = {
  collegeInfo ({ commit }, payload) {
    commit('collegeInfo', payload)
  },
  latestYearData ({ commit }, payload) {
    var currentDate = new Date()
    var year = currentDate.getFullYear()
    while (year) {
      if (payload[year]) {
        payload = payload[year]
        payload.year = year
        break
      }
      year--
    }
    commit('latestYearData', payload)
  }
}

const mutations = {
  collegeInfo (state, payload) {
    state.name = payload.name
    state.alias = payload.alias
    state.website = payload.school_url
    state.city = payload.city
    state.state = payload.state
    state.zip = payload.zip
  },
  latestYearData (state, payload) {
    state.latestYearData = payload
    state.programPercent = payload.academics.program_percentage
    state.raceEthnicity = payload.student.demographics.race_ethnicity
    state.netPrice = payload.cost.net_price.public.by_income_level
  },
  programPercent (state, payload) {
    state.programPercent = payload
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
