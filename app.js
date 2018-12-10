$(function () {
  new Vue({
    el: '#app',
    data: {
      search: '',
      company: {},
      jobs: []
    },
    mounted: function () {
      $.getJSON('db.json?t' + new Date(), function (res) {
        this.company = res.company
        this.jobs = res.jobs
        $('#app').show()
      }.bind(this))
    },
    computed: {
      displayJobs: function () {
        return $.grep(this.jobs, function (job) {
          if (!this.search) return true
          return job.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        }.bind(this))
      }
    },
    methods: {
      goUrl: function (job) {
        location.href = job.url
      }
    }
  })
})
