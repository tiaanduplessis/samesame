var n="Array Object String Date RegExp Function Boolean Number Null Undefined";function e(n){return Object.prototype.toString.apply(n).slice(8,-1)}module.exports=function(){for(var r,t=[],u=arguments.length;u--;)t[u]=arguments[u];return t.map(function(r){return"String"===e(r)&&n.includes(r)?r:e(r)}).reduce(function(n,e){return r=n===e,e}),r};
//# sourceMappingURL=samesame.js.map
