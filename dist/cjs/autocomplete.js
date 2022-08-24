'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

require('./chunk-45739695.js')
require('./helpers.js')
require('./chunk-437dd7a0.js')
require('./chunk-d18d1cec.js')
require('./chunk-16474536.js')
var __chunk_5 = require('./chunk-13e039f5.js')
require('./chunk-6cfb17ba.js')
var __chunk_7 = require('./chunk-56bd6fdb.js')

var Plugin = {
    install: function install(Vue) {
        __chunk_5.registerComponent(Vue, __chunk_7.Autocomplete)
    }
}
__chunk_5.use(Plugin)

exports.BAutocomplete = __chunk_7.Autocomplete
exports.default = Plugin
