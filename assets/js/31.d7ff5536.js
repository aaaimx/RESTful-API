(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{752:function(e,t,r){"use strict";r.r(t);var s=r(70),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"read-operation-get"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#read-operation-get"}},[e._v("#")]),e._v(" Read Operation (GET)")]),e._v(" "),r("p",[r("strong",[e._v("GET")]),e._v(" requests are used "),r("strong",[e._v("to retrieve resource representation/information only,")]),e._v(" not to edit it in any way.")]),e._v(" "),r("p",[e._v("As "),r("strong",[e._v("GET")]),e._v(" requests do not change the state of the resource, these requests are known as "),r("strong",[e._v("safe methods")]),e._v(". Additionally, "),r("strong",[e._v("GET APIs")]),e._v(" should be "),r("strong",[e._v("idempotent,")]),e._v(" which means that making multiple identical requests must produce the same result every time until another API (POST or PUT) has changed the state of the resource on the server.")]),e._v(" "),r("p",[e._v("For any given HTTP "),r("strong",[e._v("GET")]),e._v(" request, if a resource is found on the server, it must return "),r("strong",[e._v("HTTP response code 200 (OK)")]),e._v(" - along with response body which is usually either XML or JSON content (due to their platform-independent nature).")]),e._v(" "),r("p",[e._v("In case a resource is NOT found on the server it must return HTTP response code "),r("strong",[e._v("404 (NOT FOUND).")]),e._v("\nSimilarly, if it is determined that the "),r("strong",[e._v("GET")]),e._v(" request itself is not correctly formed then the server will return HTTP response code "),r("strong",[e._v("400 (BAD REQUEST).")])]),e._v(" "),r("p",[r("strong",[e._v("Examples:")])]),e._v(" "),r("blockquote",[r("p",[e._v("GET http://www.test.com/posts")])]),e._v(" "),r("blockquote",[r("p",[e._v("GET http://www.test.com/posts/36273")])])])}),[],!1,null,null,null);t.default=o.exports}}]);