import {CFCMCalendar} from './src/Plugins_es6_calendar.babel.min.js'
export default {
 	install: function(Vue) {
	 Object.defineProperty(Vue.prototype, '$Calendar', { value: CFCMCalendar });
  }
}