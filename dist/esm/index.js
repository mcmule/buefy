import './chunk-455cdeae.js'
import { merge } from './helpers.js'
import { s as setVueInstance, a as setOptions, c as config } from './chunk-e92e3389.js'
import './chunk-5dba4477.js'
import './chunk-79d3e504.js'
import { a as registerComponentProgrammatic, u as use } from './chunk-cca88db8.js'
import './chunk-e326ca4c.js'
import './chunk-9ddf10ab.js'
import Plugin from './autocomplete.js'
import Plugin$1 from './breadcrumb.js'
import './chunk-12393c3d.js'
import Plugin$2 from './button.js'
import './chunk-ad27431e.js'
import Plugin$3 from './carousel.js'
import './chunk-a5ee806e.js'
import './chunk-a1a77ea5.js'
import './chunk-e3cc596a.js'
import Plugin$4 from './checkbox.js'
import Plugin$6 from './collapse.js'
import './chunk-6338b6fc.js'
import './chunk-42f463e6.js'
import './chunk-e1818db8.js'
import './chunk-e97c8d7c.js'
import Plugin$5 from './clockpicker.js'
import Plugin$7 from './colorpicker.js'
import './chunk-0e1cbdb7.js'
import './chunk-10598f73.js'
import './chunk-653aa95d.js'
import Plugin$8 from './datepicker.js'
import './chunk-94a56274.js'
import Plugin$9 from './datetimepicker.js'
import './chunk-ba2abf61.js'
import Plugin$a from './dialog.js'
import Plugin$b from './dropdown.js'
import Plugin$c from './field.js'
import Plugin$d from './icon.js'
import Plugin$e from './image.js'
import Plugin$f from './input.js'
import './chunk-b9bdb0e4.js'
import './chunk-c027b2ac.js'
import Plugin$g from './loading.js'
import Plugin$h from './menu.js'
import './chunk-6614a872.js'
import Plugin$i from './message.js'
import Plugin$j from './modal.js'
import Plugin$l from './notification.js'
import './chunk-457e35f4.js'
import Plugin$k from './navbar.js'
import Plugin$m from './numberinput.js'
import './chunk-044e7cce.js'
import Plugin$n from './pagination.js'
import Plugin$o from './progress.js'
import Plugin$p from './radio.js'
import Plugin$q from './rate.js'
import Plugin$r from './select.js'
import Plugin$s from './skeleton.js'
import Plugin$t from './sidebar.js'
import Plugin$u from './slider.js'
import Plugin$v from './snackbar.js'
import './chunk-091022ac.js'
import './chunk-9ac6bb44.js'
import Plugin$w from './steps.js'
import Plugin$x from './switch.js'
import Plugin$y from './table.js'
import Plugin$z from './tabs.js'
import './chunk-1a4ba565.js'
import Plugin$A from './tag.js'
import Plugin$B from './taginput.js'
import Plugin$C from './timepicker.js'
import Plugin$D from './toast.js'
import Plugin$E from './tooltip.js'
import Plugin$F from './upload.js'
import ConfigComponent from './config.js'
export { bound, createAbsoluteElement, createNewEvent, escapeRegExpChars, getMonthNames, getValueByPath, getWeekdayNames, hasFlag, indexOf, isCustomElement, isDefined, isMobile, isNil, isVueComponent, isWebpSupported, matchWithGroups, merge, mod, multiColumnSort, removeDiacriticsFromString, removeElement, sign, toCssWidth } from './helpers.js'
export { default as Autocomplete } from './autocomplete.js'
export { default as Breadcrumb } from './breadcrumb.js'
export { default as Button } from './button.js'
export { default as Carousel } from './carousel.js'
export { default as Checkbox } from './checkbox.js'
export { default as Collapse } from './collapse.js'
export { default as Clockpicker } from './clockpicker.js'
export { default as Colorpicker } from './colorpicker.js'
export { default as Datepicker } from './datepicker.js'
export { default as Datetimepicker } from './datetimepicker.js'
export { default as Dialog, DialogProgrammatic } from './dialog.js'
export { default as Dropdown } from './dropdown.js'
export { default as Field } from './field.js'
export { default as Icon } from './icon.js'
export { default as Image } from './image.js'
export { default as Input } from './input.js'
export { default as Loading, LoadingProgrammatic } from './loading.js'
export { default as Menu } from './menu.js'
export { default as Message } from './message.js'
export { default as Modal, ModalProgrammatic } from './modal.js'
export { default as Notification, NotificationProgrammatic } from './notification.js'
export { default as Navbar } from './navbar.js'
export { default as Numberinput } from './numberinput.js'
export { default as Pagination } from './pagination.js'
export { default as Progress } from './progress.js'
export { default as Radio } from './radio.js'
export { default as Rate } from './rate.js'
export { default as Select } from './select.js'
export { default as Skeleton } from './skeleton.js'
export { default as Sidebar } from './sidebar.js'
export { default as Slider } from './slider.js'
export { default as Snackbar, SnackbarProgrammatic } from './snackbar.js'
export { default as Steps } from './steps.js'
export { default as Switch } from './switch.js'
export { default as Table } from './table.js'
export { default as Tabs } from './tabs.js'
export { default as Tag } from './tag.js'
export { default as Taginput } from './taginput.js'
export { default as Timepicker } from './timepicker.js'
export { default as Toast, ToastProgrammatic } from './toast.js'
export { default as Tooltip } from './tooltip.js'
export { default as Upload } from './upload.js'
export { default as ConfigProgrammatic } from './config.js'

var components = /* #__PURE__ */Object.freeze({
    Autocomplete: Plugin,
    Breadcrumb: Plugin$1,
    Button: Plugin$2,
    Carousel: Plugin$3,
    Checkbox: Plugin$4,
    Clockpicker: Plugin$5,
    Collapse: Plugin$6,
    Colorpicker: Plugin$7,
    Datepicker: Plugin$8,
    Datetimepicker: Plugin$9,
    Dialog: Plugin$a,
    Dropdown: Plugin$b,
    Field: Plugin$c,
    Icon: Plugin$d,
    Image: Plugin$e,
    Input: Plugin$f,
    Loading: Plugin$g,
    Menu: Plugin$h,
    Message: Plugin$i,
    Modal: Plugin$j,
    Navbar: Plugin$k,
    Notification: Plugin$l,
    Numberinput: Plugin$m,
    Pagination: Plugin$n,
    Progress: Plugin$o,
    Radio: Plugin$p,
    Rate: Plugin$q,
    Select: Plugin$r,
    Skeleton: Plugin$s,
    Sidebar: Plugin$t,
    Slider: Plugin$u,
    Snackbar: Plugin$v,
    Steps: Plugin$w,
    Switch: Plugin$x,
    Table: Plugin$y,
    Tabs: Plugin$z,
    Tag: Plugin$A,
    Taginput: Plugin$B,
    Timepicker: Plugin$C,
    Toast: Plugin$D,
    Tooltip: Plugin$E,
    Upload: Plugin$F
})

var Buefy = {
    install: function install(Vue) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
        setVueInstance(Vue) // Options

        setOptions(merge(config, options, true)) // Components

        for (var componentKey in components) {
            Vue.use(components[componentKey])
        } // Config component

        registerComponentProgrammatic(Vue, 'config', ConfigComponent)
        Vue.prototype.$buefy.globalNoticeInterval = null
    }
}
use(Buefy)

export default Buefy
