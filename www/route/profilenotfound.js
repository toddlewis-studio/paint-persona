const el = require('../el/_el.js')

module.exports = () => el.nav(
  el.route(
    el.card('',
      `<h1>Profile not found</h1>
      <a href="#">Home</a>`
    )
  )
)