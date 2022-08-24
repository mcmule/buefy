import './chunk-455cdeae.js'
import './helpers.js'
import './chunk-e92e3389.js'
import { r as registerComponent, u as use } from './chunk-cca88db8.js'
import './chunk-ad27431e.js'
import './chunk-42f463e6.js'
import { D as Dropdown, a as DropdownItem } from './chunk-e1818db8.js'
export { D as BDropdown, a as BDropdownItem } from './chunk-e1818db8.js'

var Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Dropdown)
        registerComponent(Vue, DropdownItem)
    }
}
use(Plugin)

export default Plugin
