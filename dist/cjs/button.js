'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

require('./chunk-45739695.js')
require('./helpers.js')
require('./chunk-437dd7a0.js')
require('./chunk-16474536.js')
var __chunk_5 = require('./chunk-13e039f5.js')
var __chunk_8 = require('./chunk-83fc906d.js')

var Plugin = {
    install: function install(Vue) {
        __chunk_5.registerComponent(Vue, __chunk_8.Button)
    }
}
__chunk_5.use(Plugin)

exports.BButton = __chunk_8.Button
exports.default = Plugin
