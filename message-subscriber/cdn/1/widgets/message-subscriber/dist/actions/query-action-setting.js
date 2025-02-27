System.register(["jimu-core","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/message-subscriber/src/actions/query-action-setting.tsx ***!
  \*****************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/** @jsx jsx */



class QueryActionSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        /**
         * Returns the init config.The config contains the useDataSource attribute.
         * Gets the value of useDataSource: Returns its DataSource if it has been specified.
         * If not, specify the useDataSource that is already selected in the publish widget.
        */
        this.getInitConfig = () => {
            const messageWidgetId = this.props.messageWidgetId;
            const config = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder.appConfig;
            const messageWidgetJson = config.widgets[messageWidgetId];
            let useDataSource = null;
            if (!this.props.config.useDataSource) {
                if (messageWidgetJson && messageWidgetJson.useDataSources && messageWidgetJson.useDataSources[0] && messageWidgetJson.useDataSources.length === 1) {
                    useDataSource = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                        dataSourceId: messageWidgetJson.useDataSources[0].dataSourceId,
                        mainDataSourceId: messageWidgetJson.useDataSources[0].mainDataSourceId,
                        dataViewId: messageWidgetJson.useDataSources[0].dataViewId,
                        rootDataSourceId: messageWidgetJson.useDataSources[0].rootDataSourceId
                    });
                }
            }
            else {
                useDataSource = this.props.config.useDataSource;
            }
            return {
                useDataSource: useDataSource
            };
        };
        /**
         * Get the selected DataSource from subscribe-widget through widgetId.
         *
         * @param widgetId The id of the widget that listens to for the message.
        */
        this.getDsSelectorSourceData = (widgetId) => {
            var _a, _b, _c;
            const appConfig = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig;
            const widgetJson = (_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _c === void 0 ? void 0 : _c[widgetId];
            const dsSelectorSource = widgetJson && widgetJson.useDataSources;
            return dsSelectorSource;
        };
        /**
         * Select the fields to query in subscribe-widget.
        */
        this.onFieldSelected = (allSelectedFields, ds) => {
            const field = allSelectedFields[0];
            if (!field) {
                return;
            }
            if (this.props.config.useDataSource) {
                //Save the message action configuration to config
                this.props.onSettingChange({
                    actionId: this.props.actionId,
                    config: this.props.config.set('fieldName', field.name).set('useDataSource', {
                        dataSourceId: this.props.config.useDataSource.dataSourceId,
                        mainDataSourceId: this.props.config.useDataSource.mainDataSourceId,
                        dataViewId: this.props.config.useDataSource.dataViewId,
                        rootDataSourceId: this.props.config.useDataSource.rootDataSourceId,
                        fields: allSelectedFields.map(f => f.jimuName)
                    })
                });
            }
        };
    }
    componentDidMount() {
        const initConfig = this.getInitConfig();
        this.props.onSettingChange({
            actionId: this.props.actionId,
            config: this.props.config.set('useDataSource', initConfig.useDataSource)
        });
    }
    render() {
        const useDataSources = this.getDsSelectorSourceData(this.props.widgetId);
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Select field" }, useDataSources && useDataSources.length > 0 &&
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mt-2" },
                    "Please choose a Field to query:",
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.FieldSelector, { useDataSources: useDataSources, onChange: this.onFieldSelected, selectedFields: this.props.config.useDataSource && this.props.config.useDataSource.fields
                            ? this.props.config.useDataSource.fields
                            : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]) }))));
    }
}
QueryActionSetting.defaultProps = {
    config: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        useDataSource: null
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueryActionSetting);

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tZXNzYWdlLXN1YnNjcmliZXIvZGlzdC9hY3Rpb25zL3F1ZXJ5LWFjdGlvbi1zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLGVBQWU7QUFDNks7QUFDdkg7QUFDRDtBQVdwRSxNQUFNLGtCQUFtQixTQUFRLDRDQUFLLENBQUMsYUFBbUQ7SUFBMUY7O1FBT0U7Ozs7VUFJRTtRQUNGLGtCQUFhLEdBQUcsR0FBRyxFQUFFO1lBQ25CLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZTtZQUNsRCxNQUFNLE1BQU0sR0FBRyxzREFBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsaUJBQWlCLENBQUMsU0FBUztZQUNuRSxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1lBRXpELElBQUksYUFBYSxHQUFvQixJQUFJO1lBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckMsSUFBSSxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxjQUFjLElBQUksaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLGNBQWMsQ0FB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LENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDeEUsT0FBTztZQUNMLCtDQUFDLCtFQUFjLElBQUMsS0FBSyxFQUFDLGNBQWMsSUFFaEMsY0FBYyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDM0Msd0RBQUssU0FBUyxFQUFDLE1BQU07O29CQUNuQiwrQ0FBQyxnRkFBYSxJQUNaLGNBQWMsRUFBRSxjQUFjLEVBQzlCLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUM5QixjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNOzRCQUN2RixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU07NEJBQ3hDLENBQUMsQ0FBQyxvREFBUyxDQUFDLEVBQUUsQ0FBQyxHQUNqQixDQUNFLENBRU8sQ0FDYjtJQUNSLENBQUM7O0FBakdNLCtCQUFZLEdBQUc7SUFDcEIsTUFBTSxFQUFFLG9EQUFTLENBQUM7UUFDaEIsYUFBYSxFQUFFLElBQUk7S0FDcEIsQ0FBQztDQUNIO0FBZ0dILGlFQUFlLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWVzc2FnZS1zdWJzY3JpYmVyL3NyYy9hY3Rpb25zL3F1ZXJ5LWFjdGlvbi1zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfZGF0YV9zb3VyY2Vfc2VsZWN0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCwgdHlwZSBBY3Rpb25TZXR0aW5nUHJvcHMsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB0eXBlIElNRmllbGRTY2hlbWEsIGdldEFwcFN0b3JlLCBJbW11dGFibGUsIHR5cGUgVXNlRGF0YVNvdXJjZSwgdHlwZSBJTVVzZURhdGFTb3VyY2UsIHR5cGUgRGF0YVNvdXJjZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEZpZWxkU2VsZWN0b3IgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yJ1xuaW1wb3J0IHsgU2V0dGluZ1NlY3Rpb24gfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1pbnRlcmZhY2VcbmludGVyZmFjZSBTdGF0ZXMge31cblxuaW50ZXJmYWNlIENvbmZpZyB7XG4gIHVzZURhdGFTb3VyY2U6IFVzZURhdGFTb3VyY2Vcbn1cblxuZXhwb3J0IHR5cGUgSU1Db25maWcgPSBJbW11dGFibGVPYmplY3Q8Q29uZmlnPlxuXG5jbGFzcyBRdWVyeUFjdGlvblNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFjdGlvblNldHRpbmdQcm9wczxJTUNvbmZpZz4sIFN0YXRlcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbmZpZzogSW1tdXRhYmxlKHtcbiAgICAgIHVzZURhdGFTb3VyY2U6IG51bGxcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluaXQgY29uZmlnLlRoZSBjb25maWcgY29udGFpbnMgdGhlIHVzZURhdGFTb3VyY2UgYXR0cmlidXRlLlxuICAgKiBHZXRzIHRoZSB2YWx1ZSBvZiB1c2VEYXRhU291cmNlOiBSZXR1cm5zIGl0cyBEYXRhU291cmNlIGlmIGl0IGhhcyBiZWVuIHNwZWNpZmllZC5cbiAgICogSWYgbm90LCBzcGVjaWZ5IHRoZSB1c2VEYXRhU291cmNlIHRoYXQgaXMgYWxyZWFkeSBzZWxlY3RlZCBpbiB0aGUgcHVibGlzaCB3aWRnZXQuXG4gICovXG4gIGdldEluaXRDb25maWcgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZVdpZGdldElkID0gdGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWRcbiAgICBjb25zdCBjb25maWcgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwU3RhdGVJbkJ1aWxkZXIuYXBwQ29uZmlnXG4gICAgY29uc3QgbWVzc2FnZVdpZGdldEpzb24gPSBjb25maWcud2lkZ2V0c1ttZXNzYWdlV2lkZ2V0SWRdXG5cbiAgICBsZXQgdXNlRGF0YVNvdXJjZTogSU1Vc2VEYXRhU291cmNlID0gbnVsbFxuICAgIGlmICghdGhpcy5wcm9wcy5jb25maWcudXNlRGF0YVNvdXJjZSkge1xuICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRKc29uICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzWzBdICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB1c2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcbiAgICAgICAgICBkYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCxcbiAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlc1swXS5tYWluRGF0YVNvdXJjZUlkLFxuICAgICAgICAgIGRhdGFWaWV3SWQ6IG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFWaWV3SWQsXG4gICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldEpzb24udXNlRGF0YVNvdXJjZXNbMF0ucm9vdERhdGFTb3VyY2VJZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB1c2VEYXRhU291cmNlID0gdGhpcy5wcm9wcy5jb25maWcudXNlRGF0YVNvdXJjZVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB1c2VEYXRhU291cmNlOiB1c2VEYXRhU291cmNlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IGluaXRDb25maWcgPSB0aGlzLmdldEluaXRDb25maWcoKVxuXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgndXNlRGF0YVNvdXJjZScsIGluaXRDb25maWcudXNlRGF0YVNvdXJjZSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2VsZWN0ZWQgRGF0YVNvdXJjZSBmcm9tIHN1YnNjcmliZS13aWRnZXQgdGhyb3VnaCB3aWRnZXRJZC5cbiAgICpcbiAgICogQHBhcmFtIHdpZGdldElkIFRoZSBpZCBvZiB0aGUgd2lkZ2V0IHRoYXQgbGlzdGVucyB0byBmb3IgdGhlIG1lc3NhZ2UuXG4gICovXG4gIGdldERzU2VsZWN0b3JTb3VyY2VEYXRhID0gKHdpZGdldElkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBDb25maWdcbiAgICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd2lkZ2V0SWRdXG4gICAgY29uc3QgZHNTZWxlY3RvclNvdXJjZSA9IHdpZGdldEpzb24gJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlc1xuICAgIHJldHVybiBkc1NlbGVjdG9yU291cmNlXG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IHRoZSBmaWVsZHMgdG8gcXVlcnkgaW4gc3Vic2NyaWJlLXdpZGdldC5cbiAgKi9cbiAgb25GaWVsZFNlbGVjdGVkID0gKGFsbFNlbGVjdGVkRmllbGRzOiBJTUZpZWxkU2NoZW1hW10sIGRzOiBEYXRhU291cmNlKSA9PiB7XG4gICAgY29uc3QgZmllbGQgPSBhbGxTZWxlY3RlZEZpZWxkc1swXVxuICAgIGlmICghZmllbGQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5jb25maWcudXNlRGF0YVNvdXJjZSkge1xuICAgICAgLy9TYXZlIHRoZSBtZXNzYWdlIGFjdGlvbiBjb25maWd1cmF0aW9uIHRvIGNvbmZpZ1xuICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcbiAgICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2ZpZWxkTmFtZScsIGZpZWxkLm5hbWUpLnNldCgndXNlRGF0YVNvdXJjZScsIHtcbiAgICAgICAgICBkYXRhU291cmNlSWQ6IHRoaXMucHJvcHMuY29uZmlnLnVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkLFxuICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IHRoaXMucHJvcHMuY29uZmlnLnVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZCxcbiAgICAgICAgICBkYXRhVmlld0lkOiB0aGlzLnByb3BzLmNvbmZpZy51c2VEYXRhU291cmNlLmRhdGFWaWV3SWQsXG4gICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdGhpcy5wcm9wcy5jb25maWcudXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkLFxuICAgICAgICAgIGZpZWxkczogYWxsU2VsZWN0ZWRGaWVsZHMubWFwKGYgPT4gZi5qaW11TmFtZSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB1c2VEYXRhU291cmNlcyA9IHRoaXMuZ2V0RHNTZWxlY3RvclNvdXJjZURhdGEodGhpcy5wcm9wcy53aWRnZXRJZClcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIlNlbGVjdCBmaWVsZFwiPlxuICAgICAgICB7XG4gICAgICAgICAgdXNlRGF0YVNvdXJjZXMgJiYgdXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlBsZWFzZSBjaG9vc2UgYSBGaWVsZCB0byBxdWVyeTpcbiAgICAgICAgICAgIDxGaWVsZFNlbGVjdG9yXG4gICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt1c2VEYXRhU291cmNlc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWVsZFNlbGVjdGVkfVxuICAgICAgICAgICAgICBzZWxlY3RlZEZpZWxkcz17dGhpcy5wcm9wcy5jb25maWcudXNlRGF0YVNvdXJjZSAmJiB0aGlzLnByb3BzLmNvbmZpZy51c2VEYXRhU291cmNlLmZpZWxkc1xuICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5jb25maWcudXNlRGF0YVNvdXJjZS5maWVsZHNcbiAgICAgICAgICAgICAgICA6IEltbXV0YWJsZShbXSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgIDwvZGl2PlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXJ5QWN0aW9uU2V0dGluZ1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9