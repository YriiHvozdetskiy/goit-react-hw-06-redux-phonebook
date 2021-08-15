(this["webpackJsonphw-03-phonebook"]=this["webpackJsonphw-03-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={label:"Filter_label__1vRE6",input:"Filter_input__LcH9a"}},29:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(7),o=n.n(r),s=n(16),i=n(3),l=n(4),u=n(17),b=n.n(u),d=n(8),j=Object(d.b)({name:"contacts",initialState:{contacts:{items:[],filter:""}},reducers:{addContact:function(t,e){t.contacts.items.unshift(e.payload)},filterContacts:function(t,e){t.contacts.filter=e.payload},deleteContact:function(t,e){t.contacts.items=e.payload}}}),m=j.actions,f=m.addContact,O=m.filterContacts,h=m.deleteContact,p=j.reducer,x={key:"contacts",storage:b.a},C=Object(d.a)({reducer:{contacts:Object(l.g)(x,p)},middleware:function(t){return t({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}})},devTools:!1}),_={store:C,persistor:Object(l.h)(C)},v=(n(29),n(5)),g=n(13),y=n.n(g),N=n(1);var k=function(){var t=Object(i.b)();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("label",{className:y.a.label,children:"Find contacts by name"}),Object(N.jsx)("input",{className:y.a.input,onChange:function(e){var n=e.target.value;t(O(n))}})]})};var F=function(t){var e=t.children;return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("h1",{children:e})})},w=n(9),A=n.n(w);var L=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){var e=t.contacts.contacts,n=e.items,c=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(c)}))}));return Object(N.jsx)("ul",{className:A.a.list,children:e&&e.map((function(n){var c=n.id,a=n.name,r=n.number;return Object(N.jsxs)("li",{className:A.a.item,children:[Object(N.jsx)("span",{children:a}),": ",Object(N.jsx)("span",{children:r}),Object(N.jsx)("button",{className:A.a.button,type:"button",onClick:function(){return function(n){var c=e.filter((function(t){return t.id!==n}));t(h(c)),v.b.success("deleted contact")}(c)},children:"Delete"})]},c)}))})},z=n(15),S=n(14),B=n(18),D=n(6),J=n.n(D),M=function(){var t=Object(c.useState)(""),e=Object(z.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(z.a)(r,2),s=o[0],l=o[1],u=Object(i.b)(),b=Object(i.c)((function(t){return t.contacts.contacts})).items,d=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":l(c);break;default:return}};return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("form",{className:J.a.form,autoComplete:"off",onSubmit:function(t){if(t.preventDefault(),!function(t){if(b)return b.find((function(e){return e.name.toLowerCase()===t}))?(v.b.error("".concat(n," is already in contacts")),!0):void 0}(n.toLowerCase())){var e={id:Object(B.a)(),name:n,number:s};u(f(e)),v.b.success("".concat(n," added a contact")),a(""),l("")}},children:Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("label",{className:J.a.label,children:"Name"}),Object(N.jsx)(S.DebounceInput,{className:J.a.input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,debounceTimeout:300,onChange:d}),Object(N.jsx)("label",{className:J.a.label,children:"Number"}),Object(N.jsx)(S.DebounceInput,{className:J.a.input,type:"tel",name:"number",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,debounceTimeout:300,onChange:d}),Object(N.jsx)("button",{className:J.a.button,type:"submit",children:"Add contact"})]})})})};function T(){var t=Object(i.c)((function(t){return t.contacts.contacts})).items;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(F,{children:"Phonebook"}),Object(N.jsx)(M,{}),0!==t.length&&Object(N.jsx)(F,{children:"Contacts"}),0!==t.length&&Object(N.jsx)(k,{}),Object(N.jsx)(L,{}),Object(N.jsx)(v.a,{toastOptions:{success:{style:{background:"green",color:"#fff"}},error:{style:{background:"red",color:"#fff"}}}})]})}o.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(i.a,{store:_.store,children:Object(N.jsx)(s.a,{loading:null,persistor:_.persistor,children:Object(N.jsx)(T,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__2aQjm",button:"ContactForm_button__2KRaK",label:"ContactForm_label__BAyTn",input:"ContactForm_input__3ChMC"}},9:function(t,e,n){t.exports={list:"ContactList_list__27qi7",item:"ContactList_item__wMJ2j",button:"ContactList_button__dG8hB"}}},[[34,1,2]]]);
//# sourceMappingURL=main.943c3b60.chunk.js.map