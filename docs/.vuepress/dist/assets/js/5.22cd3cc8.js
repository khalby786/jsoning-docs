(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{371:function(t,s,a){"use strict";a.r(s);var e=a(43),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("em",[t._v("This documentation and this package is currently under development.")])]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#install"}},[t._v("Install")])]),a("li",[a("a",{attrs:{href:"#basic-usage"}},[t._v("Basic Usage")])]),a("li",[a("a",{attrs:{href:"#jsoning-constructor"}},[t._v("Jsoning Constructor")]),a("ul",[a("li",[a("a",{attrs:{href:"#parameters"}},[t._v("Parameters")])]),a("li",[a("a",{attrs:{href:"#returns"}},[t._v("Returns")])]),a("li",[a("a",{attrs:{href:"#example"}},[t._v("Example")])])])]),a("li",[a("a",{attrs:{href:"#methods"}},[t._v("Methods")]),a("ul",[a("li",[a("a",{attrs:{href:"#jsoning-all"}},[t._v("Jsoning#all")])]),a("li",[a("a",{attrs:{href:"#jsoning-clear"}},[t._v("Jsoning#clear")])]),a("li",[a("a",{attrs:{href:"#jsoning-delete"}},[t._v("Jsoning#delete")])]),a("li",[a("a",{attrs:{href:"#jsoning-get"}},[t._v("Jsoning#get")])])])]),a("li",[a("a",{attrs:{href:"#links"}},[t._v("Links")])]),a("li",[a("a",{attrs:{href:"#contributors"}},[t._v("Contributors")])]),a("li",[a("a",{attrs:{href:"#versioning"}},[t._v("Versioning")]),a("ul",[a("li",[a("a",{attrs:{href:"#to-do"}},[t._v("To-do")])])])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"jsoning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsoning"}},[t._v("#")]),t._v(" jsoning")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://codecov.io/gh/khalby786/jsoning/branch/master/graph/badge.svg",alt:"CodeCov"}}),t._v(" "),a("a",{attrs:{href:"https://travis-ci.org/khalby786/jsoning",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://travis-ci.org/khalby786/jsoning.svg?branch=master",alt:"Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/khalby786/jsoning",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/github/forks/khalby786/jsoning.svg",alt:"Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/khalby786/jsoning",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/github/stars/khalby786/jsoning.svg",alt:"Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/khalby786/jsoning",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/github/license/khalby786/jsoning.svg",alt:"License"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/jsoning",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/jsoning.svg",alt:"Latest Stable Version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/jsoning",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/l/jsoning.svg",alt:"License"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/jsoning",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dt/jsoning.svg",alt:"NPM Downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/jsoning",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dm/jsoning.svg",alt:"NPM Downloads"}}),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/pkgreview/rating/npm/jsoning",alt:"Pkgreview.dev Reviews"}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/pkgreview/stars/npm/jsoning",alt:"Pkgreview.dv Stars"}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/librariesio/release/npm/jsoning",alt:"Libraries.io dependency status for latest release"}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/discord/698841420412354581",alt:"Discord"}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/bundlephobia/min/jsoning",alt:"npm bundle size"}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/github/repo-size/khalby786/jsoning",alt:"GitHub repo size"}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/node/v/jsoning",alt:"node-current"}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fkhalby786.github.io%2Fjsoning",alt:"Website"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fkhalby786.github.io%2Fjsoning",alt:"Twitter URL"}}),t._v(" "),a("img",{attrs:{src:"https://img.shields.io/twitter/follow/khalby786?style=social",alt:"Twitter Follow"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("Like us a lot?")]),t._v(" Help others know why you like us! "),a("strong",[t._v("Review this package on "),a("a",{attrs:{href:"https://pkgreview.dev/npm/jsoning",target:"_blank",rel:"noopener noreferrer"}},[t._v("pkgreview.dev"),a("OutboundLink")],1)])]),t._v(" "),a("th",[t._v("➡")]),t._v(" "),a("th",[a("a",{attrs:{href:"https://pkgreview.dev/npm/jsoning",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.ibb.co/McjVMfb/pkgreview-dev.jpg",alt:"Review us on pkgreview.dev"}}),a("OutboundLink")],1)])])]),t._v(" "),a("tbody")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.glitch.com/c393fad9-338a-43b4-9a2f-8ba07e26d39d%2Fjsoning.png?v=1589190601684",alt:"jsoning"}})]),t._v(" "),a("p",[t._v("A simple key-value JSON-based persistent lightweight database. It uses JSON files to modify and write key-value elements as JSON-objects. Recommended for small-scale data stores.")]),t._v(" "),a("p",[a("strong",[t._v("This package is in heavy WIP. While basic functions work, it is recommended not to use this database package to store sensitive info, for now.")])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("p",[a("strong",[t._v("Node.js v12.x or greater is required for this package to work.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install jsoning\n")])])]),a("p",[t._v("View the full documentation "),a("a",{attrs:{href:"/jsoning"}},[t._v("here")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"basic-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage"}},[t._v("#")]),t._v(" Basic Usage")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" jsoning "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jsoning'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" database "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("jsoning")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"database.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndatabase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"db"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndatabase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndatabase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chro"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"venter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" all "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// {"en":"db","foo":"bar","chro":"venter"}')]),t._v("\n")])])]),a("h2",{attrs:{id:"jsoning-constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsoning-constructor"}},[t._v("#")]),t._v(" Jsoning Constructor")]),t._v(" "),a("p",[t._v("Create a new JSON database or initialize an exisiting database.")]),t._v(" "),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("string")]),t._v(" "),a("td",[t._v("database")]),t._v(" "),a("td",[t._v("The name of the JSON database to be created or used.")])])])]),t._v(" "),a("h3",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("Whether an existing JSON file was used or created or the action failed.")])])])]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" jsoning "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jsoning'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" database "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("jsoning")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"database.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Make sure "),a("strong",[t._v("not")]),t._v(" to include directory paths for the new database argument (like "),a("code",[t._v("dir/db.json")]),t._v("). Use file names only instead (like "),a("code",[t._v("db.json")]),t._v(" and "),a("code",[t._v("hello.json")]),t._v(").")])]),t._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"jsoning-all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsoning-all"}},[t._v("#")]),t._v(" Jsoning#all")]),t._v(" "),a("p",[t._v("Returns all the elements and their values of the JSON database.")]),t._v(" "),a("h4",{attrs:{id:"returns-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-2"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("The object of all the key-value pairs of the database.")])])])]),t._v(" "),a("h4",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" all "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// { "foo": "bar", "hi": "hello" }')]),t._v("\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"jsoning-clear"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsoning-clear"}},[t._v("#")]),t._v(" Jsoning#clear")]),t._v(" "),a("p",[t._v("Clears the whole JSON database.")]),t._v(" "),a("h4",{attrs:{id:"returns-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-3"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("Whether the database was cleared or not.")])])])]),t._v(" "),a("h4",{attrs:{id:"example-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndatabase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"db"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndatabase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return {}")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"jsoning-delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsoning-delete"}},[t._v("#")]),t._v(" Jsoning#delete")]),t._v(" "),a("p",[t._v("Deletes an element from the database based on its key.")]),t._v(" "),a("h4",{attrs:{id:"parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("string")]),t._v(" "),a("td",[t._v("key")]),t._v(" "),a("td",[t._v("The key of the element to be deleted.")])])])]),t._v(" "),a("h4",{attrs:{id:"returns-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-4"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("Returns true if the value is deleted, else returns false.")])])])]),t._v(" "),a("h4",{attrs:{id:"example-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ping"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pong"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndatabase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndatabase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns true")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"jsoning-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsoning-get"}},[t._v("#")]),t._v(" Jsoning#get")]),t._v(" "),a("p",[t._v("Gets the value of an element based on it's key.")]),t._v(" "),a("h4",{attrs:{id:"parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("string")]),t._v(" "),a("td",[t._v("key")]),t._v(" "),a("td",[t._v("The key of the element to be fetched.")])])])]),t._v(" "),a("h4",{attrs:{id:"returns-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-5"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("*")]),t._v(" "),a("td",[t._v("Returns value, if element exists, else returns false.")])])])]),t._v(" "),a("h4",{attrs:{id:"example-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-5"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"food"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pizza"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" food "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"food"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"food"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns pizza")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" Links")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/khalby786/jsoning",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://discord.gg/3v8P9RE",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://glitch.com/~jsoning",target:"_blank",rel:"noopener noreferrer"}},[t._v("Glitch"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://npmjs.org/jsoning",target:"_blank",rel:"noopener noreferrer"}},[t._v("NPM"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"contributors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributors"}},[t._v("#")]),t._v(" Contributors")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://khaleelgibran.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Khaleel Gibran"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/chroventer",target:"_blank",rel:"noopener noreferrer"}},[t._v("chroventer"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"versioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versioning"}},[t._v("#")]),t._v(" Versioning")]),t._v(" "),a("p",[t._v("This package follows Semantic Versioning. Current version is v"),a("code",[t._v("0.3.9")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"to-do"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-do"}},[t._v("#")]),t._v(" To-do")]),t._v(" "),a("ul",[a("li",[t._v("Prevent JSON corruption")]),t._v(" "),a("li",[t._v("Error handling")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("If you would like to support my projects, consider buying me a donut at "),a("a",{attrs:{href:"https://www.buymeacoffee.com/khaleelgibran",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.buymeacoffee.com/khaleelgibran"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);