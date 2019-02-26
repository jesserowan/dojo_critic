(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(55)},31:function(e,t,a){},51:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),o=a.n(r),s=(a(31),a(3)),c=a(4),i=a(6),u=a(5),m=a(7),h=a(8),p=a.n(h),d=(a(51),a(56)),g=function(e){function t(e){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h3",null,this.props.game.title)),l.a.createElement("p",null,"Genre: ",this.props.game.genre),l.a.createElement("p",null,"Studio: ",this.props.game.studio),l.a.createElement("button",{className:"button",onClick:this.props.deleteGame.bind(this.props.game._id)},"Delete"),l.a.createElement(d.a,{className:"button",to:"/game/"+this.props.game._id},"Edit"),l.a.createElement(d.a,{className:"button",to:"/game/"+this.props.game._id+"/review"},"Review"))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){p.a.get("http://localhost:8000/videogames").then(function(e){a.setState({games:e.data.games})}).catch(function(e){console.log(e)})},a.deleteGame=function(e){console.log("been clicked",e),p.a.delete("http://localhost:8000/videogames/".concat(e)).then(function(t){var n=[],l=!0,r=!1,o=void 0;try{for(var s,c=a.state.games[Symbol.iterator]();!(l=(s=c.next()).done);l=!0){var i=s.value;i._id!==e&&n.push(i)}}catch(u){r=!0,o=u}finally{try{l||null==c.return||c.return()}finally{if(r)throw o}}a.setState({games:n})}).catch(function(e){console.log(e)})},a.state={games:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.state.games.map(function(t){return l.a.createElement(g,{key:t._id,game:t,deleteGame:e.deleteGame.bind(e,t._id)})}))}}]),t}(n.Component),v=a(11),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){console.log(a.props.match.params._id),p.a.get("http://localhost:8000/videogames/".concat(a.props.match.params._id)).then(function(e){a.setState({game:e.data.game,oldGame:e.data.game})}).catch(function(e){console.log(e)})},a.handleTitle=function(e){var t=Object(v.a)({},a.state.game);t.title=e.target.value,a.setState({game:t})},a.handleGenre=function(e){var t=Object(v.a)({},a.state.game);t.genre=e.target.value,a.setState({game:t})},a.handleStudio=function(e){var t=Object(v.a)({},a.state.game);t.studio=e.target.value,a.setState({game:t})},a.handleSubmit=function(e){e.preventDefault();var t="http://localhost:8000/videogames/".concat(a.props.match.params._id);p.a.put(t,a.state.game).then(function(e){"not ok"===e.data.status?(console.log(e),a.setState({errors:e.data.errors.errors})):console.log(e)}).catch(function(e){console.log(e)})},a.remove=function(){var e=a.props.match.params._id;p.a.delete("http://localhost:8000/videogames/".concat(e)).then(function(e){a.props.history.push("/")}).catch(function(e){console.log(e)})},a.state={game:{title:"",genre:"",studio:""},oldGame:{title:"",genre:"",studio:""},errors:{title:"",genre:"",studio:""}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.game,t=e.title,a=e.genre,n=e.studio;return l.a.createElement("div",null,l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h3",null,this.state.oldGame.title)),l.a.createElement("p",null,"Genre: ",this.state.oldGame.genre),l.a.createElement("p",null,"Studio: ",this.state.oldGame.studio)),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Title"),l.a.createElement("input",{type:"text",value:t,onChange:this.handleTitle}),l.a.createElement("p",null,this.state.errors.title?l.a.createElement("span",null,this.state.errors.title.message):l.a.createElement("span",null)),l.a.createElement("label",null,"Genre"),l.a.createElement("input",{type:"text",value:a,onChange:this.handleGenre}),l.a.createElement("p",null,this.state.errors.genre?l.a.createElement("span",null,this.state.errors.genre.message):l.a.createElement("span",null)),l.a.createElement("label",null,"Studio"),l.a.createElement("input",{type:"text",value:n,onChange:this.handleStudio}),l.a.createElement("p",null,this.state.errors.studio?l.a.createElement("span",null,this.state.errors.studio.message):l.a.createElement("span",null)),l.a.createElement("button",{type:"submit",className:"button"},"Update"),l.a.createElement("button",{className:"button",onClick:this.remove},"Delete")))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleTitle=function(e){var t=Object(v.a)({},a.state.game);t.title=e.target.value,a.setState({game:t})},a.handleGenre=function(e){var t=Object(v.a)({},a.state.game);t.genre=e.target.value,a.setState({game:t})},a.handleStudio=function(e){var t=Object(v.a)({},a.state.game);t.studio=e.target.value,a.setState({game:t})},a.handleSubmit=function(e){e.preventDefault(),p.a.post("http://localhost:8000/videogames",{title:a.state.game.title,studio:a.state.game.studio,genre:a.state.game.genre}).then(function(e){console.log(e),"not ok"===e.data.status?a.setState({errors:e.data.errors.errors}):a.props.history.push("/")}).catch(function(e){console.log(e)})},a.state={game:{title:"",genre:"",studio:""},errors:{title:"",genre:"",studio:""}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.game,t=e.title,a=e.genre,n=e.studio;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Title"),l.a.createElement("input",{type:"text",value:t,onChange:this.handleTitle}),l.a.createElement("p",null,this.state.errors.title?l.a.createElement("span",null,this.state.errors.title.message):l.a.createElement("span",null)),l.a.createElement("label",null,"Genre"),l.a.createElement("input",{type:"text",value:a,onChange:this.handleGenre}),l.a.createElement("p",null,this.state.errors.genre?l.a.createElement("span",null,this.state.errors.genre.message):l.a.createElement("span",null)),l.a.createElement("label",null,"Studio"),l.a.createElement("input",{type:"text",value:n,onChange:this.handleStudio}),l.a.createElement("p",null,this.state.errors.studio?l.a.createElement("span",null,this.state.errors.studio.message):l.a.createElement("span",null)),l.a.createElement("button",{type:"submit",className:"button"},"Create")))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).stars=function(){for(var e="",t=0;t<a.props.rating;t++)e+="\u2605";for(;e.length<5;)e+="\u2606";return e},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("span",null,this.stars())}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){console.log(a.props.match.params._id),p.a.get("http://localhost:8000/videogames/".concat(a.props.match.params._id)).then(function(e){a.setState({game:e.data.game}),a.setState({reviews:e.data.game.reviews}),console.log(e.data.game)}).catch(function(e){console.log(e)})},a.handleRating=function(e){var t=Object(v.a)({},a.state.review);t.rating=parseInt(e.target.value),a.setState({review:t})},a.handleComment=function(e){var t=Object(v.a)({},a.state.review);t.comment=e.target.value,a.setState({review:t})},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.review);var t="http://localhost:8000/review/".concat(a.props.match.params._id);p.a.post(t,a.state.review).then(function(e){console.log(e),a.componentDidMount()}).catch(function(e){console.log(e)})},a.state={game:{title:"",genre:"",studio:""},review:{rating:5,comment:""},reviews:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h3",null,this.state.game.title)),l.a.createElement("p",null,"Genre: ",this.state.game.genre),l.a.createElement("p",null,"Studio: ",this.state.game.studio)),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Rating"),l.a.createElement("select",{onChange:this.handleRating},l.a.createElement("option",{value:"5"},"\u2605\u2605\u2605\u2605\u2605"),l.a.createElement("option",{value:"4"},"\u2605\u2605\u2605\u2605\u2606"),l.a.createElement("option",{value:"3"},"\u2605\u2605\u2605\u2606\u2606"),l.a.createElement("option",{value:"2"},"\u2605\u2605\u2606\u2606\u2606"),l.a.createElement("option",{value:"1"},"\u2605\u2606\u2606\u2606\u2606")),l.a.createElement("p",null),l.a.createElement("label",null,"Comment"),l.a.createElement("textarea",{onChange:this.handleComment,rows:"5",cols:"50"}),l.a.createElement("p",null),l.a.createElement("input",{type:"submit"})),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h3",null,"Reviews")),this.state.reviews.map(function(e){return l.a.createElement("p",{key:e._id},l.a.createElement(j,{rating:e.rating})," ",e.comment)})))}}]),t}(n.Component),w=a(57),S=a(58),y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(w.a,null,l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome to Dojo Critic"),l.a.createElement("h2",null,"The best game review website on localhost!"),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d.a,{className:"button",to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(d.a,{className:"button",to:"/games/new"},"Add a Game"))),l.a.createElement(S.a,{exact:!0,path:"/",component:E}),l.a.createElement(S.a,{path:"/games/new",component:f}),l.a.createElement(S.a,{exact:!0,path:"/game/:_id",component:b}),l.a.createElement(S.a,{path:"/game/:_id/review",component:O}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.980ba70b.chunk.js.map