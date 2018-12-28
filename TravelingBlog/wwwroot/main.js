(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es6/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es6/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/es7/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es7/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var FUNCTION = 'function';
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    if (global['Zone']) {
        throw new Error('Zone already loaded.');
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._properties = null;
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                throw Error('Already loaded patch: ' + name);
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== FUNCTION) {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = undefined; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            // we have to define an variable here, if not
            // typescript compiler will complain below
            var isNotScheduled = task.state === notScheduled;
            if (isNotScheduled && task.type === eventTask) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = null;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this
                            .name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, null));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) { return delegate.invokeTask(target, task, applyThis, applyArgs); },
        onCancelTask: function (delegate, _, target, task) {
            return delegate.cancelTask(target, task);
        }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt =
                zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ?
                this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ?
                this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                return this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ?
                    ' or \'' + fromState2 + '\'' :
                    '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId;
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                nativeMicroTaskQueuePromise[symbolThen](drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return null; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === FUNCTION) {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally          
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise = null || resolve(value));
            }
            function onReject(error) {
                promise && (promise = null || reject(error));
            }
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            var count = 0;
            var resolvedValues = [];
            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                var value = values_2[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then((function (index) { return function (value) {
                    resolvedValues[index] = value;
                    count--;
                    if (!count) {
                        resolve(resolvedValues);
                    }
                }; })(count), reject);
                count++;
            }
            if (!count)
                resolve(resolvedValues);
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
        event.preventDefault();
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask, null);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        var customScheduleGlobal = function () {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var eventName = arguments[0];
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = eventName + FALSE_STR;
                    var trueEventName = eventName + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource + eventName;
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : null;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                task.options = options;
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    handleId: null,
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global.__Zone_ignore_on_properties;
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var _registerElement = document.registerElement;
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    document.registerElement = function (name, opts) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = 'Document.registerElement::' + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return _registerElement.call(document, name, opts);
    };
    attachOriginToPatched(document.registerElement, _registerElement);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
    registerElementPatch(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            XMLHttpRequest[XHR_SCHEDULED] = false;
            var data = task.data;
            var target = data.target;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        task.invoke();
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            XMLHttpRequest[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = {
                    target: self,
                    url: self[XHR_URL],
                    isPeriodic: false,
                    delay: null,
                    args: args,
                    aborted: false
                };
                return scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _directives_email_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/email.validator.directive */ "./src/app/directives/email.validator.directive.ts");
/* harmony import */ var _account_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.routing */ "./src/app/account/account.routing.ts");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./facebook-login/facebook-login.component */ "./src/app/account/facebook-login/facebook-login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _account_routing__WEBPACK_IMPORTED_MODULE_6__["routing"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationFormComponent"], _directives_email_validator_directive__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__["LoginFormComponent"], _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginComponent"]],
            providers: [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/account.routing.ts":
/*!********************************************!*\
  !*** ./src/app/account/account.routing.ts ***!
  \********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facebook-login/facebook-login.component */ "./src/app/account/facebook-login/facebook-login.component.ts");




var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    { path: 'register', component: _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_1__["RegistrationFormComponent"] },
    { path: 'login', component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"] },
    { path: 'facebook-login', component: _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginComponent"] }
]);


/***/ }),

/***/ "./src/app/account/facebook-login/facebook-login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/account/facebook-login/facebook-login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"col\" style=\"text-align:center\">\n    <a *ngIf=\"!isRequesting\" href=\"javascript:void(0)\" (click)=\"launchFbLogin()\"> <img class=\"img-fluid\" src=\"/assets/facebook-login.png\" /></a>\n    <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\n    <div *ngIf=\"failed\" class=\"alert alert-danger\" role=\"alert\">\n      <p><strong>Oops!</strong> Your facebook login failed.</p>\n      <ul>\n        <li>Error: {{error}}</li>\n        <li>Description: {{errorDescription}}</li>\n      </ul>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/account/facebook-login/facebook-login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/account/facebook-login/facebook-login.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZmFjZWJvb2stbG9naW4vZmFjZWJvb2stbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/facebook-login/facebook-login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/account/facebook-login/facebook-login.component.ts ***!
  \********************************************************************/
/*! exports provided: FacebookLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginComponent", function() { return FacebookLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacebookLoginComponent = (function () {
    function FacebookLoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        if (window.addEventListener) {
            window.addEventListener('message', this.handleMessage.bind(this), false);
        }
        else {
            window.attachEvent('onmessage', this.handleMessage.bind(this));
        }
    }
    FacebookLoginComponent.prototype.launchFbLogin = function () {
        // tslint:disable-next-line:max-line-length
        this.authWindow = window.open('https://www.facebook.com/v2.11/dialog/oauth?&response_type=token&display=popup&client_id=312472109343376&display=popup&redirect_uri=https://localhost:44360/facebook-auth.html&scope=email', null, 'width=600,height=400');
    };
    FacebookLoginComponent.prototype.handleMessage = function (event) {
        var _this = this;
        var message = event;
        // Only trust messages from the below origin.
        if (message.origin !== 'https://localhost:44360')
            return;
        this.authWindow.close();
        var result = JSON.parse(message.data);
        if (!result.status) {
            this.failed = true;
            this.error = result.error;
            this.errorDescription = result.errorDescription;
        }
        else {
            this.failed = false;
            this.isRequesting = true;
            this.userService.facebookLogin(result.accessToken)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/dashboard/home']);
                }
            }, function (error) {
                _this.failed = true;
                _this.error = error;
            });
        }
    };
    FacebookLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facebook-login',
            template: __webpack_require__(/*! ./facebook-login.component.html */ "./src/app/account/facebook-login/facebook-login.component.html"),
            styles: [__webpack_require__(/*! ./facebook-login.component.scss */ "./src/app/account/facebook-login/facebook-login.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());



/***/ }),

/***/ "./src/app/account/login-form/login-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\" class=\"animated fadeInLeftBig\">\n  <div class=\"container\">\n    <div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\">\n      <strong>All set!</strong> Please signin with your account\n    </div>\n  <h1>S I G N</h1>\n  <div class=\"alert\">\n    <strong [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">*Please enter a valid email</strong>\n  </div>\n       <label for=\"email\">Email</label>\n       <input  type=\"text\" required name=\"email\" class=\"form-control\" placeholder=\"Email\" [ngModel]=\"credentials.email\" #email=\"ngModel\" tmFocus validateEmail>\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" required name=\"password\" placeholder=\"Password\" ngModel>\n\n    <p>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">S I G N - I N</button>\n      <br>\n      <br>  \n      OR \n      <br>\n      <br> \n      <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/register\">\n        S I G N - U P\n      </button> \n    </p>\n    <p>\n    </p>\n    \n    <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\n        \n    <hr>\n      <app-facebook-login></app-facebook-login>\n    <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\n      <strong>Oops!</strong> {{errors}}\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-user-alert {\n  padding-top: 0px; }\n\n.text-danger {\n  color: #dc3545 !important;\n  font-size: 100%; }\n\nform {\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 74px;\n  margin-bottom: 105px;\n  color: #f1f1f1; }\n\n.div.container {\n  margin: 68px;\n  padding: 150px;\n  width: 600px; }\n\n.container {\n  padding: 70px;\n  width: 100%; }\n\nlabel {\n  display: inline-block;\n  margin-top: 3px;\n  margin-bottom: 10px; }\n\ndiv {\n  margin-bottom: 0px;\n  border-radius: 15px;\n  background-color: #212529;\n  padding: 20px; }\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 15px; }\n\ninput[type=text], select {\n  font-size: 20px;\n  width: 100%;\n  padding: 0.25em;\n  margin: 0px 0px 8px 0px;\n  display: inline-block;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\ninput[type=password] {\n  font-size: 20px;\n  width: 100%;\n  padding: 0.25em;\n  border: 2px solid #999;\n  /* 2 animations: shake, and glow red */\n  -webkit-animation-name: shake, glow-red;\n          animation-name: shake, glow-red;\n  -webkit-animation-duration: 0.7s, 0.35s;\n          animation-duration: 0.7s, 0.35s;\n  -webkit-animation-iteration-count: 1, 2;\n          animation-iteration-count: 1, 2; }\n\n@-webkit-keyframes shake {\n  0%, 20%, 40%, 60%, 80% {\n    -webkit-transform: translateX(8px);\n            transform: translateX(8px); }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translateX(-8px);\n            transform: translateX(-8px); } }\n\n@keyframes shake {\n  0%, 20%, 40%, 60%, 80% {\n    -webkit-transform: translateX(8px);\n            transform: translateX(8px); }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translateX(-8px);\n            transform: translateX(-8px); } }\n\n@-webkit-keyframes glow-red {\n  50% {\n    border-color: indianred; } }\n\n@keyframes glow-red {\n  50% {\n    border-color: indianred; } }\n\nh1 {\n  color: #f1f1f1;\n  width: auto;\n  text-align: center;\n  margin-bottom: 0px; }\n\np {\n  margin-bottom: 15px;\n  margin-top: 20px;\n  text-align: center; }\n\nbutton[type=button] {\n  margin-left: auto; }\n\nbutton[type=submit] {\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi1mb3JtL0M6XFxVc2Vyc1xcU2FzaGthXFxEZXNrdG9wXFxTb2Z0XFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nLkFuZ3VsYXIvc3JjXFxhcHBcXGFjY291bnRcXGxvZ2luLWZvcm1cXGxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSwwQkFBd0I7RUFDeEIsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSwwQ0FBeUM7RUFDekMsaUJBQWdCO0VBQ2hCLHFCQUFvQjtFQUNwQixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osZUFBYztFQUNkLGFBQVksRUFDYjs7QUFFRDtFQUNFLGNBQWE7RUFDYixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxzQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLDBCQUF3QjtFQUV4QixjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsZ0JBQWU7RUFDZix3QkFBdUI7RUFDdkIsc0JBQXFCO0VBQ3JCLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsZ0JBQWU7RUFDZix1QkFBc0I7RUFDdEIsdUNBQXVDO0VBQ3ZDLHdDQUErQjtVQUEvQixnQ0FBK0I7RUFDL0Isd0NBQStCO1VBQS9CLGdDQUErQjtFQUMvQix3Q0FBK0I7VUFBL0IsZ0NBQStCLEVBbUJoQzs7QUFsQkM7RUFDRTtJQUNFLG1DQUEwQjtZQUExQiwyQkFBMEIsRUFBQTtFQUU1Qjs7Ozs7SUFLRSxvQ0FBMkI7WUFBM0IsNEJBQTJCLEVBQUEsRUFBQTs7QUFUL0I7RUFDRTtJQUNFLG1DQUEwQjtZQUExQiwyQkFBMEIsRUFBQTtFQUU1Qjs7Ozs7SUFLRSxvQ0FBMkI7WUFBM0IsNEJBQTJCLEVBQUEsRUFBQTs7QUFJL0I7RUFDRTtJQUNFLHdCQUF1QixFQUFBLEVBQUE7O0FBRjNCO0VBQ0U7SUFDRSx3QkFBdUIsRUFBQSxFQUFBOztBQUs3QjtFQUNFLGVBQWE7RUFDYixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ25COztBQUVEO0VBRUUsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LXVzZXItYWxlcnQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4udGV4dC1kYW5nZXIge1xuICBjb2xvcjogI2RjMzU0NSFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuZm9ybSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiA3NHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMDVweDtcbiAgY29sb3I6ICNmMWYxZjE7IFxufVxuXG4uZGl2LmNvbnRhaW5lciB7XG4gIG1hcmdpbjogNjhweDtcbiAgcGFkZGluZzogMTUwcHg7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDcwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5kaXYge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IzIxMjUyOTtcbiAgLy8gYm9yZGVyOiA4cHggc29saWQgIzM3MTk2NjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3Qge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjI1ZW07XG4gIG1hcmdpbjogMHB4IDBweCA4cHggMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXRbdHlwZT1wYXNzd29yZF0sIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC4yNWVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTk5O1xuICAvKiAyIGFuaW1hdGlvbnM6IHNoYWtlLCBhbmQgZ2xvdyByZWQgKi9cbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlLCBnbG93LXJlZDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzLCAwLjM1cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSwgMjtcbiAgQGtleWZyYW1lcyBzaGFrZSB7XG4gICAgMCUsIDIwJSwgNDAlLCA2MCUsIDgwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KTtcbiAgICB9XG4gICAgMTAlLFxuICAgIDMwJSxcbiAgICA1MCUsXG4gICAgNzAlLFxuICAgIDkwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLThweCk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGdsb3ctcmVkIHtcbiAgICA1MCUge1xuICAgICAgYm9yZGVyLWNvbG9yOiBpbmRpYW5yZWQ7XG4gICAgfVxuICB9XG59XG5cbmgxIHtcbiAgY29sb3I6I2YxZjFmMTtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b25bdHlwZSA9IGJ1dHRvbl17XG5cbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbmJ1dHRvblt0eXBlID0gc3VibWl0XXtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.ts ***!
  \************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = (function () {
    function LoginFormComponent(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.credentials = { email: '', password: '' };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.email = param['email'];
        });
    };
    LoginFormComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    LoginFormComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.login(value.email, value.password)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/dashboard/home']);
                }
            }, function (error) { return _this.errors = error; });
        }
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/account/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/account/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" novalidate (ngSubmit)=\"registerUser(f)\" class=\"animated fadeInLeftBig\">\n    <div class=\"container\">\n        <h1>Register</h1>\n        <p>Please fill in this form to create an account.</p>\n        <p>OR</p>\n        <p><app-facebook-login></app-facebook-login></p>\n        <hr>\n  <!-- Enter firstName part-->\n      <label for=\"first-name\"><b>First name</b></label>\n      <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Your first name\" name=\"firstName\" tmFocus ngModel>\n    \n  <!-- Enter lastName part -->\n      <label for=\"last-name\"><b>Last name</b></label>\n      <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Your last name\" name=\"lastName\" ngModel>\n    \n  <!-- Enter email -->\n    <div class=\"alert\">\n       <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">*Please enter a valid email</small>\n    </div> \n      <label for=\"email\"><b>Email</b></label>\n      <input id=\"email\" type=\"text\" required name=\"email\" validateEmail class=\"form-control\" placeholder=\"Email\" ngModel #email=\"ngModel\">\n  \n  <!-- password part -->\n      <label for=\"password\"><b>Password</b></label>\n      <input id=\"password\" type=\"password\" class=\"form-control\"name=\"password\" placeholder=\"Password\" ngModel>\n    \n  <!-- Choose country -->\n      <label for=\"country\"><b>Country</b></label>\n      <input type=\"text\" class=\"form-control\" id=\"location\"  name=\"location\" ngModel placeholder=\"Location\" ngModel>\n          \n      <hr>\n      <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p>\n  \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">Sign Up</button>\n  \n      <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\n  \n    </div>\n      <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\n        <strong>Oops!</strong> {{errors}}\n      </div>\n  \n  </form>\n  "

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 73px;\n  margin-bottom: 105px;\n  color: #f1f1f1; }\n\n.container {\n  padding: 15px;\n  width: 100%; }\n\ndiv {\n  border-radius: 15px;\n  background-color: #31312f;\n  padding: 0px; }\n\ndiv.alert {\n  margin-bottom: 0px; }\n\n.text-danger {\n  font-size: 100%;\n  color: #dc3545 !important; }\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 15px; }\n\na {\n  color: dodgerblue; }\n\ninput {\n  margin-left: 10px; }\n\ninput[type=text], input[type=password], select {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 0px 0px 8px 0px;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\nlabel {\n  margin-bottom: 0px; }\n\nh1 {\n  text-align: center; }\n\np {\n  margin-bottom: 3px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9yZWdpc3RyYXRpb24tZm9ybS9DOlxcVXNlcnNcXFNhc2hrYVxcRGVza3RvcFxcU29mdFxcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZy5Bbmd1bGFyL3NyY1xcYXBwXFxhY2NvdW50XFxyZWdpc3RyYXRpb24tZm9ybVxccmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBeUM7RUFDekMsaUJBQWdCO0VBQ2hCLHFCQUFvQjtFQUNwQixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsWUFBVyxFQUNaOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDBCQUF5QjtFQUN6QixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLDBCQUF3QixFQUN6Qjs7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixzQkFBcUI7RUFDckIsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxtQkFDRixFQUFDOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmVnaXN0cmF0aW9uLWZvcm0vcmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogNzNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTA1cHg7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTMxMmY7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuZGl2LmFsZXJ0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4udGV4dC1kYW5nZXIge1xuICBmb250LXNpemU6IDEwMCU7XG4gIGNvbG9yOiAjZGMzNTQ1IWltcG9ydGFudDtcbn1cblxuaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5hIHtcbiAgY29sb3I6IGRvZGdlcmJsdWU7XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDBweCAwcHggOHB4IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5we1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationFormComponent = (function () {
    function RegistrationFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitted = false;
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.registerUser = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.register(value.email, value.password, value.firstName, value.lastName, value.location)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
                }
            }, function (errors) { return _this.errors = errors; });
        }
    };
    RegistrationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-form',
            template: __webpack_require__(/*! ./registration-form.component.html */ "./src/app/account/registration-form/registration-form.component.html"),
            styles: [__webpack_require__(/*! ./registration-form.component.scss */ "./src/app/account/registration-form/registration-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  margin: 0px;\n  padding: 0px;\n  max-width: 100%;\n  min-height: 200%;\n  max-height: 200%;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxTYXNoa2FcXERlc2t0b3BcXFNvZnRcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2cuQW5ndWxhci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyMDAlO1xuICBtYXgtaGVpZ2h0OiAyMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.model = {};
    }
    AppComponent.prototype.onSubmit = function () {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _authenticate_xhr_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authenticate-xhr.backend */ "./src/app/authenticate-xhr.backend.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _edit_edit_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit/edit.module */ "./src/app/edit/edit.module.ts");
/* harmony import */ var _userinfo_userinfo_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./userinfo/userinfo.module */ "./src/app/userinfo/userinfo.module.ts");
/* harmony import */ var _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _fulltrip_fulltrip_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fulltrip/fulltrip.module */ "./src/app/fulltrip/fulltrip.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* App Root */



/* Account Imports */

/* Dashboard Imports */

/*Edit Imports */





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]
            ],
            imports: [
                _account_account_module__WEBPACK_IMPORTED_MODULE_9__["AccountModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_10__["DashboardModule"],
                _edit_edit_module__WEBPACK_IMPORTED_MODULE_11__["EditModule"],
                _userinfo_userinfo_module__WEBPACK_IMPORTED_MODULE_12__["UserInfoModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _fulltrip_fulltrip_module__WEBPACK_IMPORTED_MODULE_15__["FullTripModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            providers: [_shared_utils_config_service__WEBPACK_IMPORTED_MODULE_13__["ConfigService"], {
                    provide: _angular_http__WEBPACK_IMPORTED_MODULE_3__["XHRBackend"],
                    useClass: _authenticate_xhr_backend__WEBPACK_IMPORTED_MODULE_4__["AuthenticateXHRBackend"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");


var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// auth.guard.ts



var AuthGuard = (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.user.isLoggedIn()) {
            this.router.navigate(['/account/login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authenticate-xhr.backend.ts":
/*!*********************************************!*\
  !*** ./src/app/authenticate-xhr.backend.ts ***!
  \*********************************************/
/*! exports provided: AuthenticateXHRBackend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateXHRBackend", function() { return AuthenticateXHRBackend; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// sweet global way to handle 401s - works in tandem with existing AuthGuard route checks
// http://stackoverflow.com/questions/34934009/handling-401s-globally-with-angular-2
var AuthenticateXHRBackend = (function (_super) {
    __extends(AuthenticateXHRBackend, _super);
    function AuthenticateXHRBackend(_browserXhr, _baseResponseOptions, _xsrfStrategy) {
        return _super.call(this, _browserXhr, _baseResponseOptions, _xsrfStrategy) || this;
    }
    AuthenticateXHRBackend.prototype.createConnection = function (request) {
        var xhrConnection = _super.prototype.createConnection.call(this, request);
        xhrConnection.response = xhrConnection.response.catch(function (error) {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                console.log('The authentication session expired or the user is not authorized. Force refresh of the current page.');
                /* Great solution for bundling with Auth Guard!
                1. Auth Guard checks authorized user (e.g. by looking into LocalStorage).
                2. On 401/403 response you clean authorized user for the Guard (e.g. by removing coresponding parameters in LocalStorage).
                3. As at this early stage you can't access the Router for forwarding to the login page,
                4. refreshing the same page will trigger the Guard checks, which will forward you to the login screen */
                localStorage.removeItem('auth_token');
                window.location.href = window.location.href + '?' + new Date().getMilliseconds();
            }
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error);
        });
        return xhrConnection;
    };
    AuthenticateXHRBackend = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["BrowserXhr"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["XSRFStrategy"]])
    ], AuthenticateXHRBackend);
    return AuthenticateXHRBackend;
}(_angular_http__WEBPACK_IMPORTED_MODULE_0__["XHRBackend"]));



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/root.component */ "./src/app/dashboard/root/root.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/dashboard.service */ "./src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _trips_trips_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trips/trips.component */ "./src/app/dashboard/trips/trips.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dashboard_routing__WEBPACK_IMPORTED_MODULE_4__["routing"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_root_root_component__WEBPACK_IMPORTED_MODULE_5__["RootComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"], _trips_trips_component__WEBPACK_IMPORTED_MODULE_10__["TripsComponent"]],
            exports: [],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root/root.component */ "./src/app/dashboard/root/root.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _trips_trips_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trips/trips.component */ "./src/app/dashboard/trips/trips.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");






var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    {
        path: 'dashboard',
        component: _root_root_component__WEBPACK_IMPORTED_MODULE_1__["RootComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"] },
            { path: 'trips', component: _trips_trips_component__WEBPACK_IMPORTED_MODULE_4__["TripsComponent"] },
        ]
    }
]);


/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" class=\"Centered\">\n  <div class=\"col-md-6 col-sm-3\">\n    <p>{{homeDetails?.message}}</p>\n    <p><strong>Name:</strong> {{homeDetails?.firstName}} {{homeDetails?.lastName}}</p>\n    <p *ngIf=\"homeDetails?.location\"><strong>Location:</strong> {{homeDetails?.location}}</p>\n    <p *ngIf=\"homeDetails?.locale\"><strong>Locale:</strong> {{homeDetails?.locale}}</p>\n    <p *ngIf=\"homeDetails?.gender\"><strong>Gender:</strong> {{homeDetails?.gender}}</p>\n    <p *ngIf=\"homeDetails?.facebookId\"><strong>Facebook Id:</strong> {{homeDetails?.facebookId}}</p>\n    <div *ngIf=\"homeDetails?.pictureUrl\"><img src=\"{{homeDetails?.pictureUrl}}\" /></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Centered {\n  margin-top: 4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvQzpcXFVzZXJzXFxTYXNoa2FcXERlc2t0b3BcXFNvZnRcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2cuQW5ndWxhci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNlbnRlcmVkXG57XG4gICAgbWFyZ2luLXRvcDogNGVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/dashboard/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getHomeDetails()
            .subscribe(function (homeDetails) {
            _this.homeDetails = homeDetails;
        }, function (error) {
            //this.notificationService.printErrorMessage(error);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/dashboard/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/models/trip.details.interface.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/models/trip.details.interface.ts ***!
  \************************************************************/
/*! exports provided: TripDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetails", function() { return TripDetails; });
var TripDetails = (function () {
    function TripDetails(id, name, isDone, description) {
        this.id = id;
        this.name = name;
        this.isDone = isDone;
        this.description = description;
    }
    return TripDetails;
}());



/***/ }),

/***/ "./src/app/dashboard/root/root.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/root/root.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <main role=\"main\" class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\">\n    <router-outlet></router-outlet>\n  </main>\n  <nav class=\"col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar pull-right\">\n    <ul class=\"nav nav-pills flex-column\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"/dashboard/home\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"/dashboard/trips\">My Trips</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"/dashboard/settings\">Settings</a>\n        </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/root/root.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Sidebar\n */\n.sidebar {\n  position: fixed;\n  top: 51px;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  padding: 20px 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */\n  border-left: 1px solid #eee; }\n.sidebar .nav {\n  margin-bottom: 20px; }\n.sidebar .nav-item {\n  width: 100%; }\n.sidebar .nav-item + .nav-item {\n  margin-left: 0; }\n.sidebar .nav-link {\n  border-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Jvb3QvQzpcXFVzZXJzXFxTYXNoa2FcXERlc2t0b3BcXFNvZnRcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2cuQW5ndWxhci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxyb290XFxyb290LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUg7RUFDRSxnQkFBZTtFQUNmLFVBQVM7RUFDVCxVQUFTO0VBQ1QsU0FBUTtFQUNSLGNBQWE7RUFDYixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFBRSw4REFBOEQ7RUFDaEYsNEJBQTJCLEVBQzVCO0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7QUFFRDtFQUNFLFlBQVcsRUFDWjtBQUVEO0VBQ0UsZUFBYyxFQUNmO0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcm9vdC9yb290LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNpZGViYXJcbiAqL1xuXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MXB4O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xufVxuXG4uc2lkZWJhciAubmF2IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNpZGViYXIgLm5hdi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaWRlYmFyIC5uYXYtaXRlbSArIC5uYXYtaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2lkZWJhciAubmF2LWxpbmsge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/root/root.component.ts ***!
  \**************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/dashboard/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.scss */ "./src/app/dashboard/root/root.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/services/dashboard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/services/dashboard.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rxjs-operators */ "./src/app/rxjs-operators.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Add the RxJS Observable operators we need in this app.

var DashboardService = (function (_super) {
    __extends(DashboardService, _super);
    function DashboardService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    DashboardService.prototype.getHomeDetails = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.baseUrl + "/api/dashboard/home", { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DashboardService.prototype.getTrips = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.baseUrl + "/api/trip/mytrips", { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DashboardService.prototype.createTrip = function (trip) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.post(this.baseUrl + "/api/trip/addTrip", JSON.stringify(trip), { headers: headers }).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    DashboardService.prototype.updateTrip = function (trip) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.put(this.baseUrl + "/api/trip/" + trip.id, trip, { headers: headers });
    };
    DashboardService.prototype.deleteTrip = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.delete(this.baseUrl + "/api/trip/" + id, { headers: headers });
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], DashboardService);
    return DashboardService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"Centered\">\n  <div class=\"row\">\n      <div class=\"col-md-6 col-sm-3\">\n        <h1>\n          Settings.\n        </h1>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Centered {\n  margin-top: 4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3NldHRpbmdzL0M6XFxVc2Vyc1xcU2FzaGthXFxEZXNrdG9wXFxTb2Z0XFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nLkFuZ3VsYXIvc3JjXFxhcHBcXGRhc2hib2FyZFxcc2V0dGluZ3NcXHNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQ2VudGVyZWRcbntcbiAgICBtYXJnaW4tdG9wOiA0ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/dashboard/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/dashboard/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/trips/trips.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/trips/trips.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"Centered\">\n<div class=\"row\">\n    <div class=\"col-md-6 col-sm-3\">\n        <h1>Your Trips:</h1>\n        <input type=\"button\" value=\"AddTrip\" class=\"btn btn-default\" (click)=\"add()\" />\n        <ul *ngIf=\"tableMode; else create\">           \n            <li *ngFor=\"let p of trips\">\n                <!--<ng-template [ngIf]=\"trip?.id != p.id\" [ngIfElse]=\"edit\">-->\n                <ng-template [ngIf]=\"trip?.id != p.id\">\n                    <div>Name: {{ p?.name }}</div>\n                    <div [ngClass]=\"{greenclass: p?.isDone == true, redclass: p?.isDone == false}\">Finished: {{ p?.isDone }}</div>\n                    <p>\n                        <textarea rows=\"3\" cols=\"60\" readonly=\"readonly\" class=\"form-control\">{{ p?.description }}</textarea>\n                    </p>\n                    <p>\n                        <button class=\"btn btn-sm btn-primary\" href=\"#\" routerLink=\"/edit/trip/{{p.id}}\">Edit</button>\n                        <button class=\"btn btn-sm btn-danger\"  (click)=\"delete(p)\">Delete</button>\n                    </p>\n                </ng-template>\n            </li>     \n        </ul>\n    </div>\n</div>\n</body>     \n\n    <!--шаблон для добавления-->\n    <ng-template #create>\n        <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" [(ngModel)]=\"trip.name\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\"> \n            <label>Description</label>\n            <textarea [(ngModel)]=\"trip.description\" class=\"form-control\"></textarea>\n        </div>\n        <div>\n            <input type=\"button\" value=\"Save\" (click)=\"save()\" class=\"btn btn-success\" />\n            <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-warning\" />\n        </div>\n    </ng-template>\n"

/***/ }),

/***/ "./src/app/dashboard/trips/trips.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dashboard/trips/trips.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  resize: none; }\n\n.redclass {\n  color: red; }\n\n.greenclass {\n  color: green; }\n\n.Centered {\n  margin-top: 4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3RyaXBzL0M6XFxVc2Vyc1xcU2FzaGthXFxEZXNrdG9wXFxTb2Z0XFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nLkFuZ3VsYXIvc3JjXFxhcHBcXGRhc2hib2FyZFxcdHJpcHNcXHRyaXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBUyxFQUNaOztBQUVEO0VBQ0ksYUFBVyxFQUNkOztBQUVEO0VBRUksZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvdHJpcHMvdHJpcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4ucmVkY2xhc3N7XG4gICAgY29sb3I6cmVkO1xufVxuXG4uZ3JlZW5jbGFzc3tcbiAgICBjb2xvcjpncmVlbjtcbn1cblxuLkNlbnRlcmVkXG57XG4gICAgbWFyZ2luLXRvcDogNGVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/trips/trips.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/trips/trips.component.ts ***!
  \****************************************************/
/*! exports provided: TripsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsComponent", function() { return TripsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_trip_details_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/trip.details.interface */ "./src/app/dashboard/models/trip.details.interface.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/dashboard/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TripsComponent = (function () {
    function TripsComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.trip = new _models_trip_details_interface__WEBPACK_IMPORTED_MODULE_1__["TripDetails"]();
        this.tableMode = true;
    }
    TripsComponent.prototype.ngOnInit = function () {
        this.loadTrips();
    };
    TripsComponent.prototype.loadTrips = function () {
        var _this = this;
        this.dashboardService.getTrips()
            .subscribe(function (trips) {
            _this.trips = trips;
        }, function (error) {
            //this.notificationService.printErrorMessage(error);
        });
    };
    TripsComponent.prototype.save = function () {
        var _this = this;
        if (this.trip.id == null) {
            this.dashboardService.createTrip(this.trip).subscribe(function (data) { return _this.loadTrips(); });
        }
        else {
            this.dashboardService.updateTrip(this.trip).subscribe(function (data) { return _this.loadTrips(); });
        }
        this.cancel();
    };
    TripsComponent.prototype.editTrip = function (trip) {
        this.trip = trip;
    };
    TripsComponent.prototype.cancel = function () {
        this.trip = new _models_trip_details_interface__WEBPACK_IMPORTED_MODULE_1__["TripDetails"]();
        this.tableMode = true;
    };
    TripsComponent.prototype.delete = function (trip) {
        var _this = this;
        var r = confirm("Are you sure?");
        if (r == true) {
            this.dashboardService.deleteTrip(trip.id).subscribe(function (data) { return _this.loadTrips(); });
        }
    };
    TripsComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    TripsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trips',
            template: __webpack_require__(/*! ./trips.component.html */ "./src/app/dashboard/trips/trips.component.html"),
            styles: [__webpack_require__(/*! ./trips.component.scss */ "./src/app/dashboard/trips/trips.component.scss")],
            providers: [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]] //
        }),
        __metadata("design:paramtypes", [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], TripsComponent);
    return TripsComponent;
}());



/***/ }),

/***/ "./src/app/directives/email.validator.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/email.validator.directive.ts ***!
  \*********************************************************/
/*! exports provided: EmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function validateEmailFactory() {
    return function (c) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
}
var EmailValidator = (function () {
    function EmailValidator() {
        this.validator = validateEmailFactory();
    }
    EmailValidator_1 = EmailValidator;
    EmailValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    EmailValidator = EmailValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateEmail][ngModel],[validateEmail][formControl]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EmailValidator_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], EmailValidator);
    return EmailValidator;
    var EmailValidator_1;
}());



/***/ }),

/***/ "./src/app/directives/focus.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/focus.directive.ts ***!
  \***********************************************/
/*! exports provided: myFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myFocus", function() { return myFocus; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var myFocus = (function () {
    function myFocus(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // focus won't work at construction time - too early
    }
    myFocus.prototype.ngOnInit = function () {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
    };
    myFocus = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[tmFocus]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], myFocus);
    return myFocus;
}());



/***/ }),

/***/ "./src/app/edit/edit.module.ts":
/*!*************************************!*\
  !*** ./src/app/edit/edit.module.ts ***!
  \*************************************/
/*! exports provided: EditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModule", function() { return EditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _edit_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.routing */ "./src/app/edit/edit.routing.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _trip_trip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trip/trip.component */ "./src/app/edit/trip/trip.component.ts");
/* harmony import */ var _services_edit_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/edit.services */ "./src/app/edit/services/edit.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var EditModule = (function () {
    function EditModule() {
    }
    EditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _edit_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_trip_trip_component__WEBPACK_IMPORTED_MODULE_8__["TripEditComponent"]],
            exports: [],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _services_edit_services__WEBPACK_IMPORTED_MODULE_9__["EditService"]]
        })
    ], EditModule);
    return EditModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.routing.ts":
/*!**************************************!*\
  !*** ./src/app/edit/edit.routing.ts ***!
  \**************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _trip_trip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip/trip.component */ "./src/app/edit/trip/trip.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");



var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    {
        path: 'edit',
        component: _trip_trip_component__WEBPACK_IMPORTED_MODULE_1__["TripEditComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'trip/:id', component: _trip_trip_component__WEBPACK_IMPORTED_MODULE_1__["TripEditComponent"] }
        ]
    }
]);


/***/ }),

/***/ "./src/app/edit/models/trip.with.post.interface.ts":
/*!*********************************************************!*\
  !*** ./src/app/edit/models/trip.with.post.interface.ts ***!
  \*********************************************************/
/*! exports provided: TripWithPost, Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripWithPost", function() { return TripWithPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var TripWithPost = (function () {
    function TripWithPost(id, name, isDone, description, postBlogs) {
        this.id = id;
        this.name = name;
        this.isDone = isDone;
        this.description = description;
        this.postBlogs = postBlogs;
    }
    return TripWithPost;
}());

var Post = (function () {
    function Post(id, name, plot, datOfCreation, tripId) {
        this.id = id;
        this.name = name;
        this.plot = plot;
        this.datOfCreation = datOfCreation;
        this.tripId = tripId;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/edit/services/edit.services.ts":
/*!************************************************!*\
  !*** ./src/app/edit/services/edit.services.ts ***!
  \************************************************/
/*! exports provided: EditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditService", function() { return EditService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rxjs-operators */ "./src/app/rxjs-operators.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Add the RxJS Observable operators we need in this app.

var EditService = (function (_super) {
    __extends(EditService, _super);
    function EditService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    EditService.prototype.getTrip = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.baseUrl + "/api/trip/GetTripWithPosts/" + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EditService.prototype.updateTrip = function (trip) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.put(this.baseUrl + "/api/trip/" + trip.id, trip, { headers: headers });
    };
    EditService.prototype.createPost = function (post) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.post(this.baseUrl + "/api/PostBlog", JSON.stringify(post), { headers: headers }).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    EditService.prototype.updatePost = function (post) {
        console.log("itworls?)");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        //return this.http.put(this.baseUrl + "/api/PostBlog/" + post.id, JSON.stringify(post), { headers }).map(response => response.json()).catch(this.handleError);
        return this.http.put(this.baseUrl + "/api/postblog/" + post.id, post, { headers: headers });
    };
    EditService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], EditService);
    return EditService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/edit/trip/trip.component.html":
/*!***********************************************!*\
  !*** ./src/app/edit/trip/trip.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"Centered\">\n<div class=\"row\">\n    <h1></h1>\n    <h1></h1>\n    <main role=\"main\" class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-3\">\n                <input type=\"button\" value=\"AddPost\" class=\"btn btn-default\" (click)=\"add()\" />\n                <div *ngIf=\"tableMode; else create\">\n                    <h3>Trip Lalalalala</h3>\n                    <label>Name:</label>\n                    <input type=\"text\" [(ngModel)]=\"trip.name\" class=\"form-control\" />\n                    <p>\n                        <label>Finished:</label>\n                        <select [(ngModel)]=\"trip.isDone\" class=\"custom-select\">\n                            <option value=\"true\">True</option>\n                            <option value=\"false\">False</option>\n                        </select>\n                    </p>\n                    <p>\n                        <label>Description</label>\n                        <textarea [(ngModel)]=\"trip.description\" class=\"form-control\"></textarea>\n                    </p>\n                    <input type=\"button\" value=\"Save\" (click)=\"saveTrip()\" class=\"btn btn-sm btn-success\" />\n\n                    <h3>Posts:</h3>\n                    <li *ngFor=\"let p of trip.postBlogs\">\n                        <label>Name:</label>\n                        <input type=\"text\" [(ngModel)]=\"p.name\" class=\"form-control\"/>\n                        <p>\n                            <label>Plot</label>\n                            <textarea [(ngModel)]=\"p.plot\" class=\"form-control\"></textarea>\n                        </p>\n                        <input type=\"button\" value=\"Save\" (click)=\"save(p)\" class=\"btn btn-sm btn-success\" />\n                        <h1></h1>\n                    </li>\n\n                </div>\n            </div>\n        </div>\n    </main>\n</div>\n</body>\n\n<!--шаблон для добавления-->\n<ng-template #create>\n    <div class=\"form-group\">\n        <label>Name</label>\n        <input type=\"text\" [(ngModel)]=\"post.name\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group\"> \n        <label>Plot</label>\n        <textarea [(ngModel)]=\"post.plot\" class=\"form-control\"></textarea>\n    </div>\n    <div>\n        <input type=\"button\" value=\"Save\" (click)=\"save(post)\" class=\"btn btn-success\" />\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-warning\" />\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/edit/trip/trip.component.scss":
/*!***********************************************!*\
  !*** ./src/app/edit/trip/trip.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Centered {\n  margin-top: 4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC90cmlwL0M6XFxVc2Vyc1xcU2FzaGthXFxEZXNrdG9wXFxTb2Z0XFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nLkFuZ3VsYXIvc3JjXFxhcHBcXGVkaXRcXHRyaXBcXHRyaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvdHJpcC90cmlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNlbnRlcmVkXG57XG4gICAgbWFyZ2luLXRvcDogNGVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/edit/trip/trip.component.ts":
/*!*********************************************!*\
  !*** ./src/app/edit/trip/trip.component.ts ***!
  \*********************************************/
/*! exports provided: TripEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripEditComponent", function() { return TripEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_edit_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/edit.services */ "./src/app/edit/services/edit.services.ts");
/* harmony import */ var _models_trip_with_post_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/trip.with.post.interface */ "./src/app/edit/models/trip.with.post.interface.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripEditComponent = (function () {
    function TripEditComponent(editService, router, activeRoute) {
        this.editService = editService;
        this.router = router;
        this.loaded = false;
        this.post = new _models_trip_with_post_interface__WEBPACK_IMPORTED_MODULE_3__["Post"]();
        this.tableMode = true;
        this.id = router.url.toString();
        var s;
        s = this.id.split('/');
        this.id = s[s.length - 1];
    }
    TripEditComponent.prototype.ngOnInit = function () {
        this.loadTrip(this.id);
    };
    TripEditComponent.prototype.loadTrip = function (id) {
        var _this = this;
        this.editService.getTrip(this.id)
            .subscribe(function (data) {
            _this.trip = data;
            if (_this.trip != null)
                _this.loaded = true;
        });
    };
    TripEditComponent.prototype.save = function (post) {
        var _this = this;
        this.post.tripId = Number.parseInt(this.id);
        console.log(this.trip.postBlogs);
        console.log(post);
        if (post.id == null) {
            this.editService.createPost(post).subscribe(function (data) { return _this.loadTrip(_this.id); });
        }
        else {
            console.log("hello");
            this.editService.updatePost(post).subscribe(function (data) { return _this.loadTrip(_this.id); });
        }
        this.cancel();
    };
    TripEditComponent.prototype.cancel = function () {
        this.post = new _models_trip_with_post_interface__WEBPACK_IMPORTED_MODULE_3__["Post"]();
        this.tableMode = true;
    };
    TripEditComponent.prototype.saveTrip = function () {
        var _this = this;
        this.editService.updateTrip(this.trip).subscribe(function (data) { return _this.loadTrip(_this.id); });
    };
    TripEditComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    TripEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip',
            template: __webpack_require__(/*! ./trip.component.html */ "./src/app/edit/trip/trip.component.html"),
            styles: [__webpack_require__(/*! ./trip.component.scss */ "./src/app/edit/trip/trip.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_edit_services__WEBPACK_IMPORTED_MODULE_2__["EditService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TripEditComponent);
    return TripEditComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"footer\">   \n        <div class=\"social\"><a href=\"https://twitter.com/travel\"><i class=\"fab fa-twitter-square\"></i></a><a href=\"https://www.instagram.com/travelandleisure/\"><i class=\"fab fa-instagram\"></i></a><a href=\"https://www.snapchat.com/add/cailinoneil\"><i class=\"fab fa-snapchat-square\"></i></a><a href=\"https://www.facebook.com/TripandTravelBlog/\"><i class=\"fab fa-facebook-square\"></i></a></div>\n        <ul class=\"list-inline\">\n            <li class=\"list-inline-item\"><a href=\"#\">Home</a></li>\n            <li class=\"list-inline-item\"><a href=\"#\">Services</a></li>\n            <li class=\"list-inline-item\"><a href=\"#\">About</a></li>\n            <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n        </ul>\n        <p class=\"copyright\">Traveling Blog © 2018</p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background-color: #050505d2;\n  position: absolute;\n  bottom: -100px;\n  left: 0px;\n  right: 0px;\n  height: 100px; }\n\ndiv.social {\n  text-align: center;\n  padding-top: 4px;\n  padding-bottom: 0px; }\n\ndiv.social a {\n  margin-top: 10px;\n  font-size: 24px;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  margin: 0 8px;\n  color: #ccc;\n  opacity: 0.75; }\n\nfooter li {\n  padding: 0 10px; }\n\nul.list-inline {\n  text-align: center; }\n\np.copyright {\n  text-align: center;\n  margin-top: -13px;\n  font-size: 13px;\n  color: #aaa;\n  margin-bottom: 0; }\n\na {\n  color: #aaa; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcU2FzaGthXFxEZXNrdG9wXFxTb2Z0XFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nLkFuZ3VsYXIvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTBCO0VBQzFCLG1CQUFrQjtFQUNsQixlQUFhO0VBQ2IsVUFBUTtFQUNSLFdBQVM7RUFDVCxjQUFZLEVBQ2I7O0FBRUM7RUFDQSxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNsQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNsQixnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWdCO0VBQ2hCLHNCQUFvQjtFQUNwQixtQkFBaUI7RUFDakIsbUJBQWlCO0VBQ2pCLHVCQUFxQjtFQUNyQixjQUFZO0VBQ1osWUFBVTtFQUNWLGNBQVksRUFDWDs7QUFFRDtFQUNBLGdCQUFlLEVBQ2Q7O0FBRUQ7RUFDQSxtQkFBa0IsRUFDakI7O0FBRUQ7RUFDQSxtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGdCQUFjO0VBQ2QsWUFBVTtFQUNWLGlCQUFlLEVBQ2Q7O0FBRUQ7RUFDQSxZQUFXLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojMDUwNTA1ZDI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOi0xMDBweDtcbiAgbGVmdDowcHg7XG4gIHJpZ2h0OjBweDtcbiAgaGVpZ2h0OjEwMHB4O1xufSBcbiAgXG4gIGRpdi5zb2NpYWwgeyBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9XG4gIFxuICBkaXYuc29jaWFsIGEge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6NDBweDtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBib3JkZXItcmFkaXVzOjUwJTtcbiAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW46MCA4cHg7XG4gIGNvbG9yOiNjY2M7XG4gIG9wYWNpdHk6MC43NTtcbiAgfVxuICBcbiAgZm9vdGVyIGxpIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB9XG4gIFxuICB1bC5saXN0LWlubGluZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgcC5jb3B5cmlnaHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0xM3B4O1xuICBmb250LXNpemU6MTNweDtcbiAgY29sb3I6I2FhYTtcbiAgbWFyZ2luLWJvdHRvbTowO1xuICB9XG4gIFxuICBhIHtcbiAgY29sb3I6ICNhYWE7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/fulltrip/fulltrip.module.ts":
/*!*********************************************!*\
  !*** ./src/app/fulltrip/fulltrip.module.ts ***!
  \*********************************************/
/*! exports provided: FullTripModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullTripModule", function() { return FullTripModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _fulltrip_rooting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fulltrip.rooting */ "./src/app/fulltrip/fulltrip.rooting.ts");
/* harmony import */ var _fulltrip_fulltrip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fulltrip/fulltrip.component */ "./src/app/fulltrip/fulltrip/fulltrip.component.ts");
/* harmony import */ var _fulltrip_services_fulltrip_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fulltrip/services/fulltrip.services */ "./src/app/fulltrip/services/fulltrip.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var FullTripModule = (function () {
    function FullTripModule() {
    }
    FullTripModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _fulltrip_rooting__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_fulltrip_fulltrip_component__WEBPACK_IMPORTED_MODULE_7__["FullTripComponent"]],
            exports: [],
            providers: [_fulltrip_services_fulltrip_services__WEBPACK_IMPORTED_MODULE_8__["FullTripService"]]
        })
    ], FullTripModule);
    return FullTripModule;
}());



/***/ }),

/***/ "./src/app/fulltrip/fulltrip.rooting.ts":
/*!**********************************************!*\
  !*** ./src/app/fulltrip/fulltrip.rooting.ts ***!
  \**********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _fulltrip_fulltrip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fulltrip/fulltrip.component */ "./src/app/fulltrip/fulltrip/fulltrip.component.ts");


var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    { path: 'fulltrip', component: _fulltrip_fulltrip_component__WEBPACK_IMPORTED_MODULE_1__["FullTripComponent"] }
]);


/***/ }),

/***/ "./src/app/fulltrip/fulltrip/fulltrip.component.html":
/*!***********************************************************!*\
  !*** ./src/app/fulltrip/fulltrip/fulltrip.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"noheader container\">\r\n    <div class=\"row centered\">\r\n        <div class=\"col-md table-bordered centered\">\r\n            <div class=\"\">\r\n\r\n\r\n                <li class=\"list-group-item list well well-lg\" *ngFor=\"let n of trips\">\r\n                    <label class=\"item row\">Name : {{n?.name}}</label>\r\n                    <label class=\"item row\">Description : {{n?.description}}</label>\r\n                    <label class=\"item row\">Trip creator : {{n?.firstName}} {{n?.lastName}}</label>\r\n                    <h1></h1>\r\n                </li>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/fulltrip/fulltrip/fulltrip.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/fulltrip/fulltrip/fulltrip.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noheader {\n  margin-top: 5em; }\n\n.hrefs {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVsbHRyaXAvZnVsbHRyaXAvQzpcXFVzZXJzXFxTYXNoa2FcXERlc2t0b3BcXFNvZnRcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2cuQW5ndWxhci9zcmNcXGFwcFxcZnVsbHRyaXBcXGZ1bGx0cmlwXFxmdWxsdHJpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksaUJBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZnVsbHRyaXAvZnVsbHRyaXAvZnVsbHRyaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9oZWFkZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1ZW07XHJcbn1cclxuLmhyZWZze1xyXG4gICAgbWFyZ2luLXRvcCA6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/fulltrip/fulltrip/fulltrip.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/fulltrip/fulltrip/fulltrip.component.ts ***!
  \*********************************************************/
/*! exports provided: FullTripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullTripComponent", function() { return FullTripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_fulltrip_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fulltrip.services */ "./src/app/fulltrip/services/fulltrip.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FullTripComponent = (function () {
    function FullTripComponent(fulltripservice, router, activeRoute) {
        this.fulltripservice = fulltripservice;
        this.router = router;
    }
    FullTripComponent.prototype.ngOnInit = function () {
    };
    FullTripComponent.prototype.getFullTrip = function () {
        var _this = this;
        this.fulltripservice.getFullTrip()
            .subscribe(function (trips) {
            _this.trips = trips;
            console.log(trips);
        }, function (error) {
            //this.nontifi.printErrorMessage(error);
        });
    };
    FullTripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fulltrip',
            template: __webpack_require__(/*! ./fulltrip.component.html */ "./src/app/fulltrip/fulltrip/fulltrip.component.html"),
            styles: [__webpack_require__(/*! ./fulltrip.component.scss */ "./src/app/fulltrip/fulltrip/fulltrip.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_fulltrip_services__WEBPACK_IMPORTED_MODULE_2__["FullTripService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], FullTripComponent);
    return FullTripComponent;
}());



/***/ }),

/***/ "./src/app/fulltrip/services/fulltrip.services.ts":
/*!********************************************************!*\
  !*** ./src/app/fulltrip/services/fulltrip.services.ts ***!
  \********************************************************/
/*! exports provided: FullTripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullTripService", function() { return FullTripService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rxjs-operators */ "./src/app/rxjs-operators.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Add the RxJS Observable operators we need in this app.

var FullTripService = (function (_super) {
    __extends(FullTripService, _super);
    function FullTripService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    FullTripService.prototype.getFullTrip = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + "/api/trip/GetTripWithPosts", { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FullTripService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], FullTripService);
    return FullTripService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n    <!-- Logo -->\n    <a class=\"navbar-brand mb-0 h1\" href=\"#\">\n      <img src=\"assets\\logo.png\" width=\"45\" height=\"45\" class=\"d-inline-block align-top\" alt=\"\">TravelingBlog</a>\n    <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- end logo -->\n\n    <!-- Navigation components -->\n    <!-- Home - Guide - Trips buttons -->\n    <div class=\"navbar-collapse collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav nav1 mr-auto\">\n        <li>\n          <a class=\"nav-link\" href=\"#\">Home</a>\n        </li>\n        <li>\n            <a class=\"nav-link\" href=\"#\">Guids</a>\n        </li>\n        <li>\n            <a class=\"nav-link\" href=\"#\">Trips</a>\n          </li>\n      </ul>\n      <nav class=\"navbar-nav navbar-left\" action=\"\">\n        <form class=\"form-inline my-1 my-lg-0\">\n            <!--<input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">-->\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" href=\"#\" routerLink=\"/search\">Search</button>\n          </form>\n        </nav>\n\n<!-- Right navbar before sign -->\n      <ul *ngIf=\"!status\" class=\"navbar-nav ml-auto\">\n        <li>\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n            <a class=\"btn btn-info btn-sm\" href=\"#\"  routerLink=\"/login\">SIGN-IN</a>\n          </div>\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n            <a class=\"btn btn-info btn-sm \" href=\"#\" routerLink=\"/register\">SIGN-UP</a>\n          </div>\n        </li>\n      </ul>\n\n<!-- Right navbar after sign -->\n      <ul *ngIf=\"status\" class=\"navbar-nav ml-auto\">\n        <li >\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\n              <a class=\"btn btn-info btn-sm \" href=\"#\" routerLink=\"/dashboard\">My Page</a>\n          </div>\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\n              <a class=\"btn btn-info btn-sm \"(click)=\"logout()\" href=\"#\">SIGN OUT</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-right {\n  padding-right: 40px; }\n\n.form-group {\n  padding: 10px; }\n\n.color-blue {\n  color: #0080c5; }\n\n.color-red {\n  color: #FF0000; }\n\n.error-message {\n  font-size: 10px; }\n\n.nav1 {\n  margin-right: 55px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcU2FzaGthXFxEZXNrdG9wXFxTb2Z0XFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nLkFuZ3VsYXIvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMsb0JBQW1CLEVBQUc7O0FBQ3BDO0VBQVksY0FBYSxFQUFHOztBQUM1QjtFQUFhLGVBQWMsRUFBRzs7QUFDOUI7RUFBWSxlQUFjLEVBQUc7O0FBQzdCO0VBQWdCLGdCQUFlLEVBQUc7O0FBQ2xDO0VBRUksbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItcmlnaHR7cGFkZGluZy1yaWdodDogNDBweDt9XG4uZm9ybS1ncm91cHtwYWRkaW5nOiAxMHB4O31cbi5jb2xvci1ibHVlIHtjb2xvcjogIzAwODBjNTt9XG4uY29sb3ItcmVkIHtjb2xvcjogI0ZGMDAwMDt9XG4uZXJyb3ItbWVzc2FnZSB7Zm9udC1zaXplOiAxMHB4O31cbi5uYXYxe1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.logout = function () {
        this.userService.logout();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userService.authNavStatus$.subscribe(function (status) { return _this.status = status; });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item active\" style=\"background-image: url('assets/images/carousel-img/7.jpg')\">\n\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3 class=\"display-4\">Travels inspire us to adventure</h3>\n          <p class=\"lead\">Why us? Our travel blog will help you in organizing a wonderful trip for you.</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\" style=\"background-image: url('assets/images/carousel-img/4.jpg')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3 class=\"display-4\">Wanna share emotions with other travellers?</h3>\n          <p class=\"lead\">Create a trip and tell everything about your journey. Don`t forget to add photo,\n            descriptions!</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\" style=\"background-image: url('assets/images/carousel-img/5.jpg')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3 class=\"display-4\">Let`s start! </h3>\n          <p class=\"lead\">Discover the world with us! Read blogs, get inspired and plan your trip!</p>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</header>\n\n\n<aside id=\"testimonials\" class=\"text-center\" data-enllax-ratio=\".2\" tabindex=\"-1\" style=\"background-position: center 34px;\">\n  <div class=\"section-heading\">\n    <h2 class=\"section-title\">Our experienced blogs!</h2>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <blockquote class=\" testimonial classic\">\n        <img src=\"assets/images/user-img/user-1.jpg\" alt=\"User\"/>\n        <h3>England - why not?</h3>\n        <q>Brits love to sip, slurp and gulp down tea while occasionally dunking a digestive in there too.\n          Among the three ghosts said to haunt Athelhampton House, one of them is an ape.\n          An interesting fact is that French was the official language of England for about 300 years.</q>\n        <p>Julie Fan - Happy Customer</p>\n      </blockquote>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <blockquote class=\"testimonial classic\">\n        <img src=\"assets/images/user-img/user-3.jpg\" alt=\"User\" />\n        <h3>\"Like Spain, I am bound to the past.\"</h3>\n        <q>It’s like a dream to come to Spain and stay for a couple of years and get somebody to teach me Spanish\n          music.\n          I have seen dawn and sunset on moors and windy hills coming in solemn beauty like slow old tunes of Spain.\n        </q>\n        <p>Thomas Doe </p>\n      </blockquote>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <blockquote class=\"testimonial classic\">\n        <img src=\"assets/images/user-img/user-2.jpg\" alt=\"User\" />\n        <h3>Trip to the Netherland</h3>\n        <q>Yep, a country so small you can drive through it from its Northern- to its Southern-tip (the largest\n          distance)\n          in just about two hours if you don’t hit any heavy traffic.\n          Somehow the Dutch still manage to crank out enough food to “Feed the World” with so little space! I liked it!</q>\n        <p>Roslyn Doe</p>\n      </blockquote>\n    </div>\n  </div>\n\n</aside>\n\n<section id=\"portfolios\" class=\"section-padding\">\n  <div class=\"container\">\n    <h2 class=\"section-title\" data-wow-delay=\"0.4s\">Countries and places which inspire</h2>\n    <div class=\"row\">\n      <div id=\"portfolio\" class=\"row\" data-wow-delay=\"0.4s\">\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/7.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/7.jpg\" data-fancybox=\"block-img\" data-title=\"Image #1\">\n                    <i class=\"icon-preview\" title=\"Full-screen window\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\" title=\"Go to trip\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix design print\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/2.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/2.jpg\" data-fancybox=\"block-img\" data-title=\"Image #2\">\n                    <i class=\"icon-preview\" title=\"Full-screen window\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\" title=\"Go to trip\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/3.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/3.jpg\" data-fancybox=\"block-img\" data-title=\"Image #3\">\n                    <i class=\"icon-preview\" title=\"Full-screen window\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\" title=\"Go to trip\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development design\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/4.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/4.jpg\" data-fancybox=\"block-img\" data-title=\"Image #4\">\n                    <i class=\"icon-preview\" title=\"Full-screen window\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\" title=\"Go to trip\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/5.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/5.jpg\" data-fancybox=\"block-img\" data-title=\"Image #5\">\n                    <i class=\"icon-preview\" title=\"Full-screen window\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\" title=\"Go to trip\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix print design\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/6.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/6.jpg\" data-fancybox=\"block-img\" data-title=\"Image #6\">\n                    <i class=\"icon-preview\" title=\"Full-screen window\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\" title=\"Go to trip\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<form>\n  <div class=\"button-section\">\n    <h3>Let`s register and start your advantures!</h3>\n    <input class=\"registrationButton\" type=\"button\" value=\"Register\" onclick=\"window.location.href='/register'\" />\n    <br>\n    <br>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item {\n  height: 65vh;\n  min-height: 500px;\n  background: no-repeat center center scroll;\n  background-size: cover; }\n\n.ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  height: 100%;\n  background-color: #333; }\n\n.active {\n  background-color: #4CAF50; }\n\nli {\n  float: left; }\n\nli a {\n  display: block;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none; }\n\nli a:hover {\n  background-color: #111; }\n\n.btn {\n  color: #4CAF50;\n  margin: 8px;\n  float: right; }\n\n.div.button-section {\n  position: fixed; }\n\n.button-section {\n  padding-bottom: 100px;\n  text-align: center; }\n\n.container {\n  margin-top: 10px; }\n\ndiv#footer {\n  padding: 10px;\n  color: white;\n  background-color: black; }\n\n.col-3 {\n  width: 33.33%; }\n\n.section-heading {\n  padding: 0 0 15px 0; }\n\n.row {\n  padding: 15px !important;\n  flex-wrap: wrap;\n  margin-left: -15px;\n  margin-right: -15px; }\n\n.row-1 {\n  padding: 15px !important;\n  flex-wrap: wrap;\n  margin-left: -45px;\n  margin-right: -45px; }\n\n.clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.testimonial {\n  padding: 15px; }\n\nblockquote {\n  position: relative; }\n\n.testimonial img {\n  max-height: 250px;\n  border-radius: 300em; }\n\n.testimonial footer {\n  padding-top: 12px; }\n\n.testimonial.classic img {\n  display: inline-block;\n  margin-bottom: 25px; }\n\n.testimonial.classic q {\n  display: block; }\n\n.testimonial.classic footer:before {\n  display: block;\n  content: \"\";\n  width: 30px;\n  height: 4px;\n  margin: 10px auto 15px auto; }\n\n.text-center {\n  text-align: center; }\n\np {\n  margin-top: 25px;\n  margin-bottom: 1rem; }\n\n.registrationButton {\n  background-color: #4CAF50;\n  color: black;\n  font-size: 20px;\n  border: 2px solid black;\n  width: 30%;\n  border: none;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  margin: 4px 2px;\n  cursor: pointer; }\n\n.registrationButton:hover {\n  color: #ffff00;\n  background: #000;\n  border: 0px solid #fff; }\n\n.portfolio {\n  visibility: visible; }\n\n.section-title {\n  text-align: center; }\n\n#portfolios .mix {\n  padding: 10px; }\n\n.col-md-4 {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%; }\n\n#portfolios .portfolio-item .shot-item {\n  margin: 0px; }\n\n.shot-item {\n  margin-right: 15px;\n  border-radius: 4px;\n  background: #fff;\n  position: relative; }\n\n.shot-item img {\n  width: 100%; }\n\n.shot-item .overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 180, 217, 0.6);\n  opacity: 0; }\n\n.icon-eye:before {\n  content: \"\\e087\"; }\n\n.overlay {\n  opacity: 0; }\n\n.overlay .icons i {\n  height: 42px;\n  width: 42px;\n  line-height: 42px;\n  color: #00b4d9;\n  left: 50%;\n  margin-left: -24px;\n  margin-top: -24px;\n  top: 50%;\n  position: absolute;\n  z-index: 2;\n  cursor: pointer;\n  text-align: center;\n  font-size: 20px;\n  background: #fff;\n  border-radius: 4px; }\n\n.overlay .preview {\n  position: absolute;\n  left: 40%;\n  top: 50%;\n  color: #fff; }\n\n.overlay .preview .icon-preview {\n  background-image: url('preview.png'); }\n\n.overlay .link {\n  position: absolute;\n  left: 60%;\n  margin-left: 10px;\n  top: 50%;\n  color: #fff; }\n\n.overlay .link .icon-link {\n  background-image: url('link.png'); }\n\n.shot-item:hover .overlay {\n  opacity: 1; }\n\n.icon {\n  width: 50px;\n  height: 60px; }\n\n.lead {\n  text-align: center;\n  color: ghostwhite;\n  font-size: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFNhc2hrYVxcRGVza3RvcFxcU29mdFxcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZy5Bbmd1bGFyL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQiwyQ0FBMEM7RUFJMUMsdUJBQXNCLEVBQ3JCOztBQUVEO0VBQ0Esc0JBQXFCO0VBQ3JCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWix1QkFBc0IsRUFDckI7O0FBRUY7RUFDQywwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDQSxZQUFXLEVBQ1Y7O0FBRUQ7RUFDQSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixzQkFBcUIsRUFDcEI7O0FBRUQ7RUFDQSx1QkFBc0IsRUFDckI7O0FBRUQ7RUFDQSxlQUFjO0VBQ2QsWUFBVztFQUNYLGFBQVksRUFDWDs7QUFFRDtFQUNBLGdCQUNBLEVBQUM7O0FBRUQ7RUFDQSxzQkFBcUI7RUFDckIsbUJBQWtCLEVBQ2pCOztBQUVEO0VBQ0EsaUJBQWdCLEVBQ2Y7O0FBRUQ7RUFDQSxjQUFhO0VBQ2IsYUFBWTtFQUNaLHdCQUF1QixFQUN0Qjs7QUFFRDtFQUNBLGNBQWEsRUFDWjs7QUFFRDtFQUNBLG9CQUFtQixFQUNsQjs7QUFFRDtFQUNBLHlCQUF3QjtFQUN4QixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDbEI7O0FBRUQ7RUFDQSx5QkFBd0I7RUFDeEIsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ2xCOztBQUVEO0VBQ0EsWUFBVztFQUNYLGVBQWM7RUFDZCxZQUFXLEVBQ1Y7O0FBRUQ7RUFDQSxjQUFhLEVBQ1o7O0FBRUQ7RUFDQSxtQkFBa0IsRUFDakI7O0FBRUQ7RUFDQSxrQkFBaUI7RUFDakIscUJBQW9CLEVBQ25COztBQUVEO0VBQ0Esa0JBQWlCLEVBQ2hCOztBQUVEO0VBQ0Esc0JBQXFCO0VBQ3JCLG9CQUFtQixFQUNsQjs7QUFFRDtFQUNBLGVBQWMsRUFDYjs7QUFFRDtFQUNBLGVBQWM7RUFDZCxZQUFXO0VBQ1gsWUFBVztFQUNYLFlBQVc7RUFDWCw0QkFBMkIsRUFDMUI7O0FBRUQ7RUFDQSxtQkFBa0IsRUFDakI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0EsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixXQUFVO0VBQ1YsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLHNCQUFxQjtFQUNyQixnQkFBZTtFQUNmLGdCQUFlLEVBQ2Q7O0FBRUQ7RUFDQSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLHVCQUFzQixFQUNyQjs7QUFFRDtFQUNBLG9CQUFtQixFQUNsQjs7QUFDRDtFQUNBLG1CQUFrQixFQUNqQjs7QUFFRDtFQUNBLGNBQWEsRUFDWjs7QUFFRDtFQUNBLHFCQUFvQjtFQUNwQixzQkFDQSxFQUFDOztBQUVEO0VBQ0EsWUFBVyxFQUNWOztBQUVEO0VBQ0EsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ2pCOztBQUVEO0VBQ0EsWUFBVyxFQUNWOztBQUVEO0VBQ0EsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osUUFBTztFQUNQLE9BQU07RUFDTixtQ0FBa0M7RUFDbEMsV0FBVSxFQUNUOztBQUVEO0VBQ0EsaUJBQWdCLEVBQ2Y7O0FBRUQ7RUFDQSxXQUFVLEVBQ1Q7O0FBRUQ7RUFDQSxhQUFZO0VBQ1osWUFBVztFQUNYLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsVUFBUztFQUNULG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsU0FBUTtFQUNSLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ2pCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxTQUFRO0VBQ1IsWUFBVyxFQUNaOztBQUVEO0VBQ0UscUNBQThELEVBQy9EOztBQUVEO0VBQ0EsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxrQkFBaUI7RUFDakIsU0FBUTtFQUNSLFlBQVcsRUFDVjs7QUFFRDtFQUNFLGtDQUEyRCxFQUM1RDs7QUFFRDtFQUNBLFdBQVUsRUFDVDs7QUFFRDtFQUNBLFlBQVc7RUFDWCxhQUFZLEVBQ1g7O0FBRUQ7RUFDQSxtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaXRlbSB7XG4gIGhlaWdodDogNjV2aDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIHNjcm9sbDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICB9ICBcbiAgXG4gLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG59XG5cbmxpIHtcbmZsb2F0OiBsZWZ0OyBcbn1cblxubGkgYSB7XG5kaXNwbGF5OiBibG9jaztcbnRleHQtYWxpZ246IGNlbnRlcjtcbnBhZGRpbmc6IDE0cHggMTZweDtcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGkgYTpob3ZlciB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xufVxuXG4uYnRuIHtcbmNvbG9yOiAjNENBRjUwO1xubWFyZ2luOiA4cHg7XG5mbG9hdDogcmlnaHQ7XG59XG5cbi5kaXYuYnV0dG9uLXNlY3Rpb24ge1xucG9zaXRpb246IGZpeGVkXG59XG5cbi5idXR0b24tc2VjdGlvbiB7XG5wYWRkaW5nLWJvdHRvbTogMTAwcHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXJ7XG5tYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5kaXYjZm9vdGVyIHtcbnBhZGRpbmc6IDEwcHg7XG5jb2xvcjogd2hpdGU7XG5iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmNvbC0zIHtcbndpZHRoOiAzMy4zMyU7XG59XG5cbi5zZWN0aW9uLWhlYWRpbmcge1xucGFkZGluZzogMCAwIDE1cHggMDtcbn1cblxuLnJvdyB7XG5wYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG5mbGV4LXdyYXA6IHdyYXA7XG5tYXJnaW4tbGVmdDogLTE1cHg7XG5tYXJnaW4tcmlnaHQ6IC0xNXB4OyBcbn1cblxuLnJvdy0xe1xucGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuZmxleC13cmFwOiB3cmFwO1xubWFyZ2luLWxlZnQ6IC00NXB4O1xubWFyZ2luLXJpZ2h0OiAtNDVweDtcbn1cblxuLmNsZWFyZml4OmFmdGVyIHtcbmNvbnRlbnQ6IFwiXCI7XG5kaXNwbGF5OiB0YWJsZTtcbmNsZWFyOiBib3RoO1xufVxuXG4udGVzdGltb25pYWwge1xucGFkZGluZzogMTVweDtcbn1cblxuYmxvY2txdW90ZSB7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50ZXN0aW1vbmlhbCBpbWcge1xubWF4LWhlaWdodDogMjUwcHg7XG5ib3JkZXItcmFkaXVzOiAzMDBlbTtcbn1cblxuLnRlc3RpbW9uaWFsIGZvb3RlciB7XG5wYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLnRlc3RpbW9uaWFsLmNsYXNzaWMgaW1nIHtcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbm1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi50ZXN0aW1vbmlhbC5jbGFzc2ljIHEge1xuZGlzcGxheTogYmxvY2s7XG59XG5cbi50ZXN0aW1vbmlhbC5jbGFzc2ljIGZvb3RlcjpiZWZvcmUge1xuZGlzcGxheTogYmxvY2s7XG5jb250ZW50OiBcIlwiO1xud2lkdGg6IDMwcHg7XG5oZWlnaHQ6IDRweDtcbm1hcmdpbjogMTBweCBhdXRvIDE1cHggYXV0bztcbn1cblxuLnRleHQtY2VudGVyIHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnJlZ2lzdHJhdGlvbkJ1dHRvbntcbmJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG5jb2xvcjogYmxhY2s7XG5mb250LXNpemU6IDIwcHg7XG5ib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbndpZHRoOiAzMCU7XG5ib3JkZXI6IG5vbmU7XG5wYWRkaW5nOiAxNXB4IDMycHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG50ZXh0LWRlY29yYXRpb246IG5vbmU7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5tYXJnaW46IDRweCAycHg7XG5jdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWdpc3RyYXRpb25CdXR0b246aG92ZXJ7XG5jb2xvcjogI2ZmZmYwMDtcbmJhY2tncm91bmQ6ICMwMDA7XG5ib3JkZXI6IDBweCBzb2xpZCAjZmZmO1xufVxuXG4ucG9ydGZvbGlve1xudmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5zZWN0aW9uLXRpdGxle1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcG9ydGZvbGlvcyAubWl4IHtcbnBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb2wtbWQtNHtcbmZsZXg6IDAgMCAzMy4zMzMzMzMlO1xubWF4LXdpZHRoOiAzMy4zMzMzMzMlXG59XG5cbiNwb3J0Zm9saW9zIC5wb3J0Zm9saW8taXRlbSAuc2hvdC1pdGVtIHtcbm1hcmdpbjogMHB4O1xufVxuXG4uc2hvdC1pdGVtIHtcbm1hcmdpbi1yaWdodDogMTVweDtcbmJvcmRlci1yYWRpdXM6IDRweDtcbmJhY2tncm91bmQ6ICNmZmY7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaG90LWl0ZW0gaW1nIHtcbndpZHRoOiAxMDAlO1xufVxuXG4uc2hvdC1pdGVtIC5vdmVybGF5IHtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxMDAlO1xubGVmdDogMDtcbnRvcDogMDtcbmJhY2tncm91bmQ6IHJnYmEoMCwgMTgwLCAyMTcsIDAuNik7XG5vcGFjaXR5OiAwO1xufVxuXG4uaWNvbi1leWU6YmVmb3JlIHtcbmNvbnRlbnQ6IFwiXFxlMDg3XCI7XG59XG5cbi5vdmVybGF5IHtcbm9wYWNpdHk6IDA7XG59XG5cbi5vdmVybGF5IC5pY29ucyBpIHtcbmhlaWdodDogNDJweDtcbndpZHRoOiA0MnB4O1xubGluZS1oZWlnaHQ6IDQycHg7XG5jb2xvcjogIzAwYjRkOTtcbmxlZnQ6IDUwJTtcbm1hcmdpbi1sZWZ0OiAtMjRweDtcbm1hcmdpbi10b3A6IC0yNHB4O1xudG9wOiA1MCU7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG56LWluZGV4OiAyO1xuY3Vyc29yOiBwb2ludGVyO1xudGV4dC1hbGlnbjogY2VudGVyO1xuZm9udC1zaXplOiAyMHB4O1xuYmFja2dyb3VuZDogI2ZmZjtcbmJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm92ZXJsYXkgLnByZXZpZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQwJTtcbiAgdG9wOiA1MCU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ub3ZlcmxheSAucHJldmlldyAuaWNvbi1wcmV2aWV3IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy9nYWxsZXJ5LWltZy9wcmV2aWV3LnBuZ1wiKTtcbn1cblxuLm92ZXJsYXkgLmxpbmsge1xucG9zaXRpb246IGFic29sdXRlO1xubGVmdDogNjAlO1xubWFyZ2luLWxlZnQ6IDEwcHg7XG50b3A6IDUwJTtcbmNvbG9yOiAjZmZmO1xufVxuXG4ub3ZlcmxheSAubGluayAuaWNvbi1saW5rIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy9nYWxsZXJ5LWltZy9saW5rLnBuZ1wiKTtcbn1cblxuLnNob3QtaXRlbTpob3ZlciAub3ZlcmxheSB7XG5vcGFjaXR5OiAxO1xufVxuXG4uaWNvbiB7XG53aWR0aDogNTBweDtcbmhlaWdodDogNjBweDtcbn1cbiBcbi5sZWFkIHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmNvbG9yOiBnaG9zdHdoaXRlO1xuZm9udC1zaXplOiAzMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/rxjs-operators.js":
/*!***********************************!*\
  !*** ./src/app/rxjs-operators.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.

// Statics


// Operators








/***/ }),

/***/ "./src/app/shared/modules/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modules/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _directives_focus_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/focus.directive */ "./src/app/directives/focus.directive.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
// include directives/components commonly used in features modules in this shared modules
// and import me into the feature module
// importing them individually results in: Type xxx is part of the declarations of 2 modules: ... Please consider moving to a higher module...
// https://github.com/angular/angular/issues/10646  
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_directives_focus_directive__WEBPACK_IMPORTED_MODULE_2__["myFocus"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]],
            exports: [_directives_focus_directive__WEBPACK_IMPORTED_MODULE_2__["myFocus"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");

var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        // either applicationError in header or model error in body
        if (applicationError) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? undefined : modelStateErrors;
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(modelStateErrors || 'Server error');
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _utils_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../rxjs-operators */ "./src/app/rxjs-operators.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Add the RxJS Observable operators we need in this app.

var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        // Observable navItem source
        _this._authNavStatusSource = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        // Observable navItem stream
        _this.authNavStatus$ = _this._authNavStatusSource.asObservable();
        _this.loggedIn = false;
        _this.loggedIn = !!localStorage.getItem('auth_token');
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        _this._authNavStatusSource.next(_this.loggedIn);
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    UserService.prototype.register = function (email, password, firstName, lastName, location) {
        var body = JSON.stringify({ email: email, password: password, firstName: firstName, lastName: lastName, location: location });
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.baseUrl + "/api/accounts", body, options)
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.login = function (userName, password) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.baseUrl + '/api/auth/login', JSON.stringify({ userName: userName, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.facebookLogin = function (accessToken) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({ accessToken: accessToken });
        return this.http
            .post(this.baseUrl + '/api/externalauth/facebook', body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _utils_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], UserService);
    return UserService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/shared/utils/config.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/utils/config.service.ts ***!
  \************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = (function () {
    function ConfigService() {
        this._apiURI = 'https://localhost:44360';
    }
    ConfigService.prototype.getApiURI = function () {
        return this._apiURI;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isDelayedRunning\" class=\"spinner\">\n  <div class=\"double-bounce1\"></div>\n  <div class=\"double-bounce2\"></div>\n</div> \n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.scss":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 30px auto; }\n\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out; }\n\n.double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9DOlxcVXNlcnNcXFNhc2hrYVxcRGVza3RvcFxcU29mdFxcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZy5Bbmd1bGFyL3NyY1xcYXBwXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCx1REFBc0Q7RUFDdEQsK0NBQThDLEVBQy9DOztBQUVEO0VBQ0UsK0JBQThCO0VBQzlCLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFO0lBQ0UsNEJBQTZCLEVBQUE7RUFHL0I7SUFDRSw0QkFBNkIsRUFBQSxFQUFBOztBQUlqQztFQUNFO0lBQ0Usb0JBQXFCO0lBQ3JCLDRCQUE2QixFQUFBO0VBRy9CO0lBQ0Usb0JBQXFCO0lBQ3JCLDRCQUE2QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbi5kb3VibGUtYm91bmNlMSwgLmRvdWJsZS1ib3VuY2UyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBvcGFjaXR5OiAwLjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbi5kb3VibGUtYm91bmNlMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gIDAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKVxuICB9XG5cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKVxuICB9XG59XG5cbkBrZXlmcmFtZXMgc2stYm91bmNlIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.isDelayedRunning = false;
        this.delay = 150;
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.cancelTimeout();
                this.isDelayedRunning = false;
                return;
            }
            if (this.currentTimeout) {
                return;
            }
            // specify window to side-step conflict with node types: https://github.com/mgechev/angular2-seed/issues/901
            this.currentTimeout = window.setTimeout(function () {
                _this.isDelayedRunning = value;
                _this.cancelTimeout();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.cancelTimeout = function () {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.cancelTimeout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SpinnerComponent.prototype, "delay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SpinnerComponent.prototype, "isRunning", null);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/spinner/spinner.component.scss")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/userinfo/services/userinfo.services.ts":
/*!********************************************************!*\
  !*** ./src/app/userinfo/services/userinfo.services.ts ***!
  \********************************************************/
/*! exports provided: UserInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoService", function() { return UserInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rxjs-operators */ "./src/app/rxjs-operators.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Add the RxJS Observable operators we need in this app.

var UserInfoService = (function (_super) {
    __extends(UserInfoService, _super);
    function UserInfoService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    UserInfoService.prototype.getUserInfo = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + "/api/accounts/" + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserInfoService.prototype.getTrips = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + "/api/trip/mytrips/" + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], UserInfoService);
    return UserInfoService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/userinfo/userinfo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/userinfo/userinfo.module.ts ***!
  \*********************************************/
/*! exports provided: UserInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoModule", function() { return UserInfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _userinfo_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userinfo.routing */ "./src/app/userinfo/userinfo.routing.ts");
/* harmony import */ var _userinfo_userinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userinfo/userinfo.component */ "./src/app/userinfo/userinfo/userinfo.component.ts");
/* harmony import */ var _services_userinfo_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/userinfo.services */ "./src/app/userinfo/services/userinfo.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UserInfoModule = (function () {
    function UserInfoModule() {
    }
    UserInfoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _userinfo_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_userinfo_userinfo_component__WEBPACK_IMPORTED_MODULE_7__["UserInfoComponent"]],
            exports: [],
            providers: [_services_userinfo_services__WEBPACK_IMPORTED_MODULE_8__["UserInfoService"]]
        })
    ], UserInfoModule);
    return UserInfoModule;
}());



/***/ }),

/***/ "./src/app/userinfo/userinfo.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/userinfo/userinfo.routing.ts ***!
  \**********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _userinfo_userinfo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userinfo/userinfo.component */ "./src/app/userinfo/userinfo/userinfo.component.ts");


var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    { path: 'user/:id', component: _userinfo_userinfo_component__WEBPACK_IMPORTED_MODULE_1__["UserInfoComponent"] }
]);


/***/ }),

/***/ "./src/app/userinfo/userinfo/userinfo.component.html":
/*!***********************************************************!*\
  !*** ./src/app/userinfo/userinfo/userinfo.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"Centered\">\n<div class=\"row\">\n    <main role=\"main\" class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\">\n        <div class=\"col-md-6 col-sm-3\">\n        <h1>User:</h1>\n        <p><strong>Name:</strong> {{userInfo?.firstName}} {{userInfo?.lastName}}</p>\n        <p *ngIf=\"userInfo?.location\"><strong>Location:</strong> {{userInfo?.location}}</p>\n        <div *ngIf=\"userInfo?.pictureUrl\"><img src=\"{{userInfo?.pictureUrl}}\" /></div>\n        <input type=\"button\" value=\"LoadTrips\" class=\"btn btn-default\" (click)=\"loadTrips()\" />\n        <li *ngFor=\"let p of trips\">\n                <ng-template [ngIf]=\"trip?.id != p.id\">\n                    <div>Name: {{ p?.name }}</div>\n                    <div [ngClass]=\"{greenclass: p?.isDone == true, redclass: p?.isDone == false}\">Finished: {{ p?.isDone }}</div>\n                    <p>\n                        <textarea rows=\"3\" cols=\"60\" readonly=\"readonly\" class=\"form-control\">{{ p?.description }}</textarea>\n                    </p>\n                </ng-template>\n            </li>\n            </div>\n   </main>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/userinfo/userinfo/userinfo.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/userinfo/userinfo/userinfo.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Centered {\n  margin-top: 4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmluZm8vdXNlcmluZm8vQzpcXFVzZXJzXFxTYXNoa2FcXERlc2t0b3BcXFNvZnRcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2cuQW5ndWxhci9zcmNcXGFwcFxcdXNlcmluZm9cXHVzZXJpbmZvXFx1c2VyaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdXNlcmluZm8vdXNlcmluZm8vdXNlcmluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQ2VudGVyZWRcbntcbiAgICBtYXJnaW4tdG9wOiA0ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/userinfo/userinfo/userinfo.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/userinfo/userinfo/userinfo.component.ts ***!
  \*********************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_userinfo_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/userinfo.services */ "./src/app/userinfo/services/userinfo.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInfoComponent = (function () {
    function UserInfoComponent(userInfoService, router, activeRoute) {
        this.userInfoService = userInfoService;
        this.router = router;
        this.id = router.url.toString();
        var s;
        s = this.id.split('/');
        this.id = s[s.length - 1];
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        this.loadUserInfo(Number.parseInt(this.id));
    };
    UserInfoComponent.prototype.loadUserInfo = function (id) {
        var _this = this;
        this.userInfoService.getUserInfo(id).subscribe(function (data) {
            _this.userInfo = data;
        });
    };
    UserInfoComponent.prototype.loadTrips = function () {
        var _this = this;
        this.userInfoService.getTrips(this.id)
            .subscribe(function (trips) {
            _this.trips = trips;
        }, function (error) {
            //this.notificationService.printErrorMessage(error);
        });
    };
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userinfo',
            template: __webpack_require__(/*! ./userinfo.component.html */ "./src/app/userinfo/userinfo/userinfo.component.html"),
            styles: [__webpack_require__(/*! ./userinfo.component.scss */ "./src/app/userinfo/userinfo/userinfo.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_userinfo_services__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "./src/polyfills.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_2__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.


/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sashka\Desktop\Soft\TravelingBlog\TravelingBlog\TravelingBlog.Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map