var n="Array Object String Date RegExp Function Boolean Number Null Undefined";function t(n){return Object.prototype.toString.apply(n).slice(8,-1)}export default function(){for(var e,r=[],u=arguments.length;u--;)r[u]=arguments[u];return r.map(function(e){return"String"===t(e)&&n.includes(e)?e:t(e)}).reduce(function(n,t){return e=n===t,t}),e};
//# sourceMappingURL=samesame.m.js.map
