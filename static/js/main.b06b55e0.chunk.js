(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{11:function(e,t,n){e.exports={section:"section_section__xQV_z"}},16:function(e,t,n){},17:function(e,t,n){},2:function(e,t,n){e.exports={wrapper:"feedback_wrapper__1rL0t",statistics:"feedback_statistics__26LhS",statsItem:"feedback_statsItem__VdnWp",table:"feedback_table__285Yr"}},21:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),s=n.n(a),i=(n(16),n.p,n(17),n(3)),o=n(4),l=n(6),j=n(5),b=n(0),d=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={error:null,errorInfo:null},c}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t}),console.log(this.state)}},{key:"render",value:function(){return this.state.errorInfo?Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Something went wrong."}),Object(b.jsxs)("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),Object(b.jsx)("br",{}),this.state.errorInfo.componentStack]})]}):this.props.children}}]),n}(r.a.Component),u=n(10),h=n(7),O=n.n(h),m=n(11),f=n.n(m);function x(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{className:f.a.section,children:[t&&Object(b.jsx)("h2",{children:t}),n]})}var p=n(2),g=n.n(p),v=function(e){var t=e.arrayFromState,n=e.onClickFn;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)("button",{type:"button",className:e,name:e,onClick:n,children:e},e)}))})},k=function(e){var t=e.message;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("p",{className:g.a.statistic,children:t})})},F=function(e){var t=e.totalFeedback,n=e.positiveFeedback,r=e.arrayFromStateEntry,a=e.message;return Object(b.jsx)("div",{children:0!==t?Object(b.jsx)(c.Fragment,{children:Object(b.jsxs)("div",{className:g.a.statistics,children:[r.map((function(e){return Object(b.jsx)(c.Fragment,{children:Object(b.jsx)("tbody",{className:g.a.table,children:Object(b.jsxs)("tr",{className:g.a.row,children:[Object(b.jsxs)("td",{children:[e[0],": "]}),Object(b.jsx)("td",{children:e[1]})]})})},e[0])})),Object(b.jsxs)("tbody",{className:g.a.table,children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Total: "}),Object(b.jsx)("td",{children:t})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Positive feedback: "}),Object(b.jsxs)("td",{children:[n," %"]})]})]})]})}):Object(b.jsx)(k,{message:a})})},y=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).onBtnClick=function(e){c.setState((function(t){return Object(u.a)({},e.target.name,t[e.target.name]+1)})),console.log("".concat(e.target.name,": "),c.state[e.currentTarget.name]),console.dir(e.target.name)},c.countTotalFeedback=function(){return console.log("Object.values(this.state): ",Object.values(c.state)),Object.values(c.state).reduce((function(e,t){return e+t}),0)},c.countPositiveFeedbackPercentage=function(){var e=c.state.good,t=c.countTotalFeedback();return t?Math.round(e/t*100):0},c.state={good:0,neutral:0,bad:0},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(c.Fragment,{children:Object(b.jsxs)("div",{className:g.a.wrapper,children:[Object(b.jsx)(x,{title:"Please leave feedback",children:Object(b.jsx)(v,{arrayFromState:Object.keys(this.state),onClickFn:this.onBtnClick})}),Object(b.jsx)(x,{title:"Statistics",children:Object(b.jsx)(F,{totalFeedback:this.countTotalFeedback(),positiveFeedback:this.countPositiveFeedbackPercentage(),arrayFromStateEntry:Object.entries(this.state),message:"There is no feedback"})})]})})}}]),n}(c.Component);y.PropsTypes={good:O.a.number,neutral:O.a.number,bad:O.a.number};var _=y;var S=function(){return Object(b.jsx)(d,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(_,{title:"Statistics"})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),w()}},[[21,1,2]]]);
//# sourceMappingURL=main.b06b55e0.chunk.js.map