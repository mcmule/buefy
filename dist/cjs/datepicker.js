'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

require('./chunk-45739695.js')
require('./helpers.js')
require('./chunk-437dd7a0.js')
require('./chunk-d18d1cec.js')
require('./chunk-16474536.js')
var __chunk_5 = require('./chunk-13e039f5.js')
require('./chunk-6cfb17ba.js')
require('./chunk-a18d4d4d.js')
require('./chunk-ae7e641a.js')
require('./chunk-33b40815.js')
require('./chunk-ec48d9c0.js')
require('./chunk-e41814d1.js')
var __chunk_19 = require('./chunk-533bf7bd.js')

var Plugin = {
    install: function install(Vue) {
        __chunk_5.registerComponent(Vue, __chunk_19.Datepicker)
    }
}
__chunk_5.use(Plugin)

exports.BDatepicker = __chunk_19.Datepicker
exports.default = Plugin
