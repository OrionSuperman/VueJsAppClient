const state = {
  name: '',
  alias: '',
  website: '',
  city: '',
  state: '',
  zip: '',
  studentCount: '',
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
    payload.name = 'a'
    payload.alias = 'a'
    payload.website = 'a'
    payload.city = 'a'
    payload.state = 'a'
    payload.zip = 'a'
    payload.studentCount = '1'
    payload.programPercent = {}
    payload.raceEthnicity = {}
    payload.netPrice = {}
    commit('collegeInfo', payload)
  }
}

const mutations = {
  collegeInfo (state, payload) {
    console.log(payload)
    state.name = payload.name
    state.alias = payload.alias
    state.website = payload.website
    state.city = payload.city
    state.state = payload.state
    state.zip = payload.zip
    // state.studentCount = payload.studentCount
    // state.programPercent = payload.programPercent
    // state.raceEthnicity = payload.raceEthnicity
    // state.netPrice = payload.netPrice
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
