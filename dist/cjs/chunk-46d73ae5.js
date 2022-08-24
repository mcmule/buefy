'use strict'

var __chunk_1 = require('./chunk-45739695.js')
var helpers = require('./helpers.js')
var __chunk_2 = require('./chunk-437dd7a0.js')
var __chunk_5 = require('./chunk-13e039f5.js')

var script = {
    name: 'BTooltip',
    props: {
        active: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: function _default() {
                return __chunk_2.config.defaultTooltipType
            }
        },
        label: String,
        delay: {
            type: Number,
            default: function _default() {
                return __chunk_2.config.defaultTooltipDelay
            }
        },
        closeDelay: {
            type: Number,
            default: function _default() {
                return __chunk_2.config.defaultTooltipCloseDelay
            }
        },
        position: {
            type: String,
            default: 'is-top',
            validator: function validator(value) {
                return ['is-top', 'is-bottom', 'is-left', 'is-right'].indexOf(value) > -1
            }
        },
        triggers: {
            type: Array,
            default: function _default() {
                return ['hover']
            }
        },
        always: Boolean,
        square: Boolean,
        dashed: Boolean,
        multilined: Boolean,
        size: {
            type: String,
            default: 'is-medium'
        },
        appendToBody: Boolean,
        animated: {
            type: Boolean,
            default: true
        },
        animation: {
            type: String,
            default: 'fade'
        },
        contentClass: String,
        autoClose: {
            type: [Array, Boolean],
            default: true
        }
    },
    data: function data() {
        return {
            isActive: false,
            triggerStyle: {},
            timer: null,
            _bodyEl: undefined // Used to append to body

        }
    },
    computed: {
        rootClasses: function rootClasses() {
            return ['b-tooltip', this.type, this.position, this.size, {
                'is-square': this.square,
                'is-always': this.always,
                'is-multiline': this.multilined,
                'is-dashed': this.dashed
            }]
        },
        newAnimation: function newAnimation() {
            return this.animated ? this.animation : undefined
        }
    },
    watch: {
        isActive: function isActive() {
            this.$emit(this.isActive ? 'open' : 'close')

            if (this.appendToBody) {
                this.updateAppendToBody()
            }
        }
    },
    methods: {
        updateAppendToBody: function updateAppendToBody() {
            var tooltip = this.$refs.tooltip
            var trigger = this.$refs.trigger

            if (tooltip && trigger) {
                // update wrapper tooltip
                var tooltipEl = this.$data._bodyEl.children[0]
                tooltipEl.classList.forEach(function (item) {
                    return tooltipEl.classList.remove(item)
                })

                if (this.$vnode && this.$vnode.data && this.$vnode.data.staticClass) {
                    tooltipEl.classList.add(this.$vnode.data.staticClass)
                }

                this.rootClasses.forEach(function (item) {
                    if (__chunk_1._typeof(item) === 'object') {
                        for (var key in item) {
                            if (item[key]) {
                                tooltipEl.classList.add(key)
                            }
                        }
                    } else {
                        tooltipEl.classList.add(item)
                    }
                })
                var rect = trigger.getBoundingClientRect()
                var top = rect.top + window.scrollY
                var left = rect.left + window.scrollX
                var quaterHeight = trigger.clientHeight / 2 / 2

                switch (this.position) {
                    case 'is-top':
                        tooltipEl.style.width = ''.concat(trigger.clientWidth, 'px')
                        tooltipEl.style.height = '0px'
                        top -= trigger.clientHeight - quaterHeight
                        break

                    case 'is-bottom':
                        tooltipEl.style.width = ''.concat(trigger.clientWidth, 'px')
                        tooltipEl.style.height = '0px'
                        top += quaterHeight
                        break

                    case 'is-left':
                        tooltipEl.style.width = '0px'
                        tooltipEl.style.height = ''.concat(trigger.clientHeight, 'px')
                        break

                    case 'is-right':
                        tooltipEl.style.width = '0px'
                        tooltipEl.style.height = ''.concat(trigger.clientHeight, 'px')
                        left += trigger.clientWidth
                        break
                }

                var wrapper = this.$data._bodyEl
                wrapper.style.position = 'absolute'
                wrapper.style.top = ''.concat(top, 'px')
                wrapper.style.left = ''.concat(left, 'px')
                wrapper.style.width = '0px'
                wrapper.style.zIndex = this.isActive || this.always ? '99' : '-1'
                this.triggerStyle = {
                    zIndex: this.isActive || this.always ? '100' : undefined
                }
            }
        },
        onClick: function onClick() {
            var _this = this

            if (this.triggers.indexOf('click') < 0) return // if not active, toggle after clickOutside event
            // this fixes toggling programmatic

            this.$nextTick(function () {
                setTimeout(function () {
                    return _this.open()
                })
            })
        },
        onHover: function onHover() {
            if (this.triggers.indexOf('hover') < 0) return
            this.open()
        },
        onContextMenu: function onContextMenu(e) {
            if (this.triggers.indexOf('contextmenu') < 0) return
            e.preventDefault()
            this.open()
        },
        onFocus: function onFocus() {
            if (this.triggers.indexOf('focus') < 0) return
            this.open()
        },
        open: function open() {
            var _this2 = this

            if (this.delay) {
                this.timer = setTimeout(function () {
                    _this2.isActive = true
                    _this2.timer = null
                }, this.delay)
            } else {
                this.isActive = true
            }
        },
        close: function close() {
            var _this3 = this

            if (typeof this.autoClose === 'boolean') {
                if (this.autoClose && this.timer) clearTimeout(this.timer)

                if (this.closeDelay) {
                    this.timer = setTimeout(function () {
                        _this3.isActive = !_this3.autoClose
                        _this3.timer = null
                    }, this.closeDelay)
                } else {
                    this.isActive = !this.autoClose
                }
            }
        },

        /**
    * Close tooltip if clicked outside.
    */
        clickedOutside: function clickedOutside(event) {
            if (this.isActive) {
                if (Array.isArray(this.autoClose)) {
                    if (this.autoClose.includes('outside')) {
                        if (!this.isInWhiteList(event.target)) {
                            this.isActive = false
                            return
                        }
                    }

                    if (this.autoClose.includes('inside')) {
                        if (this.isInWhiteList(event.target)) this.isActive = false
                    }
                }
            }
        },

        /**
     * Keypress event that is bound to the document
     */
        keyPress: function keyPress(_ref) {
            var key = _ref.key

            if (this.isActive && (key === 'Escape' || key === 'Esc')) {
                if (Array.isArray(this.autoClose)) {
                    if (this.autoClose.indexOf('escape') >= 0) this.isActive = false
                }
            }
        },

        /**
    * White-listed items to not close when clicked.
    */
        isInWhiteList: function isInWhiteList(el) {
            if (el === this.$refs.content) return true // All chidren from content

            if (this.$refs.content !== undefined) {
                var children = this.$refs.content.querySelectorAll('*')
                var _iteratorNormalCompletion = true
                var _didIteratorError = false
                var _iteratorError = undefined

                try {
                    for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var child = _step.value

                        if (el === child) {
                            return true
                        }
                    }
                } catch (err) {
                    _didIteratorError = true
                    _iteratorError = err
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return()
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError
                        }
                    }
                }
            }

            return false
        }
    },
    mounted: function mounted() {
        if (this.appendToBody && typeof window !== 'undefined') {
            this.$data._bodyEl = helpers.createAbsoluteElement(this.$refs.content)
            this.updateAppendToBody()
        }
    },
    created: function created() {
        if (typeof window !== 'undefined') {
            document.addEventListener('click', this.clickedOutside)
            document.addEventListener('keyup', this.keyPress)
        }
    },
    beforeDestroy: function beforeDestroy() {
        if (typeof window !== 'undefined') {
            document.removeEventListener('click', this.clickedOutside)
            document.removeEventListener('keyup', this.keyPress)
        }

        if (this.appendToBody) {
            helpers.removeElement(this.$data._bodyEl)
        }
    }
}

/* script */
const __vue_script__ = script

/* template */
var __vue_render__ = function () { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', {ref: 'tooltip', class: _vm.rootClasses}, [_c('transition', {attrs: {'name': _vm.newAnimation}}, [_c('div', {directives: [{name: 'show', rawName: 'v-show', value: (_vm.active && (_vm.isActive || _vm.always)), expression: 'active && (isActive || always)'}], ref: 'content', class: ['tooltip-content', _vm.contentClass]}, [(_vm.label) ? [_vm._v(_vm._s(_vm.label))] : (_vm.$slots.content) ? [_vm._t('content')] : _vm._e()], 2)]), _c('div', {ref: 'trigger', staticClass: 'tooltip-trigger', style: (_vm.triggerStyle), on: {'click': _vm.onClick, 'contextmenu': _vm.onContextMenu, 'mouseenter': _vm.onHover, '!focus': function ($event) { return _vm.onFocus($event) }, '!blur': function ($event) { return _vm.close($event) }, 'mouseleave': _vm.close}}, [_vm._t('default')], 2)], 1) }
var __vue_staticRenderFns__ = []

/* style */
const __vue_inject_styles__ = undefined
/* scoped */
const __vue_scope_id__ = undefined
/* module identifier */
const __vue_module_identifier__ = undefined
/* functional template */
const __vue_is_functional_template__ = false
/* style inject */

/* style inject SSR */

var Tooltip = __chunk_5.__vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
)

exports.Tooltip = Tooltip
