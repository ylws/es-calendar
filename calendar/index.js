import {CFCMCalendar} from './src/Plugins_es6_calendar.babel.min.js'
export default {
 	install: function(Vue, name = '$Calendar') {
	 Object.defineProperty(Vue.prototype, name, { value: CFCMCalendar });
  }
}