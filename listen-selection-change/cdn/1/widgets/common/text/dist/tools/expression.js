System.register(["jimu-core","jimu-ui","jimu-for-builder"],(function(e,t){var i={},n={},o={};return{setters:[function(e){i.Immutable=e.Immutable,i.appActions=e.appActions,i.getAppStore=e.getAppStore,i.i18n=e.i18n},function(e){n.defaultMessages=e.defaultMessages},function(e){o.builderAppSync=e.builderAppSync}],execute:function(){e((()=>{var e={36269:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 0c3.534 0 6.4 1.075 6.4 2.4v2.4c0 1.325-2.865 2.4-6.4 2.4S1.6 6.125 1.6 4.8V2.4C1.6 1.075 4.465 0 8 0M1.6 6.774V9.2c0 1.325 2.866 2.4 6.4 2.4s6.4-1.075 6.4-2.4V6.8c0 1.325-2.865 2.4-6.4 2.4-3.534 0-6.4-1.075-6.4-2.4zm0 4.4V13.6C1.6 14.926 4.467 16 8 16s6.4-1.075 6.4-2.4v-2.4c0 1.326-2.865 2.4-6.4 2.4-3.534 0-6.4-1.075-6.4-2.4z" clip-rule="evenodd"></path></svg>'},98427:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15 3.5v9c0 1.933-3.134 3.5-7 3.5s-7-1.567-7-3.5v-9C1 1.567 4.134 0 8 0s7 1.567 7 3.5M2 5.304V6.5C2 7.692 4.615 9 8 9s6-1.308 6-2.5V5.304C12.775 6.32 10.546 7 8 7s-4.775-.68-6-1.696M8 10c2.546 0 4.775-.68 6-1.696V9.5c0 1.192-2.615 2.5-6 2.5s-6-1.308-6-2.5V8.304C3.225 9.32 5.454 10 8 10m6 1.304C12.775 12.32 10.546 13 8 13s-4.775-.68-6-1.696V12.5C2 13.692 4.615 15 8 15s6-1.308 6-2.5zM14 3.5C14 4.692 11.385 6 8 6S2 4.692 2 3.5 4.615 1 8 1s6 1.308 6 2.5" clip-rule="evenodd"></path></svg>'},79244:e=>{"use strict";e.exports=i},4108:e=>{"use strict";e.exports=o},14321:e=>{"use strict";e.exports=n}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,s),o.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";s.r(r),s.d(r,{default:()=>a});var e=s(79244),t=s(14321),i=s(98427),n=s.n(i),o=s(36269),l=s.n(o),u=s(4108);const d=()=>{const t=(0,e.getAppStore)().getState();return t.appStateInBuilder?t.appStateInBuilder:t},p=e=>{var t,i,n;const o=e.layoutItem.widgetId,s=null===(i=null===(t=d().appConfig)||void 0===t?void 0:t.widgets)||void 0===i?void 0:i[o];return null!=(null==s?void 0:s.useDataSources)&&(null===(n=null==s?void 0:s.useDataSources)||void 0===n?void 0:n.length)>0&&(null==s?void 0:s.useDataSourcesEnabled)};class a{constructor(){this.index=1,this.id="text-expression"}disabled(e){return!p(e)}getGroupId(){return null}getTitle(i){const n=p(i)?"dynamicContent":"dynamicContentTip",o=e.i18n.getIntl("_jimu");return o?o.formatMessage({id:n,defaultMessage:t.defaultMessages[n]}):n}checked(t){var i;const n=t.layoutItem.widgetId;return!!(null!==(i=d().widgetsState[n])&&void 0!==i?i:(0,e.Immutable)({})).showExpression}getIcon(){return window.jimuConfig.isBuilder?l():n()}onClick(t){var i;const n=t.layoutItem.widgetId,o=d(),s=!(null!==(i=o.widgetsState[n])&&void 0!==i?i:(0,e.Immutable)({})).showExpression,r=s&&!o.widgetsRuntimeInfo[n].isInlineEditing;window.jimuConfig.isBuilder?(r&&u.builderAppSync.publishSetWidgetIsInlineEditingStateToApp(n,!0),u.builderAppSync.publishChangeWidgetStatePropToApp({widgetId:n,propKey:"showExpression",value:s}),u.builderAppSync.publishWidgetToolbarStateChangeToApp(n,["text-inline-editing","text-expression"])):(r&&(0,e.getAppStore)().dispatch(e.appActions.setWidgetIsInlineEditingState(n,!0)),(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(n,"showExpression",s)),(0,e.getAppStore)().dispatch(e.appActions.widgetToolbarStateChange(n,["text-inline-editing","text-expression"])))}getSettingPanel(){return null}}})(),r})())}}}));