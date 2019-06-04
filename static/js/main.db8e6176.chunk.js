(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),o=a(8),s=a(2),l=a(3),d=a(5),u=a(4),h=a(6);var m=function(e){return r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:e.value,onChange:e.onChange,placeholder:"Search..."}))},g=a(7),p=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return(0,this.props.connectDragSource)(r.a.createElement("li",null,this.props.children))}}]),t}(n.Component);var f=Object(g.DragSource)("TODO",{beginDrag:function(e,t,a){return{id:e.id,body:e.body,timeLength:e.timeLength}}},function(e,t){return{connectDragSource:e.dragSource()}})(p),b=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.taskList.filter(function(t){return t.body.toLowerCase().includes(e.props.searchTerm.toLowerCase())}).map(function(t){return r.a.createElement(f,{key:t.id,body:t.body,timeLength:t.timeLength},t.body,r.a.createElement("i",{className:"fas fa-trash fa-trash--todo","data-key":t.id,onClick:e.props.onClick}))});return r.a.createElement("ul",{className:"todo__list"},t)}}]),t}(r.a.Component);var k=function(e){return r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("input",{type:"text",placeholder:"Add items...",onChange:e.onChange,value:e.value}),r.a.createElement("input",{type:"submit",value:"Create"}))},v=a(18),D=a.n(v),L=[{id:1,timeLength:1,body:"Free time"}],T=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={taskList:L,searchTerm:"",newTaskName:""},n.handleChange=function(e){n.setState({searchTerm:e.target.value})},n.handleMake=function(e){n.setState({newTaskName:e.target.value})},n.handleDelete=function(e){n.setState({taskList:n.state.taskList.filter(function(t){return t.id.toString()!==e.target.dataset.key.toString()})})},n.handleClearTodo=function(){n.setState({taskList:[]})},n.handleSubmit=function(e){if(!n.state.newTaskName.length)return e.preventDefault(),void alert("You can't submit an empty task.");e.preventDefault();var t=a(43);n.setState({taskList:[{id:t(),body:n.state.newTaskName,timeLength:1}].concat(Object(o.a)(n.state.taskList)),newTaskName:""})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"todoList"},r.a.createElement(D.a,{parent:this}),r.a.createElement("h1",null,"Your Tasks:"),r.a.createElement(m,{value:this.state.searchTerm,onChange:this.handleChange}),r.a.createElement(k,{onSubmit:this.handleSubmit,onChange:this.handleMake,value:this.state.newTaskName}),r.a.createElement("div",{className:"todoControls"},r.a.createElement("button",{onClick:this.handleClearTodo},"Clear Tasks"),r.a.createElement("button",{onClick:this.props.handleClearSchedule},"Clear Schedule")),r.a.createElement(b,{taskList:this.state.taskList,searchTerm:this.state.searchTerm,onClick:this.handleDelete}))}}]),t}(n.Component);var O={hover:function(e,t,a){var n={id:e.id,dropIndex:e.index,dragIndex:t.getItem().index};if(a){var r=i.a.findDOMNode(a);if(!r)return null;var c=n.dragIndex,o=n.dropIndex;if(n.dropIndex!==n.dragIndex){var s=r.getBoundingClientRect(),l=(s.bottom-s.top)/2,d=t.getClientOffset().y-s.top;c<o&&d<l||c>o&&d>l||(e.moveCard(c,o),t.getItem().index=o)}}}};var C=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.body,n=e.timeLength,c=e.canDrop,i=e.index,o=e.incrementHeight,s=e.decrementHeight,l=e.deleteTask,d=e.connectDragSource,u=e.connectDropTarget,h=e.isDragging?0:1,m=c?"3px dashed var(--list-font-color)":"none";return u(d(r.a.createElement("li",{key:t,id:t,"data-index":i,style:{opacity:h,gridRow:"span ".concat(n),border:m}},r.a.createElement("p",null,a),r.a.createElement("i",{className:"fas fa-plus-circle",onClick:o}),r.a.createElement("i",{className:"fas fa-minus-circle",onClick:s}),r.a.createElement("i",{className:"fas fa-trash fa-trash--calendar",onClick:l}))))}}]),t}(n.Component),E=Object(g.DropTarget)("CALENDARTASK",O,function(e,t){return{connectDropTarget:e.dropTarget(),canDrop:t.canDrop()}})(Object(g.DragSource)("CALENDARTASK",{beginDrag:function(e,t,a){return{id:e.id,index:e.index}}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(C));var j=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.connectDropTarget,a=e.moveCard,n=e.taskList,c=e.canDrop,i=e.isOver,o=e.deleteTask,s=e.incrementHeight,l=e.decrementHeight,d="";d=c&&!i?"calendar__dropZone--canDrop":c&&i?"calendar__dropZone--isOver":"";var u=n.map(function(e,t){return r.a.createElement(E,{id:e.id,key:e.id,index:t,body:e.body,timeLength:e.timeLength,moveCard:a,deleteTask:o,incrementHeight:s,decrementHeight:l})});return t(r.a.createElement("div",{className:"calendar__dropZone ".concat(d)},r.a.createElement("ul",{className:"calendar__list"},u)))}}]),t}(n.Component),y=Object(g.DropTarget)("TODO",{drop:function(e,t,a){var n=t.getItem();e.onDrop(n)}},function(e,t){return{connectDropTarget:e.dropTarget(),canDrop:t.canDrop(),isOver:t.isOver()}})(j),S=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onDrop,a=e.moveCard,n=e.taskList,c=e.handleDecrement,i=e.handleIncrement,o=e.deleteTask;return r.a.createElement("div",{className:"calendar"},r.a.createElement("section",{className:"calendar__times"},r.a.createElement("h1",null,"6:00"),r.a.createElement("h1",null,"6:30"),r.a.createElement("h1",null,"7:00"),r.a.createElement("h1",null,"7:30"),r.a.createElement("h1",null,"8:00"),r.a.createElement("h1",null,"8:30"),r.a.createElement("h1",null,"9:00"),r.a.createElement("h1",null,"9:30"),r.a.createElement("h1",null,"10:00"),r.a.createElement("h1",null,"10:30"),r.a.createElement("h1",null,"11:00"),r.a.createElement("h1",null,"11:30"),r.a.createElement("h1",null,"12:00")),r.a.createElement(y,{onDrop:t,taskList:n,moveCard:a,incrementHeight:i,decrementHeight:c,deleteTask:o}))}}]),t}(n.Component),N=a(47),x=a.n(N),w=(a(108),a(109),a(110),function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={DraggedTaskList:[],TotalTimeLength:""},n.updateCalendarLength=function(){var e=Object(o.a)(n.state.DraggedTaskList),t=[];e.forEach(function(e){return t.push(e.timeLength)});var a=[].concat(t).reduce(function(e,t){return e+t});n.setState({TotalTimeLength:a})},n.checkCalendarLength=function(){if(n.state.TotalTimeLength>=12)return alert("Your morning schedule is full. Please delete or reduce times of tasks."),!0},n.onDrop=function(e){if(!n.checkCalendarLength()){var t=a(43);n.setState({DraggedTaskList:[].concat(Object(o.a)(n.state.DraggedTaskList),[{id:t(),body:e.body,timeLength:e.timeLength}])}),n.updateCalendarLength()}},n.handleIncrement=function(e){if(!n.checkCalendarLength()){var t=Object(o.a)(n.state.DraggedTaskList);t[e.target.parentNode.dataset.index].timeLength++,n.setState({DraggedTaskList:t}),n.updateCalendarLength()}},n.handleDecrement=function(e){var t=Object(o.a)(n.state.DraggedTaskList),a=t[e.target.parentNode.dataset.index];1!==a.timeLength?(a.timeLength--,n.setState({DraggedTaskList:t}),n.updateCalendarLength()):alert("Task cannot be less than 30 minutes")},n.deleteTask=function(e){var t=Object(o.a)(n.state.DraggedTaskList),a=e.target.parentNode.dataset.index;t.splice(a,1),n.setState({DraggedTaskList:t}),n.updateCalendarLength()},n.moveCard=function(e,t){var a=Object(o.a)(n.state.DraggedTaskList),r=a[e];a.splice(e,1),a.splice(t,0,r),n.setState({DraggedTaskList:a})},n.handleClearSchedule=function(){n.setState({DraggedTaskList:[],TotalTimeLength:""})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(D.a,{parent:this}),r.a.createElement(T,{handleClearSchedule:this.handleClearSchedule}),r.a.createElement(S,{taskList:this.state.DraggedTaskList,onDrop:this.onDrop,handleDecrement:this.handleDecrement,handleIncrement:this.handleIncrement,deleteTask:this.deleteTask,moveCard:this.moveCard}))}}]),t}(n.Component)),I=Object(g.DragDropContext)(x.a)(w);i.a.render(r.a.createElement(I,null),document.getElementById("root"))},48:function(e,t,a){e.exports=a(111)}},[[48,1,2]]]);
//# sourceMappingURL=main.db8e6176.chunk.js.map