(this["webpackJsonprfc-to-do-list-app"]=this["webpackJsonprfc-to-do-list-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(1),i=n(7),a=n.n(i),l=n(6),r=n(4),s=(n(14),n(16)),d=[{id:Object(s.a)(),title:"built using function components",completed:!1},{id:Object(s.a)(),title:"useState hooks",completed:!1},{id:Object(s.a)(),title:"conditional rendering",completed:!1},{id:Object(s.a)(),title:"destructuring",completed:!1}];var u=function(){return Object(c.jsx)("header",{children:Object(c.jsx)("h1",{className:"main-heading",children:"To Do List"})})};var j=function(t){var e=t.addToDo,n=Object(o.useState)(""),i=Object(r.a)(n,2),a=i[0],l=i[1];return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0===a.length?alert("Input Required"):(e(a),l(""))},children:[Object(c.jsx)("input",{className:"placeholder-input",type:"text",name:"title",placeholder:"Add Item...",value:a,onChange:function(t){l(t.target.value)},autoFocus:!0}),Object(c.jsx)("input",{type:"submit",value:"Submit",className:"btn"})]})};var b=function(t){var e=t.todo,n=t.toggleComplete,o=t.delToDo;return Object(c.jsx)("div",{className:"todo",children:Object(c.jsxs)("p",{children:[Object(c.jsx)("input",{type:"checkbox",onChange:function(){return n(e.id)}}),Object(c.jsx)("span",{className:e.completed?"span-complete":null,children:e.title}),Object(c.jsx)("button",{onClick:function(){return o(e.id)},children:"X"})]})})};var p=function(t){var e=t.todos,n=t.toggleComplete,o=t.delToDo;return Object(c.jsx)("div",{className:"todo-cont",children:e.map((function(t){return Object(c.jsx)(b,{todo:t,toggleComplete:n,delToDo:o},t.id)}))})};var m=function(t){var e=t.clearToDos;return t.todos.length>0&&Object(c.jsx)("button",{className:"clear btn",onClick:e,children:"Clear All"})};var O=function(){var t=Object(o.useState)(d),e=Object(r.a)(t,2),n=e[0],i=e[1];return Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(u,{}),Object(c.jsx)(j,{addToDo:function(t){var e={id:Object(s.a)(),title:t,completed:!1};i([].concat(Object(l.a)(n),[e]))}}),Object(c.jsx)(p,{todos:n,toggleComplete:function(t){i(n.map((function(e){return e.id===t&&(e.completed=!e.completed),e})))},delToDo:function(t){i(Object(l.a)(n.filter((function(e){return e.id!==t}))))}}),Object(c.jsx)(m,{todos:n,clearToDos:function(){i([])}})]})})};a.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0bac0cbd.chunk.js.map