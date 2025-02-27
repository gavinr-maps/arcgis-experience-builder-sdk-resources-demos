System.register(["jimu-core","esri/rest/support/Query"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "esri/rest/support/Query":
/*!******************************************!*\
  !*** external "esri/rest/support/Query" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/message-subscriber/src/runtime/widget.tsx ***!
  \***************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! esri/rest/support/Query */ "esri/rest/support/Query");


class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = { query: null };
        this.isDsConfigured = () => {
            if (this.props.useDataSources &&
                this.props.useDataSources.length === 1 &&
                this.props.useDataSources[0].fields &&
                this.props.useDataSources[0].fields.length === 1) {
                return true;
            }
            return false;
        };
    }
    componentDidUpdate(prevProps) {
        if (jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getValue(this.props, 'stateProps.queryString') !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getValue(prevProps, 'stateProps.queryString')) {
            const q = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_1__["default"]({
                where: this.props.stateProps.queryString, //Get queryString from store
                outFields: ['*']
            });
            this.setState({ query: q.toJSON() });
        }
    }
    componentDidMount() {
        const q = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_1__["default"]({
            where: this.props.stateProps ? this.props.stateProps.queryString : '1=1',
            outFields: ['*']
        });
        this.setState({ query: q.toJSON() });
    }
    render() {
        if (!this.isDsConfigured()) {
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h3", null, "Please config data source.");
        }
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-subscribe", style: { overflow: 'auto', maxHeight: '700px' } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h5", null,
                "This widget will listen to a ",
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("b", null, "STRING_SELECTION_CHANGE"),
                " and ",
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("b", null, "FEATURE_SELECTION_CHANGE"),
                " message to run a query"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: this.props.useDataSources[0], query: this.state.query, widgetId: this.props.id, localId: "query-result" }, (ds, info) => {
                const isLoaded = info.status === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loaded;
                // eslint-disable-next-line no-mixed-operators
                const fName = this.props.useDataSources[0].fields && this.props.useDataSources[0].fields[0] || 'objectid';
                const list = isLoaded
                    ? ds.getRecords().map((r, i) => {
                        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { key: i }, r.getData()[fName]);
                    })
                    : null;
                let content;
                if (!this.props.stateProps) {
                    content = 'no message';
                }
                else {
                    content = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                            "The query string: ",
                            this.props.stateProps.queryString),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                            "query state: ",
                            info.status),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                            "query result: ",
                            fName),
                        list);
                }
                return content;
            }));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tZXNzYWdlLXN1YnNjcmliZXIvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUY7QUFDakc7QUFFNUIsTUFBTSxNQUFPLFNBQVEsNENBQUssQ0FBQyxhQUFzRDtJQUFoRzs7UUFDRSxVQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBb0J2QixtQkFBYyxHQUFHLEdBQUcsRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYztnQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07Z0JBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ25ELE9BQU8sSUFBSTtZQUNiLENBQUM7WUFDRCxPQUFPLEtBQUs7UUFDZCxDQUFDO0lB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QUFJLENBQ0Q7Z0JBQ1IsQ0FBQztnQkFFRCxPQUFPLE9BQU87WUFDaEIsQ0FBQyxDQUNvQixDQUNuQjtJQUNSLENBQUM7Q0FDRjtBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tZXNzYWdlLXN1YnNjcmliZXIvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9yZXN0X3N1cHBvcnRfUXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QsIHV0aWxzLCB0eXBlIERhdGFTb3VyY2UsIERhdGFTb3VyY2VDb21wb25lbnQsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIERhdGFTb3VyY2VTdGF0dXMsIHR5cGUgSU1EYXRhU291cmNlSW5mbyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCBRdWVyeSBmcm9tICdlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczx1bmtub3duPiwgeyBxdWVyeTogYW55IH0+IHtcbiAgc3RhdGUgPSB7IHF1ZXJ5OiBudWxsIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBBbGxXaWRnZXRQcm9wczx1bmtub3duPikge1xuICAgIGlmICh1dGlscy5nZXRWYWx1ZSh0aGlzLnByb3BzLCAnc3RhdGVQcm9wcy5xdWVyeVN0cmluZycpICE9PSB1dGlscy5nZXRWYWx1ZShwcmV2UHJvcHMsICdzdGF0ZVByb3BzLnF1ZXJ5U3RyaW5nJykpIHtcbiAgICAgIGNvbnN0IHEgPSBuZXcgUXVlcnkoe1xuICAgICAgICB3aGVyZTogdGhpcy5wcm9wcy5zdGF0ZVByb3BzLnF1ZXJ5U3RyaW5nLCAvL0dldCBxdWVyeVN0cmluZyBmcm9tIHN0b3JlXG4gICAgICAgIG91dEZpZWxkczogWycqJ11cbiAgICAgIH0pXG4gICAgICB0aGlzLnNldFN0YXRlKHsgcXVlcnk6IHEudG9KU09OKCkgfSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBxID0gbmV3IFF1ZXJ5KHtcbiAgICAgIHdoZXJlOiB0aGlzLnByb3BzLnN0YXRlUHJvcHMgPyB0aGlzLnByb3BzLnN0YXRlUHJvcHMucXVlcnlTdHJpbmcgOiAnMT0xJyxcbiAgICAgIG91dEZpZWxkczogWycqJ11cbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoeyBxdWVyeTogcS50b0pTT04oKSB9KVxuICB9XG5cbiAgaXNEc0NvbmZpZ3VyZWQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMgJiZcbiAgICAgIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxICYmXG4gICAgICB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmZpZWxkcyAmJlxuICAgICAgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc1swXS5maWVsZHMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuaXNEc0NvbmZpZ3VyZWQoKSkge1xuICAgICAgcmV0dXJuIDxoMz5cbiAgICAgICAgUGxlYXNlIGNvbmZpZyBkYXRhIHNvdXJjZS5cbiAgICAgIDwvaDM+XG4gICAgfVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXN1YnNjcmliZVwiIHN0eWxlPXt7IG92ZXJmbG93OiAnYXV0bycsIG1heEhlaWdodDogJzcwMHB4JyB9fT5cbiAgICAgIDxoNT5UaGlzIHdpZGdldCB3aWxsIGxpc3RlbiB0byBhIDxiPlNUUklOR19TRUxFQ1RJT05fQ0hBTkdFPC9iPiBhbmQgPGI+RkVBVFVSRV9TRUxFQ1RJT05fQ0hBTkdFPC9iPiBtZXNzYWdlIHRvIHJ1biBhIHF1ZXJ5PC9oNT5cbiAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50IHVzZURhdGFTb3VyY2U9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNbMF19IHF1ZXJ5PXt0aGlzLnN0YXRlLnF1ZXJ5fSB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH0gbG9jYWxJZD1cInF1ZXJ5LXJlc3VsdFwiPntcbiAgICAgICAgKGRzOiBEYXRhU291cmNlLCBpbmZvOiBJTURhdGFTb3VyY2VJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNMb2FkZWQgPSBpbmZvLnN0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Mb2FkZWRcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWl4ZWQtb3BlcmF0b3JzXG4gICAgICAgICAgY29uc3QgZk5hbWUgPSB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmZpZWxkcyAmJiB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmZpZWxkc1swXSB8fCAnb2JqZWN0aWQnXG5cbiAgICAgICAgICBjb25zdCBsaXN0ID0gaXNMb2FkZWRcbiAgICAgICAgICAgID8gZHMuZ2V0UmVjb3JkcygpLm1hcCgociwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l9PntyLmdldERhdGEoKVtmTmFtZV19PC9kaXY+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgbGV0IGNvbnRlbnRcbiAgICAgICAgICBpZiAoIXRoaXMucHJvcHMuc3RhdGVQcm9wcykge1xuICAgICAgICAgICAgY29udGVudCA9ICdubyBtZXNzYWdlJ1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50ID0gPGRpdj5cbiAgICAgICAgICAgICAgPGRpdj5UaGUgcXVlcnkgc3RyaW5nOiB7dGhpcy5wcm9wcy5zdGF0ZVByb3BzLnF1ZXJ5U3RyaW5nfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PnF1ZXJ5IHN0YXRlOiB7aW5mby5zdGF0dXN9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+cXVlcnkgcmVzdWx0OiB7Zk5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgIHtsaXN0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRlbnRcbiAgICAgICAgfVxuICAgICAgfTwvRGF0YVNvdXJjZUNvbXBvbmVudD5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==