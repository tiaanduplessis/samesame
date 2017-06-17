var types = 'Array Object String Date RegExp Function Boolean Number Null Undefined';

function type (value) {
  return Object.prototype.toString.apply(value).slice(8, -1)
}

var index = function () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var result;

  args
    .map(function (value) {
      return type(value) === 'String' && types.includes(value) ? value : type(value)
    })
    .reduce(function (acc, curr) {
      result = acc === curr;
      return curr
    });

  return result
};

export default index;
