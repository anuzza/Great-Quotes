"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[857],{497:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(523),c="NoQuotesFound_noquotes__C6jVa",o=n(184),r=function(){return(0,o.jsxs)("div",{className:c,children:[(0,o.jsx)("p",{children:"No quotes found!"}),(0,o.jsx)(s.rU,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})}},857:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var s=n(791),c=n(523),o=n(931),r=n(152),a="Comments_comments__Np0qE",d="NewCommentForm_form__sXvAs",m="NewCommentForm_control__7mlly",u="NewCommentForm_actions__cQl5r",i=n(995),l=n(853),x=n(556),h=n(184),j=function(e){var t=(0,s.useRef)(),n=(0,i.Z)(l.Ir),c=n.sendRequest,o=n.status,r=n.error,a=e.onAddedComment;(0,s.useEffect)((function(){"completed"!==o||r||a()}),[o,r,a]);var j=function(n){n.preventDefault();var s=t.current.value;c({commentData:{text:s},quoteId:e.quoteId})};return(0,h.jsxs)("form",{className:d,onSubmit:j,children:["pending"===o&&(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(x.Z,{})}),(0,h.jsxs)("div",{className:m,onSubmit:j,children:[(0,h.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),(0,h.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),(0,h.jsx)("div",{className:u,children:(0,h.jsx)("button",{className:"btn",children:"Add Comment"})})]})},f="CommentItem_item__xkDqz",_=function(e){return(0,h.jsx)("li",{className:f,children:(0,h.jsx)("p",{children:e.text})})},N="CommentsList_comments__hOAOA",p=function(e){return(0,h.jsx)("ul",{className:N,children:e.comments.map((function(e){return(0,h.jsx)(_,{text:e.text},e.id)}))})},v=function(){var e=(0,s.useState)(!1),t=(0,r.Z)(e,2),n=t[0],c=t[1],d=(0,o.UO)(),m=d.quoteId,u=(0,i.Z)(l.h_),f=u.sendRequest,_=u.status,N=u.data;(0,s.useEffect)((function(){f(m)}),[m,f]);var v,C=(0,s.useCallback)((function(){f(m)}),[f,m]);return"pending"===_&&(v=(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(x.Z,{})})),"completed"===_&&N&&N.length>0&&(v=(0,h.jsx)(p,{comments:N})),"completed"!==_||N&&0!==N.length||(v=(0,h.jsx)("p",{className:"centered",children:"No comments added yet!"})),(0,h.jsxs)("section",{className:a,children:[(0,h.jsx)("h2",{children:"User Comments"}),!n&&(0,h.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Add a Comment"}),n&&(0,h.jsx)(j,{quoteId:d.quoteId,onAddedComment:C}),v]})},C="HighlightedQuote_quote__ZVh9R",q=function(e){return(0,h.jsxs)("figure",{className:C,children:[(0,h.jsx)("p",{children:e.text}),(0,h.jsx)("figcaption",{children:e.author})]})},b=(n(497),function(){var e=(0,o.$B)(),t=(0,o.UO)(),n=(0,i.Z)(l.jR,!0),r=n.sendRequest,a=n.status,d=n.data,m=n.error,u=t.quoteId;return(0,s.useEffect)((function(){r(u)}),[r,u]),"pending"===a?(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(x.Z,{})}):m?(0,h.jsx)("p",{className:"centered"}):d.text?(0,h.jsxs)("section",{children:[(0,h.jsx)(q,{text:d.text,author:d.author}),(0,h.jsx)(o.AW,{path:e.path,exact:!0,children:(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(c.rU,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),(0,h.jsx)(o.AW,{path:"".concat(e.path,"/comments"),children:(0,h.jsx)(v,{})})]}):(0,h.jsx)("p",{children:"No quote found"})})}}]);
//# sourceMappingURL=857.f5c0224d.chunk.js.map