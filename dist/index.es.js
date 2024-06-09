import * as hi from "react";
import Ui from "react";
var lr = { exports: {} }, mi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function Ir() {
  if (er)
    return mi;
  er = 1;
  var C = Ui, F = Symbol.for("react.element"), I = Symbol.for("react.fragment"), j = Object.prototype.hasOwnProperty, V = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(N, $, U) {
    var st, mt = {}, xt = null, Ct = null;
    U !== void 0 && (xt = "" + U), $.key !== void 0 && (xt = "" + $.key), $.ref !== void 0 && (Ct = $.ref);
    for (st in $)
      j.call($, st) && !W.hasOwnProperty(st) && (mt[st] = $[st]);
    if (N && N.defaultProps)
      for (st in $ = N.defaultProps, $)
        mt[st] === void 0 && (mt[st] = $[st]);
    return { $$typeof: F, type: N, key: xt, ref: Ct, props: mt, _owner: V.current };
  }
  return mi.Fragment = I, mi.jsx = D, mi.jsxs = D, mi;
}
var yi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function Lr() {
  return ir || (ir = 1, process.env.NODE_ENV !== "production" && function() {
    var C = Ui, F = Symbol.for("react.element"), I = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), N = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), st = Symbol.for("react.suspense_list"), mt = Symbol.for("react.memo"), xt = Symbol.for("react.lazy"), Ct = Symbol.for("react.offscreen"), se = Symbol.iterator, Dt = "@@iterator";
    function yt(k) {
      if (k === null || typeof k != "object")
        return null;
      var z = se && k[se] || k[Dt];
      return typeof z == "function" ? z : null;
    }
    var Lt = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function At(k) {
      {
        for (var z = arguments.length, H = new Array(z > 1 ? z - 1 : 0), lt = 1; lt < z; lt++)
          H[lt - 1] = arguments[lt];
        oe("error", k, H);
      }
    }
    function oe(k, z, H) {
      {
        var lt = Lt.ReactDebugCurrentFrame, kt = lt.getStackAddendum();
        kt !== "" && (z += "%s", H = H.concat([kt]));
        var Pt = H.map(function(ct) {
          return String(ct);
        });
        Pt.unshift("Warning: " + z), Function.prototype.apply.call(console[k], console, Pt);
      }
    }
    var ke = !1, ye = !1, ot = !1, xe = !1, Mt = !1, It;
    It = Symbol.for("react.module.reference");
    function pe(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === j || k === W || Mt || k === V || k === U || k === st || xe || k === Ct || ke || ye || ot || typeof k == "object" && k !== null && (k.$$typeof === xt || k.$$typeof === mt || k.$$typeof === D || k.$$typeof === N || k.$$typeof === $ || k.$$typeof === It || k.getModuleId !== void 0));
    }
    function Zt(k, z, H) {
      var lt = k.displayName;
      if (lt)
        return lt;
      var kt = z.displayName || z.name || "";
      return kt !== "" ? H + "(" + kt + ")" : H;
    }
    function Y(k) {
      return k.displayName || "Context";
    }
    function K(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && At("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case j:
          return "Fragment";
        case I:
          return "Portal";
        case W:
          return "Profiler";
        case V:
          return "StrictMode";
        case U:
          return "Suspense";
        case st:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case N:
            var z = k;
            return Y(z) + ".Consumer";
          case D:
            var H = k;
            return Y(H._context) + ".Provider";
          case $:
            return Zt(k, k.render, "ForwardRef");
          case mt:
            var lt = k.displayName || null;
            return lt !== null ? lt : K(k.type) || "Memo";
          case xt: {
            var kt = k, Pt = kt._payload, ct = kt._init;
            try {
              return K(ct(Pt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ht = Object.assign, ut = 0, it, rt, G, at, nt, vt, gt;
    function Qt() {
    }
    Qt.__reactDisabledLog = !0;
    function Et() {
      {
        if (ut === 0) {
          it = console.log, rt = console.info, G = console.warn, at = console.error, nt = console.group, vt = console.groupCollapsed, gt = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: Qt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        ut++;
      }
    }
    function ne() {
      {
        if (ut--, ut === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ht({}, k, {
              value: it
            }),
            info: ht({}, k, {
              value: rt
            }),
            warn: ht({}, k, {
              value: G
            }),
            error: ht({}, k, {
              value: at
            }),
            group: ht({}, k, {
              value: nt
            }),
            groupCollapsed: ht({}, k, {
              value: vt
            }),
            groupEnd: ht({}, k, {
              value: gt
            })
          });
        }
        ut < 0 && At("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _t = Lt.ReactCurrentDispatcher, Je;
    function Be(k, z, H) {
      {
        if (Je === void 0)
          try {
            throw Error();
          } catch (kt) {
            var lt = kt.stack.trim().match(/\n( *(at )?)/);
            Je = lt && lt[1] || "";
          }
        return `
` + Je + k;
      }
    }
    var te = !1, ze;
    {
      var ii = typeof WeakMap == "function" ? WeakMap : Map;
      ze = new ii();
    }
    function Ze(k, z) {
      if (!k || te)
        return "";
      {
        var H = ze.get(k);
        if (H !== void 0)
          return H;
      }
      var lt;
      te = !0;
      var kt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Pt;
      Pt = _t.current, _t.current = null, Et();
      try {
        if (z) {
          var ct = function() {
            throw Error();
          };
          if (Object.defineProperty(ct.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ct, []);
            } catch (Tt) {
              lt = Tt;
            }
            Reflect.construct(k, [], ct);
          } else {
            try {
              ct.call();
            } catch (Tt) {
              lt = Tt;
            }
            k.call(ct.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Tt) {
            lt = Tt;
          }
          k();
        }
      } catch (Tt) {
        if (Tt && lt && typeof Tt.stack == "string") {
          for (var pt = Tt.stack.split(`
`), zt = lt.stack.split(`
`), Rt = pt.length - 1, St = zt.length - 1; Rt >= 1 && St >= 0 && pt[Rt] !== zt[St]; )
            St--;
          for (; Rt >= 1 && St >= 0; Rt--, St--)
            if (pt[Rt] !== zt[St]) {
              if (Rt !== 1 || St !== 1)
                do
                  if (Rt--, St--, St < 0 || pt[Rt] !== zt[St]) {
                    var jt = `
` + pt[Rt].replace(" at new ", " at ");
                    return k.displayName && jt.includes("<anonymous>") && (jt = jt.replace("<anonymous>", k.displayName)), typeof k == "function" && ze.set(k, jt), jt;
                  }
                while (Rt >= 1 && St >= 0);
              break;
            }
        }
      } finally {
        te = !1, _t.current = Pt, ne(), Error.prepareStackTrace = kt;
      }
      var ve = k ? k.displayName || k.name : "", ge = ve ? Be(ve) : "";
      return typeof k == "function" && ze.set(k, ge), ge;
    }
    function we(k, z, H) {
      return Ze(k, !1);
    }
    function L(k) {
      var z = k.prototype;
      return !!(z && z.isReactComponent);
    }
    function ce(k, z, H) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return Ze(k, L(k));
      if (typeof k == "string")
        return Be(k);
      switch (k) {
        case U:
          return Be("Suspense");
        case st:
          return Be("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case $:
            return we(k.render);
          case mt:
            return ce(k.type, z, H);
          case xt: {
            var lt = k, kt = lt._payload, Pt = lt._init;
            try {
              return ce(Pt(kt), z, H);
            } catch {
            }
          }
        }
      return "";
    }
    var $t = Object.prototype.hasOwnProperty, Se = {}, Ce = Lt.ReactDebugCurrentFrame;
    function ie(k) {
      if (k) {
        var z = k._owner, H = ce(k.type, k._source, z ? z.type : null);
        Ce.setExtraStackFrame(H);
      } else
        Ce.setExtraStackFrame(null);
    }
    function he(k, z, H, lt, kt) {
      {
        var Pt = Function.call.bind($t);
        for (var ct in k)
          if (Pt(k, ct)) {
            var pt = void 0;
            try {
              if (typeof k[ct] != "function") {
                var zt = Error((lt || "React class") + ": " + H + " type `" + ct + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[ct] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw zt.name = "Invariant Violation", zt;
              }
              pt = k[ct](z, ct, lt, H, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Rt) {
              pt = Rt;
            }
            pt && !(pt instanceof Error) && (ie(kt), At("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", lt || "React class", H, ct, typeof pt), ie(null)), pt instanceof Error && !(pt.message in Se) && (Se[pt.message] = !0, ie(kt), At("Failed %s type: %s", H, pt.message), ie(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Fe(k) {
      return Qe(k);
    }
    function de(k) {
      {
        var z = typeof Symbol == "function" && Symbol.toStringTag, H = z && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return H;
      }
    }
    function ui(k) {
      try {
        return ti(k), !1;
      } catch {
        return !0;
      }
    }
    function ti(k) {
      return "" + k;
    }
    function Ne(k) {
      if (ui(k))
        return At("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", de(k)), ti(k);
    }
    var qe = Lt.ReactCurrentOwner, Oi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gi, pi, We;
    We = {};
    function ci(k) {
      if ($t.call(k, "ref")) {
        var z = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function Me(k) {
      if ($t.call(k, "key")) {
        var z = Object.getOwnPropertyDescriptor(k, "key").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function Vi(k, z) {
      if (typeof k.ref == "string" && qe.current && z && qe.current.stateNode !== z) {
        var H = K(qe.current.type);
        We[H] || (At('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(qe.current.type), k.ref), We[H] = !0);
      }
    }
    function di(k, z) {
      {
        var H = function() {
          gi || (gi = !0, At("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        H.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: H,
          configurable: !0
        });
      }
    }
    function Kt(k, z) {
      {
        var H = function() {
          pi || (pi = !0, At("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        H.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: H,
          configurable: !0
        });
      }
    }
    var ji = function(k, z, H, lt, kt, Pt, ct) {
      var pt = {
        $$typeof: F,
        type: k,
        key: z,
        ref: H,
        props: ct,
        _owner: Pt
      };
      return pt._store = {}, Object.defineProperty(pt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: lt
      }), Object.defineProperty(pt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: kt
      }), Object.freeze && (Object.freeze(pt.props), Object.freeze(pt)), pt;
    };
    function ri(k, z, H, lt, kt) {
      {
        var Pt, ct = {}, pt = null, zt = null;
        H !== void 0 && (Ne(H), pt = "" + H), Me(z) && (Ne(z.key), pt = "" + z.key), ci(z) && (zt = z.ref, Vi(z, kt));
        for (Pt in z)
          $t.call(z, Pt) && !Oi.hasOwnProperty(Pt) && (ct[Pt] = z[Pt]);
        if (k && k.defaultProps) {
          var Rt = k.defaultProps;
          for (Pt in Rt)
            ct[Pt] === void 0 && (ct[Pt] = Rt[Pt]);
        }
        if (pt || zt) {
          var St = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          pt && di(ct, St), zt && Kt(ct, St);
        }
        return ji(k, pt, zt, kt, lt, qe.current, ct);
      }
    }
    var si = Lt.ReactCurrentOwner, Ae = Lt.ReactDebugCurrentFrame;
    function Bt(k) {
      if (k) {
        var z = k._owner, H = ce(k.type, k._source, z ? z.type : null);
        Ae.setExtraStackFrame(H);
      } else
        Ae.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function ni(k) {
      return typeof k == "object" && k !== null && k.$$typeof === F;
    }
    function vi() {
      {
        if (si.current) {
          var k = K(si.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function Di(k) {
      {
        if (k !== void 0) {
          var z = k.fileName.replace(/^.*[\\\/]/, ""), H = k.lineNumber;
          return `

Check your code at ` + z + ":" + H + ".";
        }
        return "";
      }
    }
    var Jt = {};
    function qt(k) {
      {
        var z = vi();
        if (!z) {
          var H = typeof k == "string" ? k : k.displayName || k.name;
          H && (z = `

Check the top-level render call using <` + H + ">.");
        }
        return z;
      }
    }
    function Pe(k, z) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var H = qt(z);
        if (Jt[H])
          return;
        Jt[H] = !0;
        var lt = "";
        k && k._owner && k._owner !== si.current && (lt = " It was passed a child from " + K(k._owner.type) + "."), Bt(k), At('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, lt), Bt(null);
      }
    }
    function Ie(k, z) {
      {
        if (typeof k != "object")
          return;
        if (Fe(k))
          for (var H = 0; H < k.length; H++) {
            var lt = k[H];
            ni(lt) && Pe(lt, z);
          }
        else if (ni(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var kt = yt(k);
          if (typeof kt == "function" && kt !== k.entries)
            for (var Pt = kt.call(k), ct; !(ct = Pt.next()).done; )
              ni(ct.value) && Pe(ct.value, z);
        }
      }
    }
    function Le(k) {
      {
        var z = k.type;
        if (z == null || typeof z == "string")
          return;
        var H;
        if (typeof z == "function")
          H = z.propTypes;
        else if (typeof z == "object" && (z.$$typeof === $ || z.$$typeof === mt))
          H = z.propTypes;
        else
          return;
        if (H) {
          var lt = K(z);
          he(H, k.props, "prop", lt, k);
        } else if (z.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var kt = K(z);
          At("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", kt || "Unknown");
        }
        typeof z.getDefaultProps == "function" && !z.getDefaultProps.isReactClassApproved && At("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $e(k) {
      {
        for (var z = Object.keys(k.props), H = 0; H < z.length; H++) {
          var lt = z[H];
          if (lt !== "children" && lt !== "key") {
            Bt(k), At("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", lt), Bt(null);
            break;
          }
        }
        k.ref !== null && (Bt(k), At("Invalid attribute `ref` supplied to `React.Fragment`."), Bt(null));
      }
    }
    var ai = {};
    function Ye(k, z, H, lt, kt, Pt) {
      {
        var ct = pe(k);
        if (!ct) {
          var pt = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (pt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var zt = Di(kt);
          zt ? pt += zt : pt += vi();
          var Rt;
          k === null ? Rt = "null" : Fe(k) ? Rt = "array" : k !== void 0 && k.$$typeof === F ? (Rt = "<" + (K(k.type) || "Unknown") + " />", pt = " Did you accidentally export a JSX literal instead of a component?") : Rt = typeof k, At("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Rt, pt);
        }
        var St = ri(k, z, H, kt, Pt);
        if (St == null)
          return St;
        if (ct) {
          var jt = z.children;
          if (jt !== void 0)
            if (lt)
              if (Fe(jt)) {
                for (var ve = 0; ve < jt.length; ve++)
                  Ie(jt[ve], k);
                Object.freeze && Object.freeze(jt);
              } else
                At("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(jt, k);
        }
        if ($t.call(z, "key")) {
          var ge = K(k), Tt = Object.keys(z).filter(function(Nt) {
            return Nt !== "key";
          }), oi = Tt.length > 0 ? "{key: someKey, " + Tt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ai[ge + oi]) {
            var Re = Tt.length > 0 ? "{" + Tt.join(": ..., ") + ": ...}" : "{}";
            At(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, oi, ge, Re, ge), ai[ge + oi] = !0;
          }
        }
        return k === j ? $e(St) : Le(St), St;
      }
    }
    function Bi(k, z, H) {
      return Ye(k, z, H, !0);
    }
    function _i(k, z, H) {
      return Ye(k, z, H, !1);
    }
    var bi = _i, zi = Bi;
    yi.Fragment = j, yi.jsx = bi, yi.jsxs = zi;
  }()), yi;
}
(function(C) {
  process.env.NODE_ENV === "production" ? C.exports = Ir() : C.exports = Lr();
})(lr);
const rr = lr.exports.jsx;
var fr = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(C) {
  (function() {
    var F = {}.hasOwnProperty;
    function I() {
      for (var j = [], V = 0; V < arguments.length; V++) {
        var W = arguments[V];
        if (!!W) {
          var D = typeof W;
          if (D === "string" || D === "number")
            j.push(W);
          else if (Array.isArray(W)) {
            if (W.length) {
              var N = I.apply(null, W);
              N && j.push(N);
            }
          } else if (D === "object") {
            if (W.toString !== Object.prototype.toString && !W.toString.toString().includes("[native code]")) {
              j.push(W.toString());
              continue;
            }
            for (var $ in W)
              F.call(W, $) && W[$] && j.push($);
          }
        }
      }
      return j.join(" ");
    }
    C.exports ? (I.default = I, C.exports = I) : window.classNames = I;
  })();
})(fr);
const sr = fr.exports;
var ur = { exports: {} };
(function(C) {
  typeof navigator < "u" && function(F, I) {
    C.exports ? C.exports = I(F) : (F.lottie = I(F), F.bodymovin = F.lottie);
  }(window || {}, function(F) {
    var I = "http://www.w3.org/2000/svg", j = "", V = -999999, W = !0, D = "", N, $ = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), U = Math.pow, st = Math.sqrt, mt = Math.floor, xt = Math.min, Ct = {};
    (function() {
      var t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], e, i = t.length;
      for (e = 0; e < i; e += 1)
        Ct[t[e]] = Math[t[e]];
    })();
    function se() {
      return {};
    }
    Ct.random = Math.random, Ct.abs = function(t) {
      var e = typeof t;
      if (e === "object" && t.length) {
        var i = rt(t.length), r, o = t.length;
        for (r = 0; r < o; r += 1)
          i[r] = Math.abs(t[r]);
        return i;
      }
      return Math.abs(t);
    };
    var Dt = 150, yt = Math.PI / 180, Lt = 0.5519;
    function At(t, e, i, r) {
      this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1;
    }
    function oe(t, e) {
      this.type = t, this.direction = e < 0 ? -1 : 1;
    }
    function ke(t, e, i, r) {
      this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1;
    }
    function ye(t, e, i) {
      this.type = t, this.firstFrame = e, this.totalFrames = i;
    }
    function ot(t, e) {
      this.type = t, this.target = e;
    }
    function xe(t, e) {
      this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
    }
    function Mt(t) {
      this.type = "configError", this.nativeError = t;
    }
    var It = function() {
      var t = 0;
      return function() {
        return t += 1, D + "__lottie_element_" + t;
      };
    }();
    function pe(t, e, i) {
      var r, o, s, d, E, v, T, P;
      switch (d = Math.floor(t * 6), E = t * 6 - d, v = i * (1 - e), T = i * (1 - E * e), P = i * (1 - (1 - E) * e), d % 6) {
        case 0:
          r = i, o = P, s = v;
          break;
        case 1:
          r = T, o = i, s = v;
          break;
        case 2:
          r = v, o = i, s = P;
          break;
        case 3:
          r = v, o = T, s = i;
          break;
        case 4:
          r = P, o = v, s = i;
          break;
        case 5:
          r = i, o = v, s = T;
          break;
      }
      return [
        r,
        o,
        s
      ];
    }
    function Zt(t, e, i) {
      var r = Math.max(t, e, i), o = Math.min(t, e, i), s = r - o, d, E = r === 0 ? 0 : s / r, v = r / 255;
      switch (r) {
        case o:
          d = 0;
          break;
        case t:
          d = e - i + s * (e < i ? 6 : 0), d /= 6 * s;
          break;
        case e:
          d = i - t + s * 2, d /= 6 * s;
          break;
        case i:
          d = t - e + s * 4, d /= 6 * s;
          break;
      }
      return [
        d,
        E,
        v
      ];
    }
    function Y(t, e) {
      var i = Zt(t[0] * 255, t[1] * 255, t[2] * 255);
      return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), pe(i[0], i[1], i[2]);
    }
    function K(t, e) {
      var i = Zt(t[0] * 255, t[1] * 255, t[2] * 255);
      return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), pe(i[0], i[1], i[2]);
    }
    function ht(t, e) {
      var i = Zt(t[0] * 255, t[1] * 255, t[2] * 255);
      return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), pe(i[0], i[1], i[2]);
    }
    (function() {
      var t = [], e, i;
      for (e = 0; e < 256; e += 1)
        i = e.toString(16), t[e] = i.length === 1 ? "0" + i : i;
      return function(r, o, s) {
        return r < 0 && (r = 0), o < 0 && (o = 0), s < 0 && (s = 0), "#" + t[r] + t[o] + t[s];
      };
    })();
    function ut() {
    }
    ut.prototype = {
      triggerEvent: function(t, e) {
        if (this._cbs[t])
          for (var i = this._cbs[t], r = 0; r < i.length; r += 1)
            i[r](e);
      },
      addEventListener: function(t, e) {
        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), function() {
          this.removeEventListener(t, e);
        }.bind(this);
      },
      removeEventListener: function(t, e) {
        if (!e)
          this._cbs[t] = null;
        else if (this._cbs[t]) {
          for (var i = 0, r = this._cbs[t].length; i < r; )
            this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
          this._cbs[t].length || (this._cbs[t] = null);
        }
      }
    };
    var it = function() {
      function t(i, r) {
        var o = 0, s = [], d;
        switch (i) {
          case "int16":
          case "uint8c":
            d = 1;
            break;
          default:
            d = 1.1;
            break;
        }
        for (o = 0; o < r; o += 1)
          s.push(d);
        return s;
      }
      function e(i, r) {
        return i === "float32" ? new Float32Array(r) : i === "int16" ? new Int16Array(r) : i === "uint8c" ? new Uint8ClampedArray(r) : t(i, r);
      }
      return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t;
    }();
    function rt(t) {
      return Array.apply(null, { length: t });
    }
    function G(t) {
      return document.createElementNS(I, t);
    }
    function at(t) {
      return document.createElement(t);
    }
    function nt() {
    }
    nt.prototype = {
      addDynamicProperty: function(t) {
        this.dynamicProperties.indexOf(t) === -1 && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0);
      },
      iterateDynamicProperties: function() {
        this._mdf = !1;
        var t, e = this.dynamicProperties.length;
        for (t = 0; t < e; t += 1)
          this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0);
      },
      initDynamicPropertyContainer: function(t) {
        this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
      }
    };
    var vt = function() {
      var t = {
        0: "source-over",
        1: "multiply",
        2: "screen",
        3: "overlay",
        4: "darken",
        5: "lighten",
        6: "color-dodge",
        7: "color-burn",
        8: "hard-light",
        9: "soft-light",
        10: "difference",
        11: "exclusion",
        12: "hue",
        13: "saturation",
        14: "color",
        15: "luminosity"
      };
      return function(e) {
        return t[e] || "";
      };
    }(), gt = {
      1: "butt",
      2: "round",
      3: "square"
    }, Qt = {
      1: "miter",
      2: "round",
      3: "bevel"
    };
    /*!
     Transformation Matrix v2.0
     (c) Epistemex 2014-2015
     www.epistemex.com
     By Ken Fyrstenberg
     Contributions by leeoniya.
     License: MIT, header required.
     */
    var Et = function() {
      var t = Math.cos, e = Math.sin, i = Math.tan, r = Math.round;
      function o() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function s(S) {
        if (S === 0)
          return this;
        var _ = t(S), M = e(S);
        return this._t(_, -M, 0, 0, M, _, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function d(S) {
        if (S === 0)
          return this;
        var _ = t(S), M = e(S);
        return this._t(1, 0, 0, 0, 0, _, -M, 0, 0, M, _, 0, 0, 0, 0, 1);
      }
      function E(S) {
        if (S === 0)
          return this;
        var _ = t(S), M = e(S);
        return this._t(_, 0, M, 0, 0, 1, 0, 0, -M, 0, _, 0, 0, 0, 0, 1);
      }
      function v(S) {
        if (S === 0)
          return this;
        var _ = t(S), M = e(S);
        return this._t(_, -M, 0, 0, M, _, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function T(S, _) {
        return this._t(1, _, S, 1, 0, 0);
      }
      function P(S, _) {
        return this.shear(i(S), i(_));
      }
      function b(S, _) {
        var M = t(_), Z = e(_);
        return this._t(M, Z, 0, 0, -Z, M, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(S), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(M, -Z, 0, 0, Z, M, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function g(S, _, M) {
        return !M && M !== 0 && (M = 1), S === 1 && _ === 1 && M === 1 ? this : this._t(S, 0, 0, 0, 0, _, 0, 0, 0, 0, M, 0, 0, 0, 0, 1);
      }
      function y(S, _, M, Z, O, bt, dt, wt, Yt, Xt, re, le, me, ee, Gt, fe) {
        return this.props[0] = S, this.props[1] = _, this.props[2] = M, this.props[3] = Z, this.props[4] = O, this.props[5] = bt, this.props[6] = dt, this.props[7] = wt, this.props[8] = Yt, this.props[9] = Xt, this.props[10] = re, this.props[11] = le, this.props[12] = me, this.props[13] = ee, this.props[14] = Gt, this.props[15] = fe, this;
      }
      function A(S, _, M) {
        return M = M || 0, S !== 0 || _ !== 0 || M !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, S, _, M, 1) : this;
      }
      function x(S, _, M, Z, O, bt, dt, wt, Yt, Xt, re, le, me, ee, Gt, fe) {
        var et = this.props;
        if (S === 1 && _ === 0 && M === 0 && Z === 0 && O === 0 && bt === 1 && dt === 0 && wt === 0 && Yt === 0 && Xt === 0 && re === 1 && le === 0)
          return et[12] = et[12] * S + et[15] * me, et[13] = et[13] * bt + et[15] * ee, et[14] = et[14] * re + et[15] * Gt, et[15] *= fe, this._identityCalculated = !1, this;
        var Vt = et[0], Oe = et[1], Ge = et[2], Ve = et[3], Te = et[4], je = et[5], De = et[6], ae = et[7], Ue = et[8], Xe = et[9], _e = et[10], He = et[11], be = et[12], ei = et[13], ki = et[14], xi = et[15];
        return et[0] = Vt * S + Oe * O + Ge * Yt + Ve * me, et[1] = Vt * _ + Oe * bt + Ge * Xt + Ve * ee, et[2] = Vt * M + Oe * dt + Ge * re + Ve * Gt, et[3] = Vt * Z + Oe * wt + Ge * le + Ve * fe, et[4] = Te * S + je * O + De * Yt + ae * me, et[5] = Te * _ + je * bt + De * Xt + ae * ee, et[6] = Te * M + je * dt + De * re + ae * Gt, et[7] = Te * Z + je * wt + De * le + ae * fe, et[8] = Ue * S + Xe * O + _e * Yt + He * me, et[9] = Ue * _ + Xe * bt + _e * Xt + He * ee, et[10] = Ue * M + Xe * dt + _e * re + He * Gt, et[11] = Ue * Z + Xe * wt + _e * le + He * fe, et[12] = be * S + ei * O + ki * Yt + xi * me, et[13] = be * _ + ei * bt + ki * Xt + xi * ee, et[14] = be * M + ei * dt + ki * re + xi * Gt, et[15] = be * Z + ei * wt + ki * le + xi * fe, this._identityCalculated = !1, this;
      }
      function u() {
        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
      }
      function l(S) {
        for (var _ = 0; _ < 16; ) {
          if (S.props[_] !== this.props[_])
            return !1;
          _ += 1;
        }
        return !0;
      }
      function h(S) {
        var _;
        for (_ = 0; _ < 16; _ += 1)
          S.props[_] = this.props[_];
        return S;
      }
      function a(S) {
        var _;
        for (_ = 0; _ < 16; _ += 1)
          this.props[_] = S[_];
      }
      function n(S, _, M) {
        return {
          x: S * this.props[0] + _ * this.props[4] + M * this.props[8] + this.props[12],
          y: S * this.props[1] + _ * this.props[5] + M * this.props[9] + this.props[13],
          z: S * this.props[2] + _ * this.props[6] + M * this.props[10] + this.props[14]
        };
      }
      function f(S, _, M) {
        return S * this.props[0] + _ * this.props[4] + M * this.props[8] + this.props[12];
      }
      function c(S, _, M) {
        return S * this.props[1] + _ * this.props[5] + M * this.props[9] + this.props[13];
      }
      function p(S, _, M) {
        return S * this.props[2] + _ * this.props[6] + M * this.props[10] + this.props[14];
      }
      function m() {
        var S = this.props[0] * this.props[5] - this.props[1] * this.props[4], _ = this.props[5] / S, M = -this.props[1] / S, Z = -this.props[4] / S, O = this.props[0] / S, bt = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / S, dt = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / S, wt = new Et();
        return wt.props[0] = _, wt.props[1] = M, wt.props[4] = Z, wt.props[5] = O, wt.props[12] = bt, wt.props[13] = dt, wt;
      }
      function R(S) {
        var _ = this.getInverseMatrix();
        return _.applyToPointArray(S[0], S[1], S[2] || 0);
      }
      function B(S) {
        var _, M = S.length, Z = [];
        for (_ = 0; _ < M; _ += 1)
          Z[_] = R(S[_]);
        return Z;
      }
      function X(S, _, M) {
        var Z = it("float32", 6);
        if (this.isIdentity())
          Z[0] = S[0], Z[1] = S[1], Z[2] = _[0], Z[3] = _[1], Z[4] = M[0], Z[5] = M[1];
        else {
          var O = this.props[0], bt = this.props[1], dt = this.props[4], wt = this.props[5], Yt = this.props[12], Xt = this.props[13];
          Z[0] = S[0] * O + S[1] * dt + Yt, Z[1] = S[0] * bt + S[1] * wt + Xt, Z[2] = _[0] * O + _[1] * dt + Yt, Z[3] = _[0] * bt + _[1] * wt + Xt, Z[4] = M[0] * O + M[1] * dt + Yt, Z[5] = M[0] * bt + M[1] * wt + Xt;
        }
        return Z;
      }
      function q(S, _, M) {
        var Z;
        return this.isIdentity() ? Z = [S, _, M] : Z = [
          S * this.props[0] + _ * this.props[4] + M * this.props[8] + this.props[12],
          S * this.props[1] + _ * this.props[5] + M * this.props[9] + this.props[13],
          S * this.props[2] + _ * this.props[6] + M * this.props[10] + this.props[14]
        ], Z;
      }
      function Q(S, _) {
        if (this.isIdentity())
          return S + "," + _;
        var M = this.props;
        return Math.round((S * M[0] + _ * M[4] + M[12]) * 100) / 100 + "," + Math.round((S * M[1] + _ * M[5] + M[13]) * 100) / 100;
      }
      function J() {
        for (var S = 0, _ = this.props, M = "matrix3d(", Z = 1e4; S < 16; )
          M += r(_[S] * Z) / Z, M += S === 15 ? ")" : ",", S += 1;
        return M;
      }
      function tt(S) {
        var _ = 1e4;
        return S < 1e-6 && S > 0 || S > -1e-6 && S < 0 ? r(S * _) / _ : S;
      }
      function w() {
        var S = this.props, _ = tt(S[0]), M = tt(S[1]), Z = tt(S[4]), O = tt(S[5]), bt = tt(S[12]), dt = tt(S[13]);
        return "matrix(" + _ + "," + M + "," + Z + "," + O + "," + bt + "," + dt + ")";
      }
      return function() {
        this.reset = o, this.rotate = s, this.rotateX = d, this.rotateY = E, this.rotateZ = v, this.skew = P, this.skewFromAxis = b, this.shear = T, this.scale = g, this.setTransform = y, this.translate = A, this.transform = x, this.applyToPoint = n, this.applyToX = f, this.applyToY = c, this.applyToZ = p, this.applyToPointArray = q, this.applyToTriplePoints = X, this.applyToPointStringified = Q, this.toCSS = J, this.to2dCSS = w, this.clone = h, this.cloneFromProps = a, this.equals = l, this.inversePoints = B, this.inversePoint = R, this.getInverseMatrix = m, this._t = this.transform, this.isIdentity = u, this._identity = !0, this._identityCalculated = !1, this.props = it("float32", 16), this.reset();
      };
    }();
    (function(t, e) {
      var i = this, r = 256, o = 6, s = 52, d = "random", E = e.pow(r, o), v = e.pow(2, s), T = v * 2, P = r - 1, b;
      function g(a, n, f) {
        var c = [];
        n = n === !0 ? { entropy: !0 } : n || {};
        var p = u(x(n.entropy ? [a, h(t)] : a === null ? l() : a, 3), c), m = new y(c), R = function() {
          for (var B = m.g(o), X = E, q = 0; B < v; )
            B = (B + q) * r, X *= r, q = m.g(1);
          for (; B >= T; )
            B /= 2, X /= 2, q >>>= 1;
          return (B + q) / X;
        };
        return R.int32 = function() {
          return m.g(4) | 0;
        }, R.quick = function() {
          return m.g(4) / 4294967296;
        }, R.double = R, u(h(m.S), t), (n.pass || f || function(B, X, q, Q) {
          return Q && (Q.S && A(Q, m), B.state = function() {
            return A(m, {});
          }), q ? (e[d] = B, X) : B;
        })(R, p, "global" in n ? n.global : this == e, n.state);
      }
      e["seed" + d] = g;
      function y(a) {
        var n, f = a.length, c = this, p = 0, m = c.i = c.j = 0, R = c.S = [];
        for (f || (a = [f++]); p < r; )
          R[p] = p++;
        for (p = 0; p < r; p++)
          R[p] = R[m = P & m + a[p % f] + (n = R[p])], R[m] = n;
        c.g = function(B) {
          for (var X, q = 0, Q = c.i, J = c.j, tt = c.S; B--; )
            X = tt[Q = P & Q + 1], q = q * r + tt[P & (tt[Q] = tt[J = P & J + X]) + (tt[J] = X)];
          return c.i = Q, c.j = J, q;
        };
      }
      function A(a, n) {
        return n.i = a.i, n.j = a.j, n.S = a.S.slice(), n;
      }
      function x(a, n) {
        var f = [], c = typeof a, p;
        if (n && c == "object")
          for (p in a)
            try {
              f.push(x(a[p], n - 1));
            } catch {
            }
        return f.length ? f : c == "string" ? a : a + "\0";
      }
      function u(a, n) {
        for (var f = a + "", c, p = 0; p < f.length; )
          n[P & p] = P & (c ^= n[P & p] * 19) + f.charCodeAt(p++);
        return h(n);
      }
      function l() {
        try {
          var a = new Uint8Array(r);
          return (i.crypto || i.msCrypto).getRandomValues(a), h(a);
        } catch {
          var n = i.navigator, f = n && n.plugins;
          return [+new Date(), i, f, i.screen, h(t)];
        }
      }
      function h(a) {
        return String.fromCharCode.apply(0, a);
      }
      u(e.random(), t);
    })([], Ct);
    var ne = function() {
      var t = {};
      t.getBezierEasing = i;
      var e = {};
      function i(h, a, n, f, c) {
        var p = c || ("bez_" + h + "_" + a + "_" + n + "_" + f).replace(/\./g, "p");
        if (e[p])
          return e[p];
        var m = new l([h, a, n, f]);
        return e[p] = m, m;
      }
      var r = 4, o = 1e-3, s = 1e-7, d = 10, E = 11, v = 1 / (E - 1), T = typeof Float32Array == "function";
      function P(h, a) {
        return 1 - 3 * a + 3 * h;
      }
      function b(h, a) {
        return 3 * a - 6 * h;
      }
      function g(h) {
        return 3 * h;
      }
      function y(h, a, n) {
        return ((P(a, n) * h + b(a, n)) * h + g(a)) * h;
      }
      function A(h, a, n) {
        return 3 * P(a, n) * h * h + 2 * b(a, n) * h + g(a);
      }
      function x(h, a, n, f, c) {
        var p, m, R = 0;
        do
          m = a + (n - a) / 2, p = y(m, f, c) - h, p > 0 ? n = m : a = m;
        while (Math.abs(p) > s && ++R < d);
        return m;
      }
      function u(h, a, n, f) {
        for (var c = 0; c < r; ++c) {
          var p = A(a, n, f);
          if (p === 0)
            return a;
          var m = y(a, n, f) - h;
          a -= m / p;
        }
        return a;
      }
      function l(h) {
        this._p = h, this._mSampleValues = T ? new Float32Array(E) : new Array(E), this._precomputed = !1, this.get = this.get.bind(this);
      }
      return l.prototype = {
        get: function(h) {
          var a = this._p[0], n = this._p[1], f = this._p[2], c = this._p[3];
          return this._precomputed || this._precompute(), a === n && f === c ? h : h === 0 ? 0 : h === 1 ? 1 : y(this._getTForX(h), n, c);
        },
        _precompute: function() {
          var h = this._p[0], a = this._p[1], n = this._p[2], f = this._p[3];
          this._precomputed = !0, (h !== a || n !== f) && this._calcSampleValues();
        },
        _calcSampleValues: function() {
          for (var h = this._p[0], a = this._p[2], n = 0; n < E; ++n)
            this._mSampleValues[n] = y(n * v, h, a);
        },
        _getTForX: function(h) {
          for (var a = this._p[0], n = this._p[2], f = this._mSampleValues, c = 0, p = 1, m = E - 1; p !== m && f[p] <= h; ++p)
            c += v;
          --p;
          var R = (h - f[p]) / (f[p + 1] - f[p]), B = c + R * v, X = A(B, a, n);
          return X >= o ? u(h, B, a, n) : X === 0 ? B : x(h, c, c + v, a, n);
        }
      }, t;
    }();
    (function() {
      for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !F.requestAnimationFrame; ++i)
        F.requestAnimationFrame = F[e[i] + "RequestAnimationFrame"], F.cancelAnimationFrame = F[e[i] + "CancelAnimationFrame"] || F[e[i] + "CancelRequestAnimationFrame"];
      F.requestAnimationFrame || (F.requestAnimationFrame = function(r) {
        var o = new Date().getTime(), s = Math.max(0, 16 - (o - t)), d = setTimeout(function() {
          r(o + s);
        }, s);
        return t = o + s, d;
      }), F.cancelAnimationFrame || (F.cancelAnimationFrame = function(r) {
        clearTimeout(r);
      });
    })();
    function _t(t, e) {
      var i, r = t.length, o;
      for (i = 0; i < r; i += 1) {
        o = t[i].prototype;
        for (var s in o)
          Object.prototype.hasOwnProperty.call(o, s) && (e.prototype[s] = o[s]);
      }
    }
    function Je(t) {
      function e() {
      }
      return e.prototype = t, e;
    }
    function Be() {
      var t = Math;
      function e(g, y, A, x, u, l) {
        var h = g * x + y * u + A * l - u * x - l * g - A * y;
        return h > -1e-3 && h < 1e-3;
      }
      function i(g, y, A, x, u, l, h, a, n) {
        if (A === 0 && l === 0 && n === 0)
          return e(g, y, x, u, h, a);
        var f = t.sqrt(t.pow(x - g, 2) + t.pow(u - y, 2) + t.pow(l - A, 2)), c = t.sqrt(t.pow(h - g, 2) + t.pow(a - y, 2) + t.pow(n - A, 2)), p = t.sqrt(t.pow(h - x, 2) + t.pow(a - u, 2) + t.pow(n - l, 2)), m;
        return f > c ? f > p ? m = f - c - p : m = p - c - f : p > c ? m = p - c - f : m = c - f - p, m > -1e-4 && m < 1e-4;
      }
      var r = function() {
        return function(g, y, A, x) {
          var u = Dt, l, h, a, n, f, c = 0, p, m = [], R = [], B = vi.newElement();
          for (a = A.length, l = 0; l < u; l += 1) {
            for (f = l / (u - 1), p = 0, h = 0; h < a; h += 1)
              n = U(1 - f, 3) * g[h] + 3 * U(1 - f, 2) * f * A[h] + 3 * (1 - f) * U(f, 2) * x[h] + U(f, 3) * y[h], m[h] = n, R[h] !== null && (p += U(m[h] - R[h], 2)), R[h] = m[h];
            p && (p = st(p), c += p), B.percents[l] = f, B.lengths[l] = c;
          }
          return B.addedLength = c, B;
        };
      }();
      function o(g) {
        var y = ni.newElement(), A = g.c, x = g.v, u = g.o, l = g.i, h, a = g._length, n = y.lengths, f = 0;
        for (h = 0; h < a - 1; h += 1)
          n[h] = r(x[h], x[h + 1], u[h], l[h + 1]), f += n[h].addedLength;
        return A && a && (n[h] = r(x[h], x[0], u[h], l[0]), f += n[h].addedLength), y.totalLength = f, y;
      }
      function s(g) {
        this.segmentLength = 0, this.points = new Array(g);
      }
      function d(g, y) {
        this.partialLength = g, this.point = y;
      }
      var E = function() {
        var g = {};
        return function(y, A, x, u) {
          var l = (y[0] + "_" + y[1] + "_" + A[0] + "_" + A[1] + "_" + x[0] + "_" + x[1] + "_" + u[0] + "_" + u[1]).replace(/\./g, "p");
          if (!g[l]) {
            var h = Dt, a, n, f, c, p, m = 0, R, B, X = null;
            y.length === 2 && (y[0] !== A[0] || y[1] !== A[1]) && e(y[0], y[1], A[0], A[1], y[0] + x[0], y[1] + x[1]) && e(y[0], y[1], A[0], A[1], A[0] + u[0], A[1] + u[1]) && (h = 2);
            var q = new s(h);
            for (f = x.length, a = 0; a < h; a += 1) {
              for (B = rt(f), p = a / (h - 1), R = 0, n = 0; n < f; n += 1)
                c = U(1 - p, 3) * y[n] + 3 * U(1 - p, 2) * p * (y[n] + x[n]) + 3 * (1 - p) * U(p, 2) * (A[n] + u[n]) + U(p, 3) * A[n], B[n] = c, X !== null && (R += U(B[n] - X[n], 2));
              R = st(R), m += R, q.points[a] = new d(R, B), X = B;
            }
            q.segmentLength = m, g[l] = q;
          }
          return g[l];
        };
      }();
      function v(g, y) {
        var A = y.percents, x = y.lengths, u = A.length, l = mt((u - 1) * g), h = g * y.addedLength, a = 0;
        if (l === u - 1 || l === 0 || h === x[l])
          return A[l];
        for (var n = x[l] > h ? -1 : 1, f = !0; f; )
          if (x[l] <= h && x[l + 1] > h ? (a = (h - x[l]) / (x[l + 1] - x[l]), f = !1) : l += n, l < 0 || l >= u - 1) {
            if (l === u - 1)
              return A[l];
            f = !1;
          }
        return A[l] + (A[l + 1] - A[l]) * a;
      }
      function T(g, y, A, x, u, l) {
        var h = v(u, l), a = 1 - h, n = t.round((a * a * a * g[0] + (h * a * a + a * h * a + a * a * h) * A[0] + (h * h * a + a * h * h + h * a * h) * x[0] + h * h * h * y[0]) * 1e3) / 1e3, f = t.round((a * a * a * g[1] + (h * a * a + a * h * a + a * a * h) * A[1] + (h * h * a + a * h * h + h * a * h) * x[1] + h * h * h * y[1]) * 1e3) / 1e3;
        return [n, f];
      }
      var P = it("float32", 8);
      function b(g, y, A, x, u, l, h) {
        u < 0 ? u = 0 : u > 1 && (u = 1);
        var a = v(u, h);
        l = l > 1 ? 1 : l;
        var n = v(l, h), f, c = g.length, p = 1 - a, m = 1 - n, R = p * p * p, B = a * p * p * 3, X = a * a * p * 3, q = a * a * a, Q = p * p * m, J = a * p * m + p * a * m + p * p * n, tt = a * a * m + p * a * n + a * p * n, w = a * a * n, S = p * m * m, _ = a * m * m + p * n * m + p * m * n, M = a * n * m + p * n * n + a * m * n, Z = a * n * n, O = m * m * m, bt = n * m * m + m * n * m + m * m * n, dt = n * n * m + m * n * n + n * m * n, wt = n * n * n;
        for (f = 0; f < c; f += 1)
          P[f * 4] = t.round((R * g[f] + B * A[f] + X * x[f] + q * y[f]) * 1e3) / 1e3, P[f * 4 + 1] = t.round((Q * g[f] + J * A[f] + tt * x[f] + w * y[f]) * 1e3) / 1e3, P[f * 4 + 2] = t.round((S * g[f] + _ * A[f] + M * x[f] + Z * y[f]) * 1e3) / 1e3, P[f * 4 + 3] = t.round((O * g[f] + bt * A[f] + dt * x[f] + wt * y[f]) * 1e3) / 1e3;
        return P;
      }
      return {
        getSegmentsLength: o,
        getNewSegment: b,
        getPointInSegment: T,
        buildBezierData: E,
        pointOnLine2D: e,
        pointOnLine3D: i
      };
    }
    var te = Be();
    function ze() {
      function t(y, A, x) {
        var u, l, h = y.length, a, n, f, c;
        for (l = 0; l < h; l += 1)
          if (u = y[l], "ks" in u && !u.completed) {
            if (u.completed = !0, u.tt && (y[l - 1].td = u.tt), u.hasMask) {
              var p = u.masksProperties;
              for (n = p.length, a = 0; a < n; a += 1)
                if (p[a].pt.k.i)
                  r(p[a].pt.k);
                else
                  for (c = p[a].pt.k.length, f = 0; f < c; f += 1)
                    p[a].pt.k[f].s && r(p[a].pt.k[f].s[0]), p[a].pt.k[f].e && r(p[a].pt.k[f].e[0]);
            }
            u.ty === 0 ? (u.layers = e(u.refId, A), t(u.layers, A)) : u.ty === 4 ? i(u.shapes) : u.ty === 5 && b(u);
          }
      }
      function e(y, A) {
        for (var x = 0, u = A.length; x < u; ) {
          if (A[x].id === y)
            return A[x].layers.__used ? JSON.parse(JSON.stringify(A[x].layers)) : (A[x].layers.__used = !0, A[x].layers);
          x += 1;
        }
        return null;
      }
      function i(y) {
        var A, x = y.length, u, l;
        for (A = x - 1; A >= 0; A -= 1)
          if (y[A].ty === "sh")
            if (y[A].ks.k.i)
              r(y[A].ks.k);
            else
              for (l = y[A].ks.k.length, u = 0; u < l; u += 1)
                y[A].ks.k[u].s && r(y[A].ks.k[u].s[0]), y[A].ks.k[u].e && r(y[A].ks.k[u].e[0]);
          else
            y[A].ty === "gr" && i(y[A].it);
      }
      function r(y) {
        var A, x = y.i.length;
        for (A = 0; A < x; A += 1)
          y.i[A][0] += y.v[A][0], y.i[A][1] += y.v[A][1], y.o[A][0] += y.v[A][0], y.o[A][1] += y.v[A][1];
      }
      function o(y, A) {
        var x = A ? A.split(".") : [100, 100, 100];
        return y[0] > x[0] ? !0 : x[0] > y[0] ? !1 : y[1] > x[1] ? !0 : x[1] > y[1] ? !1 : y[2] > x[2] ? !0 : x[2] > y[2] ? !1 : null;
      }
      var s = function() {
        var y = [4, 4, 14];
        function A(u) {
          var l = u.t.d;
          u.t.d = {
            k: [
              {
                s: l,
                t: 0
              }
            ]
          };
        }
        function x(u) {
          var l, h = u.length;
          for (l = 0; l < h; l += 1)
            u[l].ty === 5 && A(u[l]);
        }
        return function(u) {
          if (o(y, u.v) && (x(u.layers), u.assets)) {
            var l, h = u.assets.length;
            for (l = 0; l < h; l += 1)
              u.assets[l].layers && x(u.assets[l].layers);
          }
        };
      }(), d = function() {
        var y = [4, 7, 99];
        return function(A) {
          if (A.chars && !o(y, A.v)) {
            var x, u = A.chars.length, l, h, a, n;
            for (x = 0; x < u; x += 1)
              if (A.chars[x].data && A.chars[x].data.shapes)
                for (n = A.chars[x].data.shapes[0].it, h = n.length, l = 0; l < h; l += 1)
                  a = n[l].ks.k, a.__converted || (r(n[l].ks.k), a.__converted = !0);
          }
        };
      }(), E = function() {
        var y = [5, 7, 15];
        function A(u) {
          var l = u.t.p;
          typeof l.a == "number" && (l.a = {
            a: 0,
            k: l.a
          }), typeof l.p == "number" && (l.p = {
            a: 0,
            k: l.p
          }), typeof l.r == "number" && (l.r = {
            a: 0,
            k: l.r
          });
        }
        function x(u) {
          var l, h = u.length;
          for (l = 0; l < h; l += 1)
            u[l].ty === 5 && A(u[l]);
        }
        return function(u) {
          if (o(y, u.v) && (x(u.layers), u.assets)) {
            var l, h = u.assets.length;
            for (l = 0; l < h; l += 1)
              u.assets[l].layers && x(u.assets[l].layers);
          }
        };
      }(), v = function() {
        var y = [4, 1, 9];
        function A(u) {
          var l, h = u.length, a, n;
          for (l = 0; l < h; l += 1)
            if (u[l].ty === "gr")
              A(u[l].it);
            else if (u[l].ty === "fl" || u[l].ty === "st")
              if (u[l].c.k && u[l].c.k[0].i)
                for (n = u[l].c.k.length, a = 0; a < n; a += 1)
                  u[l].c.k[a].s && (u[l].c.k[a].s[0] /= 255, u[l].c.k[a].s[1] /= 255, u[l].c.k[a].s[2] /= 255, u[l].c.k[a].s[3] /= 255), u[l].c.k[a].e && (u[l].c.k[a].e[0] /= 255, u[l].c.k[a].e[1] /= 255, u[l].c.k[a].e[2] /= 255, u[l].c.k[a].e[3] /= 255);
              else
                u[l].c.k[0] /= 255, u[l].c.k[1] /= 255, u[l].c.k[2] /= 255, u[l].c.k[3] /= 255;
        }
        function x(u) {
          var l, h = u.length;
          for (l = 0; l < h; l += 1)
            u[l].ty === 4 && A(u[l].shapes);
        }
        return function(u) {
          if (o(y, u.v) && (x(u.layers), u.assets)) {
            var l, h = u.assets.length;
            for (l = 0; l < h; l += 1)
              u.assets[l].layers && x(u.assets[l].layers);
          }
        };
      }(), T = function() {
        var y = [4, 4, 18];
        function A(u) {
          var l, h = u.length, a, n;
          for (l = h - 1; l >= 0; l -= 1)
            if (u[l].ty === "sh")
              if (u[l].ks.k.i)
                u[l].ks.k.c = u[l].closed;
              else
                for (n = u[l].ks.k.length, a = 0; a < n; a += 1)
                  u[l].ks.k[a].s && (u[l].ks.k[a].s[0].c = u[l].closed), u[l].ks.k[a].e && (u[l].ks.k[a].e[0].c = u[l].closed);
            else
              u[l].ty === "gr" && A(u[l].it);
        }
        function x(u) {
          var l, h, a = u.length, n, f, c, p;
          for (h = 0; h < a; h += 1) {
            if (l = u[h], l.hasMask) {
              var m = l.masksProperties;
              for (f = m.length, n = 0; n < f; n += 1)
                if (m[n].pt.k.i)
                  m[n].pt.k.c = m[n].cl;
                else
                  for (p = m[n].pt.k.length, c = 0; c < p; c += 1)
                    m[n].pt.k[c].s && (m[n].pt.k[c].s[0].c = m[n].cl), m[n].pt.k[c].e && (m[n].pt.k[c].e[0].c = m[n].cl);
            }
            l.ty === 4 && A(l.shapes);
          }
        }
        return function(u) {
          if (o(y, u.v) && (x(u.layers), u.assets)) {
            var l, h = u.assets.length;
            for (l = 0; l < h; l += 1)
              u.assets[l].layers && x(u.assets[l].layers);
          }
        };
      }();
      function P(y, A) {
        y.__complete || (v(y), s(y), d(y), E(y), T(y), t(y.layers, y.assets), y.__complete = !0);
      }
      function b(y) {
        y.t.a.length === 0 && !("m" in y.t.p) && (y.singleShape = !0);
      }
      var g = {};
      return g.completeData = P, g.checkColors = v, g.checkChars = d, g.checkPathProperties = E, g.checkShapes = T, g.completeLayers = t, g;
    }
    var ii = ze();
    function Ze(t) {
      for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", o = e.length, s, d = 0; d < o; d += 1)
        switch (s = e[d].toLowerCase(), s) {
          case "italic":
            r = "italic";
            break;
          case "bold":
            i = "700";
            break;
          case "black":
            i = "900";
            break;
          case "medium":
            i = "500";
            break;
          case "regular":
          case "normal":
            i = "400";
            break;
          case "light":
          case "thin":
            i = "200";
            break;
        }
      return {
        style: r,
        weight: t.fWeight || i
      };
    }
    var we = function() {
      var t = 5e3, e = {
        w: 0,
        size: 0,
        shapes: []
      }, i = [];
      i = i.concat([
        2304,
        2305,
        2306,
        2307,
        2362,
        2363,
        2364,
        2364,
        2366,
        2367,
        2368,
        2369,
        2370,
        2371,
        2372,
        2373,
        2374,
        2375,
        2376,
        2377,
        2378,
        2379,
        2380,
        2381,
        2382,
        2383,
        2387,
        2388,
        2389,
        2390,
        2391,
        2402,
        2403
      ]);
      var r = [
        "d83cdffb",
        "d83cdffc",
        "d83cdffd",
        "d83cdffe",
        "d83cdfff"
      ], o = [65039, 8205];
      function s(n) {
        var f = n.split(","), c, p = f.length, m = [];
        for (c = 0; c < p; c += 1)
          f[c] !== "sans-serif" && f[c] !== "monospace" && m.push(f[c]);
        return m.join(",");
      }
      function d(n, f) {
        var c = at("span");
        c.setAttribute("aria-hidden", !0), c.style.fontFamily = f;
        var p = at("span");
        p.innerText = "giItT1WQy@!-/#", c.style.position = "absolute", c.style.left = "-10000px", c.style.top = "-10000px", c.style.fontSize = "300px", c.style.fontVariant = "normal", c.style.fontStyle = "normal", c.style.fontWeight = "normal", c.style.letterSpacing = "0", c.appendChild(p), document.body.appendChild(c);
        var m = p.offsetWidth;
        return p.style.fontFamily = s(n) + ", " + f, { node: p, w: m, parent: c };
      }
      function E() {
        var n, f = this.fonts.length, c, p, m = f;
        for (n = 0; n < f; n += 1)
          this.fonts[n].loaded ? m -= 1 : this.fonts[n].fOrigin === "n" || this.fonts[n].origin === 0 ? this.fonts[n].loaded = !0 : (c = this.fonts[n].monoCase.node, p = this.fonts[n].monoCase.w, c.offsetWidth !== p ? (m -= 1, this.fonts[n].loaded = !0) : (c = this.fonts[n].sansCase.node, p = this.fonts[n].sansCase.w, c.offsetWidth !== p && (m -= 1, this.fonts[n].loaded = !0)), this.fonts[n].loaded && (this.fonts[n].sansCase.parent.parentNode.removeChild(this.fonts[n].sansCase.parent), this.fonts[n].monoCase.parent.parentNode.removeChild(this.fonts[n].monoCase.parent)));
        m !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }
      function v(n, f) {
        var c = G("text");
        c.style.fontSize = "100px";
        var p = Ze(f);
        c.setAttribute("font-family", f.fFamily), c.setAttribute("font-style", p.style), c.setAttribute("font-weight", p.weight), c.textContent = "1", f.fClass ? (c.style.fontFamily = "inherit", c.setAttribute("class", f.fClass)) : c.style.fontFamily = f.fFamily, n.appendChild(c);
        var m = at("canvas").getContext("2d");
        return m.font = f.fWeight + " " + f.fStyle + " 100px " + f.fFamily, c;
      }
      function T(n, f) {
        if (!n) {
          this.isLoaded = !0;
          return;
        }
        if (this.chars) {
          this.isLoaded = !0, this.fonts = n.list;
          return;
        }
        var c = n.list, p, m = c.length, R = m;
        for (p = 0; p < m; p += 1) {
          var B = !0, X, q;
          if (c[p].loaded = !1, c[p].monoCase = d(c[p].fFamily, "monospace"), c[p].sansCase = d(c[p].fFamily, "sans-serif"), !c[p].fPath)
            c[p].loaded = !0, R -= 1;
          else if (c[p].fOrigin === "p" || c[p].origin === 3) {
            if (X = document.querySelectorAll('style[f-forigin="p"][f-family="' + c[p].fFamily + '"], style[f-origin="3"][f-family="' + c[p].fFamily + '"]'), X.length > 0 && (B = !1), B) {
              var Q = at("style");
              Q.setAttribute("f-forigin", c[p].fOrigin), Q.setAttribute("f-origin", c[p].origin), Q.setAttribute("f-family", c[p].fFamily), Q.type = "text/css", Q.innerText = "@font-face {font-family: " + c[p].fFamily + "; font-style: normal; src: url('" + c[p].fPath + "');}", f.appendChild(Q);
            }
          } else if (c[p].fOrigin === "g" || c[p].origin === 1) {
            for (X = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), q = 0; q < X.length; q += 1)
              X[q].href.indexOf(c[p].fPath) !== -1 && (B = !1);
            if (B) {
              var J = at("link");
              J.setAttribute("f-forigin", c[p].fOrigin), J.setAttribute("f-origin", c[p].origin), J.type = "text/css", J.rel = "stylesheet", J.href = c[p].fPath, document.body.appendChild(J);
            }
          } else if (c[p].fOrigin === "t" || c[p].origin === 2) {
            for (X = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), q = 0; q < X.length; q += 1)
              c[p].fPath === X[q].src && (B = !1);
            if (B) {
              var tt = at("link");
              tt.setAttribute("f-forigin", c[p].fOrigin), tt.setAttribute("f-origin", c[p].origin), tt.setAttribute("rel", "stylesheet"), tt.setAttribute("href", c[p].fPath), f.appendChild(tt);
            }
          }
          c[p].helper = v(f, c[p]), c[p].cache = {}, this.fonts.push(c[p]);
        }
        R === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
      }
      function P(n) {
        if (!!n) {
          this.chars || (this.chars = []);
          var f, c = n.length, p, m = this.chars.length, R;
          for (f = 0; f < c; f += 1) {
            for (p = 0, R = !1; p < m; )
              this.chars[p].style === n[f].style && this.chars[p].fFamily === n[f].fFamily && this.chars[p].ch === n[f].ch && (R = !0), p += 1;
            R || (this.chars.push(n[f]), m += 1);
          }
        }
      }
      function b(n, f, c) {
        for (var p = 0, m = this.chars.length; p < m; ) {
          if (this.chars[p].ch === n && this.chars[p].style === f && this.chars[p].fFamily === c)
            return this.chars[p];
          p += 1;
        }
        return (typeof n == "string" && n.charCodeAt(0) !== 13 || !n) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", n, f, c)), e;
      }
      function g(n, f, c) {
        var p = this.getFontByName(f), m = n.charCodeAt(0);
        if (!p.cache[m + 1]) {
          var R = p.helper;
          if (n === " ") {
            R.textContent = "|" + n + "|";
            var B = R.getComputedTextLength();
            R.textContent = "||";
            var X = R.getComputedTextLength();
            p.cache[m + 1] = (B - X) / 100;
          } else
            R.textContent = n, p.cache[m + 1] = R.getComputedTextLength() / 100;
        }
        return p.cache[m + 1] * c;
      }
      function y(n) {
        for (var f = 0, c = this.fonts.length; f < c; ) {
          if (this.fonts[f].fName === n)
            return this.fonts[f];
          f += 1;
        }
        return this.fonts[0];
      }
      function A(n, f) {
        var c = n.toString(16) + f.toString(16);
        return r.indexOf(c) !== -1;
      }
      function x(n, f) {
        return f ? n === o[0] && f === o[1] : n === o[1];
      }
      function u(n) {
        return i.indexOf(n) !== -1;
      }
      function l() {
        this.isLoaded = !0;
      }
      var h = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      h.isModifier = A, h.isZeroWidthJoiner = x, h.isCombinedCharacter = u;
      var a = {
        addChars: P,
        addFonts: T,
        getCharData: b,
        getFontByName: y,
        measureText: g,
        checkLoadedFonts: E,
        setIsLoaded: l
      };
      return h.prototype = a, h;
    }(), L = function() {
      var t = V, e = Math.abs;
      function i(u, l) {
        var h = this.offsetTime, a;
        this.propType === "multidimensional" && (a = it("float32", this.pv.length));
        for (var n = l.lastIndex, f = n, c = this.keyframes.length - 1, p = !0, m, R; p; ) {
          if (m = this.keyframes[f], R = this.keyframes[f + 1], f === c - 1 && u >= R.t - h) {
            m.h && (m = R), n = 0;
            break;
          }
          if (R.t - h > u) {
            n = f;
            break;
          }
          f < c - 1 ? f += 1 : (n = 0, p = !1);
        }
        var B, X, q, Q, J, tt, w = R.t - h, S = m.t - h, _;
        if (m.to) {
          m.bezierData || (m.bezierData = te.buildBezierData(m.s, R.s || m.e, m.to, m.ti));
          var M = m.bezierData;
          if (u >= w || u < S) {
            var Z = u >= w ? M.points.length - 1 : 0;
            for (X = M.points[Z].point.length, B = 0; B < X; B += 1)
              a[B] = M.points[Z].point[B];
          } else {
            m.__fnct ? tt = m.__fnct : (tt = ne.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y, m.n).get, m.__fnct = tt), q = tt((u - S) / (w - S));
            var O = M.segmentLength * q, bt, dt = l.lastFrame < u && l._lastKeyframeIndex === f ? l._lastAddedLength : 0;
            for (J = l.lastFrame < u && l._lastKeyframeIndex === f ? l._lastPoint : 0, p = !0, Q = M.points.length; p; ) {
              if (dt += M.points[J].partialLength, O === 0 || q === 0 || J === M.points.length - 1) {
                for (X = M.points[J].point.length, B = 0; B < X; B += 1)
                  a[B] = M.points[J].point[B];
                break;
              } else if (O >= dt && O < dt + M.points[J + 1].partialLength) {
                for (bt = (O - dt) / M.points[J + 1].partialLength, X = M.points[J].point.length, B = 0; B < X; B += 1)
                  a[B] = M.points[J].point[B] + (M.points[J + 1].point[B] - M.points[J].point[B]) * bt;
                break;
              }
              J < Q - 1 ? J += 1 : p = !1;
            }
            l._lastPoint = J, l._lastAddedLength = dt - M.points[J].partialLength, l._lastKeyframeIndex = f;
          }
        } else {
          var wt, Yt, Xt, re, le;
          if (c = m.s.length, _ = R.s || m.e, this.sh && m.h !== 1)
            if (u >= w)
              a[0] = _[0], a[1] = _[1], a[2] = _[2];
            else if (u <= S)
              a[0] = m.s[0], a[1] = m.s[1], a[2] = m.s[2];
            else {
              var me = s(m.s), ee = s(_), Gt = (u - S) / (w - S);
              o(a, r(me, ee, Gt));
            }
          else
            for (f = 0; f < c; f += 1)
              m.h !== 1 && (u >= w ? q = 1 : u < S ? q = 0 : (m.o.x.constructor === Array ? (m.__fnct || (m.__fnct = []), m.__fnct[f] ? tt = m.__fnct[f] : (wt = typeof m.o.x[f] > "u" ? m.o.x[0] : m.o.x[f], Yt = typeof m.o.y[f] > "u" ? m.o.y[0] : m.o.y[f], Xt = typeof m.i.x[f] > "u" ? m.i.x[0] : m.i.x[f], re = typeof m.i.y[f] > "u" ? m.i.y[0] : m.i.y[f], tt = ne.getBezierEasing(wt, Yt, Xt, re).get, m.__fnct[f] = tt)) : m.__fnct ? tt = m.__fnct : (wt = m.o.x, Yt = m.o.y, Xt = m.i.x, re = m.i.y, tt = ne.getBezierEasing(wt, Yt, Xt, re).get, m.__fnct = tt), q = tt((u - S) / (w - S)))), _ = R.s || m.e, le = m.h === 1 ? m.s[f] : m.s[f] + (_[f] - m.s[f]) * q, this.propType === "multidimensional" ? a[f] = le : a = le;
        }
        return l.lastIndex = n, a;
      }
      function r(u, l, h) {
        var a = [], n = u[0], f = u[1], c = u[2], p = u[3], m = l[0], R = l[1], B = l[2], X = l[3], q, Q, J, tt, w;
        return Q = n * m + f * R + c * B + p * X, Q < 0 && (Q = -Q, m = -m, R = -R, B = -B, X = -X), 1 - Q > 1e-6 ? (q = Math.acos(Q), J = Math.sin(q), tt = Math.sin((1 - h) * q) / J, w = Math.sin(h * q) / J) : (tt = 1 - h, w = h), a[0] = tt * n + w * m, a[1] = tt * f + w * R, a[2] = tt * c + w * B, a[3] = tt * p + w * X, a;
      }
      function o(u, l) {
        var h = l[0], a = l[1], n = l[2], f = l[3], c = Math.atan2(2 * a * f - 2 * h * n, 1 - 2 * a * a - 2 * n * n), p = Math.asin(2 * h * a + 2 * n * f), m = Math.atan2(2 * h * f - 2 * a * n, 1 - 2 * h * h - 2 * n * n);
        u[0] = c / yt, u[1] = p / yt, u[2] = m / yt;
      }
      function s(u) {
        var l = u[0] * yt, h = u[1] * yt, a = u[2] * yt, n = Math.cos(l / 2), f = Math.cos(h / 2), c = Math.cos(a / 2), p = Math.sin(l / 2), m = Math.sin(h / 2), R = Math.sin(a / 2), B = n * f * c - p * m * R, X = p * m * c + n * f * R, q = p * f * c + n * m * R, Q = n * m * c - p * f * R;
        return [X, q, Q, B];
      }
      function d() {
        var u = this.comp.renderedFrame - this.offsetTime, l = this.keyframes[0].t - this.offsetTime, h = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
        if (!(u === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= h && u >= h || this._caching.lastFrame < l && u < l))) {
          this._caching.lastFrame >= u && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
          var a = this.interpolateValue(u, this._caching);
          this.pv = a;
        }
        return this._caching.lastFrame = u, this.pv;
      }
      function E(u) {
        var l;
        if (this.propType === "unidimensional")
          l = u * this.mult, e(this.v - l) > 1e-5 && (this.v = l, this._mdf = !0);
        else
          for (var h = 0, a = this.v.length; h < a; )
            l = u[h] * this.mult, e(this.v[h] - l) > 1e-5 && (this.v[h] = l, this._mdf = !0), h += 1;
      }
      function v() {
        if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
          if (this.lock) {
            this.setVValue(this.pv);
            return;
          }
          this.lock = !0, this._mdf = this._isFirstFrame;
          var u, l = this.effectsSequence.length, h = this.kf ? this.pv : this.data.k;
          for (u = 0; u < l; u += 1)
            h = this.effectsSequence[u](h);
          this.setVValue(h), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
        }
      }
      function T(u) {
        this.effectsSequence.push(u), this.container.addDynamicProperty(this);
      }
      function P(u, l, h, a) {
        this.propType = "unidimensional", this.mult = h || 1, this.data = l, this.v = h ? l.k * h : l.k, this.pv = l.k, this._mdf = !1, this.elem = u, this.container = a, this.comp = u.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = v, this.setVValue = E, this.addEffect = T;
      }
      function b(u, l, h, a) {
        this.propType = "multidimensional", this.mult = h || 1, this.data = l, this._mdf = !1, this.elem = u, this.container = a, this.comp = u.comp, this.k = !1, this.kf = !1, this.frameId = -1;
        var n, f = l.k.length;
        for (this.v = it("float32", f), this.pv = it("float32", f), this.vel = it("float32", f), n = 0; n < f; n += 1)
          this.v[n] = l.k[n] * this.mult, this.pv[n] = l.k[n];
        this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = v, this.setVValue = E, this.addEffect = T;
      }
      function g(u, l, h, a) {
        this.propType = "unidimensional", this.keyframes = l.k, this.offsetTime = u.data.st, this.frameId = -1, this._caching = {
          lastFrame: t,
          lastIndex: 0,
          value: 0,
          _lastKeyframeIndex: -1
        }, this.k = !0, this.kf = !0, this.data = l, this.mult = h || 1, this.elem = u, this.container = a, this.comp = u.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = v, this.setVValue = E, this.interpolateValue = i, this.effectsSequence = [d.bind(this)], this.addEffect = T;
      }
      function y(u, l, h, a) {
        this.propType = "multidimensional";
        var n, f = l.k.length, c, p, m, R;
        for (n = 0; n < f - 1; n += 1)
          l.k[n].to && l.k[n].s && l.k[n + 1] && l.k[n + 1].s && (c = l.k[n].s, p = l.k[n + 1].s, m = l.k[n].to, R = l.k[n].ti, (c.length === 2 && !(c[0] === p[0] && c[1] === p[1]) && te.pointOnLine2D(c[0], c[1], p[0], p[1], c[0] + m[0], c[1] + m[1]) && te.pointOnLine2D(c[0], c[1], p[0], p[1], p[0] + R[0], p[1] + R[1]) || c.length === 3 && !(c[0] === p[0] && c[1] === p[1] && c[2] === p[2]) && te.pointOnLine3D(c[0], c[1], c[2], p[0], p[1], p[2], c[0] + m[0], c[1] + m[1], c[2] + m[2]) && te.pointOnLine3D(c[0], c[1], c[2], p[0], p[1], p[2], p[0] + R[0], p[1] + R[1], p[2] + R[2])) && (l.k[n].to = null, l.k[n].ti = null), c[0] === p[0] && c[1] === p[1] && m[0] === 0 && m[1] === 0 && R[0] === 0 && R[1] === 0 && (c.length === 2 || c[2] === p[2] && m[2] === 0 && R[2] === 0) && (l.k[n].to = null, l.k[n].ti = null));
        this.effectsSequence = [d.bind(this)], this.data = l, this.keyframes = l.k, this.offsetTime = u.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = h || 1, this.elem = u, this.container = a, this.comp = u.comp, this.getValue = v, this.setVValue = E, this.interpolateValue = i, this.frameId = -1;
        var B = l.k[0].s.length;
        for (this.v = it("float32", B), this.pv = it("float32", B), n = 0; n < B; n += 1)
          this.v[n] = t, this.pv[n] = t;
        this._caching = { lastFrame: t, lastIndex: 0, value: it("float32", B) }, this.addEffect = T;
      }
      function A(u, l, h, a, n) {
        var f;
        if (!l.k.length)
          f = new P(u, l, a, n);
        else if (typeof l.k[0] == "number")
          f = new b(u, l, a, n);
        else
          switch (h) {
            case 0:
              f = new g(u, l, a, n);
              break;
            case 1:
              f = new y(u, l, a, n);
              break;
          }
        return f.effectsSequence.length && n.addDynamicProperty(f), f;
      }
      var x = {
        getProp: A
      };
      return x;
    }(), ce = function() {
      var t = [0, 0];
      function e(v) {
        var T = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || T, this.a && v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && v.skewFromAxis(-this.sk.v, this.sa.v), this.r ? v.rotate(-this.r.v) : v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? v.translate(this.px.v, this.py.v, -this.pz.v) : v.translate(this.px.v, this.py.v, 0) : v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
      function i(v) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || v) {
            var T;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var P, b;
              if (T = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime)
                this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (P = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / T, 0), b = this.p.getValueAtTime(this.p.keyframes[0].t / T, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (P = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / T, 0), b = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / T, 0)) : (P = this.p.pv, b = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / T, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                P = [], b = [];
                var g = this.px, y = this.py;
                g._caching.lastFrame + g.offsetTime <= g.keyframes[0].t ? (P[0] = g.getValueAtTime((g.keyframes[0].t + 0.01) / T, 0), P[1] = y.getValueAtTime((y.keyframes[0].t + 0.01) / T, 0), b[0] = g.getValueAtTime(g.keyframes[0].t / T, 0), b[1] = y.getValueAtTime(y.keyframes[0].t / T, 0)) : g._caching.lastFrame + g.offsetTime >= g.keyframes[g.keyframes.length - 1].t ? (P[0] = g.getValueAtTime(g.keyframes[g.keyframes.length - 1].t / T, 0), P[1] = y.getValueAtTime(y.keyframes[y.keyframes.length - 1].t / T, 0), b[0] = g.getValueAtTime((g.keyframes[g.keyframes.length - 1].t - 0.01) / T, 0), b[1] = y.getValueAtTime((y.keyframes[y.keyframes.length - 1].t - 0.01) / T, 0)) : (P = [g.pv, y.pv], b[0] = g.getValueAtTime((g._caching.lastFrame + g.offsetTime - 0.01) / T, g.offsetTime), b[1] = y.getValueAtTime((y._caching.lastFrame + y.offsetTime - 0.01) / T, y.offsetTime));
              } else
                b = t, P = b;
              this.v.rotate(-Math.atan2(P[1] - b[1], P[0] - b[0]));
            }
            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
          this.frameId = this.elem.globalData.frameId;
        }
      }
      function r() {
        if (!this.a.k)
          this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
        else
          return;
        if (!this.s.effectsSequence.length)
          this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
        else
          return;
        if (this.sk)
          if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length)
            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
          else
            return;
        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
      }
      function o() {
      }
      function s(v) {
        this._addDynamicProperty(v), this.elem.addDynamicProperty(v), this._isDirty = !0;
      }
      function d(v, T, P) {
        if (this.elem = v, this.frameId = -1, this.propType = "transform", this.data = T, this.v = new Et(), this.pre = new Et(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(P || v), T.p && T.p.s ? (this.px = L.getProp(v, T.p.x, 0, 0, this), this.py = L.getProp(v, T.p.y, 0, 0, this), T.p.z && (this.pz = L.getProp(v, T.p.z, 0, 0, this))) : this.p = L.getProp(v, T.p || { k: [0, 0, 0] }, 1, 0, this), T.rx) {
          if (this.rx = L.getProp(v, T.rx, 0, yt, this), this.ry = L.getProp(v, T.ry, 0, yt, this), this.rz = L.getProp(v, T.rz, 0, yt, this), T.or.k[0].ti) {
            var b, g = T.or.k.length;
            for (b = 0; b < g; b += 1)
              T.or.k[b].to = null, T.or.k[b].ti = null;
          }
          this.or = L.getProp(v, T.or, 1, yt, this), this.or.sh = !0;
        } else
          this.r = L.getProp(v, T.r || { k: 0 }, 0, yt, this);
        T.sk && (this.sk = L.getProp(v, T.sk, 0, yt, this), this.sa = L.getProp(v, T.sa, 0, yt, this)), this.a = L.getProp(v, T.a || { k: [0, 0, 0] }, 1, 0, this), this.s = L.getProp(v, T.s || { k: [100, 100, 100] }, 1, 0.01, this), T.o ? this.o = L.getProp(v, T.o, 0, 0.01, v) : this.o = { _mdf: !1, v: 1 }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
      }
      d.prototype = {
        applyToMatrix: e,
        getValue: i,
        precalculateMatrix: r,
        autoOrient: o
      }, _t([nt], d), d.prototype.addDynamicProperty = s, d.prototype._addDynamicProperty = nt.prototype.addDynamicProperty;
      function E(v, T, P) {
        return new d(v, T, P);
      }
      return {
        getTransformProperty: E
      };
    }();
    function $t() {
      this.c = !1, this._length = 0, this._maxLength = 8, this.v = rt(this._maxLength), this.o = rt(this._maxLength), this.i = rt(this._maxLength);
    }
    $t.prototype.setPathData = function(t, e) {
      this.c = t, this.setLength(e);
      for (var i = 0; i < e; )
        this.v[i] = Ae.newElement(), this.o[i] = Ae.newElement(), this.i[i] = Ae.newElement(), i += 1;
    }, $t.prototype.setLength = function(t) {
      for (; this._maxLength < t; )
        this.doubleArrayLength();
      this._length = t;
    }, $t.prototype.doubleArrayLength = function() {
      this.v = this.v.concat(rt(this._maxLength)), this.i = this.i.concat(rt(this._maxLength)), this.o = this.o.concat(rt(this._maxLength)), this._maxLength *= 2;
    }, $t.prototype.setXYAt = function(t, e, i, r, o) {
      var s;
      switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
        case "v":
          s = this.v;
          break;
        case "i":
          s = this.i;
          break;
        case "o":
          s = this.o;
          break;
        default:
          s = [];
          break;
      }
      (!s[r] || s[r] && !o) && (s[r] = Ae.newElement()), s[r][0] = t, s[r][1] = e;
    }, $t.prototype.setTripleAt = function(t, e, i, r, o, s, d, E) {
      this.setXYAt(t, e, "v", d, E), this.setXYAt(i, r, "o", d, E), this.setXYAt(o, s, "i", d, E);
    }, $t.prototype.reverse = function() {
      var t = new $t();
      t.setPathData(this.c, this._length);
      var e = this.v, i = this.o, r = this.i, o = 0;
      this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), o = 1);
      var s = this._length - 1, d = this._length, E;
      for (E = o; E < d; E += 1)
        t.setTripleAt(e[s][0], e[s][1], r[s][0], r[s][1], i[s][0], i[s][1], E, !1), s -= 1;
      return t;
    };
    var Se = function() {
      var t = -999999;
      function e(l, h, a) {
        var n = a.lastIndex, f, c, p, m, R, B, X, q, Q, J = this.keyframes;
        if (l < J[0].t - this.offsetTime)
          f = J[0].s[0], p = !0, n = 0;
        else if (l >= J[J.length - 1].t - this.offsetTime)
          f = J[J.length - 1].s ? J[J.length - 1].s[0] : J[J.length - 2].e[0], p = !0;
        else {
          for (var tt = n, w = J.length - 1, S = !0, _, M; S && (_ = J[tt], M = J[tt + 1], !(M.t - this.offsetTime > l)); )
            tt < w - 1 ? tt += 1 : S = !1;
          if (p = _.h === 1, n = tt, !p) {
            if (l >= M.t - this.offsetTime)
              q = 1;
            else if (l < _.t - this.offsetTime)
              q = 0;
            else {
              var Z;
              _.__fnct ? Z = _.__fnct : (Z = ne.getBezierEasing(_.o.x, _.o.y, _.i.x, _.i.y).get, _.__fnct = Z), q = Z((l - (_.t - this.offsetTime)) / (M.t - this.offsetTime - (_.t - this.offsetTime)));
            }
            c = M.s ? M.s[0] : _.e[0];
          }
          f = _.s[0];
        }
        for (B = h._length, X = f.i[0].length, a.lastIndex = n, m = 0; m < B; m += 1)
          for (R = 0; R < X; R += 1)
            Q = p ? f.i[m][R] : f.i[m][R] + (c.i[m][R] - f.i[m][R]) * q, h.i[m][R] = Q, Q = p ? f.o[m][R] : f.o[m][R] + (c.o[m][R] - f.o[m][R]) * q, h.o[m][R] = Q, Q = p ? f.v[m][R] : f.v[m][R] + (c.v[m][R] - f.v[m][R]) * q, h.v[m][R] = Q;
      }
      function i() {
        var l = this.comp.renderedFrame - this.offsetTime, h = this.keyframes[0].t - this.offsetTime, a = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, n = this._caching.lastFrame;
        return n !== t && (n < h && l < h || n > a && l > a) || (this._caching.lastIndex = n < l ? this._caching.lastIndex : 0, this.interpolateShape(l, this.pv, this._caching)), this._caching.lastFrame = l, this.pv;
      }
      function r() {
        this.paths = this.localShapeCollection;
      }
      function o(l, h) {
        if (l._length !== h._length || l.c !== h.c)
          return !1;
        var a, n = l._length;
        for (a = 0; a < n; a += 1)
          if (l.v[a][0] !== h.v[a][0] || l.v[a][1] !== h.v[a][1] || l.o[a][0] !== h.o[a][0] || l.o[a][1] !== h.o[a][1] || l.i[a][0] !== h.i[a][0] || l.i[a][1] !== h.i[a][1])
            return !1;
        return !0;
      }
      function s(l) {
        o(this.v, l) || (this.v = Bt.clone(l), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
      }
      function d() {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (!this.effectsSequence.length) {
            this._mdf = !1;
            return;
          }
          if (this.lock) {
            this.setVValue(this.pv);
            return;
          }
          this.lock = !0, this._mdf = !1;
          var l;
          this.kf ? l = this.pv : this.data.ks ? l = this.data.ks.k : l = this.data.pt.k;
          var h, a = this.effectsSequence.length;
          for (h = 0; h < a; h += 1)
            l = this.effectsSequence[h](l);
          this.setVValue(l), this.lock = !1, this.frameId = this.elem.globalData.frameId;
        }
      }
      function E(l, h, a) {
        this.propType = "shape", this.comp = l.comp, this.container = l, this.elem = l, this.data = h, this.k = !1, this.kf = !1, this._mdf = !1;
        var n = a === 3 ? h.pt.k : h.ks.k;
        this.v = Bt.clone(n), this.pv = Bt.clone(this.v), this.localShapeCollection = Ee.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = [];
      }
      function v(l) {
        this.effectsSequence.push(l), this.container.addDynamicProperty(this);
      }
      E.prototype.interpolateShape = e, E.prototype.getValue = d, E.prototype.setVValue = s, E.prototype.addEffect = v;
      function T(l, h, a) {
        this.propType = "shape", this.comp = l.comp, this.elem = l, this.container = l, this.offsetTime = l.data.st, this.keyframes = a === 3 ? h.pt.k : h.ks.k, this.k = !0, this.kf = !0;
        var n = this.keyframes[0].s[0].i.length;
        this.v = Bt.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n), this.pv = Bt.clone(this.v), this.localShapeCollection = Ee.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = r, this._caching = { lastFrame: t, lastIndex: 0 }, this.effectsSequence = [i.bind(this)];
      }
      T.prototype.getValue = d, T.prototype.interpolateShape = e, T.prototype.setVValue = s, T.prototype.addEffect = v;
      var P = function() {
        var l = Lt;
        function h(a, n) {
          this.v = Bt.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = Ee.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = n.d, this.elem = a, this.comp = a.comp, this.frameId = -1, this.initDynamicPropertyContainer(a), this.p = L.getProp(a, n.p, 1, 0, this), this.s = L.getProp(a, n.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
        }
        return h.prototype = {
          reset: r,
          getValue: function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
          },
          convertEllToPath: function() {
            var a = this.p.v[0], n = this.p.v[1], f = this.s.v[0] / 2, c = this.s.v[1] / 2, p = this.d !== 3, m = this.v;
            m.v[0][0] = a, m.v[0][1] = n - c, m.v[1][0] = p ? a + f : a - f, m.v[1][1] = n, m.v[2][0] = a, m.v[2][1] = n + c, m.v[3][0] = p ? a - f : a + f, m.v[3][1] = n, m.i[0][0] = p ? a - f * l : a + f * l, m.i[0][1] = n - c, m.i[1][0] = p ? a + f : a - f, m.i[1][1] = n - c * l, m.i[2][0] = p ? a + f * l : a - f * l, m.i[2][1] = n + c, m.i[3][0] = p ? a - f : a + f, m.i[3][1] = n + c * l, m.o[0][0] = p ? a + f * l : a - f * l, m.o[0][1] = n - c, m.o[1][0] = p ? a + f : a - f, m.o[1][1] = n + c * l, m.o[2][0] = p ? a - f * l : a + f * l, m.o[2][1] = n + c, m.o[3][0] = p ? a - f : a + f, m.o[3][1] = n - c * l;
          }
        }, _t([nt], h), h;
      }(), b = function() {
        function l(h, a) {
          this.v = Bt.newElement(), this.v.setPathData(!0, 0), this.elem = h, this.comp = h.comp, this.data = a, this.frameId = -1, this.d = a.d, this.initDynamicPropertyContainer(h), a.sy === 1 ? (this.ir = L.getProp(h, a.ir, 0, 0, this), this.is = L.getProp(h, a.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = L.getProp(h, a.pt, 0, 0, this), this.p = L.getProp(h, a.p, 1, 0, this), this.r = L.getProp(h, a.r, 0, yt, this), this.or = L.getProp(h, a.or, 0, 0, this), this.os = L.getProp(h, a.os, 0, 0.01, this), this.localShapeCollection = Ee.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
        }
        return l.prototype = {
          reset: r,
          getValue: function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
          },
          convertStarToPath: function() {
            var h = Math.floor(this.pt.v) * 2, a = Math.PI * 2 / h, n = !0, f = this.or.v, c = this.ir.v, p = this.os.v, m = this.is.v, R = 2 * Math.PI * f / (h * 2), B = 2 * Math.PI * c / (h * 2), X, q, Q, J, tt = -Math.PI / 2;
            tt += this.r.v;
            var w = this.data.d === 3 ? -1 : 1;
            for (this.v._length = 0, X = 0; X < h; X += 1) {
              q = n ? f : c, Q = n ? p : m, J = n ? R : B;
              var S = q * Math.cos(tt), _ = q * Math.sin(tt), M = S === 0 && _ === 0 ? 0 : _ / Math.sqrt(S * S + _ * _), Z = S === 0 && _ === 0 ? 0 : -S / Math.sqrt(S * S + _ * _);
              S += +this.p.v[0], _ += +this.p.v[1], this.v.setTripleAt(S, _, S - M * J * Q * w, _ - Z * J * Q * w, S + M * J * Q * w, _ + Z * J * Q * w, X, !0), n = !n, tt += a * w;
            }
          },
          convertPolygonToPath: function() {
            var h = Math.floor(this.pt.v), a = Math.PI * 2 / h, n = this.or.v, f = this.os.v, c = 2 * Math.PI * n / (h * 4), p, m = -Math.PI * 0.5, R = this.data.d === 3 ? -1 : 1;
            for (m += this.r.v, this.v._length = 0, p = 0; p < h; p += 1) {
              var B = n * Math.cos(m), X = n * Math.sin(m), q = B === 0 && X === 0 ? 0 : X / Math.sqrt(B * B + X * X), Q = B === 0 && X === 0 ? 0 : -B / Math.sqrt(B * B + X * X);
              B += +this.p.v[0], X += +this.p.v[1], this.v.setTripleAt(B, X, B - q * c * f * R, X - Q * c * f * R, B + q * c * f * R, X + Q * c * f * R, p, !0), m += a * R;
            }
            this.paths.length = 0, this.paths[0] = this.v;
          }
        }, _t([nt], l), l;
      }(), g = function() {
        function l(h, a) {
          this.v = Bt.newElement(), this.v.c = !0, this.localShapeCollection = Ee.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = h, this.comp = h.comp, this.frameId = -1, this.d = a.d, this.initDynamicPropertyContainer(h), this.p = L.getProp(h, a.p, 1, 0, this), this.s = L.getProp(h, a.s, 1, 0, this), this.r = L.getProp(h, a.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
        }
        return l.prototype = {
          convertRectToPath: function() {
            var h = this.p.v[0], a = this.p.v[1], n = this.s.v[0] / 2, f = this.s.v[1] / 2, c = xt(n, f, this.r.v), p = c * (1 - Lt);
            this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(h + n, a - f + c, h + n, a - f + c, h + n, a - f + p, 0, !0), this.v.setTripleAt(h + n, a + f - c, h + n, a + f - p, h + n, a + f - c, 1, !0), c !== 0 ? (this.v.setTripleAt(h + n - c, a + f, h + n - c, a + f, h + n - p, a + f, 2, !0), this.v.setTripleAt(h - n + c, a + f, h - n + p, a + f, h - n + c, a + f, 3, !0), this.v.setTripleAt(h - n, a + f - c, h - n, a + f - c, h - n, a + f - p, 4, !0), this.v.setTripleAt(h - n, a - f + c, h - n, a - f + p, h - n, a - f + c, 5, !0), this.v.setTripleAt(h - n + c, a - f, h - n + c, a - f, h - n + p, a - f, 6, !0), this.v.setTripleAt(h + n - c, a - f, h + n - p, a - f, h + n - c, a - f, 7, !0)) : (this.v.setTripleAt(h - n, a + f, h - n + p, a + f, h - n, a + f, 2), this.v.setTripleAt(h - n, a - f, h - n, a - f + p, h - n, a - f, 3))) : (this.v.setTripleAt(h + n, a - f + c, h + n, a - f + p, h + n, a - f + c, 0, !0), c !== 0 ? (this.v.setTripleAt(h + n - c, a - f, h + n - c, a - f, h + n - p, a - f, 1, !0), this.v.setTripleAt(h - n + c, a - f, h - n + p, a - f, h - n + c, a - f, 2, !0), this.v.setTripleAt(h - n, a - f + c, h - n, a - f + c, h - n, a - f + p, 3, !0), this.v.setTripleAt(h - n, a + f - c, h - n, a + f - p, h - n, a + f - c, 4, !0), this.v.setTripleAt(h - n + c, a + f, h - n + c, a + f, h - n + p, a + f, 5, !0), this.v.setTripleAt(h + n - c, a + f, h + n - p, a + f, h + n - c, a + f, 6, !0), this.v.setTripleAt(h + n, a + f - c, h + n, a + f - c, h + n, a + f - p, 7, !0)) : (this.v.setTripleAt(h - n, a - f, h - n + p, a - f, h - n, a - f, 1, !0), this.v.setTripleAt(h - n, a + f, h - n, a + f - p, h - n, a + f, 2, !0), this.v.setTripleAt(h + n, a + f, h + n - p, a + f, h + n, a + f, 3, !0)));
          },
          getValue: function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
          },
          reset: r
        }, _t([nt], l), l;
      }();
      function y(l, h, a) {
        var n;
        if (a === 3 || a === 4) {
          var f = a === 3 ? h.pt : h.ks, c = f.k;
          c.length ? n = new T(l, h, a) : n = new E(l, h, a);
        } else
          a === 5 ? n = new g(l, h) : a === 6 ? n = new P(l, h) : a === 7 && (n = new b(l, h));
        return n.k && l.addDynamicProperty(n), n;
      }
      function A() {
        return E;
      }
      function x() {
        return T;
      }
      var u = {};
      return u.getShapeProp = y, u.getConstructorFunction = A, u.getKeyframedConstructorFunction = x, u;
    }(), Ce = function() {
      var t = {}, e = {};
      t.registerModifier = i, t.getModifier = r;
      function i(o, s) {
        e[o] || (e[o] = s);
      }
      function r(o, s, d) {
        return new e[o](s, d);
      }
      return t;
    }();
    function ie() {
    }
    ie.prototype.initModifierProperties = function() {
    }, ie.prototype.addShapeToModifier = function() {
    }, ie.prototype.addShape = function(t) {
      if (!this.closed) {
        t.sh.container.addDynamicProperty(t.sh);
        var e = { shape: t.sh, data: t, localShapeCollection: Ee.newShapeCollection() };
        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
      }
    }, ie.prototype.init = function(t, e) {
      this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = V, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, ie.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, _t([nt], ie);
    function he() {
    }
    _t([ie], he), he.prototype.initModifierProperties = function(t, e) {
      this.s = L.getProp(t, e.s, 0, 0.01, this), this.e = L.getProp(t, e.e, 0, 0.01, this), this.o = L.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, he.prototype.addShapeToModifier = function(t) {
      t.pathsData = [];
    }, he.prototype.calculateShapeEdges = function(t, e, i, r, o) {
      var s = [];
      e <= 1 ? s.push({
        s: t,
        e
      }) : t >= 1 ? s.push({
        s: t - 1,
        e: e - 1
      }) : (s.push({
        s: t,
        e: 1
      }), s.push({
        s: 0,
        e: e - 1
      }));
      var d = [], E, v = s.length, T;
      for (E = 0; E < v; E += 1)
        if (T = s[E], !(T.e * o < r || T.s * o > r + i)) {
          var P, b;
          T.s * o <= r ? P = 0 : P = (T.s * o - r) / i, T.e * o >= r + i ? b = 1 : b = (T.e * o - r) / i, d.push([P, b]);
        }
      return d.length || d.push([0, 0]), d;
    }, he.prototype.releasePathsData = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1)
        ni.release(t[e]);
      return t.length = 0, t;
    }, he.prototype.processShapes = function(t) {
      var e, i;
      if (this._mdf || t) {
        var r = this.o.v % 360 / 360;
        if (r < 0 && (r += 1), this.s.v > 1 ? e = 1 + r : this.s.v < 0 ? e = 0 + r : e = this.s.v + r, this.e.v > 1 ? i = 1 + r : this.e.v < 0 ? i = 0 + r : i = this.e.v + r, e > i) {
          var o = e;
          e = i, i = o;
        }
        e = Math.round(e * 1e4) * 1e-4, i = Math.round(i * 1e4) * 1e-4, this.sValue = e, this.eValue = i;
      } else
        e = this.sValue, i = this.eValue;
      var s, d, E = this.shapes.length, v, T, P, b, g, y = 0;
      if (i === e)
        for (d = 0; d < E; d += 1)
          this.shapes[d].localShapeCollection.releaseShapes(), this.shapes[d].shape._mdf = !0, this.shapes[d].shape.paths = this.shapes[d].localShapeCollection, this._mdf && (this.shapes[d].pathsData.length = 0);
      else if (i === 1 && e === 0 || i === 0 && e === 1) {
        if (this._mdf)
          for (d = 0; d < E; d += 1)
            this.shapes[d].pathsData.length = 0, this.shapes[d].shape._mdf = !0;
      } else {
        var A = [], x, u;
        for (d = 0; d < E; d += 1)
          if (x = this.shapes[d], !x.shape._mdf && !this._mdf && !t && this.m !== 2)
            x.shape.paths = x.localShapeCollection;
          else {
            if (s = x.shape.paths, T = s._length, g = 0, !x.shape._mdf && x.pathsData.length)
              g = x.totalShapeLength;
            else {
              for (P = this.releasePathsData(x.pathsData), v = 0; v < T; v += 1)
                b = te.getSegmentsLength(s.shapes[v]), P.push(b), g += b.totalLength;
              x.totalShapeLength = g, x.pathsData = P;
            }
            y += g, x.shape._mdf = !0;
          }
        var l = e, h = i, a = 0, n;
        for (d = E - 1; d >= 0; d -= 1)
          if (x = this.shapes[d], x.shape._mdf) {
            for (u = x.localShapeCollection, u.releaseShapes(), this.m === 2 && E > 1 ? (n = this.calculateShapeEdges(e, i, x.totalShapeLength, a, y), a += x.totalShapeLength) : n = [[l, h]], T = n.length, v = 0; v < T; v += 1) {
              l = n[v][0], h = n[v][1], A.length = 0, h <= 1 ? A.push({
                s: x.totalShapeLength * l,
                e: x.totalShapeLength * h
              }) : l >= 1 ? A.push({
                s: x.totalShapeLength * (l - 1),
                e: x.totalShapeLength * (h - 1)
              }) : (A.push({
                s: x.totalShapeLength * l,
                e: x.totalShapeLength
              }), A.push({
                s: 0,
                e: x.totalShapeLength * (h - 1)
              }));
              var f = this.addShapes(x, A[0]);
              if (A[0].s !== A[0].e) {
                if (A.length > 1) {
                  var c = x.shape.paths.shapes[x.shape.paths._length - 1];
                  if (c.c) {
                    var p = f.pop();
                    this.addPaths(f, u), f = this.addShapes(x, A[1], p);
                  } else
                    this.addPaths(f, u), f = this.addShapes(x, A[1]);
                }
                this.addPaths(f, u);
              }
            }
            x.shape.paths = u;
          }
      }
    }, he.prototype.addPaths = function(t, e) {
      var i, r = t.length;
      for (i = 0; i < r; i += 1)
        e.addShape(t[i]);
    }, he.prototype.addSegment = function(t, e, i, r, o, s, d) {
      o.setXYAt(e[0], e[1], "o", s), o.setXYAt(i[0], i[1], "i", s + 1), d && o.setXYAt(t[0], t[1], "v", s), o.setXYAt(r[0], r[1], "v", s + 1);
    }, he.prototype.addSegmentFromArray = function(t, e, i, r) {
      e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1);
    }, he.prototype.addShapes = function(t, e, i) {
      var r = t.pathsData, o = t.shape.paths.shapes, s, d = t.shape.paths._length, E, v, T = 0, P, b, g, y, A = [], x, u = !0;
      for (i ? (b = i._length, x = i._length) : (i = Bt.newElement(), b = 0, x = 0), A.push(i), s = 0; s < d; s += 1) {
        for (g = r[s].lengths, i.c = o[s].c, v = o[s].c ? g.length : g.length + 1, E = 1; E < v; E += 1)
          if (P = g[E - 1], T + P.addedLength < e.s)
            T += P.addedLength, i.c = !1;
          else if (T > e.e) {
            i.c = !1;
            break;
          } else
            e.s <= T && e.e >= T + P.addedLength ? (this.addSegment(o[s].v[E - 1], o[s].o[E - 1], o[s].i[E], o[s].v[E], i, b, u), u = !1) : (y = te.getNewSegment(o[s].v[E - 1], o[s].v[E], o[s].o[E - 1], o[s].i[E], (e.s - T) / P.addedLength, (e.e - T) / P.addedLength, g[E - 1]), this.addSegmentFromArray(y, i, b, u), u = !1, i.c = !1), T += P.addedLength, b += 1;
        if (o[s].c && g.length) {
          if (P = g[E - 1], T <= e.e) {
            var l = g[E - 1].addedLength;
            e.s <= T && e.e >= T + l ? (this.addSegment(o[s].v[E - 1], o[s].o[E - 1], o[s].i[0], o[s].v[0], i, b, u), u = !1) : (y = te.getNewSegment(o[s].v[E - 1], o[s].v[0], o[s].o[E - 1], o[s].i[0], (e.s - T) / l, (e.e - T) / l, g[E - 1]), this.addSegmentFromArray(y, i, b, u), u = !1, i.c = !1);
          } else
            i.c = !1;
          T += P.addedLength, b += 1;
        }
        if (i._length && (i.setXYAt(i.v[x][0], i.v[x][1], "i", x), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), T > e.e)
          break;
        s < d - 1 && (i = Bt.newElement(), u = !0, A.push(i), b = 0);
      }
      return A;
    }, Ce.registerModifier("tm", he);
    function Qe() {
    }
    _t([ie], Qe), Qe.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.rd = L.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, Qe.prototype.processPath = function(t, e) {
      var i = Bt.newElement();
      i.c = t.c;
      var r, o = t._length, s, d, E, v, T, P, b = 0, g, y, A, x, u, l;
      for (r = 0; r < o; r += 1)
        s = t.v[r], E = t.o[r], d = t.i[r], s[0] === E[0] && s[1] === E[1] && s[0] === d[0] && s[1] === d[1] ? (r === 0 || r === o - 1) && !t.c ? (i.setTripleAt(s[0], s[1], E[0], E[1], d[0], d[1], b), b += 1) : (r === 0 ? v = t.v[o - 1] : v = t.v[r - 1], T = Math.sqrt(Math.pow(s[0] - v[0], 2) + Math.pow(s[1] - v[1], 2)), P = T ? Math.min(T / 2, e) / T : 0, u = s[0] + (v[0] - s[0]) * P, g = u, l = s[1] - (s[1] - v[1]) * P, y = l, A = g - (g - s[0]) * Lt, x = y - (y - s[1]) * Lt, i.setTripleAt(g, y, A, x, u, l, b), b += 1, r === o - 1 ? v = t.v[0] : v = t.v[r + 1], T = Math.sqrt(Math.pow(s[0] - v[0], 2) + Math.pow(s[1] - v[1], 2)), P = T ? Math.min(T / 2, e) / T : 0, A = s[0] + (v[0] - s[0]) * P, g = A, x = s[1] + (v[1] - s[1]) * P, y = x, u = g - (g - s[0]) * Lt, l = y - (y - s[1]) * Lt, i.setTripleAt(g, y, A, x, u, l, b), b += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], b), b += 1);
      return i;
    }, Qe.prototype.processShapes = function(t) {
      var e, i, r = this.shapes.length, o, s, d = this.rd.v;
      if (d !== 0) {
        var E, v;
        for (i = 0; i < r; i += 1) {
          if (E = this.shapes[i], v = E.localShapeCollection, !(!E.shape._mdf && !this._mdf && !t))
            for (v.releaseShapes(), E.shape._mdf = !0, e = E.shape.paths.shapes, s = E.shape.paths._length, o = 0; o < s; o += 1)
              v.addShape(this.processPath(e[o], d));
          E.shape.paths = E.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    }, Ce.registerModifier("rd", Qe);
    function Fe() {
    }
    _t([ie], Fe), Fe.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = L.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, Fe.prototype.processPath = function(t, e) {
      var i = e / 100, r = [0, 0], o = t._length, s = 0;
      for (s = 0; s < o; s += 1)
        r[0] += t.v[s][0], r[1] += t.v[s][1];
      r[0] /= o, r[1] /= o;
      var d = Bt.newElement();
      d.c = t.c;
      var E, v, T, P, b, g;
      for (s = 0; s < o; s += 1)
        E = t.v[s][0] + (r[0] - t.v[s][0]) * i, v = t.v[s][1] + (r[1] - t.v[s][1]) * i, T = t.o[s][0] + (r[0] - t.o[s][0]) * -i, P = t.o[s][1] + (r[1] - t.o[s][1]) * -i, b = t.i[s][0] + (r[0] - t.i[s][0]) * -i, g = t.i[s][1] + (r[1] - t.i[s][1]) * -i, d.setTripleAt(E, v, T, P, b, g, s);
      return d;
    }, Fe.prototype.processShapes = function(t) {
      var e, i, r = this.shapes.length, o, s, d = this.amount.v;
      if (d !== 0) {
        var E, v;
        for (i = 0; i < r; i += 1) {
          if (E = this.shapes[i], v = E.localShapeCollection, !(!E.shape._mdf && !this._mdf && !t))
            for (v.releaseShapes(), E.shape._mdf = !0, e = E.shape.paths.shapes, s = E.shape.paths._length, o = 0; o < s; o += 1)
              v.addShape(this.processPath(e[o], d));
          E.shape.paths = E.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    }, Ce.registerModifier("pb", Fe);
    function de() {
    }
    _t([ie], de), de.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.c = L.getProp(t, e.c, 0, null, this), this.o = L.getProp(t, e.o, 0, null, this), this.tr = ce.getTransformProperty(t, e.tr, this), this.so = L.getProp(t, e.tr.so, 0, 0.01, this), this.eo = L.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Et(), this.rMatrix = new Et(), this.sMatrix = new Et(), this.tMatrix = new Et(), this.matrix = new Et();
    }, de.prototype.applyTransforms = function(t, e, i, r, o, s) {
      var d = s ? -1 : 1, E = r.s.v[0] + (1 - r.s.v[0]) * (1 - o), v = r.s.v[1] + (1 - r.s.v[1]) * (1 - o);
      t.translate(r.p.v[0] * d * o, r.p.v[1] * d * o, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * d * o), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(s ? 1 / E : E, s ? 1 / v : v), i.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
    }, de.prototype.init = function(t, e, i, r) {
      for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0; )
        i -= 1, this._elements.unshift(e[i]);
      this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, de.prototype.resetElements = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1)
        t[e]._processed = !1, t[e].ty === "gr" && this.resetElements(t[e].it);
    }, de.prototype.cloneElements = function(t) {
      var e = JSON.parse(JSON.stringify(t));
      return this.resetElements(e), e;
    }, de.prototype.changeGroupRender = function(t, e) {
      var i, r = t.length;
      for (i = 0; i < r; i += 1)
        t[i]._render = e, t[i].ty === "gr" && this.changeGroupRender(t[i].it, e);
    }, de.prototype.processShapes = function(t) {
      var e, i, r, o, s, d = !1;
      if (this._mdf || t) {
        var E = Math.ceil(this.c.v);
        if (this._groups.length < E) {
          for (; this._groups.length < E; ) {
            var v = {
              it: this.cloneElements(this._elements),
              ty: "gr"
            };
            v.it.push({
              a: { a: 0, ix: 1, k: [0, 0] },
              nm: "Transform",
              o: { a: 0, ix: 7, k: 100 },
              p: { a: 0, ix: 2, k: [0, 0] },
              r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] },
              s: { a: 0, ix: 3, k: [100, 100] },
              sa: { a: 0, ix: 5, k: 0 },
              sk: { a: 0, ix: 4, k: 0 },
              ty: "tr"
            }), this.arr.splice(0, 0, v), this._groups.splice(0, 0, v), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), d = !0;
        }
        s = 0;
        var T;
        for (r = 0; r <= this._groups.length - 1; r += 1) {
          if (T = s < E, this._groups[r]._render = T, this.changeGroupRender(this._groups[r].it, T), !T) {
            var P = this.elemsData[r].it, b = P[P.length - 1];
            b.transform.op.v !== 0 ? (b.transform.op._mdf = !0, b.transform.op.v = 0) : b.transform.op._mdf = !1;
          }
          s += 1;
        }
        this._currentCopies = E;
        var g = this.o.v, y = g % 1, A = g > 0 ? Math.floor(g) : Math.ceil(g), x = this.pMatrix.props, u = this.rMatrix.props, l = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var h = 0;
        if (g > 0) {
          for (; h < A; )
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), h += 1;
          y && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, y, !1), h += y);
        } else if (g < 0) {
          for (; h > A; )
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), h -= 1;
          y && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -y, !0), h -= y);
        }
        r = this.data.m === 1 ? 0 : this._currentCopies - 1, o = this.data.m === 1 ? 1 : -1, s = this._currentCopies;
        for (var a, n; s; ) {
          if (e = this.elemsData[r].it, i = e[e.length - 1].transform.mProps.v.props, n = i.length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), h !== 0) {
            for ((r !== 0 && o === 1 || r !== this._currentCopies - 1 && o === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), this.matrix.transform(l[0], l[1], l[2], l[3], l[4], l[5], l[6], l[7], l[8], l[9], l[10], l[11], l[12], l[13], l[14], l[15]), this.matrix.transform(x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7], x[8], x[9], x[10], x[11], x[12], x[13], x[14], x[15]), a = 0; a < n; a += 1)
              i[a] = this.matrix.props[a];
            this.matrix.reset();
          } else
            for (this.matrix.reset(), a = 0; a < n; a += 1)
              i[a] = this.matrix.props[a];
          h += 1, s -= 1, r += o;
        }
      } else
        for (s = this._currentCopies, r = 0, o = 1; s; )
          e = this.elemsData[r].it, i = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, r += o;
      return d;
    }, de.prototype.addShape = function() {
    }, Ce.registerModifier("rp", de);
    function ui() {
      this._length = 0, this._maxLength = 4, this.shapes = rt(this._maxLength);
    }
    ui.prototype.addShape = function(t) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(rt(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
    }, ui.prototype.releaseShapes = function() {
      var t;
      for (t = 0; t < this._length; t += 1)
        Bt.release(this.shapes[t]);
      this._length = 0;
    };
    function ti(t, e, i, r) {
      this.elem = t, this.frameId = -1, this.dataProps = rt(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = it("float32", e.length ? e.length - 1 : 0), this.dashoffset = it("float32", 1), this.initDynamicPropertyContainer(r);
      var o, s = e.length || 0, d;
      for (o = 0; o < s; o += 1)
        d = L.getProp(t, e[o].v, 0, 0, this), this.k = d.k || this.k, this.dataProps[o] = { n: e[o].n, p: d };
      this.k || this.getValue(!0), this._isAnimated = this.k;
    }
    ti.prototype.getValue = function(t) {
      if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
        var e = 0, i = this.dataProps.length;
        for (this.renderer === "svg" && (this.dashStr = ""), e = 0; e < i; e += 1)
          this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
      }
    }, _t([nt], ti);
    function Ne(t, e, i) {
      this.data = e, this.c = it("uint8c", e.p * 4);
      var r = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
      this.o = it("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = L.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
    }
    Ne.prototype.comparePoints = function(t, e) {
      for (var i = 0, r = this.o.length / 2, o; i < r; ) {
        if (o = Math.abs(t[i * 4] - t[e * 4 + i * 2]), o > 0.01)
          return !1;
        i += 1;
      }
      return !0;
    }, Ne.prototype.checkCollapsable = function() {
      if (this.o.length / 2 !== this.c.length / 4)
        return !1;
      if (this.data.k.k[0].s)
        for (var t = 0, e = this.data.k.k.length; t < e; ) {
          if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
            return !1;
          t += 1;
        }
      else if (!this.comparePoints(this.data.k.k, this.data.p))
        return !1;
      return !0;
    }, Ne.prototype.getValue = function(t) {
      if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
        var e, i = this.data.p * 4, r, o;
        for (e = 0; e < i; e += 1)
          r = e % 4 === 0 ? 100 : 255, o = Math.round(this.prop.v[e] * r), this.c[e] !== o && (this.c[e] = o, this._cmdf = !t);
        if (this.o.length)
          for (i = this.prop.v.length, e = this.data.p * 4; e < i; e += 1)
            r = e % 2 === 0 ? 100 : 1, o = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== o && (this.o[e - this.data.p * 4] = o, this._omdf = !t);
        this._mdf = !t;
      }
    }, _t([nt], Ne);
    var qe = function(t, e, i, r) {
      if (e === 0)
        return "";
      var o = t.o, s = t.i, d = t.v, E, v = " M" + r.applyToPointStringified(d[0][0], d[0][1]);
      for (E = 1; E < e; E += 1)
        v += " C" + r.applyToPointStringified(o[E - 1][0], o[E - 1][1]) + " " + r.applyToPointStringified(s[E][0], s[E][1]) + " " + r.applyToPointStringified(d[E][0], d[E][1]);
      return i && e && (v += " C" + r.applyToPointStringified(o[E - 1][0], o[E - 1][1]) + " " + r.applyToPointStringified(s[0][0], s[0][1]) + " " + r.applyToPointStringified(d[0][0], d[0][1]), v += "z"), v;
    }, Oi = function() {
      function t(e) {
        this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1;
      }
      return t.prototype = {
        addAudio: function(e) {
          this.audios.push(e);
        },
        pause: function() {
          var e, i = this.audios.length;
          for (e = 0; e < i; e += 1)
            this.audios[e].pause();
        },
        resume: function() {
          var e, i = this.audios.length;
          for (e = 0; e < i; e += 1)
            this.audios[e].resume();
        },
        setRate: function(e) {
          var i, r = this.audios.length;
          for (i = 0; i < r; i += 1)
            this.audios[i].setRate(e);
        },
        createAudio: function(e) {
          return this.audioFactory ? this.audioFactory(e) : Howl ? new Howl({
            src: [e]
          }) : {
            isPlaying: !1,
            play: function() {
              this.isPlaying = !0;
            },
            seek: function() {
              this.isPlaying = !1;
            },
            playing: function() {
            },
            rate: function() {
            },
            setVolume: function() {
            }
          };
        },
        setAudioFactory: function(e) {
          this.audioFactory = e;
        },
        setVolume: function(e) {
          this._volume = e, this._updateVolume();
        },
        mute: function() {
          this._isMuted = !0, this._updateVolume();
        },
        unmute: function() {
          this._isMuted = !1, this._updateVolume();
        },
        getVolume: function() {
          return this._volume;
        },
        _updateVolume: function() {
          var e, i = this.audios.length;
          for (e = 0; e < i; e += 1)
            this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1));
        }
      }, function() {
        return new t();
      };
    }(), gi = function() {
      var t = function() {
        var l = at("canvas");
        l.width = 1, l.height = 1;
        var h = l.getContext("2d");
        return h.fillStyle = "rgba(0,0,0,0)", h.fillRect(0, 0, 1, 1), l;
      }();
      function e() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function i() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function r(l, h, a) {
        var n = "";
        if (l.e)
          n = l.p;
        else if (h) {
          var f = l.p;
          f.indexOf("images/") !== -1 && (f = f.split("/")[1]), n = h + f;
        } else
          n = a, n += l.u ? l.u : "", n += l.p;
        return n;
      }
      function o(l) {
        var h = 0, a = setInterval(function() {
          var n = l.getBBox();
          (n.width || h > 500) && (this._imageLoaded(), clearInterval(a)), h += 1;
        }.bind(this), 50);
      }
      function s(l) {
        var h = r(l, this.assetsPath, this.path), a = G("image");
        $ ? this.testImageLoaded(a) : a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", function() {
          n.img = t, this._imageLoaded();
        }.bind(this), !1), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", h), this._elementHelper.append ? this._elementHelper.append(a) : this._elementHelper.appendChild(a);
        var n = {
          img: a,
          assetData: l
        };
        return n;
      }
      function d(l) {
        var h = r(l, this.assetsPath, this.path), a = at("img");
        a.crossOrigin = "anonymous", a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", function() {
          n.img = t, this._imageLoaded();
        }.bind(this), !1), a.src = h;
        var n = {
          img: a,
          assetData: l
        };
        return n;
      }
      function E(l) {
        var h = {
          assetData: l
        }, a = r(l, this.assetsPath, this.path);
        return ci.load(a, function(n) {
          h.img = n, this._footageLoaded();
        }.bind(this), function() {
          h.img = {}, this._footageLoaded();
        }.bind(this)), h;
      }
      function v(l, h) {
        this.imagesLoadedCb = h;
        var a, n = l.length;
        for (a = 0; a < n; a += 1)
          l[a].layers || (!l[a].t || l[a].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(l[a]))) : l[a].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(l[a]))));
      }
      function T(l) {
        this.path = l || "";
      }
      function P(l) {
        this.assetsPath = l || "";
      }
      function b(l) {
        for (var h = 0, a = this.images.length; h < a; ) {
          if (this.images[h].assetData === l)
            return this.images[h].img;
          h += 1;
        }
        return null;
      }
      function g() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }
      function y() {
        return this.totalImages === this.loadedAssets;
      }
      function A() {
        return this.totalFootages === this.loadedFootagesCount;
      }
      function x(l, h) {
        l === "svg" ? (this._elementHelper = h, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      }
      function u() {
        this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = o.bind(this), this.createFootageData = E.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return u.prototype = {
        loadAssets: v,
        setAssetsPath: P,
        setPath: T,
        loadedImages: y,
        loadedFootages: A,
        destroy: g,
        getAsset: b,
        createImgData: d,
        createImageData: s,
        imageLoaded: e,
        footageLoaded: i,
        setCacheType: x
      }, u;
    }(), pi = function() {
      var t = {
        maskType: !0
      };
      return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t;
    }(), We = function() {
      var t = {};
      t.createFilter = e, t.createAlphaToLuminanceFilter = i;
      function e(r, o) {
        var s = G("filter");
        return s.setAttribute("id", r), o !== !0 && (s.setAttribute("filterUnits", "objectBoundingBox"), s.setAttribute("x", "0%"), s.setAttribute("y", "0%"), s.setAttribute("width", "100%"), s.setAttribute("height", "100%")), s;
      }
      function i() {
        var r = G("feColorMatrix");
        return r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), r;
      }
      return t;
    }(), ci = function() {
      function t(i) {
        return i.response && typeof i.response == "object" ? i.response : i.response && typeof i.response == "string" ? JSON.parse(i.response) : i.responseText ? JSON.parse(i.responseText) : null;
      }
      function e(i, r, o) {
        var s, d = new XMLHttpRequest();
        try {
          d.responseType = "json";
        } catch {
        }
        d.onreadystatechange = function() {
          if (d.readyState === 4)
            if (d.status === 200)
              s = t(d), r(s);
            else
              try {
                s = t(d), r(s);
              } catch (E) {
                o && o(E);
              }
        }, d.open("GET", i, !0), d.send();
      }
      return {
        load: e
      };
    }();
    function Me(t, e, i) {
      this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = rt(this._textData.a.length), this._pathData = {}, this._moreOptions = {
        alignment: {}
      }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i);
    }
    Me.prototype.searchProperties = function() {
      var t, e = this._textData.a.length, i, r = L.getProp;
      for (t = 0; t < e; t += 1)
        i = this._textData.a[t], this._animatorsData[t] = new Vi(this._elem, i, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = {
        a: r(this._elem, this._textData.p.a, 0, 0, this),
        f: r(this._elem, this._textData.p.f, 0, 0, this),
        l: r(this._elem, this._textData.p.l, 0, 0, this),
        r: r(this._elem, this._textData.p.r, 0, 0, this),
        p: r(this._elem, this._textData.p.p, 0, 0, this),
        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
      }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this);
    }, Me.prototype.getMeasures = function(t, e) {
      if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
        this._isFirstFrame = !1;
        var i = this._moreOptions.alignment.v, r = this._animatorsData, o = this._textData, s = this.mHelper, d = this._renderType, E = this.renderedLetters.length, v, T, P, b, g = t.l, y, A, x, u, l, h, a, n, f, c, p, m, R, B, X;
        if (this._hasMaskedPath) {
          if (X = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var q = X.v;
            this._pathData.r.v && (q = q.reverse()), y = {
              tLength: 0,
              segments: []
            }, b = q._length - 1;
            var Q;
            for (m = 0, P = 0; P < b; P += 1)
              Q = te.buildBezierData(q.v[P], q.v[P + 1], [q.o[P][0] - q.v[P][0], q.o[P][1] - q.v[P][1]], [q.i[P + 1][0] - q.v[P + 1][0], q.i[P + 1][1] - q.v[P + 1][1]]), y.tLength += Q.segmentLength, y.segments.push(Q), m += Q.segmentLength;
            P = b, X.v.c && (Q = te.buildBezierData(q.v[P], q.v[0], [q.o[P][0] - q.v[P][0], q.o[P][1] - q.v[P][1]], [q.i[0][0] - q.v[0][0], q.i[0][1] - q.v[0][1]]), y.tLength += Q.segmentLength, y.segments.push(Q), m += Q.segmentLength), this._pathData.pi = y;
          }
          if (y = this._pathData.pi, A = this._pathData.f.v, a = 0, h = 1, u = 0, l = !0, c = y.segments, A < 0 && X.v.c)
            for (y.tLength < Math.abs(A) && (A = -Math.abs(A) % y.tLength), a = c.length - 1, f = c[a].points, h = f.length - 1; A < 0; )
              A += f[h].partialLength, h -= 1, h < 0 && (a -= 1, f = c[a].points, h = f.length - 1);
          f = c[a].points, n = f[h - 1], x = f[h], p = x.partialLength;
        }
        b = g.length, v = 0, T = 0;
        var J = t.finalSize * 1.2 * 0.714, tt = !0, w, S, _, M, Z;
        M = r.length;
        var O, bt = -1, dt, wt, Yt, Xt = A, re = a, le = h, me = -1, ee, Gt, fe, et, Vt, Oe, Ge, Ve, Te = "", je = this.defaultPropsArray, De;
        if (t.j === 2 || t.j === 1) {
          var ae = 0, Ue = 0, Xe = t.j === 2 ? -0.5 : -1, _e = 0, He = !0;
          for (P = 0; P < b; P += 1)
            if (g[P].n) {
              for (ae && (ae += Ue); _e < P; )
                g[_e].animatorJustifyOffset = ae, _e += 1;
              ae = 0, He = !0;
            } else {
              for (_ = 0; _ < M; _ += 1)
                w = r[_].a, w.t.propType && (He && t.j === 2 && (Ue += w.t.v * Xe), S = r[_].s, O = S.getMult(g[P].anIndexes[_], o.a[_].s.totalChars), O.length ? ae += w.t.v * O[0] * Xe : ae += w.t.v * O * Xe);
              He = !1;
            }
          for (ae && (ae += Ue); _e < P; )
            g[_e].animatorJustifyOffset = ae, _e += 1;
        }
        for (P = 0; P < b; P += 1) {
          if (s.reset(), ee = 1, g[P].n)
            v = 0, T += t.yOffset, T += tt ? 1 : 0, A = Xt, tt = !1, this._hasMaskedPath && (a = re, h = le, f = c[a].points, n = f[h - 1], x = f[h], p = x.partialLength, u = 0), Te = "", Ve = "", Oe = "", De = "", je = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (me !== g[P].line) {
                switch (t.j) {
                  case 1:
                    A += m - t.lineWidths[g[P].line];
                    break;
                  case 2:
                    A += (m - t.lineWidths[g[P].line]) / 2;
                    break;
                }
                me = g[P].line;
              }
              bt !== g[P].ind && (g[bt] && (A += g[bt].extra), A += g[P].an / 2, bt = g[P].ind), A += i[0] * g[P].an * 5e-3;
              var be = 0;
              for (_ = 0; _ < M; _ += 1)
                w = r[_].a, w.p.propType && (S = r[_].s, O = S.getMult(g[P].anIndexes[_], o.a[_].s.totalChars), O.length ? be += w.p.v[0] * O[0] : be += w.p.v[0] * O), w.a.propType && (S = r[_].s, O = S.getMult(g[P].anIndexes[_], o.a[_].s.totalChars), O.length ? be += w.a.v[0] * O[0] : be += w.a.v[0] * O);
              for (l = !0, this._pathData.a.v && (A = g[0].an * 0.5 + (m - this._pathData.f.v - g[0].an * 0.5 - g[g.length - 1].an * 0.5) * bt / (b - 1), A += this._pathData.f.v); l; )
                u + p >= A + be || !f ? (R = (A + be - u) / x.partialLength, wt = n.point[0] + (x.point[0] - n.point[0]) * R, Yt = n.point[1] + (x.point[1] - n.point[1]) * R, s.translate(-i[0] * g[P].an * 5e-3, -(i[1] * J) * 0.01), l = !1) : f && (u += x.partialLength, h += 1, h >= f.length && (h = 0, a += 1, c[a] ? f = c[a].points : X.v.c ? (h = 0, a = 0, f = c[a].points) : (u -= x.partialLength, f = null)), f && (n = x, x = f[h], p = x.partialLength));
              dt = g[P].an / 2 - g[P].add, s.translate(-dt, 0, 0);
            } else
              dt = g[P].an / 2 - g[P].add, s.translate(-dt, 0, 0), s.translate(-i[0] * g[P].an * 5e-3, -i[1] * J * 0.01, 0);
            for (_ = 0; _ < M; _ += 1)
              w = r[_].a, w.t.propType && (S = r[_].s, O = S.getMult(g[P].anIndexes[_], o.a[_].s.totalChars), (v !== 0 || t.j !== 0) && (this._hasMaskedPath ? O.length ? A += w.t.v * O[0] : A += w.t.v * O : O.length ? v += w.t.v * O[0] : v += w.t.v * O));
            for (t.strokeWidthAnim && (fe = t.sw || 0), t.strokeColorAnim && (t.sc ? Gt = [t.sc[0], t.sc[1], t.sc[2]] : Gt = [0, 0, 0]), t.fillColorAnim && t.fc && (et = [t.fc[0], t.fc[1], t.fc[2]]), _ = 0; _ < M; _ += 1)
              w = r[_].a, w.a.propType && (S = r[_].s, O = S.getMult(g[P].anIndexes[_], o.a[_].s.totalChars), O.length ? s.translate(-w.a.v[0] * O[0], -w.a.v[1] * O[1], w.a.v[2] * O[2]) : s.translate(-w.a.v[0] * O, -w.a.v[1] * O, w.a.v[2] * O));
            for (_ = 0; _ < M; _ += 1)
              w = r[_].a, w.s.propType && (S = r[_].s, O = S.getMult(g[P].anIndexes[_], o.a[_].s.totalChars), O.length ? s.scale(1 + (w.s.v[0] - 1) * O[0], 1 + (w.s.v[1] - 1) * O[1], 1) : s.scale(1 + (w.s.v[0] - 1) * O, 1 + (w.s.v[1] - 1) * O, 1));
            for (_ = 0; _ < M; _ += 1) {
              if (w = r[_].a, S = r[_].s, O = S.getMult(g[P].anIndexes[_], o.a[_].s.totalChars), w.sk.propType && (O.length ? s.skewFromAxis(-w.sk.v * O[0], w.sa.v * O[1]) : s.skewFromAxis(-w.sk.v * O, w.sa.v * O)), w.r.propType && (O.length ? s.rotateZ(-w.r.v * O[2]) : s.rotateZ(-w.r.v * O)), w.ry.propType && (O.length ? s.rotateY(w.ry.v * O[1]) : s.rotateY(w.ry.v * O)), w.rx.propType && (O.length ? s.rotateX(w.rx.v * O[0]) : s.rotateX(w.rx.v * O)), w.o.propType && (O.length ? ee += (w.o.v * O[0] - ee) * O[0] : ee += (w.o.v * O - ee) * O), t.strokeWidthAnim && w.sw.propType && (O.length ? fe += w.sw.v * O[0] : fe += w.sw.v * O), t.strokeColorAnim && w.sc.propType)
                for (Vt = 0; Vt < 3; Vt += 1)
                  O.length ? Gt[Vt] += (w.sc.v[Vt] - Gt[Vt]) * O[0] : Gt[Vt] += (w.sc.v[Vt] - Gt[Vt]) * O;
              if (t.fillColorAnim && t.fc) {
                if (w.fc.propType)
                  for (Vt = 0; Vt < 3; Vt += 1)
                    O.length ? et[Vt] += (w.fc.v[Vt] - et[Vt]) * O[0] : et[Vt] += (w.fc.v[Vt] - et[Vt]) * O;
                w.fh.propType && (O.length ? et = ht(et, w.fh.v * O[0]) : et = ht(et, w.fh.v * O)), w.fs.propType && (O.length ? et = Y(et, w.fs.v * O[0]) : et = Y(et, w.fs.v * O)), w.fb.propType && (O.length ? et = K(et, w.fb.v * O[0]) : et = K(et, w.fb.v * O));
              }
            }
            for (_ = 0; _ < M; _ += 1)
              w = r[_].a, w.p.propType && (S = r[_].s, O = S.getMult(g[P].anIndexes[_], o.a[_].s.totalChars), this._hasMaskedPath ? O.length ? s.translate(0, w.p.v[1] * O[0], -w.p.v[2] * O[1]) : s.translate(0, w.p.v[1] * O, -w.p.v[2] * O) : O.length ? s.translate(w.p.v[0] * O[0], w.p.v[1] * O[1], -w.p.v[2] * O[2]) : s.translate(w.p.v[0] * O, w.p.v[1] * O, -w.p.v[2] * O));
            if (t.strokeWidthAnim && (Oe = fe < 0 ? 0 : fe), t.strokeColorAnim && (Ge = "rgb(" + Math.round(Gt[0] * 255) + "," + Math.round(Gt[1] * 255) + "," + Math.round(Gt[2] * 255) + ")"), t.fillColorAnim && t.fc && (Ve = "rgb(" + Math.round(et[0] * 255) + "," + Math.round(et[1] * 255) + "," + Math.round(et[2] * 255) + ")"), this._hasMaskedPath) {
              if (s.translate(0, -t.ls), s.translate(0, i[1] * J * 0.01 + T, 0), this._pathData.p.v) {
                B = (x.point[1] - n.point[1]) / (x.point[0] - n.point[0]);
                var ei = Math.atan(B) * 180 / Math.PI;
                x.point[0] < n.point[0] && (ei += 180), s.rotate(-ei * Math.PI / 180);
              }
              s.translate(wt, Yt, 0), A -= i[0] * g[P].an * 5e-3, g[P + 1] && bt !== g[P + 1].ind && (A += g[P].an / 2, A += t.tr * 1e-3 * t.finalSize);
            } else {
              switch (s.translate(v, T, 0), t.ps && s.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  s.translate(g[P].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[g[P].line]), 0, 0);
                  break;
                case 2:
                  s.translate(g[P].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[g[P].line]) / 2, 0, 0);
                  break;
              }
              s.translate(0, -t.ls), s.translate(dt, 0, 0), s.translate(i[0] * g[P].an * 5e-3, i[1] * J * 0.01, 0), v += g[P].l + t.tr * 1e-3 * t.finalSize;
            }
            d === "html" ? Te = s.toCSS() : d === "svg" ? Te = s.to2dCSS() : je = [s.props[0], s.props[1], s.props[2], s.props[3], s.props[4], s.props[5], s.props[6], s.props[7], s.props[8], s.props[9], s.props[10], s.props[11], s.props[12], s.props[13], s.props[14], s.props[15]], De = ee;
          }
          E <= P ? (Z = new di(De, Oe, Ge, Ve, Te, je), this.renderedLetters.push(Z), E += 1, this.lettersChangedFlag = !0) : (Z = this.renderedLetters[P], this.lettersChangedFlag = Z.update(De, Oe, Ge, Ve, Te, je) || this.lettersChangedFlag);
        }
      }
    }, Me.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, Me.prototype.mHelper = new Et(), Me.prototype.defaultPropsArray = [], _t([nt], Me);
    function Vi(t, e, i) {
      var r = { propType: !1 }, o = L.getProp, s = e.a;
      this.a = {
        r: s.r ? o(t, s.r, 0, yt, i) : r,
        rx: s.rx ? o(t, s.rx, 0, yt, i) : r,
        ry: s.ry ? o(t, s.ry, 0, yt, i) : r,
        sk: s.sk ? o(t, s.sk, 0, yt, i) : r,
        sa: s.sa ? o(t, s.sa, 0, yt, i) : r,
        s: s.s ? o(t, s.s, 1, 0.01, i) : r,
        a: s.a ? o(t, s.a, 1, 0, i) : r,
        o: s.o ? o(t, s.o, 0, 0.01, i) : r,
        p: s.p ? o(t, s.p, 1, 0, i) : r,
        sw: s.sw ? o(t, s.sw, 0, 0, i) : r,
        sc: s.sc ? o(t, s.sc, 1, 0, i) : r,
        fc: s.fc ? o(t, s.fc, 1, 0, i) : r,
        fh: s.fh ? o(t, s.fh, 0, 0, i) : r,
        fs: s.fs ? o(t, s.fs, 0, 0.01, i) : r,
        fb: s.fb ? o(t, s.fb, 0, 0.01, i) : r,
        t: s.t ? o(t, s.t, 0, 0, i) : r
      }, this.s = ji.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t;
    }
    function di(t, e, i, r, o, s) {
      this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = o, this.p = s, this._mdf = {
        o: !0,
        sw: !!e,
        sc: !!i,
        fc: !!r,
        m: !0,
        p: !0
      };
    }
    di.prototype.update = function(t, e, i, r, o, s) {
      this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
      var d = !1;
      return this.o !== t && (this.o = t, this._mdf.o = !0, d = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, d = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, d = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, d = !0), this.m !== o && (this.m = o, this._mdf.m = !0, d = !0), s.length && (this.p[0] !== s[0] || this.p[1] !== s[1] || this.p[4] !== s[4] || this.p[5] !== s[5] || this.p[12] !== s[12] || this.p[13] !== s[13]) && (this.p = s, this._mdf.p = !0, d = !0), d;
    };
    function Kt(t, e) {
      this._frameId = V, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
        ascent: 0,
        boxWidth: this.defaultBoxWidth,
        f: "",
        fStyle: "",
        fWeight: "",
        fc: "",
        j: "",
        justifyOffset: "",
        l: [],
        lh: 0,
        lineWidths: [],
        ls: "",
        of: "",
        s: "",
        sc: "",
        sw: 0,
        t: 0,
        tr: 0,
        sz: 0,
        ps: null,
        fillColorAnim: !1,
        strokeColorAnim: !1,
        strokeWidthAnim: !1,
        yOffset: 0,
        finalSize: 0,
        finalText: [],
        finalLineHeight: 0,
        __complete: !1
      }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    Kt.prototype.defaultBoxWidth = [0, 0], Kt.prototype.copyData = function(t, e) {
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      return t;
    }, Kt.prototype.setCurrentData = function(t) {
      t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
    }, Kt.prototype.searchProperty = function() {
      return this.searchKeyframes();
    }, Kt.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, Kt.prototype.addEffect = function(t) {
      this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
    }, Kt.prototype.getValue = function(t) {
      if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var e = this.currentData, i = this.keysIndex;
        if (this.lock) {
          this.setCurrentData(this.currentData);
          return;
        }
        this.lock = !0, this._mdf = !1;
        var r, o = this.effectsSequence.length, s = t || this.data.d.k[this.keysIndex].s;
        for (r = 0; r < o; r += 1)
          i !== this.keysIndex ? s = this.effectsSequence[r](s, s.t) : s = this.effectsSequence[r](this.currentData, s.t);
        e !== s && this.setCurrentData(s), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }, Kt.prototype.getKeyframeValue = function() {
      for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e); )
        i += 1;
      return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s;
    }, Kt.prototype.buildFinalText = function(t) {
      for (var e = [], i = 0, r = t.length, o, s, d = !1; i < r; )
        o = t.charCodeAt(i), we.isCombinedCharacter(o) ? e[e.length - 1] += t.charAt(i) : o >= 55296 && o <= 56319 ? (s = t.charCodeAt(i + 1), s >= 56320 && s <= 57343 ? (d || we.isModifier(o, s) ? (e[e.length - 1] += t.substr(i, 2), d = !1) : e.push(t.substr(i, 2)), i += 1) : e.push(t.charAt(i))) : o > 56319 ? (s = t.charCodeAt(i + 1), we.isZeroWidthJoiner(o, s) ? (d = !0, e[e.length - 1] += t.substr(i, 2), i += 1) : e.push(t.charAt(i))) : we.isZeroWidthJoiner(o) ? (e[e.length - 1] += t.charAt(i), d = !0) : e.push(t.charAt(i)), i += 1;
      return e;
    }, Kt.prototype.completeTextData = function(t) {
      t.__complete = !0;
      var e = this.elem.globalData.fontManager, i = this.data, r = [], o, s, d, E = 0, v, T = i.m.g, P = 0, b = 0, g = 0, y = [], A = 0, x = 0, u, l, h = e.getFontByName(t.f), a, n = 0, f = Ze(h);
      t.fWeight = f.weight, t.fStyle = f.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), s = t.finalText.length, t.finalLineHeight = t.lh;
      var c = t.tr / 1e3 * t.finalSize, p;
      if (t.sz)
        for (var m = !0, R = t.sz[0], B = t.sz[1], X, q; m; ) {
          q = this.buildFinalText(t.t), X = 0, A = 0, s = q.length, c = t.tr / 1e3 * t.finalSize;
          var Q = -1;
          for (o = 0; o < s; o += 1)
            p = q[o].charCodeAt(0), d = !1, q[o] === " " ? Q = o : (p === 13 || p === 3) && (A = 0, d = !0, X += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (a = e.getCharData(q[o], h.fStyle, h.fFamily), n = d ? 0 : a.w * t.finalSize / 100) : n = e.measureText(q[o], t.f, t.finalSize), A + n > R && q[o] !== " " ? (Q === -1 ? s += 1 : o = Q, X += t.finalLineHeight || t.finalSize * 1.2, q.splice(o, Q === o ? 1 : 0, "\r"), Q = -1, A = 0) : (A += n, A += c);
          X += h.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && B < X ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = q, s = t.finalText.length, m = !1);
        }
      A = -c, n = 0;
      var J = 0, tt;
      for (o = 0; o < s; o += 1)
        if (d = !1, tt = t.finalText[o], p = tt.charCodeAt(0), p === 13 || p === 3 ? (J = 0, y.push(A), x = A > x ? A : x, A = -2 * c, v = "", d = !0, g += 1) : v = tt, e.chars ? (a = e.getCharData(tt, h.fStyle, e.getFontByName(t.f).fFamily), n = d ? 0 : a.w * t.finalSize / 100) : n = e.measureText(v, t.f, t.finalSize), tt === " " ? J += n + c : (A += n + c + J, J = 0), r.push({
          l: n,
          an: n,
          add: P,
          n: d,
          anIndexes: [],
          val: v,
          line: g,
          animatorJustifyOffset: 0
        }), T == 2) {
          if (P += n, v === "" || v === " " || o === s - 1) {
            for ((v === "" || v === " ") && (P -= n); b <= o; )
              r[b].an = P, r[b].ind = E, r[b].extra = n, b += 1;
            E += 1, P = 0;
          }
        } else if (T == 3) {
          if (P += n, v === "" || o === s - 1) {
            for (v === "" && (P -= n); b <= o; )
              r[b].an = P, r[b].ind = E, r[b].extra = n, b += 1;
            P = 0, E += 1;
          }
        } else
          r[E].ind = E, r[E].extra = 0, E += 1;
      if (t.l = r, x = A > x ? A : x, y.push(A), t.sz)
        t.boxWidth = t.sz[0], t.justifyOffset = 0;
      else
        switch (t.boxWidth = x, t.j) {
          case 1:
            t.justifyOffset = -t.boxWidth;
            break;
          case 2:
            t.justifyOffset = -t.boxWidth / 2;
            break;
          default:
            t.justifyOffset = 0;
        }
      t.lineWidths = y;
      var w = i.a, S, _;
      l = w.length;
      var M, Z, O = [];
      for (u = 0; u < l; u += 1) {
        for (S = w[u], S.a.sc && (t.strokeColorAnim = !0), S.a.sw && (t.strokeWidthAnim = !0), (S.a.fc || S.a.fh || S.a.fs || S.a.fb) && (t.fillColorAnim = !0), Z = 0, M = S.s.b, o = 0; o < s; o += 1)
          _ = r[o], _.anIndexes[u] = Z, (M == 1 && _.val !== "" || M == 2 && _.val !== "" && _.val !== " " || M == 3 && (_.n || _.val == " " || o == s - 1) || M == 4 && (_.n || o == s - 1)) && (S.s.rn === 1 && O.push(Z), Z += 1);
        i.a[u].s.totalChars = Z;
        var bt = -1, dt;
        if (S.s.rn === 1)
          for (o = 0; o < s; o += 1)
            _ = r[o], bt != _.anIndexes[u] && (bt = _.anIndexes[u], dt = O.splice(Math.floor(Math.random() * O.length), 1)[0]), _.anIndexes[u] = dt;
      }
      t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = h.ascent * t.finalSize / 100;
    }, Kt.prototype.updateDocumentData = function(t, e) {
      e = e === void 0 ? this.keysIndex : e;
      var i = this.copyData({}, this.data.d.k[e].s);
      i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.elem.addDynamicProperty(this);
    }, Kt.prototype.recalculate = function(t) {
      var e = this.data.d.k[t].s;
      e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e);
    }, Kt.prototype.canResizeFont = function(t) {
      this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, Kt.prototype.setMinimumFontSize = function(t) {
      this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var ji = function() {
      var t = Math.max, e = Math.min, i = Math.floor;
      function r(s, d) {
        this._currentTextLength = -1, this.k = !1, this.data = d, this.elem = s, this.comp = s.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(s), this.s = L.getProp(s, d.s || { k: 0 }, 0, 0, this), "e" in d ? this.e = L.getProp(s, d.e, 0, 0, this) : this.e = { v: 100 }, this.o = L.getProp(s, d.o || { k: 0 }, 0, 0, this), this.xe = L.getProp(s, d.xe || { k: 0 }, 0, 0, this), this.ne = L.getProp(s, d.ne || { k: 0 }, 0, 0, this), this.sm = L.getProp(s, d.sm || { k: 100 }, 0, 0, this), this.a = L.getProp(s, d.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
      }
      r.prototype = {
        getMult: function(s) {
          this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
          var d = 0, E = 0, v = 1, T = 1;
          this.ne.v > 0 ? d = this.ne.v / 100 : E = -this.ne.v / 100, this.xe.v > 0 ? v = 1 - this.xe.v / 100 : T = 1 + this.xe.v / 100;
          var P = ne.getBezierEasing(d, E, v, T).get, b = 0, g = this.finalS, y = this.finalE, A = this.data.sh;
          if (A === 2)
            y === g ? b = s >= y ? 1 : 0 : b = t(0, e(0.5 / (y - g) + (s - g) / (y - g), 1)), b = P(b);
          else if (A === 3)
            y === g ? b = s >= y ? 0 : 1 : b = 1 - t(0, e(0.5 / (y - g) + (s - g) / (y - g), 1)), b = P(b);
          else if (A === 4)
            y === g ? b = 0 : (b = t(0, e(0.5 / (y - g) + (s - g) / (y - g), 1)), b < 0.5 ? b *= 2 : b = 1 - 2 * (b - 0.5)), b = P(b);
          else if (A === 5) {
            if (y === g)
              b = 0;
            else {
              var x = y - g;
              s = e(t(0, s + 0.5 - g), y - g);
              var u = -x / 2 + s, l = x / 2;
              b = Math.sqrt(1 - u * u / (l * l));
            }
            b = P(b);
          } else
            A === 6 ? (y === g ? b = 0 : (s = e(t(0, s + 0.5 - g), y - g), b = (1 + Math.cos(Math.PI + Math.PI * 2 * s / (y - g))) / 2), b = P(b)) : (s >= i(g) && (s - g < 0 ? b = t(0, e(e(y, 1) - (g - s), 1)) : b = t(0, e(y - s, 1))), b = P(b));
          if (this.sm.v !== 100) {
            var h = this.sm.v * 0.01;
            h === 0 && (h = 1e-8);
            var a = 0.5 - h * 0.5;
            b < a ? b = 0 : (b = (b - a) / h, b > 1 && (b = 1));
          }
          return b * this.a.v;
        },
        getValue: function(s) {
          this.iterateDynamicProperties(), this._mdf = s || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, s && this.data.r === 2 && (this.e.v = this._currentTextLength);
          var d = this.data.r === 2 ? 1 : 100 / this.data.totalChars, E = this.o.v / d, v = this.s.v / d + E, T = this.e.v / d + E;
          if (v > T) {
            var P = v;
            v = T, T = P;
          }
          this.finalS = v, this.finalE = T;
        }
      }, _t([nt], r);
      function o(s, d, E) {
        return new r(s, d);
      }
      return {
        getTextSelectorProp: o
      };
    }(), ri = function() {
      return function(t, e, i) {
        var r = 0, o = t, s = rt(o), d = {
          newElement: E,
          release: v
        };
        function E() {
          var T;
          return r ? (r -= 1, T = s[r]) : T = e(), T;
        }
        function v(T) {
          r === o && (s = si.double(s), o *= 2), i && i(T), s[r] = T, r += 1;
        }
        return d;
      };
    }(), si = function() {
      function t(e) {
        return e.concat(rt(e.length));
      }
      return {
        double: t
      };
    }(), Ae = function() {
      function t() {
        return it("float32", 2);
      }
      return ri(8, t);
    }(), Bt = function() {
      function t() {
        return new $t();
      }
      function e(o) {
        var s = o._length, d;
        for (d = 0; d < s; d += 1)
          Ae.release(o.v[d]), Ae.release(o.i[d]), Ae.release(o.o[d]), o.v[d] = null, o.i[d] = null, o.o[d] = null;
        o._length = 0, o.c = !1;
      }
      function i(o) {
        var s = r.newElement(), d, E = o._length === void 0 ? o.v.length : o._length;
        for (s.setLength(E), s.c = o.c, d = 0; d < E; d += 1)
          s.setTripleAt(o.v[d][0], o.v[d][1], o.o[d][0], o.o[d][1], o.i[d][0], o.i[d][1], d);
        return s;
      }
      var r = ri(4, t, e);
      return r.clone = i, r;
    }(), Ee = function() {
      var t = {
        newShapeCollection: o,
        release: s
      }, e = 0, i = 4, r = rt(i);
      function o() {
        var d;
        return e ? (e -= 1, d = r[e]) : d = new ui(), d;
      }
      function s(d) {
        var E, v = d._length;
        for (E = 0; E < v; E += 1)
          Bt.release(d.shapes[E]);
        d._length = 0, e === i && (r = si.double(r), i *= 2), r[e] = d, e += 1;
      }
      return t;
    }(), ni = function() {
      function t() {
        return {
          lengths: [],
          totalLength: 0
        };
      }
      function e(i) {
        var r, o = i.lengths.length;
        for (r = 0; r < o; r += 1)
          vi.release(i.lengths[r]);
        i.lengths.length = 0;
      }
      return ri(8, t, e);
    }(), vi = function() {
      function t() {
        return {
          addedLength: 0,
          percents: it("float32", Dt),
          lengths: it("float32", Dt)
        };
      }
      return ri(8, t);
    }(), Di = function() {
      function t(e) {
        for (var i = e.split(`\r
`), r = {}, o, s = 0, d = 0; d < i.length; d += 1)
          o = i[d].split(":"), o.length === 2 && (r[o[0]] = o[1].trim(), s += 1);
        if (s === 0)
          throw new Error();
        return r;
      }
      return function(e) {
        for (var i = [], r = 0; r < e.length; r += 1) {
          var o = e[r], s = {
            time: o.tm,
            duration: o.dr
          };
          try {
            s.payload = JSON.parse(e[r].cm);
          } catch {
            try {
              s.payload = t(e[r].cm);
            } catch {
              s.payload = {
                name: e[r]
              };
            }
          }
          i.push(s);
        }
        return i;
      };
    }();
    function Jt() {
    }
    Jt.prototype.checkLayers = function(t) {
      var e, i = this.layers.length, r;
      for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1)
        this.elements[e] || (r = this.layers[e], r.ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : !1;
      this.checkPendingElements();
    }, Jt.prototype.createItem = function(t) {
      switch (t.ty) {
        case 2:
          return this.createImage(t);
        case 0:
          return this.createComp(t);
        case 1:
          return this.createSolid(t);
        case 3:
          return this.createNull(t);
        case 4:
          return this.createShape(t);
        case 5:
          return this.createText(t);
        case 6:
          return this.createAudio(t);
        case 13:
          return this.createCamera(t);
        case 15:
          return this.createFootage(t);
        default:
          return this.createNull(t);
      }
    }, Jt.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.");
    }, Jt.prototype.createAudio = function(t) {
      return new Tt(t, this.globalData, this);
    }, Jt.prototype.createFootage = function(t) {
      return new FootageElement(t, this.globalData, this);
    }, Jt.prototype.buildAllItems = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)
        this.buildItem(t);
      this.checkPendingElements();
    }, Jt.prototype.includeLayers = function(t) {
      this.completeLayers = !1;
      var e, i = t.length, r, o = this.layers.length;
      for (e = 0; e < i; e += 1)
        for (r = 0; r < o; ) {
          if (this.layers[r].id === t[e].id) {
            this.layers[r] = t[e];
            break;
          }
          r += 1;
        }
    }, Jt.prototype.setProjectInterface = function(t) {
      this.globalData.projectInterface = t;
    }, Jt.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, Jt.prototype.buildElementParenting = function(t, e, i) {
      for (var r = this.elements, o = this.layers, s = 0, d = o.length; s < d; )
        o[s].ind == e && (!r[s] || r[s] === !0 ? (this.buildItem(s), this.addPendingElement(t)) : (i.push(r[s]), r[s].setAsParent(), o[s].parent !== void 0 ? this.buildElementParenting(t, o[s].parent, i) : t.setHierarchy(i))), s += 1;
    }, Jt.prototype.addPendingElement = function(t) {
      this.pendingElements.push(t);
    }, Jt.prototype.searchExtraCompositions = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1)
        if (t[e].xt) {
          var r = this.createComp(t[e]);
          r.initExpressions(), this.globalData.projectInterface.registerComposition(r);
        }
    }, Jt.prototype.setupGlobalData = function(t, e) {
      this.globalData.fontManager = new we(), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
        w: t.w,
        h: t.h
      };
    };
    function qt(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = G("svg");
      var i = "";
      if (e && e.title) {
        var r = G("title"), o = It();
        r.setAttribute("id", o), r.textContent = e.title, this.svgElement.appendChild(r), i += o;
      }
      if (e && e.description) {
        var s = G("desc"), d = It();
        s.setAttribute("id", d), s.textContent = e.description, this.svgElement.appendChild(s), i += " " + d;
      }
      i && this.svgElement.setAttribute("aria-labelledby", i);
      var E = G("defs");
      this.svgElement.appendChild(E);
      var v = G("g");
      this.svgElement.appendChild(v), this.layerElement = v, this.renderConfig = {
        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        progressiveLoad: e && e.progressiveLoad || !1,
        hideOnTransparent: !(e && e.hideOnTransparent === !1),
        viewBoxOnly: e && e.viewBoxOnly || !1,
        viewBoxSize: e && e.viewBoxSize || !1,
        className: e && e.className || "",
        id: e && e.id || "",
        focusable: e && e.focusable,
        filterSize: {
          width: e && e.filterSize && e.filterSize.width || "100%",
          height: e && e.filterSize && e.filterSize.height || "100%",
          x: e && e.filterSize && e.filterSize.x || "0%",
          y: e && e.filterSize && e.filterSize.y || "0%"
        }
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        defs: E,
        renderConfig: this.renderConfig
      }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
    }
    _t([Jt], qt), qt.prototype.createNull = function(t) {
      return new pt(t, this.globalData, this);
    }, qt.prototype.createShape = function(t) {
      return new Nt(t, this.globalData, this);
    }, qt.prototype.createText = function(t) {
      return new Re(t, this.globalData, this);
    }, qt.prototype.createImage = function(t) {
      return new ve(t, this.globalData, this);
    }, qt.prototype.createComp = function(t) {
      return new oi(t, this.globalData, this);
    }, qt.prototype.createSolid = function(t) {
      return new ge(t, this.globalData, this);
    }, qt.prototype.configAnimation = function(t) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var e = this.globalData.defs;
      this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
      var i = G("clipPath"), r = G("rect");
      r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
      var o = It();
      i.setAttribute("id", o), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + j + "#" + o + ")"), e.appendChild(i), this.layers = t.layers, this.elements = rt(t.layers.length);
    }, qt.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1)
        this.elements[t] && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, qt.prototype.updateContainerSize = function() {
    }, qt.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!(e[t] || this.layers[t].ty === 99)) {
        e[t] = !0;
        var i = this.createItem(this.layers[t]);
        e[t] = i, N && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt && (!this.elements[t - 1] || this.elements[t - 1] === !0 ? (this.buildItem(t - 1), this.addPendingElement(i)) : i.setMatte(e[t - 1].layerId));
      }
    }, qt.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        if (t.checkParenting(), t.data.tt)
          for (var e = 0, i = this.elements.length; e < i; ) {
            if (this.elements[e] === t) {
              t.setMatte(this.elements[e - 1].layerId);
              break;
            }
            e += 1;
          }
      }
    }, qt.prototype.renderFrame = function(t) {
      if (!(this.renderedFrame === t || this.destroyed)) {
        t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
        var e, i = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)
          (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        if (this.globalData._mdf)
          for (e = 0; e < i; e += 1)
            (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
      }
    }, qt.prototype.appendElementInPos = function(t, e) {
      var i = t.getBaseElement();
      if (!!i) {
        for (var r = 0, o; r < e; )
          this.elements[r] && this.elements[r] !== !0 && this.elements[r].getBaseElement() && (o = this.elements[r].getBaseElement()), r += 1;
        o ? this.layerElement.insertBefore(i, o) : this.layerElement.appendChild(i);
      }
    }, qt.prototype.hide = function() {
      this.layerElement.style.display = "none";
    }, qt.prototype.show = function() {
      this.layerElement.style.display = "block";
    };
    function Pe(t, e, i) {
      this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var r = this.globalData.defs, o, s = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = rt(s), this.solidPath = "";
      var d, E = this.masksProperties, v = 0, T = [], P, b, g = It(), y, A, x, u, l = "clipPath", h = "clip-path";
      for (o = 0; o < s; o += 1)
        if ((E[o].mode !== "a" && E[o].mode !== "n" || E[o].inv || E[o].o.k !== 100 || E[o].o.x) && (l = "mask", h = "mask"), (E[o].mode === "s" || E[o].mode === "i") && v === 0 ? (y = G("rect"), y.setAttribute("fill", "#ffffff"), y.setAttribute("width", this.element.comp.data.w || 0), y.setAttribute("height", this.element.comp.data.h || 0), T.push(y)) : y = null, d = G("path"), E[o].mode === "n")
          this.viewData[o] = {
            op: L.getProp(this.element, E[o].o, 0, 0.01, this.element),
            prop: Se.getShapeProp(this.element, E[o], 3),
            elem: d,
            lastPath: ""
          }, r.appendChild(d);
        else {
          v += 1, d.setAttribute("fill", E[o].mode === "s" ? "#000000" : "#ffffff"), d.setAttribute("clip-rule", "nonzero");
          var a;
          if (E[o].x.k !== 0 ? (l = "mask", h = "mask", u = L.getProp(this.element, E[o].x, 0, null, this.element), a = It(), A = G("filter"), A.setAttribute("id", a), x = G("feMorphology"), x.setAttribute("operator", "erode"), x.setAttribute("in", "SourceGraphic"), x.setAttribute("radius", "0"), A.appendChild(x), r.appendChild(A), d.setAttribute("stroke", E[o].mode === "s" ? "#000000" : "#ffffff")) : (x = null, u = null), this.storedData[o] = {
            elem: d,
            x: u,
            expan: x,
            lastPath: "",
            lastOperator: "",
            filterId: a,
            lastRadius: 0
          }, E[o].mode === "i") {
            b = T.length;
            var n = G("g");
            for (P = 0; P < b; P += 1)
              n.appendChild(T[P]);
            var f = G("mask");
            f.setAttribute("mask-type", "alpha"), f.setAttribute("id", g + "_" + v), f.appendChild(d), r.appendChild(f), n.setAttribute("mask", "url(" + j + "#" + g + "_" + v + ")"), T.length = 0, T.push(n);
          } else
            T.push(d);
          E[o].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[o] = {
            elem: d,
            lastPath: "",
            op: L.getProp(this.element, E[o].o, 0, 0.01, this.element),
            prop: Se.getShapeProp(this.element, E[o], 3),
            invRect: y
          }, this.viewData[o].prop.k || this.drawPath(E[o], this.viewData[o].prop.v, this.viewData[o]);
        }
      for (this.maskElement = G(l), s = T.length, o = 0; o < s; o += 1)
        this.maskElement.appendChild(T[o]);
      v > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(h, "url(" + j + "#" + g + ")"), r.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    Pe.prototype.getMaskProperty = function(t) {
      return this.viewData[t].prop;
    }, Pe.prototype.renderFrame = function(t) {
      var e = this.element.finalTransform.mat, i, r = this.masksProperties.length;
      for (i = 0; i < r; i += 1)
        if ((this.viewData[i].prop._mdf || t) && this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]), (this.viewData[i].op._mdf || t) && this.viewData[i].elem.setAttribute("fill-opacity", this.viewData[i].op.v), this.masksProperties[i].mode !== "n" && (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[i].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[i].x && (this.storedData[i].x._mdf || t))) {
          var o = this.storedData[i].expan;
          this.storedData[i].x.v < 0 ? (this.storedData[i].lastOperator !== "erode" && (this.storedData[i].lastOperator = "erode", this.storedData[i].elem.setAttribute("filter", "url(" + j + "#" + this.storedData[i].filterId + ")")), o.setAttribute("radius", -this.storedData[i].x.v)) : (this.storedData[i].lastOperator !== "dilate" && (this.storedData[i].lastOperator = "dilate", this.storedData[i].elem.setAttribute("filter", null)), this.storedData[i].elem.setAttribute("stroke-width", this.storedData[i].x.v * 2));
        }
    }, Pe.prototype.getMaskelement = function() {
      return this.maskElement;
    }, Pe.prototype.createLayerSolidPath = function() {
      var t = "M0,0 ";
      return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
    }, Pe.prototype.drawPath = function(t, e, i) {
      var r = " M" + e.v[0][0] + "," + e.v[0][1], o, s;
      for (s = e._length, o = 1; o < s; o += 1)
        r += " C" + e.o[o - 1][0] + "," + e.o[o - 1][1] + " " + e.i[o][0] + "," + e.i[o][1] + " " + e.v[o][0] + "," + e.v[o][1];
      if (e.c && s > 1 && (r += " C" + e.o[o - 1][0] + "," + e.o[o - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== r) {
        var d = "";
        i.elem && (e.c && (d = t.inv ? this.solidPath + r : r), i.elem.setAttribute("d", d)), i.lastPath = r;
      }
    }, Pe.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    };
    function Ie() {
    }
    Ie.prototype = {
      initHierarchy: function() {
        this.hierarchy = [], this._isParent = !1, this.checkParenting();
      },
      setHierarchy: function(t) {
        this.hierarchy = t;
      },
      setAsParent: function() {
        this._isParent = !0;
      },
      checkParenting: function() {
        this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
      }
    };
    function Le() {
    }
    Le.prototype = {
      initFrame: function() {
        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
      },
      prepareProperties: function(t, e) {
        var i, r = this.dynamicProperties.length;
        for (i = 0; i < r; i += 1)
          (e || this._isParent && this.dynamicProperties[i].propType === "transform") && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
      },
      addDynamicProperty: function(t) {
        this.dynamicProperties.indexOf(t) === -1 && this.dynamicProperties.push(t);
      }
    };
    function $e() {
    }
    $e.prototype = {
      initTransform: function() {
        this.finalTransform = {
          mProp: this.data.ks ? ce.getTransformProperty(this, this.data.ks, this) : { o: 0 },
          _matMdf: !1,
          _opMdf: !1,
          mat: new Et()
        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
      },
      renderTransform: function() {
        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
          var t, e = this.finalTransform.mat, i = 0, r = this.hierarchy.length;
          if (!this.finalTransform._matMdf)
            for (; i < r; ) {
              if (this.hierarchy[i].finalTransform.mProp._mdf) {
                this.finalTransform._matMdf = !0;
                break;
              }
              i += 1;
            }
          if (this.finalTransform._matMdf)
            for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1)
              t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
        }
      },
      globalToLocal: function(t) {
        var e = [];
        e.push(this.finalTransform);
        for (var i = !0, r = this.comp; i; )
          r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform), r = r.comp) : i = !1;
        var o, s = e.length, d;
        for (o = 0; o < s; o += 1)
          d = e[o].mat.applyToPointArray(0, 0, 0), t = [t[0] - d[0], t[1] - d[1], 0];
        return t;
      },
      mHelper: new Et()
    };
    function ai() {
    }
    ai.prototype = {
      initRenderable: function() {
        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
      },
      addRenderableComponent: function(t) {
        this.renderableComponents.indexOf(t) === -1 && this.renderableComponents.push(t);
      },
      removeRenderableComponent: function(t) {
        this.renderableComponents.indexOf(t) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
      },
      prepareRenderableFrame: function(t) {
        this.checkLayerLimits(t);
      },
      checkTransparency: function() {
        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
      },
      checkLayerLimits: function(t) {
        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
      },
      renderRenderable: function() {
        var t, e = this.renderableComponents.length;
        for (t = 0; t < e; t += 1)
          this.renderableComponents[t].renderFrame(this._isFirstFrame);
      },
      sourceRectAtTime: function() {
        return {
          top: 0,
          left: 0,
          width: 100,
          height: 100
        };
      },
      getLayerSize: function() {
        return this.data.ty === 5 ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height };
      }
    };
    function Ye() {
    }
    (function() {
      var t = {
        initElement: function(e, i, r) {
          this.initFrame(), this.initBaseData(e, i, r), this.initTransform(e, i, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
        },
        hide: function() {
          if (!this.hidden && (!this.isInRange || this.isTransparent)) {
            var e = this.baseElement || this.layerElement;
            e.style.display = "none", this.hidden = !0;
          }
        },
        show: function() {
          if (this.isInRange && !this.isTransparent) {
            if (!this.data.hd) {
              var e = this.baseElement || this.layerElement;
              e.style.display = "block";
            }
            this.hidden = !1, this._isFirstFrame = !0;
          }
        },
        renderFrame: function() {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
        },
        renderInnerContent: function() {
        },
        prepareFrame: function(e) {
          this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency();
        },
        destroy: function() {
          this.innerElem = null, this.destroyBaseElement();
        }
      };
      _t([ai, Je(t)], Ye);
    })();
    function Bi(t, e) {
      this.elem = t, this.pos = e;
    }
    function _i(t, e) {
      this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = t.hd === !0, this.pElem = G("path"), this.msElem = null;
    }
    _i.prototype.reset = function() {
      this.d = "", this._mdf = !1;
    };
    function bi(t, e, i) {
      this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
      for (var r = 0, o = t.length; r < o; ) {
        if (t[r].mProps.dynamicProperties.length) {
          this._isAnimated = !0;
          break;
        }
        r += 1;
      }
    }
    bi.prototype.setAsAnimated = function() {
      this._isAnimated = !0;
    };
    function zi(t, e, i) {
      this.transform = {
        mProps: t,
        op: e,
        container: i
      }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    function k(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = L.getProp(t, e.o, 0, 0.01, this), this.w = L.getProp(t, e.w, 0, null, this), this.d = new ti(t, e.d || {}, "svg", this), this.c = L.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated;
    }
    _t([nt], k);
    function z(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = L.getProp(t, e.o, 0, 0.01, this), this.c = L.getProp(t, e.c, 1, 255, this), this.style = i;
    }
    _t([nt], z);
    function H(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i);
    }
    H.prototype.initGradientData = function(t, e, i) {
      this.o = L.getProp(t, e.o, 0, 0.01, this), this.s = L.getProp(t, e.s, 1, null, this), this.e = L.getProp(t, e.e, 1, null, this), this.h = L.getProp(t, e.h || { k: 0 }, 0, 0.01, this), this.a = L.getProp(t, e.a || { k: 0 }, 0, yt, this), this.g = new Ne(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated;
    }, H.prototype.setGradientData = function(t, e) {
      var i = It(), r = G(e.t === 1 ? "linearGradient" : "radialGradient");
      r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
      var o = [], s, d, E;
      for (E = e.g.p * 4, d = 0; d < E; d += 4)
        s = G("stop"), r.appendChild(s), o.push(s);
      t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + j + "#" + i + ")"), this.gf = r, this.cst = o;
    }, H.prototype.setGradientOpacity = function(t, e) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var i, r, o, s = G("mask"), d = G("path");
        s.appendChild(d);
        var E = It(), v = It();
        s.setAttribute("id", v);
        var T = G(t.t === 1 ? "linearGradient" : "radialGradient");
        T.setAttribute("id", E), T.setAttribute("spreadMethod", "pad"), T.setAttribute("gradientUnits", "userSpaceOnUse"), o = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var P = this.stops;
        for (r = t.g.p * 4; r < o; r += 2)
          i = G("stop"), i.setAttribute("stop-color", "rgb(255,255,255)"), T.appendChild(i), P.push(i);
        d.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + j + "#" + E + ")"), t.ty === "gs" && (d.setAttribute("stroke-linecap", gt[t.lc || 2]), d.setAttribute("stroke-linejoin", Qt[t.lj || 2]), t.lj === 1 && d.setAttribute("stroke-miterlimit", t.ml)), this.of = T, this.ms = s, this.ost = P, this.maskId = v, e.msElem = d;
      }
    }, _t([nt], H);
    function lt(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = L.getProp(t, e.w, 0, null, this), this.d = new ti(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated;
    }
    _t([H, nt], lt);
    function kt() {
      this.it = [], this.prevViewData = [], this.gr = G("g");
    }
    var Pt = function() {
      var t = new Et(), e = new Et(), i = {
        createRenderFunction: r
      };
      function r(P) {
        switch (P.ty) {
          case "fl":
            return d;
          case "gf":
            return v;
          case "gs":
            return E;
          case "st":
            return T;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return s;
          case "tr":
            return o;
          default:
            return null;
        }
      }
      function o(P, b, g) {
        (g || b.transform.op._mdf) && b.transform.container.setAttribute("opacity", b.transform.op.v), (g || b.transform.mProps._mdf) && b.transform.container.setAttribute("transform", b.transform.mProps.v.to2dCSS());
      }
      function s(P, b, g) {
        var y, A, x, u, l, h, a = b.styles.length, n = b.lvl, f, c, p, m, R;
        for (h = 0; h < a; h += 1) {
          if (u = b.sh._mdf || g, b.styles[h].lvl < n) {
            for (c = e.reset(), m = n - b.styles[h].lvl, R = b.transformers.length - 1; !u && m > 0; )
              u = b.transformers[R].mProps._mdf || u, m -= 1, R -= 1;
            if (u)
              for (m = n - b.styles[h].lvl, R = b.transformers.length - 1; m > 0; )
                p = b.transformers[R].mProps.v.props, c.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), m -= 1, R -= 1;
          } else
            c = t;
          if (f = b.sh.paths, A = f._length, u) {
            for (x = "", y = 0; y < A; y += 1)
              l = f.shapes[y], l && l._length && (x += qe(l, l._length, l.c, c));
            b.caches[h] = x;
          } else
            x = b.caches[h];
          b.styles[h].d += P.hd === !0 ? "" : x, b.styles[h]._mdf = u || b.styles[h]._mdf;
        }
      }
      function d(P, b, g) {
        var y = b.style;
        (b.c._mdf || g) && y.pElem.setAttribute("fill", "rgb(" + mt(b.c.v[0]) + "," + mt(b.c.v[1]) + "," + mt(b.c.v[2]) + ")"), (b.o._mdf || g) && y.pElem.setAttribute("fill-opacity", b.o.v);
      }
      function E(P, b, g) {
        v(P, b, g), T(P, b, g);
      }
      function v(P, b, g) {
        var y = b.gf, A = b.g._hasOpacity, x = b.s.v, u = b.e.v;
        if (b.o._mdf || g) {
          var l = P.ty === "gf" ? "fill-opacity" : "stroke-opacity";
          b.style.pElem.setAttribute(l, b.o.v);
        }
        if (b.s._mdf || g) {
          var h = P.t === 1 ? "x1" : "cx", a = h === "x1" ? "y1" : "cy";
          y.setAttribute(h, x[0]), y.setAttribute(a, x[1]), A && !b.g._collapsable && (b.of.setAttribute(h, x[0]), b.of.setAttribute(a, x[1]));
        }
        var n, f, c, p;
        if (b.g._cmdf || g) {
          n = b.cst;
          var m = b.g.c;
          for (c = n.length, f = 0; f < c; f += 1)
            p = n[f], p.setAttribute("offset", m[f * 4] + "%"), p.setAttribute("stop-color", "rgb(" + m[f * 4 + 1] + "," + m[f * 4 + 2] + "," + m[f * 4 + 3] + ")");
        }
        if (A && (b.g._omdf || g)) {
          var R = b.g.o;
          for (b.g._collapsable ? n = b.cst : n = b.ost, c = n.length, f = 0; f < c; f += 1)
            p = n[f], b.g._collapsable || p.setAttribute("offset", R[f * 2] + "%"), p.setAttribute("stop-opacity", R[f * 2 + 1]);
        }
        if (P.t === 1)
          (b.e._mdf || g) && (y.setAttribute("x2", u[0]), y.setAttribute("y2", u[1]), A && !b.g._collapsable && (b.of.setAttribute("x2", u[0]), b.of.setAttribute("y2", u[1])));
        else {
          var B;
          if ((b.s._mdf || b.e._mdf || g) && (B = Math.sqrt(Math.pow(x[0] - u[0], 2) + Math.pow(x[1] - u[1], 2)), y.setAttribute("r", B), A && !b.g._collapsable && b.of.setAttribute("r", B)), b.e._mdf || b.h._mdf || b.a._mdf || g) {
            B || (B = Math.sqrt(Math.pow(x[0] - u[0], 2) + Math.pow(x[1] - u[1], 2)));
            var X = Math.atan2(u[1] - x[1], u[0] - x[0]), q = b.h.v;
            q >= 1 ? q = 0.99 : q <= -1 && (q = -0.99);
            var Q = B * q, J = Math.cos(X + b.a.v) * Q + x[0], tt = Math.sin(X + b.a.v) * Q + x[1];
            y.setAttribute("fx", J), y.setAttribute("fy", tt), A && !b.g._collapsable && (b.of.setAttribute("fx", J), b.of.setAttribute("fy", tt));
          }
        }
      }
      function T(P, b, g) {
        var y = b.style, A = b.d;
        A && (A._mdf || g) && A.dashStr && (y.pElem.setAttribute("stroke-dasharray", A.dashStr), y.pElem.setAttribute("stroke-dashoffset", A.dashoffset[0])), b.c && (b.c._mdf || g) && y.pElem.setAttribute("stroke", "rgb(" + mt(b.c.v[0]) + "," + mt(b.c.v[1]) + "," + mt(b.c.v[2]) + ")"), (b.o._mdf || g) && y.pElem.setAttribute("stroke-opacity", b.o.v), (b.w._mdf || g) && (y.pElem.setAttribute("stroke-width", b.w.v), y.msElem && y.msElem.setAttribute("stroke-width", b.w.v));
      }
      return i;
    }();
    function ct() {
    }
    ct.prototype = {
      checkMasks: function() {
        if (!this.data.hasMask)
          return !1;
        for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
          if (this.data.masksProperties[t].mode !== "n" && this.data.masksProperties[t].cl !== !1)
            return !0;
          t += 1;
        }
        return !1;
      },
      initExpressions: function() {
        this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
        var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
        this.layerInterface.registerEffectsInterface(t), this.data.ty === 0 || this.data.xt ? this.compInterface = CompExpressionInterface(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface);
      },
      setBlendMode: function() {
        var t = vt(this.data.bm), e = this.baseElement || this.layerElement;
        e.style["mix-blend-mode"] = t;
      },
      initBaseData: function(t, e, i) {
        this.globalData = e, this.comp = i, this.data = t, this.layerId = It(), this.data.sr || (this.data.sr = 1), this.effectsManager = new gr(this.data, this, this.dynamicProperties);
      },
      getType: function() {
        return this.type;
      },
      sourceRectAtTime: function() {
      }
    };
    function pt(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy();
    }
    pt.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, !0);
    }, pt.prototype.renderFrame = function() {
    }, pt.prototype.getBaseElement = function() {
      return null;
    }, pt.prototype.destroy = function() {
    }, pt.prototype.sourceRectAtTime = function() {
    }, pt.prototype.hide = function() {
    }, _t([ct, $e, Ie, Le], pt);
    function zt() {
    }
    zt.prototype = {
      initRendererElement: function() {
        this.layerElement = G("g");
      },
      createContainerElements: function() {
        this.matteElement = G("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
        var t = null, e, i, r;
        if (this.data.td) {
          if (this.data.td == 3 || this.data.td == 1) {
            var o = G("mask");
            o.setAttribute("id", this.layerId), o.setAttribute("mask-type", this.data.td == 3 ? "luminance" : "alpha"), o.appendChild(this.layerElement), t = o, this.globalData.defs.appendChild(o), !pi.maskType && this.data.td == 1 && (o.setAttribute("mask-type", "luminance"), e = It(), i = We.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(We.createAlphaToLuminanceFilter()), r = G("g"), r.appendChild(this.layerElement), t = r, o.appendChild(r), r.setAttribute("filter", "url(" + j + "#" + e + ")"));
          } else if (this.data.td == 2) {
            var s = G("mask");
            s.setAttribute("id", this.layerId), s.setAttribute("mask-type", "alpha");
            var d = G("g");
            s.appendChild(d), e = It(), i = We.createFilter(e);
            var E = G("feComponentTransfer");
            E.setAttribute("in", "SourceGraphic"), i.appendChild(E);
            var v = G("feFuncA");
            v.setAttribute("type", "table"), v.setAttribute("tableValues", "1.0 0.0"), E.appendChild(v), this.globalData.defs.appendChild(i);
            var T = G("rect");
            T.setAttribute("width", this.comp.data.w), T.setAttribute("height", this.comp.data.h), T.setAttribute("x", "0"), T.setAttribute("y", "0"), T.setAttribute("fill", "#ffffff"), T.setAttribute("opacity", "0"), d.setAttribute("filter", "url(" + j + "#" + e + ")"), d.appendChild(T), d.appendChild(this.layerElement), t = d, pi.maskType || (s.setAttribute("mask-type", "luminance"), i.appendChild(We.createAlphaToLuminanceFilter()), r = G("g"), d.appendChild(T), r.appendChild(this.layerElement), t = r, d.appendChild(r)), this.globalData.defs.appendChild(s);
          }
        } else
          this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
          var P = G("clipPath"), b = G("path");
          b.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
          var g = It();
          if (P.setAttribute("id", g), P.appendChild(b), this.globalData.defs.appendChild(P), this.checkMasks()) {
            var y = G("g");
            y.setAttribute("clip-path", "url(" + j + "#" + g + ")"), y.appendChild(this.layerElement), this.transformedElement = y, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
          } else
            this.layerElement.setAttribute("clip-path", "url(" + j + "#" + g + ")");
        }
        this.data.bm !== 0 && this.setBlendMode();
      },
      renderElement: function() {
        this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v);
      },
      destroyBaseElement: function() {
        this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
      },
      getBaseElement: function() {
        return this.data.hd ? null : this.baseElement;
      },
      createRenderableComponents: function() {
        this.maskManager = new Pe(this.data, this, this.globalData), this.renderableEffectsManager = new yr();
      },
      setMatte: function(t) {
        !this.matteElement || this.matteElement.setAttribute("mask", "url(" + j + "#" + t + ")");
      }
    };
    function Rt() {
    }
    Rt.prototype = {
      addShapeToModifiers: function(t) {
        var e, i = this.shapeModifiers.length;
        for (e = 0; e < i; e += 1)
          this.shapeModifiers[e].addShape(t);
      },
      isShapeInAnimatedModifiers: function(t) {
        for (var e = 0, i = this.shapeModifiers.length; e < i; )
          if (this.shapeModifiers[e].isAnimatedWithShape(t))
            return !0;
        return !1;
      },
      renderModifiers: function() {
        if (!!this.shapeModifiers.length) {
          var t, e = this.shapes.length;
          for (t = 0; t < e; t += 1)
            this.shapes[t].sh.reset();
          e = this.shapeModifiers.length;
          var i;
          for (t = e - 1; t >= 0 && (i = this.shapeModifiers[t].processShapes(this._isFirstFrame), !i); t -= 1)
            ;
        }
      },
      searchProcessedElement: function(t) {
        for (var e = this.processedElements, i = 0, r = e.length; i < r; ) {
          if (e[i].elem === t)
            return e[i].pos;
          i += 1;
        }
        return 0;
      },
      addProcessedElement: function(t, e) {
        for (var i = this.processedElements, r = i.length; r; )
          if (r -= 1, i[r].elem === t) {
            i[r].pos = e;
            return;
          }
        i.push(new Bi(t, e));
      },
      prepareFrame: function(t) {
        this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
      }
    };
    function St() {
    }
    St.prototype.initElement = function(t, e, i) {
      this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new Kt(this, t.t, this.dynamicProperties), this.textAnimator = new Me(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, St.prototype.prepareFrame = function(t) {
      this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
    }, St.prototype.createPathShape = function(t, e) {
      var i, r = e.length, o, s = "";
      for (i = 0; i < r; i += 1)
        o = e[i].ks.k, s += qe(o, o.i.length, !0, t);
      return s;
    }, St.prototype.updateDocumentData = function(t, e) {
      this.textProperty.updateDocumentData(t, e);
    }, St.prototype.canResizeFont = function(t) {
      this.textProperty.canResizeFont(t);
    }, St.prototype.setMinimumFontSize = function(t) {
      this.textProperty.setMinimumFontSize(t);
    }, St.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, o) {
      switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
        case 1:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
          break;
        case 2:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
          break;
      }
      e.translate(r, o, 0);
    }, St.prototype.buildColor = function(t) {
      return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")";
    }, St.prototype.emptyProp = new di(), St.prototype.destroy = function() {
    };
    function jt() {
    }
    _t([ct, $e, Ie, Le, Ye], jt), jt.prototype.initElement = function(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide();
    }, jt.prototype.prepareFrame = function(t) {
      if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
        if (this.tm._placeholder)
          this.renderedFrame = t / this.data.sr;
        else {
          var e = this.tm.v;
          e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
        }
        var i, r = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1)
          (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0));
      }
    }, jt.prototype.renderInnerContent = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)
        (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, jt.prototype.setElements = function(t) {
      this.elements = t;
    }, jt.prototype.getElements = function() {
      return this.elements;
    }, jt.prototype.destroyElements = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)
        this.elements[t] && this.elements[t].destroy();
    }, jt.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement();
    };
    function ve(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i), this.sourceRect = {
        top: 0,
        left: 0,
        width: this.assetData.w,
        height: this.assetData.h
      };
    }
    _t([ct, $e, zt, Ie, Le, Ye], ve), ve.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = G("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
    }, ve.prototype.sourceRectAtTime = function() {
      return this.sourceRect;
    };
    function ge(t, e, i) {
      this.initElement(t, e, i);
    }
    _t([ve], ge), ge.prototype.createContent = function() {
      var t = G("rect");
      t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
    };
    function Tt(t, e, i) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
      var r = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? L.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 };
    }
    Tt.prototype.prepareFrame = function(t) {
      if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder)
        this._currentTime = t / this.data.sr;
      else {
        var e = this.tm.v;
        this._currentTime = e;
      }
    }, _t([ai, ct, Le], Tt), Tt.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
    }, Tt.prototype.show = function() {
    }, Tt.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = !1;
    }, Tt.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
    }, Tt.prototype.resume = function() {
      this._canPlay = !0;
    }, Tt.prototype.setRate = function(t) {
      this.audio.rate(t);
    }, Tt.prototype.volume = function(t) {
      this.audio.volume(t);
    }, Tt.prototype.getBaseElement = function() {
      return null;
    }, Tt.prototype.destroy = function() {
    }, Tt.prototype.sourceRectAtTime = function() {
    }, Tt.prototype.initExpressions = function() {
    };
    function oi(t, e, i) {
      this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? rt(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? L.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 };
    }
    _t([qt, jt, zt], oi);
    function Re(t, e, i) {
      this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i);
    }
    _t([ct, $e, zt, Ie, Le, Ye, St], Re), Re.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = G("text"));
    }, Re.prototype.buildTextContents = function(t) {
      for (var e = 0, i = t.length, r = [], o = ""; e < i; )
        t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(o), o = "") : o += t[e], e += 1;
      return r.push(o), r;
    }, Re.prototype.buildNewText = function() {
      var t, e, i = this.textProperty.currentData;
      this.renderedLetters = rt(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
      var r = this.globalData.fontManager.getFontByName(i.f);
      if (r.fClass)
        this.layerElement.setAttribute("class", r.fClass);
      else {
        this.layerElement.setAttribute("font-family", r.fFamily);
        var o = i.fWeight, s = i.fStyle;
        this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", o);
      }
      this.layerElement.setAttribute("aria-label", i.t);
      var d = i.l || [], E = !!this.globalData.fontManager.chars;
      e = d.length;
      var v, T = this.mHelper, P, b = "", g = this.data.singleShape, y = 0, A = 0, x = !0, u = i.tr * 1e-3 * i.finalSize;
      if (g && !E && !i.sz) {
        var l = this.textContainer, h = "start";
        switch (i.j) {
          case 1:
            h = "end";
            break;
          case 2:
            h = "middle";
            break;
          default:
            h = "start";
            break;
        }
        l.setAttribute("text-anchor", h), l.setAttribute("letter-spacing", u);
        var a = this.buildTextContents(i.finalText);
        for (e = a.length, A = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)
          v = this.textSpans[t] || G("tspan"), v.textContent = a[t], v.setAttribute("x", 0), v.setAttribute("y", A), v.style.display = "inherit", l.appendChild(v), this.textSpans[t] = v, A += i.finalLineHeight;
        this.layerElement.appendChild(l);
      } else {
        var n = this.textSpans.length, f, c;
        for (t = 0; t < e; t += 1)
          (!E || !g || t === 0) && (v = n > t ? this.textSpans[t] : G(E ? "path" : "text"), n <= t && (v.setAttribute("stroke-linecap", "butt"), v.setAttribute("stroke-linejoin", "round"), v.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = v, this.layerElement.appendChild(v)), v.style.display = "inherit"), T.reset(), T.scale(i.finalSize / 100, i.finalSize / 100), g && (d[t].n && (y = -u, A += i.yOffset, A += x ? 1 : 0, x = !1), this.applyTextPropertiesToMatrix(i, T, d[t].line, y, A), y += d[t].l || 0, y += u), E ? (c = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily), f = c && c.data || {}, P = f.shapes ? f.shapes[0].it : [], g ? b += this.createPathShape(T, P) : v.setAttribute("d", this.createPathShape(T, P))) : (g && v.setAttribute("transform", "translate(" + T.props[12] + "," + T.props[13] + ")"), v.textContent = d[t].val, v.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
        g && v && v.setAttribute("d", b);
      }
      for (; t < this.textSpans.length; )
        this.textSpans[t].style.display = "none", t += 1;
      this._sizeChanged = !0;
    }, Re.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = !1;
        var t = this.layerElement.getBBox();
        this.bbox = {
          top: t.y,
          left: t.x,
          width: t.width,
          height: t.height
        };
      }
      return this.bbox;
    }, Re.prototype.renderInnerContent = function() {
      if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        this._sizeChanged = !0;
        var t, e, i = this.textAnimator.renderedLetters, r = this.textProperty.currentData.l;
        e = r.length;
        var o, s;
        for (t = 0; t < e; t += 1)
          r[t].n || (o = i[t], s = this.textSpans[t], o._mdf.m && s.setAttribute("transform", o.m), o._mdf.o && s.setAttribute("opacity", o.o), o._mdf.sw && s.setAttribute("stroke-width", o.sw), o._mdf.sc && s.setAttribute("stroke", o.sc), o._mdf.fc && s.setAttribute("fill", o.fc));
      }
    };
    function Nt(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = [];
    }
    _t([ct, $e, zt, Rt, Ie, Le, Ye], Nt), Nt.prototype.initSecondaryElement = function() {
    }, Nt.prototype.identityMatrix = new Et(), Nt.prototype.buildExpressionInterface = function() {
    }, Nt.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
    }, Nt.prototype.filterUniqueShapes = function() {
      var t, e = this.shapes.length, i, r, o = this.stylesList.length, s, d = [], E = !1;
      for (r = 0; r < o; r += 1) {
        for (s = this.stylesList[r], E = !1, d.length = 0, t = 0; t < e; t += 1)
          i = this.shapes[t], i.styles.indexOf(s) !== -1 && (d.push(i), E = i._isAnimated || E);
        d.length > 1 && E && this.setShapesAsAnimated(d);
      }
    }, Nt.prototype.setShapesAsAnimated = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1)
        t[e].setAsAnimated();
    }, Nt.prototype.createStyleElement = function(t, e) {
      var i, r = new _i(t, e), o = r.pElem;
      if (t.ty === "st")
        i = new k(this, t, r);
      else if (t.ty === "fl")
        i = new z(this, t, r);
      else if (t.ty === "gf" || t.ty === "gs") {
        var s = t.ty === "gf" ? H : lt;
        i = new s(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), o.setAttribute("mask", "url(" + j + "#" + i.maskId + ")"));
      }
      return (t.ty === "st" || t.ty === "gs") && (o.setAttribute("stroke-linecap", gt[t.lc || 2]), o.setAttribute("stroke-linejoin", Qt[t.lj || 2]), o.setAttribute("fill-opacity", "0"), t.lj === 1 && o.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && o.setAttribute("fill-rule", "evenodd"), t.ln && o.setAttribute("id", t.ln), t.cl && o.setAttribute("class", t.cl), t.bm && (o.style["mix-blend-mode"] = vt(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i;
    }, Nt.prototype.createGroupElement = function(t) {
      var e = new kt();
      return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = vt(t.bm)), e;
    }, Nt.prototype.createTransformElement = function(t, e) {
      var i = ce.getTransformProperty(this, t, this), r = new zi(i, i.o, e);
      return this.addToAnimatedContents(t, r), r;
    }, Nt.prototype.createShapeElement = function(t, e, i) {
      var r = 4;
      t.ty === "rc" ? r = 5 : t.ty === "el" ? r = 6 : t.ty === "sr" && (r = 7);
      var o = Se.getShapeProp(this, t, r, this), s = new bi(e, i, o);
      return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s;
    }, Nt.prototype.addToAnimatedContents = function(t, e) {
      for (var i = 0, r = this.animatedContents.length; i < r; ) {
        if (this.animatedContents[i].element === e)
          return;
        i += 1;
      }
      this.animatedContents.push({
        fn: Pt.createRenderFunction(t),
        element: e,
        data: t
      });
    }, Nt.prototype.setElementStyles = function(t) {
      var e = t.styles, i, r = this.stylesList.length;
      for (i = 0; i < r; i += 1)
        this.stylesList[i].closed || e.push(this.stylesList[i]);
    }, Nt.prototype.reloadShapes = function() {
      this._isFirstFrame = !0;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1)
        this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
        this.dynamicProperties[t].getValue();
      this.renderModifiers();
    }, Nt.prototype.searchShapes = function(t, e, i, r, o, s, d) {
      var E = [].concat(s), v, T = t.length - 1, P, b, g = [], y = [], A, x, u;
      for (v = T; v >= 0; v -= 1) {
        if (u = this.searchProcessedElement(t[v]), u ? e[v] = i[u - 1] : t[v]._render = d, t[v].ty === "fl" || t[v].ty === "st" || t[v].ty === "gf" || t[v].ty === "gs")
          u ? e[v].style.closed = !1 : e[v] = this.createStyleElement(t[v], o), t[v]._render && r.appendChild(e[v].style.pElem), g.push(e[v].style);
        else if (t[v].ty === "gr") {
          if (!u)
            e[v] = this.createGroupElement(t[v]);
          else
            for (b = e[v].it.length, P = 0; P < b; P += 1)
              e[v].prevViewData[P] = e[v].it[P];
          this.searchShapes(t[v].it, e[v].it, e[v].prevViewData, e[v].gr, o + 1, E, d), t[v]._render && r.appendChild(e[v].gr);
        } else
          t[v].ty === "tr" ? (u || (e[v] = this.createTransformElement(t[v], r)), A = e[v].transform, E.push(A)) : t[v].ty === "sh" || t[v].ty === "rc" || t[v].ty === "el" || t[v].ty === "sr" ? (u || (e[v] = this.createShapeElement(t[v], E, o)), this.setElementStyles(e[v])) : t[v].ty === "tm" || t[v].ty === "rd" || t[v].ty === "ms" || t[v].ty === "pb" ? (u ? (x = e[v], x.closed = !1) : (x = Ce.getModifier(t[v].ty), x.init(this, t[v]), e[v] = x, this.shapeModifiers.push(x)), y.push(x)) : t[v].ty === "rp" && (u ? (x = e[v], x.closed = !0) : (x = Ce.getModifier(t[v].ty), e[v] = x, x.init(this, t, v, e), this.shapeModifiers.push(x), d = !1), y.push(x));
        this.addProcessedElement(t[v], v + 1);
      }
      for (T = g.length, v = 0; v < T; v += 1)
        g[v].closed = !0;
      for (T = y.length, v = 0; v < T; v += 1)
        y[v].closed = !0;
    }, Nt.prototype.renderInnerContent = function() {
      this.renderModifiers();
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1)
        this.stylesList[t].reset();
      for (this.renderShape(), t = 0; t < e; t += 1)
        (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
    }, Nt.prototype.renderShape = function() {
      var t, e = this.animatedContents.length, i;
      for (t = 0; t < e; t += 1)
        i = this.animatedContents[t], (this._isFirstFrame || i.element._isAnimated) && i.data !== !0 && i.fn(i.data, i.element, this._isFirstFrame);
    }, Nt.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    };
    function yr() {
    }
    var Ut = function() {
      var t = {}, e = [], i = 0, r = 0, o = 0, s = !0, d = !1;
      function E(w) {
        for (var S = 0, _ = w.target; S < r; )
          e[S].animation === _ && (e.splice(S, 1), S -= 1, r -= 1, _.isPaused || b()), S += 1;
      }
      function v(w, S) {
        if (!w)
          return null;
        for (var _ = 0; _ < r; ) {
          if (e[_].elem === w && e[_].elem !== null)
            return e[_].animation;
          _ += 1;
        }
        var M = new ft();
        return g(M, w), M.setData(w, S), M;
      }
      function T() {
        var w, S = e.length, _ = [];
        for (w = 0; w < S; w += 1)
          _.push(e[w].animation);
        return _;
      }
      function P() {
        o += 1, B();
      }
      function b() {
        o -= 1;
      }
      function g(w, S) {
        w.addEventListener("destroy", E), w.addEventListener("_active", P), w.addEventListener("_idle", b), e.push({ elem: S, animation: w }), r += 1;
      }
      function y(w) {
        var S = new ft();
        return g(S, null), S.setParams(w), S;
      }
      function A(w, S) {
        var _;
        for (_ = 0; _ < r; _ += 1)
          e[_].animation.setSpeed(w, S);
      }
      function x(w, S) {
        var _;
        for (_ = 0; _ < r; _ += 1)
          e[_].animation.setDirection(w, S);
      }
      function u(w) {
        var S;
        for (S = 0; S < r; S += 1)
          e[S].animation.play(w);
      }
      function l(w) {
        var S = w - i, _;
        for (_ = 0; _ < r; _ += 1)
          e[_].animation.advanceTime(S);
        i = w, o && !d ? F.requestAnimationFrame(l) : s = !0;
      }
      function h(w) {
        i = w, F.requestAnimationFrame(l);
      }
      function a(w) {
        var S;
        for (S = 0; S < r; S += 1)
          e[S].animation.pause(w);
      }
      function n(w, S, _) {
        var M;
        for (M = 0; M < r; M += 1)
          e[M].animation.goToAndStop(w, S, _);
      }
      function f(w) {
        var S;
        for (S = 0; S < r; S += 1)
          e[S].animation.stop(w);
      }
      function c(w) {
        var S;
        for (S = 0; S < r; S += 1)
          e[S].animation.togglePause(w);
      }
      function p(w) {
        var S;
        for (S = r - 1; S >= 0; S -= 1)
          e[S].animation.destroy(w);
      }
      function m(w, S, _) {
        var M = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), Z, O = M.length;
        for (Z = 0; Z < O; Z += 1)
          _ && M[Z].setAttribute("data-bm-type", _), v(M[Z], w);
        if (S && O === 0) {
          _ || (_ = "svg");
          var bt = document.getElementsByTagName("body")[0];
          bt.innerText = "";
          var dt = at("div");
          dt.style.width = "100%", dt.style.height = "100%", dt.setAttribute("data-bm-type", _), bt.appendChild(dt), v(dt, w);
        }
      }
      function R() {
        var w;
        for (w = 0; w < r; w += 1)
          e[w].animation.resize();
      }
      function B() {
        !d && o && s && (F.requestAnimationFrame(h), s = !1);
      }
      function X() {
        d = !0;
      }
      function q() {
        d = !1, B();
      }
      function Q(w, S) {
        var _;
        for (_ = 0; _ < r; _ += 1)
          e[_].animation.setVolume(w, S);
      }
      function J(w) {
        var S;
        for (S = 0; S < r; S += 1)
          e[S].animation.mute(w);
      }
      function tt(w) {
        var S;
        for (S = 0; S < r; S += 1)
          e[S].animation.unmute(w);
      }
      return t.registerAnimation = v, t.loadAnimation = y, t.setSpeed = A, t.setDirection = x, t.play = u, t.pause = a, t.stop = f, t.togglePause = c, t.searchAnimations = m, t.resize = R, t.goToAndStop = n, t.destroy = p, t.freeze = X, t.unfreeze = q, t.setVolume = Q, t.mute = J, t.unmute = tt, t.getRegisteredAnimations = T, t;
    }(), ft = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = It(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = W, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = se(), this.imagePreloader = new gi(), this.audioController = Oi(), this.markers = [];
    };
    _t([ut], ft), ft.prototype.setParams = function(t) {
      (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
      var e = "svg";
      switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
        case "canvas":
          this.renderer = new CanvasRenderer(this, t.rendererSettings);
          break;
        case "svg":
          this.renderer = new qt(this, t.rendererSettings);
          break;
        default:
          this.renderer = new HybridRenderer(this, t.rendererSettings);
          break;
      }
      this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === !0 ? this.loop = !0 : t.loop === !1 ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : !0, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : !0, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), ci.load(t.path, this.configAnimation.bind(this), function() {
        this.trigger("data_failed");
      }.bind(this)));
    }, ft.prototype.setData = function(t, e) {
      e && typeof e != "object" && (e = JSON.parse(e));
      var i = {
        wrapper: t,
        animationData: e
      }, r = t.attributes;
      i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : "canvas";
      var o = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
      o === "false" ? i.loop = !1 : o === "true" ? i.loop = !0 : o !== "" && (i.loop = parseInt(o, 10));
      var s = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : r.getNamedItem("bm-autoplay") ? r.getNamedItem("bm-autoplay").value : !0;
      i.autoplay = s !== "false", i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "";
      var d = r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "";
      d === "false" && (i.prerender = !1), this.setParams(i);
    }, ft.prototype.includeLayers = function(t) {
      t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
      var e = this.animationData.layers, i, r = e.length, o = t.layers, s, d = o.length;
      for (s = 0; s < d; s += 1)
        for (i = 0; i < r; ) {
          if (e[i].id === o[s].id) {
            e[i] = o[s];
            break;
          }
          i += 1;
        }
      if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
        for (r = t.assets.length, i = 0; i < r; i += 1)
          this.animationData.assets.push(t.assets[i]);
      this.animationData.__complete = !1, ii.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), N && N.initExpressions(this), this.loadNextSegment();
    }, ft.prototype.loadNextSegment = function() {
      var t = this.animationData.segments;
      if (!t || t.length === 0 || !this.autoloadSegments) {
        this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
        return;
      }
      var e = t.shift();
      this.timeCompleted = e.time * this.frameRate;
      var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, ci.load(i, this.includeLayers.bind(this), function() {
        this.trigger("data_failed");
      }.bind(this));
    }, ft.prototype.loadSegments = function() {
      var t = this.animationData.segments;
      t || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, ft.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded();
    }, ft.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, ft.prototype.configAnimation = function(t) {
      if (!!this.renderer)
        try {
          this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = Di(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
        } catch (e) {
          this.triggerConfigError(e);
        }
    }, ft.prototype.waitForFontsLoaded = function() {
      !this.renderer || (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, ft.prototype.checkLoaded = function() {
      !this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages() && (this.isLoaded = !0, ii.completeData(this.animationData, this.renderer.globalData.fontManager), N && N.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
        this.trigger("DOMLoaded");
      }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play());
    }, ft.prototype.resize = function() {
      this.renderer.updateContainerSize();
    }, ft.prototype.setSubframe = function(t) {
      this.isSubframeEnabled = !!t;
    }, ft.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame();
    }, ft.prototype.renderFrame = function() {
      if (!(this.isLoaded === !1 || !this.renderer))
        try {
          this.renderer.renderFrame(this.currentFrame + this.firstFrame);
        } catch (t) {
          this.triggerRenderFrameError(t);
        }
    }, ft.prototype.play = function(t) {
      t && this.name !== t || this.isPaused === !0 && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
    }, ft.prototype.pause = function(t) {
      t && this.name !== t || this.isPaused === !1 && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause());
    }, ft.prototype.togglePause = function(t) {
      t && this.name !== t || (this.isPaused === !0 ? this.play() : this.pause());
    }, ft.prototype.stop = function(t) {
      t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
    }, ft.prototype.getMarkerData = function(t) {
      for (var e, i = 0; i < this.markers.length; i += 1)
        if (e = this.markers[i], e.payload && e.payload.name === t)
          return e;
      return null;
    }, ft.prototype.goToAndStop = function(t, e, i) {
      if (!(i && this.name !== i)) {
        var r = Number(t);
        if (isNaN(r)) {
          var o = this.getMarkerData(t);
          o && this.goToAndStop(o.time, !0);
        } else
          e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
        this.pause();
      }
    }, ft.prototype.goToAndPlay = function(t, e, i) {
      if (!(i && this.name !== i)) {
        var r = Number(t);
        if (isNaN(r)) {
          var o = this.getMarkerData(t);
          o && (o.duration ? this.playSegments([o.time, o.time + o.duration], !0) : this.goToAndStop(o.time, !0));
        } else
          this.goToAndStop(r, e, i);
        this.play();
      }
    }, ft.prototype.advanceTime = function(t) {
      if (!(this.isPaused === !0 || this.isLoaded === !1)) {
        var e = this.currentRawFrame + t * this.frameModifier, i = !1;
        e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (i = !0, e = 0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
      }
    }, ft.prototype.adjustSegment = function(t, e) {
      this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(1e-3 + e)), this.trigger("segmentStart");
    }, ft.prototype.setSegment = function(t, e) {
      var i = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, i !== -1 && this.goToAndStop(i, !0);
    }, ft.prototype.playSegments = function(t, e) {
      if (e && (this.segments.length = 0), typeof t[0] == "object") {
        var i, r = t.length;
        for (i = 0; i < r; i += 1)
          this.segments.push(t[i]);
      } else
        this.segments.push(t);
      this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, ft.prototype.resetSegments = function(t) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
    }, ft.prototype.checkSegments = function(t) {
      return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), !0) : !1;
    }, ft.prototype.destroy = function(t) {
      t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null);
    }, ft.prototype.setCurrentRawFrameValue = function(t) {
      this.currentRawFrame = t, this.gotoFrame();
    }, ft.prototype.setSpeed = function(t) {
      this.playSpeed = t, this.updaFrameModifier();
    }, ft.prototype.setDirection = function(t) {
      this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
    }, ft.prototype.setVolume = function(t, e) {
      e && this.name !== e || this.audioController.setVolume(t);
    }, ft.prototype.getVolume = function() {
      return this.audioController.getVolume();
    }, ft.prototype.mute = function(t) {
      t && this.name !== t || this.audioController.mute();
    }, ft.prototype.unmute = function(t) {
      t && this.name !== t || this.audioController.unmute();
    }, ft.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
    }, ft.prototype.getPath = function() {
      return this.path;
    }, ft.prototype.getAssetsPath = function(t) {
      var e = "";
      if (t.e)
        e = t.p;
      else if (this.assetsPath) {
        var i = t.p;
        i.indexOf("images/") !== -1 && (i = i.split("/")[1]), e = this.assetsPath + i;
      } else
        e = this.path, e += t.u ? t.u : "", e += t.p;
      return e;
    }, ft.prototype.getAssetData = function(t) {
      for (var e = 0, i = this.assets.length; e < i; ) {
        if (t === this.assets[e].id)
          return this.assets[e];
        e += 1;
      }
      return null;
    }, ft.prototype.hide = function() {
      this.renderer.hide();
    }, ft.prototype.show = function() {
      this.renderer.show();
    }, ft.prototype.getDuration = function(t) {
      return t ? this.totalFrames : this.totalFrames / this.frameRate;
    }, ft.prototype.trigger = function(t) {
      if (this._cbs && this._cbs[t])
        switch (t) {
          case "enterFrame":
            this.triggerEvent(t, new At(t, this.currentFrame, this.totalFrames, this.frameModifier));
            break;
          case "loopComplete":
            this.triggerEvent(t, new ke(t, this.loop, this.playCount, this.frameMult));
            break;
          case "complete":
            this.triggerEvent(t, new oe(t, this.frameMult));
            break;
          case "segmentStart":
            this.triggerEvent(t, new ye(t, this.firstFrame, this.totalFrames));
            break;
          case "destroy":
            this.triggerEvent(t, new ot(t, this));
            break;
          default:
            this.triggerEvent(t);
        }
      t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new At(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new ke(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new oe(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new ye(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new ot(t, this));
    }, ft.prototype.triggerRenderFrameError = function(t) {
      var e = new xe(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    }, ft.prototype.triggerConfigError = function(t) {
      var e = new Mt(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    };
    function gr() {
      this.effectElements = [];
    }
    var Ft = {};
    function _r(t) {
      j = t;
    }
    function Zi() {
      Ut.searchAnimations();
    }
    function br(t) {
      W = t;
    }
    function kr(t) {
      D = t;
    }
    function xr(t) {
      return Ut.loadAnimation(t);
    }
    function Sr(t) {
      if (typeof t == "string")
        switch (t) {
          case "high":
            Dt = 200;
            break;
          default:
          case "medium":
            Dt = 50;
            break;
          case "low":
            Dt = 10;
            break;
        }
      else
        !isNaN(t) && t > 1 && (Dt = t);
    }
    function Ar() {
      return typeof navigator < "u";
    }
    function Er(t, e) {
      t === "expressions" && (N = e);
    }
    function Pr(t) {
      switch (t) {
        case "propertyFactory":
          return L;
        case "shapePropertyFactory":
          return Se;
        case "matrix":
          return Et;
        default:
          return null;
      }
    }
    Ft.play = Ut.play, Ft.pause = Ut.pause, Ft.setLocationHref = _r, Ft.togglePause = Ut.togglePause, Ft.setSpeed = Ut.setSpeed, Ft.setDirection = Ut.setDirection, Ft.stop = Ut.stop, Ft.searchAnimations = Zi, Ft.registerAnimation = Ut.registerAnimation, Ft.loadAnimation = xr, Ft.setSubframeRendering = br, Ft.resize = Ut.resize, Ft.goToAndStop = Ut.goToAndStop, Ft.destroy = Ut.destroy, Ft.setQuality = Sr, Ft.inBrowser = Ar, Ft.installPlugin = Er, Ft.freeze = Ut.freeze, Ft.unfreeze = Ut.unfreeze, Ft.setVolume = Ut.setVolume, Ft.mute = Ut.mute, Ft.unmute = Ut.unmute, Ft.getRegisteredAnimations = Ut.getRegisteredAnimations, Ft.setIDPrefix = kr, Ft.__getFactory = Pr, Ft.version = "5.7.14";
    function Tr() {
      document.readyState === "complete" && (clearInterval(Mr), Zi());
    }
    function wr(t) {
      for (var e = Qi.split("&"), i = 0; i < e.length; i += 1) {
        var r = e[i].split("=");
        if (decodeURIComponent(r[0]) == t)
          return decodeURIComponent(r[1]);
      }
      return null;
    }
    var Qi;
    {
      var tr = document.getElementsByTagName("script"), Cr = tr.length - 1, Fr = tr[Cr] || {
        src: ""
      };
      Qi = Fr.src.replace(/^[^\?]+\??/, ""), wr("renderer");
    }
    var Mr = setInterval(Tr, 100);
    return Ft;
  });
})(ur);
var Rr = function C(F, I) {
  if (F === I)
    return !0;
  if (F && I && typeof F == "object" && typeof I == "object") {
    if (F.constructor !== I.constructor)
      return !1;
    var j, V, W;
    if (Array.isArray(F)) {
      if (j = F.length, j != I.length)
        return !1;
      for (V = j; V-- !== 0; )
        if (!C(F[V], I[V]))
          return !1;
      return !0;
    }
    if (F instanceof Map && I instanceof Map) {
      if (F.size !== I.size)
        return !1;
      for (V of F.entries())
        if (!I.has(V[0]))
          return !1;
      for (V of F.entries())
        if (!C(V[1], I.get(V[0])))
          return !1;
      return !0;
    }
    if (F instanceof Set && I instanceof Set) {
      if (F.size !== I.size)
        return !1;
      for (V of F.entries())
        if (!I.has(V[0]))
          return !1;
      return !0;
    }
    if (ArrayBuffer.isView(F) && ArrayBuffer.isView(I)) {
      if (j = F.length, j != I.length)
        return !1;
      for (V = j; V-- !== 0; )
        if (F[V] !== I[V])
          return !1;
      return !0;
    }
    if (F.constructor === RegExp)
      return F.source === I.source && F.flags === I.flags;
    if (F.valueOf !== Object.prototype.valueOf)
      return F.valueOf() === I.valueOf();
    if (F.toString !== Object.prototype.toString)
      return F.toString() === I.toString();
    if (W = Object.keys(F), j = W.length, j !== Object.keys(I).length)
      return !1;
    for (V = j; V-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(I, W[V]))
        return !1;
    for (V = j; V-- !== 0; ) {
      var D = W[V];
      if (!(D === "_owner" && F.$$typeof) && !C(F[D], I[D]))
        return !1;
    }
    return !0;
  }
  return F !== F && I !== I;
}, Or = Vr;
function fi(C) {
  return C instanceof Buffer ? Buffer.from(C) : new C.constructor(C.buffer.slice(), C.byteOffset, C.length);
}
function Vr(C) {
  if (C = C || {}, C.circles)
    return jr(C);
  return C.proto ? j : I;
  function F(V, W) {
    for (var D = Object.keys(V), N = new Array(D.length), $ = 0; $ < D.length; $++) {
      var U = D[$], st = V[U];
      typeof st != "object" || st === null ? N[U] = st : st instanceof Date ? N[U] = new Date(st) : ArrayBuffer.isView(st) ? N[U] = fi(st) : N[U] = W(st);
    }
    return N;
  }
  function I(V) {
    if (typeof V != "object" || V === null)
      return V;
    if (V instanceof Date)
      return new Date(V);
    if (Array.isArray(V))
      return F(V, I);
    if (V instanceof Map)
      return new Map(F(Array.from(V), I));
    if (V instanceof Set)
      return new Set(F(Array.from(V), I));
    var W = {};
    for (var D in V)
      if (Object.hasOwnProperty.call(V, D) !== !1) {
        var N = V[D];
        typeof N != "object" || N === null ? W[D] = N : N instanceof Date ? W[D] = new Date(N) : N instanceof Map ? W[D] = new Map(F(Array.from(N), I)) : N instanceof Set ? W[D] = new Set(F(Array.from(N), I)) : ArrayBuffer.isView(N) ? W[D] = fi(N) : W[D] = I(N);
      }
    return W;
  }
  function j(V) {
    if (typeof V != "object" || V === null)
      return V;
    if (V instanceof Date)
      return new Date(V);
    if (Array.isArray(V))
      return F(V, j);
    if (V instanceof Map)
      return new Map(F(Array.from(V), j));
    if (V instanceof Set)
      return new Set(F(Array.from(V), j));
    var W = {};
    for (var D in V) {
      var N = V[D];
      typeof N != "object" || N === null ? W[D] = N : N instanceof Date ? W[D] = new Date(N) : N instanceof Map ? W[D] = new Map(F(Array.from(N), j)) : N instanceof Set ? W[D] = new Set(F(Array.from(N), j)) : ArrayBuffer.isView(N) ? W[D] = fi(N) : W[D] = j(N);
    }
    return W;
  }
}
function jr(C) {
  var F = [], I = [];
  return C.proto ? W : V;
  function j(D, N) {
    for (var $ = Object.keys(D), U = new Array($.length), st = 0; st < $.length; st++) {
      var mt = $[st], xt = D[mt];
      if (typeof xt != "object" || xt === null)
        U[mt] = xt;
      else if (xt instanceof Date)
        U[mt] = new Date(xt);
      else if (ArrayBuffer.isView(xt))
        U[mt] = fi(xt);
      else {
        var Ct = F.indexOf(xt);
        Ct !== -1 ? U[mt] = I[Ct] : U[mt] = N(xt);
      }
    }
    return U;
  }
  function V(D) {
    if (typeof D != "object" || D === null)
      return D;
    if (D instanceof Date)
      return new Date(D);
    if (Array.isArray(D))
      return j(D, V);
    if (D instanceof Map)
      return new Map(j(Array.from(D), V));
    if (D instanceof Set)
      return new Set(j(Array.from(D), V));
    var N = {};
    F.push(D), I.push(N);
    for (var $ in D)
      if (Object.hasOwnProperty.call(D, $) !== !1) {
        var U = D[$];
        if (typeof U != "object" || U === null)
          N[$] = U;
        else if (U instanceof Date)
          N[$] = new Date(U);
        else if (U instanceof Map)
          N[$] = new Map(j(Array.from(U), V));
        else if (U instanceof Set)
          N[$] = new Set(j(Array.from(U), V));
        else if (ArrayBuffer.isView(U))
          N[$] = fi(U);
        else {
          var st = F.indexOf(U);
          st !== -1 ? N[$] = I[st] : N[$] = V(U);
        }
      }
    return F.pop(), I.pop(), N;
  }
  function W(D) {
    if (typeof D != "object" || D === null)
      return D;
    if (D instanceof Date)
      return new Date(D);
    if (Array.isArray(D))
      return j(D, W);
    if (D instanceof Map)
      return new Map(j(Array.from(D), W));
    if (D instanceof Set)
      return new Set(j(Array.from(D), W));
    var N = {};
    F.push(D), I.push(N);
    for (var $ in D) {
      var U = D[$];
      if (typeof U != "object" || U === null)
        N[$] = U;
      else if (U instanceof Date)
        N[$] = new Date(U);
      else if (U instanceof Map)
        N[$] = new Map(j(Array.from(U), W));
      else if (U instanceof Set)
        N[$] = new Set(j(Array.from(U), W));
      else if (ArrayBuffer.isView(U))
        N[$] = fi(U);
      else {
        var st = F.indexOf(U);
        st !== -1 ? N[$] = I[st] : N[$] = W(U);
      }
    }
    return F.pop(), I.pop(), N;
  }
}
var Dr = Or();
function Ai(C) {
  return C && typeof C == "object" && "default" in C ? C.default : C;
}
var Br = Ai(ur.exports), Ot = Ui, zr = Ai(Ot), nr = Ai(Rr), ar = Ai(Dr);
function $i() {
  return $i = Object.assign || function(C) {
    for (var F = 1; F < arguments.length; F++) {
      var I = arguments[F];
      for (var j in I)
        Object.prototype.hasOwnProperty.call(I, j) && (C[j] = I[j]);
    }
    return C;
  }, $i.apply(this, arguments);
}
function Nr(C, F) {
  if (C == null)
    return {};
  var I = {}, j = Object.keys(C), V, W;
  for (W = 0; W < j.length; W++)
    V = j[W], !(F.indexOf(V) >= 0) && (I[V] = C[V]);
  return I;
}
function Xi(C, F) {
  return F = { exports: {} }, C(F, F.exports), F.exports;
}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht = typeof Symbol == "function" && Symbol.for, Hi = Ht ? Symbol.for("react.element") : 60103, Ki = Ht ? Symbol.for("react.portal") : 60106, Ei = Ht ? Symbol.for("react.fragment") : 60107, Pi = Ht ? Symbol.for("react.strict_mode") : 60108, Ti = Ht ? Symbol.for("react.profiler") : 60114, wi = Ht ? Symbol.for("react.provider") : 60109, Ci = Ht ? Symbol.for("react.context") : 60110, Ji = Ht ? Symbol.for("react.async_mode") : 60111, Fi = Ht ? Symbol.for("react.concurrent_mode") : 60111, Mi = Ht ? Symbol.for("react.forward_ref") : 60112, Ii = Ht ? Symbol.for("react.suspense") : 60113, qr = Ht ? Symbol.for("react.suspense_list") : 60120, Li = Ht ? Symbol.for("react.memo") : 60115, Ri = Ht ? Symbol.for("react.lazy") : 60116, Wr = Ht ? Symbol.for("react.block") : 60121, $r = Ht ? Symbol.for("react.fundamental") : 60117, Yr = Ht ? Symbol.for("react.responder") : 60118, Gr = Ht ? Symbol.for("react.scope") : 60119;
function ue(C) {
  if (typeof C == "object" && C !== null) {
    var F = C.$$typeof;
    switch (F) {
      case Hi:
        switch (C = C.type, C) {
          case Ji:
          case Fi:
          case Ei:
          case Ti:
          case Pi:
          case Ii:
            return C;
          default:
            switch (C = C && C.$$typeof, C) {
              case Ci:
              case Mi:
              case Ri:
              case Li:
              case wi:
                return C;
              default:
                return F;
            }
        }
      case Ki:
        return F;
    }
  }
}
function pr(C) {
  return ue(C) === Fi;
}
var Ur = Ji, Xr = Fi, Hr = Ci, Kr = wi, Jr = Hi, Zr = Mi, Qr = Ei, ts = Ri, es = Li, is = Ki, rs = Ti, ss = Pi, ns = Ii, as = function(C) {
  return pr(C) || ue(C) === Ji;
}, os = pr, hs = function(C) {
  return ue(C) === Ci;
}, ls = function(C) {
  return ue(C) === wi;
}, fs = function(C) {
  return typeof C == "object" && C !== null && C.$$typeof === Hi;
}, us = function(C) {
  return ue(C) === Mi;
}, ps = function(C) {
  return ue(C) === Ei;
}, cs = function(C) {
  return ue(C) === Ri;
}, ds = function(C) {
  return ue(C) === Li;
}, vs = function(C) {
  return ue(C) === Ki;
}, ms = function(C) {
  return ue(C) === Ti;
}, ys = function(C) {
  return ue(C) === Pi;
}, gs = function(C) {
  return ue(C) === Ii;
}, _s = function(C) {
  return typeof C == "string" || typeof C == "function" || C === Ei || C === Fi || C === Ti || C === Pi || C === Ii || C === qr || typeof C == "object" && C !== null && (C.$$typeof === Ri || C.$$typeof === Li || C.$$typeof === wi || C.$$typeof === Ci || C.$$typeof === Mi || C.$$typeof === $r || C.$$typeof === Yr || C.$$typeof === Gr || C.$$typeof === Wr);
}, bs = ue, ks = {
  AsyncMode: Ur,
  ConcurrentMode: Xr,
  ContextConsumer: Hr,
  ContextProvider: Kr,
  Element: Jr,
  ForwardRef: Zr,
  Fragment: Qr,
  Lazy: ts,
  Memo: es,
  Portal: is,
  Profiler: rs,
  StrictMode: ss,
  Suspense: ns,
  isAsyncMode: as,
  isConcurrentMode: os,
  isContextConsumer: hs,
  isContextProvider: ls,
  isElement: fs,
  isForwardRef: us,
  isFragment: ps,
  isLazy: cs,
  isMemo: ds,
  isPortal: vs,
  isProfiler: ms,
  isStrictMode: ys,
  isSuspense: gs,
  isValidElementType: _s,
  typeOf: bs
}, xs = Xi(function(C, F) {
  process.env.NODE_ENV !== "production" && function() {
    var I = typeof Symbol == "function" && Symbol.for, j = I ? Symbol.for("react.element") : 60103, V = I ? Symbol.for("react.portal") : 60106, W = I ? Symbol.for("react.fragment") : 60107, D = I ? Symbol.for("react.strict_mode") : 60108, N = I ? Symbol.for("react.profiler") : 60114, $ = I ? Symbol.for("react.provider") : 60109, U = I ? Symbol.for("react.context") : 60110, st = I ? Symbol.for("react.async_mode") : 60111, mt = I ? Symbol.for("react.concurrent_mode") : 60111, xt = I ? Symbol.for("react.forward_ref") : 60112, Ct = I ? Symbol.for("react.suspense") : 60113, se = I ? Symbol.for("react.suspense_list") : 60120, Dt = I ? Symbol.for("react.memo") : 60115, yt = I ? Symbol.for("react.lazy") : 60116, Lt = I ? Symbol.for("react.block") : 60121, At = I ? Symbol.for("react.fundamental") : 60117, oe = I ? Symbol.for("react.responder") : 60118, ke = I ? Symbol.for("react.scope") : 60119;
    function ye(L) {
      return typeof L == "string" || typeof L == "function" || L === W || L === mt || L === N || L === D || L === Ct || L === se || typeof L == "object" && L !== null && (L.$$typeof === yt || L.$$typeof === Dt || L.$$typeof === $ || L.$$typeof === U || L.$$typeof === xt || L.$$typeof === At || L.$$typeof === oe || L.$$typeof === ke || L.$$typeof === Lt);
    }
    function ot(L) {
      if (typeof L == "object" && L !== null) {
        var ce = L.$$typeof;
        switch (ce) {
          case j:
            var $t = L.type;
            switch ($t) {
              case st:
              case mt:
              case W:
              case N:
              case D:
              case Ct:
                return $t;
              default:
                var Se = $t && $t.$$typeof;
                switch (Se) {
                  case U:
                  case xt:
                  case yt:
                  case Dt:
                  case $:
                    return Se;
                  default:
                    return ce;
                }
            }
          case V:
            return ce;
        }
      }
    }
    var xe = st, Mt = mt, It = U, pe = $, Zt = j, Y = xt, K = W, ht = yt, ut = Dt, it = V, rt = N, G = D, at = Ct, nt = !1;
    function vt(L) {
      return nt || (nt = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), gt(L) || ot(L) === st;
    }
    function gt(L) {
      return ot(L) === mt;
    }
    function Qt(L) {
      return ot(L) === U;
    }
    function Et(L) {
      return ot(L) === $;
    }
    function ne(L) {
      return typeof L == "object" && L !== null && L.$$typeof === j;
    }
    function _t(L) {
      return ot(L) === xt;
    }
    function Je(L) {
      return ot(L) === W;
    }
    function Be(L) {
      return ot(L) === yt;
    }
    function te(L) {
      return ot(L) === Dt;
    }
    function ze(L) {
      return ot(L) === V;
    }
    function ii(L) {
      return ot(L) === N;
    }
    function Ze(L) {
      return ot(L) === D;
    }
    function we(L) {
      return ot(L) === Ct;
    }
    F.AsyncMode = xe, F.ConcurrentMode = Mt, F.ContextConsumer = It, F.ContextProvider = pe, F.Element = Zt, F.ForwardRef = Y, F.Fragment = K, F.Lazy = ht, F.Memo = ut, F.Portal = it, F.Profiler = rt, F.StrictMode = G, F.Suspense = at, F.isAsyncMode = vt, F.isConcurrentMode = gt, F.isContextConsumer = Qt, F.isContextProvider = Et, F.isElement = ne, F.isForwardRef = _t, F.isFragment = Je, F.isLazy = Be, F.isMemo = te, F.isPortal = ze, F.isProfiler = ii, F.isStrictMode = Ze, F.isSuspense = we, F.isValidElementType = ye, F.typeOf = ot;
  }();
}), cr = Xi(function(C) {
  process.env.NODE_ENV === "production" ? C.exports = ks : C.exports = xs;
});
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var or = Object.getOwnPropertySymbols, Ss = Object.prototype.hasOwnProperty, As = Object.prototype.propertyIsEnumerable;
function Es(C) {
  if (C == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(C);
}
function Ps() {
  try {
    if (!Object.assign)
      return !1;
    var C = new String("abc");
    if (C[5] = "de", Object.getOwnPropertyNames(C)[0] === "5")
      return !1;
    for (var F = {}, I = 0; I < 10; I++)
      F["_" + String.fromCharCode(I)] = I;
    var j = Object.getOwnPropertyNames(F).map(function(W) {
      return F[W];
    });
    if (j.join("") !== "0123456789")
      return !1;
    var V = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(W) {
      V[W] = W;
    }), Object.keys(Object.assign({}, V)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var Ts = Ps() ? Object.assign : function(C, F) {
  for (var I, j = Es(C), V, W = 1; W < arguments.length; W++) {
    I = Object(arguments[W]);
    for (var D in I)
      Ss.call(I, D) && (j[D] = I[D]);
    if (or) {
      V = or(I);
      for (var N = 0; N < V.length; N++)
        As.call(I, V[N]) && (j[V[N]] = I[V[N]]);
    }
  }
  return j;
}, ws = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Ke = ws, Yi = function() {
};
if (process.env.NODE_ENV !== "production") {
  var Cs = Ke, Gi = {}, Fs = Function.call.bind(Object.prototype.hasOwnProperty);
  Yi = function(C) {
    var F = "Warning: " + C;
    typeof console < "u" && console.error(F);
    try {
      throw new Error(F);
    } catch {
    }
  };
}
function dr(C, F, I, j, V) {
  if (process.env.NODE_ENV !== "production") {
    for (var W in C)
      if (Fs(C, W)) {
        var D;
        try {
          if (typeof C[W] != "function") {
            var N = Error((j || "React class") + ": " + I + " type `" + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[W] + "`.");
            throw N.name = "Invariant Violation", N;
          }
          D = C[W](F, W, j, I, null, Cs);
        } catch (U) {
          D = U;
        }
        if (D && !(D instanceof Error) && Yi((j || "React class") + ": type specification of " + I + " `" + W + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof D + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), D instanceof Error && !(D.message in Gi)) {
          Gi[D.message] = !0;
          var $ = V ? V() : "";
          Yi("Failed " + I + " type: " + D.message + ($ != null ? $ : ""));
        }
      }
  }
}
dr.resetWarningCache = function() {
  process.env.NODE_ENV !== "production" && (Gi = {});
};
var hr = dr, Ms = Function.call.bind(Object.prototype.hasOwnProperty), li = function() {
};
process.env.NODE_ENV !== "production" && (li = function(C) {
  var F = "Warning: " + C;
  typeof console < "u" && console.error(F);
  try {
    throw new Error(F);
  } catch {
  }
});
function Si() {
  return null;
}
var Is = function(C, F) {
  var I = typeof Symbol == "function" && Symbol.iterator, j = "@@iterator";
  function V(Y) {
    var K = Y && (I && Y[I] || Y[j]);
    if (typeof K == "function")
      return K;
  }
  var W = "<<anonymous>>", D = {
    array: st("array"),
    bool: st("boolean"),
    func: st("function"),
    number: st("number"),
    object: st("object"),
    string: st("string"),
    symbol: st("symbol"),
    any: mt(),
    arrayOf: xt,
    element: Ct(),
    elementType: se(),
    instanceOf: Dt,
    node: oe(),
    objectOf: Lt,
    oneOf: yt,
    oneOfType: At,
    shape: ke,
    exact: ye
  };
  function N(Y, K) {
    return Y === K ? Y !== 0 || 1 / Y === 1 / K : Y !== Y && K !== K;
  }
  function $(Y) {
    this.message = Y, this.stack = "";
  }
  $.prototype = Error.prototype;
  function U(Y) {
    if (process.env.NODE_ENV !== "production")
      var K = {}, ht = 0;
    function ut(rt, G, at, nt, vt, gt, Qt) {
      if (nt = nt || W, gt = gt || at, Qt !== Ke) {
        if (F) {
          var Et = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
          throw Et.name = "Invariant Violation", Et;
        } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
          var ne = nt + ":" + at;
          !K[ne] && ht < 3 && (li("You are manually calling a React.PropTypes validation function for the `" + gt + "` prop on `" + nt + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), K[ne] = !0, ht++);
        }
      }
      return G[at] == null ? rt ? G[at] === null ? new $("The " + vt + " `" + gt + "` is marked as required " + ("in `" + nt + "`, but its value is `null`.")) : new $("The " + vt + " `" + gt + "` is marked as required in " + ("`" + nt + "`, but its value is `undefined`.")) : null : Y(G, at, nt, vt, gt);
    }
    var it = ut.bind(null, !1);
    return it.isRequired = ut.bind(null, !0), it;
  }
  function st(Y) {
    function K(ht, ut, it, rt, G, at) {
      var nt = ht[ut], vt = Mt(nt);
      if (vt !== Y) {
        var gt = It(nt);
        return new $("Invalid " + rt + " `" + G + "` of type " + ("`" + gt + "` supplied to `" + it + "`, expected ") + ("`" + Y + "`."));
      }
      return null;
    }
    return U(K);
  }
  function mt() {
    return U(Si);
  }
  function xt(Y) {
    function K(ht, ut, it, rt, G) {
      if (typeof Y != "function")
        return new $("Property `" + G + "` of component `" + it + "` has invalid PropType notation inside arrayOf.");
      var at = ht[ut];
      if (!Array.isArray(at)) {
        var nt = Mt(at);
        return new $("Invalid " + rt + " `" + G + "` of type " + ("`" + nt + "` supplied to `" + it + "`, expected an array."));
      }
      for (var vt = 0; vt < at.length; vt++) {
        var gt = Y(at, vt, it, rt, G + "[" + vt + "]", Ke);
        if (gt instanceof Error)
          return gt;
      }
      return null;
    }
    return U(K);
  }
  function Ct() {
    function Y(K, ht, ut, it, rt) {
      var G = K[ht];
      if (!C(G)) {
        var at = Mt(G);
        return new $("Invalid " + it + " `" + rt + "` of type " + ("`" + at + "` supplied to `" + ut + "`, expected a single ReactElement."));
      }
      return null;
    }
    return U(Y);
  }
  function se() {
    function Y(K, ht, ut, it, rt) {
      var G = K[ht];
      if (!cr.isValidElementType(G)) {
        var at = Mt(G);
        return new $("Invalid " + it + " `" + rt + "` of type " + ("`" + at + "` supplied to `" + ut + "`, expected a single ReactElement type."));
      }
      return null;
    }
    return U(Y);
  }
  function Dt(Y) {
    function K(ht, ut, it, rt, G) {
      if (!(ht[ut] instanceof Y)) {
        var at = Y.name || W, nt = Zt(ht[ut]);
        return new $("Invalid " + rt + " `" + G + "` of type " + ("`" + nt + "` supplied to `" + it + "`, expected ") + ("instance of `" + at + "`."));
      }
      return null;
    }
    return U(K);
  }
  function yt(Y) {
    if (!Array.isArray(Y))
      return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? li("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).") : li("Invalid argument supplied to oneOf, expected an array.")), Si;
    function K(ht, ut, it, rt, G) {
      for (var at = ht[ut], nt = 0; nt < Y.length; nt++)
        if (N(at, Y[nt]))
          return null;
      var vt = JSON.stringify(Y, function(Qt, Et) {
        var ne = It(Et);
        return ne === "symbol" ? String(Et) : Et;
      });
      return new $("Invalid " + rt + " `" + G + "` of value `" + String(at) + "` " + ("supplied to `" + it + "`, expected one of " + vt + "."));
    }
    return U(K);
  }
  function Lt(Y) {
    function K(ht, ut, it, rt, G) {
      if (typeof Y != "function")
        return new $("Property `" + G + "` of component `" + it + "` has invalid PropType notation inside objectOf.");
      var at = ht[ut], nt = Mt(at);
      if (nt !== "object")
        return new $("Invalid " + rt + " `" + G + "` of type " + ("`" + nt + "` supplied to `" + it + "`, expected an object."));
      for (var vt in at)
        if (Ms(at, vt)) {
          var gt = Y(at, vt, it, rt, G + "." + vt, Ke);
          if (gt instanceof Error)
            return gt;
        }
      return null;
    }
    return U(K);
  }
  function At(Y) {
    if (!Array.isArray(Y))
      return process.env.NODE_ENV !== "production" && li("Invalid argument supplied to oneOfType, expected an instance of array."), Si;
    for (var K = 0; K < Y.length; K++) {
      var ht = Y[K];
      if (typeof ht != "function")
        return li("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + pe(ht) + " at index " + K + "."), Si;
    }
    function ut(it, rt, G, at, nt) {
      for (var vt = 0; vt < Y.length; vt++) {
        var gt = Y[vt];
        if (gt(it, rt, G, at, nt, Ke) == null)
          return null;
      }
      return new $("Invalid " + at + " `" + nt + "` supplied to " + ("`" + G + "`."));
    }
    return U(ut);
  }
  function oe() {
    function Y(K, ht, ut, it, rt) {
      return ot(K[ht]) ? null : new $("Invalid " + it + " `" + rt + "` supplied to " + ("`" + ut + "`, expected a ReactNode."));
    }
    return U(Y);
  }
  function ke(Y) {
    function K(ht, ut, it, rt, G) {
      var at = ht[ut], nt = Mt(at);
      if (nt !== "object")
        return new $("Invalid " + rt + " `" + G + "` of type `" + nt + "` " + ("supplied to `" + it + "`, expected `object`."));
      for (var vt in Y) {
        var gt = Y[vt];
        if (!!gt) {
          var Qt = gt(at, vt, it, rt, G + "." + vt, Ke);
          if (Qt)
            return Qt;
        }
      }
      return null;
    }
    return U(K);
  }
  function ye(Y) {
    function K(ht, ut, it, rt, G) {
      var at = ht[ut], nt = Mt(at);
      if (nt !== "object")
        return new $("Invalid " + rt + " `" + G + "` of type `" + nt + "` " + ("supplied to `" + it + "`, expected `object`."));
      var vt = Ts({}, ht[ut], Y);
      for (var gt in vt) {
        var Qt = Y[gt];
        if (!Qt)
          return new $("Invalid " + rt + " `" + G + "` key `" + gt + "` supplied to `" + it + "`.\nBad object: " + JSON.stringify(ht[ut], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(Y), null, "  "));
        var Et = Qt(at, gt, it, rt, G + "." + gt, Ke);
        if (Et)
          return Et;
      }
      return null;
    }
    return U(K);
  }
  function ot(Y) {
    switch (typeof Y) {
      case "number":
      case "string":
      case "undefined":
        return !0;
      case "boolean":
        return !Y;
      case "object":
        if (Array.isArray(Y))
          return Y.every(ot);
        if (Y === null || C(Y))
          return !0;
        var K = V(Y);
        if (K) {
          var ht = K.call(Y), ut;
          if (K !== Y.entries) {
            for (; !(ut = ht.next()).done; )
              if (!ot(ut.value))
                return !1;
          } else
            for (; !(ut = ht.next()).done; ) {
              var it = ut.value;
              if (it && !ot(it[1]))
                return !1;
            }
        } else
          return !1;
        return !0;
      default:
        return !1;
    }
  }
  function xe(Y, K) {
    return Y === "symbol" ? !0 : K ? K["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && K instanceof Symbol : !1;
  }
  function Mt(Y) {
    var K = typeof Y;
    return Array.isArray(Y) ? "array" : Y instanceof RegExp ? "object" : xe(K, Y) ? "symbol" : K;
  }
  function It(Y) {
    if (typeof Y > "u" || Y === null)
      return "" + Y;
    var K = Mt(Y);
    if (K === "object") {
      if (Y instanceof Date)
        return "date";
      if (Y instanceof RegExp)
        return "regexp";
    }
    return K;
  }
  function pe(Y) {
    var K = It(Y);
    switch (K) {
      case "array":
      case "object":
        return "an " + K;
      case "boolean":
      case "date":
      case "regexp":
        return "a " + K;
      default:
        return K;
    }
  }
  function Zt(Y) {
    return !Y.constructor || !Y.constructor.name ? W : Y.constructor.name;
  }
  return D.checkPropTypes = hr, D.resetWarningCache = hr.resetWarningCache, D.PropTypes = D, D;
};
function vr() {
}
function mr() {
}
mr.resetWarningCache = vr;
var Ls = function() {
  function C(j, V, W, D, N, $) {
    if ($ !== Ke) {
      var U = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw U.name = "Invariant Violation", U;
    }
  }
  C.isRequired = C;
  function F() {
    return C;
  }
  var I = {
    array: C,
    bool: C,
    func: C,
    number: C,
    object: C,
    string: C,
    symbol: C,
    any: C,
    arrayOf: F,
    element: C,
    elementType: C,
    instanceOf: F,
    node: C,
    objectOf: F,
    oneOf: F,
    oneOfType: F,
    shape: F,
    exact: F,
    checkPropTypes: mr,
    resetWarningCache: vr
  };
  return I.PropTypes = I, I;
}, Wt = Xi(function(C) {
  if (process.env.NODE_ENV !== "production") {
    var F = cr, I = !0;
    C.exports = Is(F.isElement, I);
  } else
    C.exports = Ls();
}), Rs = function(F) {
  var I = Ot.memo(function(j) {
    var V = j.animationData, W = j.path, D = j.play, N = j.speed, $ = j.direction, U = j.segments, st = j.goTo, mt = j.renderer, xt = j.loop, Ct = j.rendererSettings, se = j.audioFactory, Dt = j.onLoad, yt = j.onComplete, Lt = j.onLoopComplete, At = j.onEnterFrame, oe = j.onSegmentStart, ke = Nr(j, ["animationData", "path", "play", "speed", "direction", "segments", "goTo", "renderer", "loop", "rendererSettings", "audioFactory", "onLoad", "onComplete", "onLoopComplete", "onEnterFrame", "onSegmentStart"]), ye = Ot.useRef(), ot = Ot.useRef(), xe = Ot.useState(!1), Mt = xe[0], It = xe[1], pe = Ot.useState(U), Zt = pe[0], Y = pe[1];
    Ot.useEffect(function() {
      nr(Zt, U) || Y(U);
    }, [U, Zt]);
    var K = Ot.useState(Ct), ht = K[0], ut = K[1];
    Ot.useEffect(function() {
      nr(ht, Ct) || ut(Ct);
    }, [Ct, ht]), Ot.useEffect(function() {
      return function() {
        return ot.current.removeEventListener("complete", yt);
      };
    }, [yt]), Ot.useEffect(function() {
      return function() {
        return ot.current.removeEventListener("loopComplete", Lt);
      };
    }, [Lt]), Ot.useEffect(function() {
      return function() {
        return ot.current.removeEventListener("enterFrame", At);
      };
    }, [At]), Ot.useEffect(function() {
      return function() {
        return ot.current.removeEventListener("segmentStart", oe);
      };
    }, [oe]), Ot.useEffect(function() {
      function rt() {
        return V == null || typeof V != "object" ? V : typeof V.default == "object" ? ar(V.default) : ar(V);
      }
      ot.current = F.loadAnimation({
        animationData: rt(),
        path: W,
        container: ye.current,
        renderer: mt,
        loop: !1,
        autoplay: !1,
        rendererSettings: ht,
        audioFactory: se
      });
      function G() {
        It(!0), Dt();
      }
      return ot.current.addEventListener("DOMLoaded", G), function() {
        ot.current.removeEventListener("DOMLoaded", G), It(!1), ot.current.destroy(), ot.current = void 0;
      };
    }, [xt, mt, ht, V, W, se]), Ot.useEffect(function() {
      ot.current.addEventListener("complete", yt);
    }, [yt]), Ot.useEffect(function() {
      ot.current.addEventListener("loopComplete", Lt);
    }, [Lt]), Ot.useEffect(function() {
      ot.current.addEventListener("enterFrame", At);
    }, [At]), Ot.useEffect(function() {
      ot.current.addEventListener("segmentStart", oe);
    }, [oe]), Ot.useEffect(function() {
      !Mt || (ot.current.loop = xt);
    }, [Mt, xt]);
    var it = Ot.useRef(!1);
    return Ot.useEffect(function() {
      if (!Mt)
        return;
      function rt(vt) {
        ot.current.goToAndPlay(vt, !0), ot.current.setDirection($);
      }
      if (D === !0) {
        var G = !0;
        if (Zt) {
          if (ot.current.playSegments(Zt, G), it.current = !0, $ === -1) {
            var at = Zt[1];
            rt(at);
          }
        } else if (it.current && ot.current.resetSegments(G), it.current = !1, $ === -1) {
          var nt = ot.current.getDuration(!0);
          rt(nt);
        } else
          ot.current.play();
      } else
        D === !1 && ot.current.pause();
    }, [D, Zt, Mt]), Ot.useEffect(function() {
      !Mt || Number.isNaN(N) || ot.current.setSpeed(N);
    }, [N, Mt]), Ot.useEffect(function() {
      !Mt || ot.current.setDirection($);
    }, [$, Mt]), Ot.useEffect(function() {
      if (!!Mt && st != null) {
        var rt = !0;
        D ? ot.current.goToAndPlay(st, rt) : ot.current.goToAndStop(st, rt);
      }
    }, [st, D, Mt]), /* @__PURE__ */ zr.createElement("div", $i({}, ke, {
      ref: ye
    }));
  });
  return I.propTypes = {
    animationData: Wt.object,
    path: Wt.string,
    play: Wt.bool,
    goTo: Wt.number,
    speed: Wt.number,
    direction: Wt.number,
    loop: Wt.oneOfType([Wt.number, Wt.bool]),
    segments: Wt.oneOfType([Wt.arrayOf(Wt.number), Wt.bool]),
    rendererSettings: Wt.object,
    renderer: Wt.string,
    audioFactory: Wt.func,
    onComplete: Wt.func,
    onLoopComplete: Wt.func,
    onEnterFrame: Wt.func,
    onSegmentStart: Wt.func
  }, I.defaultProps = {
    animationData: null,
    path: null,
    play: null,
    segments: null,
    goTo: null,
    speed: 1,
    direction: 1,
    loop: !0,
    rendererSettings: {},
    renderer: "svg",
    audioFactory: null,
    onLoad: function() {
    },
    onComplete: function() {
    },
    onLoopComplete: function() {
    },
    onEnterFrame: function() {
    },
    onSegmentStart: function() {
    }
  }, I;
}, Os = Rs(Br), Vs = Os;
const js = "5.3.4", Ds = 24, Bs = 0, zs = 96, Ns = 500, qs = 500, Ws = "Toggle", $s = 0, Ys = [], Gs = [
  {
    ddd: 0,
    ind: 1,
    ty: 4,
    nm: "Shutting Star",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          250,
          250,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -11.168,
                    -2.743
                  ],
                  [
                    -25,
                    -28
                  ]
                ],
                o: [
                  [
                    28.5,
                    7
                  ],
                  [
                    28.361,
                    31.764
                  ]
                ],
                v: [
                  [
                    -126,
                    -24.5
                  ],
                  [
                    -27,
                    37.5
                  ]
                ],
                c: !1
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "tm",
            s: {
              a: 1,
              k: [
                {
                  i: {
                    x: [
                      0.833
                    ],
                    y: [
                      0.833
                    ]
                  },
                  o: {
                    x: [
                      0.167
                    ],
                    y: [
                      0.167
                    ]
                  },
                  n: [
                    "0p833_0p833_0p167_0p167"
                  ],
                  t: 32,
                  s: [
                    0
                  ],
                  e: [
                    100
                  ]
                },
                {
                  t: 40
                }
              ],
              ix: 1
            },
            e: {
              a: 1,
              k: [
                {
                  i: {
                    x: [
                      0.833
                    ],
                    y: [
                      0.833
                    ]
                  },
                  o: {
                    x: [
                      0.167
                    ],
                    y: [
                      0.167
                    ]
                  },
                  n: [
                    "0p833_0p833_0p167_0p167"
                  ],
                  t: 30,
                  s: [
                    0
                  ],
                  e: [
                    100
                  ]
                },
                {
                  t: 37
                }
              ],
              ix: 2
            },
            o: {
              a: 0,
              k: 0,
              ix: 3
            },
            m: 1,
            ix: 2,
            nm: "Trim Paths 1",
            mn: "ADBE Vector Filter - Trim",
            hd: !1
          },
          {
            ty: "st",
            c: {
              a: 0,
              k: [
                0.933333333333,
                0.992156862745,
                1,
                1
              ],
              ix: 3
            },
            o: {
              a: 0,
              k: 100,
              ix: 4
            },
            w: {
              a: 0,
              k: 1,
              ix: 5
            },
            lc: 2,
            lj: 2,
            nm: "Stroke 1",
            mn: "ADBE Vector Graphic - Stroke",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Shape 1",
        np: 3,
        cix: 2,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 30,
    op: 41,
    st: 30,
    bm: 0
  },
  {
    ddd: 0,
    ind: 2,
    ty: 4,
    nm: "Moon",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.1
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.9
              ],
              y: [
                0
              ]
            },
            n: [
              "0p1_1_0p9_0"
            ],
            t: 0,
            s: [
              -175.595
            ],
            e: [
              0
            ]
          },
          {
            i: {
              x: [
                0.1
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.9
              ],
              y: [
                0
              ]
            },
            n: [
              "0p1_1_0p9_0"
            ],
            t: 24,
            s: [
              0
            ],
            e: [
              0
            ]
          },
          {
            i: {
              x: [
                0.1
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.9
              ],
              y: [
                0
              ]
            },
            n: [
              "0p1_1_0p9_0"
            ],
            t: 48,
            s: [
              0
            ],
            e: [
              -175.595
            ]
          },
          {
            t: 72
          }
        ],
        ix: 10
      },
      p: {
        s: !0,
        x: {
          a: 1,
          k: [
            {
              i: {
                x: [
                  0.1
                ],
                y: [
                  1
                ]
              },
              o: {
                x: [
                  0.9
                ],
                y: [
                  0
                ]
              },
              n: [
                "0p1_1_0p9_0"
              ],
              t: 0,
              s: [
                170
              ],
              e: [
                330
              ]
            },
            {
              i: {
                x: [
                  0.1
                ],
                y: [
                  1
                ]
              },
              o: {
                x: [
                  0.9
                ],
                y: [
                  0
                ]
              },
              n: [
                "0p1_1_0p9_0"
              ],
              t: 24,
              s: [
                330
              ],
              e: [
                330
              ]
            },
            {
              i: {
                x: [
                  0.1
                ],
                y: [
                  1
                ]
              },
              o: {
                x: [
                  0.9
                ],
                y: [
                  0
                ]
              },
              n: [
                "0p1_1_0p9_0"
              ],
              t: 48,
              s: [
                330
              ],
              e: [
                170
              ]
            },
            {
              t: 72
            }
          ],
          ix: 3
        },
        y: {
          a: 0,
          k: 250,
          ix: 4
        }
      },
      a: {
        a: 0,
        k: [
          60.25,
          60.25,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    4.981,
                    1.834
                  ],
                  [
                    0,
                    7.828
                  ],
                  [
                    11.632,
                    0
                  ],
                  [
                    2.39,
                    -0.941
                  ],
                  [
                    -1.477,
                    0
                  ],
                  [
                    0,
                    -11.632
                  ],
                  [
                    6.338,
                    -3.63
                  ],
                  [
                    0,
                    -5.618
                  ],
                  [
                    4.49,
                    -2.06
                  ],
                  [
                    0,
                    6.513
                  ]
                ],
                o: [
                  [
                    6.338,
                    -3.63
                  ],
                  [
                    0,
                    -11.632
                  ],
                  [
                    -2.724,
                    0
                  ],
                  [
                    1.391,
                    -0.289
                  ],
                  [
                    11.632,
                    0
                  ],
                  [
                    0,
                    7.828
                  ],
                  [
                    4.981,
                    1.834
                  ],
                  [
                    0,
                    5.263
                  ],
                  [
                    6.24,
                    -0.973
                  ],
                  [
                    0,
                    -5.619
                  ]
                ],
                v: [
                  [
                    3.775,
                    7.124
                  ],
                  [
                    14.388,
                    -11.16
                  ],
                  [
                    -6.674,
                    -32.221
                  ],
                  [
                    -14.388,
                    -30.757
                  ],
                  [
                    -10.079,
                    -31.2
                  ],
                  [
                    10.983,
                    -10.137
                  ],
                  [
                    0.37,
                    8.146
                  ],
                  [
                    8.911,
                    20.374
                  ],
                  [
                    1.297,
                    32.221
                  ],
                  [
                    12.317,
                    19.353
                  ]
                ],
                c: !0
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ind: 1,
            ty: "sh",
            ix: 2,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1.534,
                    0
                  ],
                  [
                    0,
                    5.888
                  ],
                  [
                    -1.927,
                    1.929
                  ],
                  [
                    0,
                    -4.354
                  ],
                  [
                    -5.888,
                    0
                  ],
                  [
                    -1.93,
                    1.933
                  ]
                ],
                o: [
                  [
                    -5.887,
                    0
                  ],
                  [
                    0,
                    -2.941
                  ],
                  [
                    -3.74,
                    1.656
                  ],
                  [
                    0,
                    5.887
                  ],
                  [
                    2.946,
                    0
                  ],
                  [
                    -1.319,
                    0.584
                  ]
                ],
                v: [
                  [
                    -57.252,
                    37.674
                  ],
                  [
                    -67.912,
                    27.014
                  ],
                  [
                    -64.794,
                    19.481
                  ],
                  [
                    -71.147,
                    29.228
                  ],
                  [
                    -60.487,
                    39.888
                  ],
                  [
                    -52.944,
                    36.76
                  ]
                ],
                c: !0
              },
              ix: 2
            },
            nm: "Path 2",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "fl",
            c: {
              a: 1,
              k: [
                {
                  i: {
                    x: [
                      0.1
                    ],
                    y: [
                      1
                    ]
                  },
                  o: {
                    x: [
                      0.9
                    ],
                    y: [
                      0
                    ]
                  },
                  n: [
                    "0p1_1_0p9_0"
                  ],
                  t: 0,
                  s: [
                    1,
                    0.940106153488,
                    0.53420650959,
                    1
                  ],
                  e: [
                    0.783999992819,
                    0.944999964097,
                    0.969000004787,
                    1
                  ]
                },
                {
                  i: {
                    x: [
                      0.1
                    ],
                    y: [
                      1
                    ]
                  },
                  o: {
                    x: [
                      0.9
                    ],
                    y: [
                      0
                    ]
                  },
                  n: [
                    "0p1_1_0p9_0"
                  ],
                  t: 24,
                  s: [
                    0.783999992819,
                    0.944999964097,
                    0.969000004787,
                    1
                  ],
                  e: [
                    0.783999992819,
                    0.944999964097,
                    0.969000004787,
                    1
                  ]
                },
                {
                  i: {
                    x: [
                      0.1
                    ],
                    y: [
                      1
                    ]
                  },
                  o: {
                    x: [
                      0.9
                    ],
                    y: [
                      0
                    ]
                  },
                  n: [
                    "0p1_1_0p9_0"
                  ],
                  t: 48,
                  s: [
                    0.783999992819,
                    0.944999964097,
                    0.969000004787,
                    1
                  ],
                  e: [
                    1,
                    0.940106153488,
                    0.53420650959,
                    1
                  ]
                },
                {
                  t: 72
                }
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                86.845,
                53.361
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Shadow",
        np: 3,
        cix: 2,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    4.981,
                    1.834
                  ],
                  [
                    0,
                    7.828
                  ],
                  [
                    11.632,
                    0
                  ],
                  [
                    0,
                    -11.632
                  ],
                  [
                    -10.302,
                    -1.374
                  ],
                  [
                    0,
                    -3.827
                  ],
                  [
                    -7.202,
                    0
                  ],
                  [
                    0,
                    7.202
                  ]
                ],
                o: [
                  [
                    6.338,
                    -3.63
                  ],
                  [
                    0,
                    -11.632
                  ],
                  [
                    -11.632,
                    0
                  ],
                  [
                    0,
                    10.679
                  ],
                  [
                    -2.624,
                    2.386
                  ],
                  [
                    0,
                    7.202
                  ],
                  [
                    7.203,
                    0
                  ],
                  [
                    0,
                    -5.619
                  ]
                ],
                v: [
                  [
                    10.449,
                    7.038
                  ],
                  [
                    21.061,
                    -11.246
                  ],
                  [
                    0,
                    -32.307
                  ],
                  [
                    -21.061,
                    -11.246
                  ],
                  [
                    -2.81,
                    9.623
                  ],
                  [
                    -7.092,
                    19.266
                  ],
                  [
                    5.949,
                    32.307
                  ],
                  [
                    18.991,
                    19.266
                  ]
                ],
                c: !0
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ind: 1,
            ty: "sh",
            ix: 2,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    -5.888
                  ],
                  [
                    5.887,
                    0
                  ],
                  [
                    0,
                    5.887
                  ],
                  [
                    -5.888,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    5.887
                  ],
                  [
                    -5.888,
                    0
                  ],
                  [
                    0,
                    -5.888
                  ],
                  [
                    5.887,
                    0
                  ]
                ],
                v: [
                  [
                    -43.153,
                    29.141
                  ],
                  [
                    -53.813,
                    39.801
                  ],
                  [
                    -64.473,
                    29.141
                  ],
                  [
                    -53.813,
                    18.481
                  ]
                ],
                c: !0
              },
              ix: 2
            },
            nm: "Path 2",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "fl",
            c: {
              a: 1,
              k: [
                {
                  i: {
                    x: [
                      0.1
                    ],
                    y: [
                      1
                    ]
                  },
                  o: {
                    x: [
                      0.9
                    ],
                    y: [
                      0
                    ]
                  },
                  n: [
                    "0p1_1_0p9_0"
                  ],
                  t: 0,
                  s: [
                    1,
                    0.940106153488,
                    0.53420650959,
                    1
                  ],
                  e: [
                    0.862999949736,
                    0.957000014361,
                    0.969000004787,
                    1
                  ]
                },
                {
                  i: {
                    x: [
                      0.1
                    ],
                    y: [
                      1
                    ]
                  },
                  o: {
                    x: [
                      0.9
                    ],
                    y: [
                      0
                    ]
                  },
                  n: [
                    "0p1_1_0p9_0"
                  ],
                  t: 24,
                  s: [
                    0.862999949736,
                    0.957000014361,
                    0.969000004787,
                    1
                  ],
                  e: [
                    0.862999949736,
                    0.957000014361,
                    0.969000004787,
                    1
                  ]
                },
                {
                  i: {
                    x: [
                      0.1
                    ],
                    y: [
                      1
                    ]
                  },
                  o: {
                    x: [
                      0.9
                    ],
                    y: [
                      0
                    ]
                  },
                  n: [
                    "0p1_1_0p9_0"
                  ],
                  t: 48,
                  s: [
                    0.862999949736,
                    0.957000014361,
                    0.969000004787,
                    1
                  ],
                  e: [
                    1,
                    0.940106153488,
                    0.53420650959,
                    1
                  ]
                },
                {
                  t: 72
                }
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                80.171,
                53.448
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Crater",
        np: 3,
        cix: 2,
        ix: 2,
        mn: "ADBE Vector Group",
        hd: !1
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    -33.137
                  ],
                  [
                    33.137,
                    0
                  ],
                  [
                    0,
                    33.137
                  ],
                  [
                    -33.137,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    33.137
                  ],
                  [
                    -33.137,
                    0
                  ],
                  [
                    0,
                    -33.137
                  ],
                  [
                    33.137,
                    0
                  ]
                ],
                v: [
                  [
                    60,
                    0
                  ],
                  [
                    0,
                    60
                  ],
                  [
                    -60,
                    0
                  ],
                  [
                    0,
                    -60
                  ]
                ],
                c: !0
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "fl",
            c: {
              a: 1,
              k: [
                {
                  i: {
                    x: [
                      0.1
                    ],
                    y: [
                      1
                    ]
                  },
                  o: {
                    x: [
                      0.9
                    ],
                    y: [
                      0
                    ]
                  },
                  n: [
                    "0p1_1_0p9_0"
                  ],
                  t: 0,
                  s: [
                    1,
                    0.940106153488,
                    0.53420650959,
                    1
                  ],
                  e: [
                    0.933000033509,
                    0.991999966491,
                    1,
                    1
                  ]
                },
                {
                  i: {
                    x: [
                      0.1
                    ],
                    y: [
                      1
                    ]
                  },
                  o: {
                    x: [
                      0.9
                    ],
                    y: [
                      0
                    ]
                  },
                  n: [
                    "0p1_1_0p9_0"
                  ],
                  t: 24,
                  s: [
                    0.933000033509,
                    0.991999966491,
                    1,
                    1
                  ],
                  e: [
                    0.933000033509,
                    0.991999966491,
                    1,
                    1
                  ]
                },
                {
                  i: {
                    x: [
                      0.1
                    ],
                    y: [
                      1
                    ]
                  },
                  o: {
                    x: [
                      0.9
                    ],
                    y: [
                      0
                    ]
                  },
                  n: [
                    "0p1_1_0p9_0"
                  ],
                  t: 48,
                  s: [
                    0.933000033509,
                    0.991999966491,
                    1,
                    1
                  ],
                  e: [
                    1,
                    0.940106153488,
                    0.53420650959,
                    1
                  ]
                },
                {
                  t: 72
                }
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                60.25,
                60.25
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Moon",
        np: 2,
        cix: 2,
        ix: 3,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 96,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 3,
    ty: 4,
    nm: "Stars",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            n: [
              "0p833_0p833_0p167_0p167"
            ],
            t: 11,
            s: [
              0
            ],
            e: [
              100
            ]
          },
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            n: [
              "0p833_0p833_0p167_0p167"
            ],
            t: 13,
            s: [
              100
            ],
            e: [
              100
            ]
          },
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            n: [
              "0p833_0p833_0p167_0p167"
            ],
            t: 59,
            s: [
              100
            ],
            e: [
              0
            ]
          },
          {
            t: 61
          }
        ],
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        s: !0,
        x: {
          a: 1,
          k: [
            {
              i: {
                x: [
                  0.101
                ],
                y: [
                  0.954
                ]
              },
              o: {
                x: [
                  0.9
                ],
                y: [
                  0
                ]
              },
              n: [
                "0p101_0p954_0p9_0"
              ],
              t: 0,
              s: [
                304.75
              ],
              e: [
                190.55
              ]
            },
            {
              i: {
                x: [
                  0.438
                ],
                y: [
                  0.439
                ]
              },
              o: {
                x: [
                  0.397
                ],
                y: [
                  0.396
                ]
              },
              n: [
                "0p438_0p439_0p397_0p396"
              ],
              t: 24,
              s: [
                190.55
              ],
              e: [
                184.75
              ]
            },
            {
              i: {
                x: [
                  0.1
                ],
                y: [
                  1
                ]
              },
              o: {
                x: [
                  0.899
                ],
                y: [
                  -0.043
                ]
              },
              n: [
                "0p1_1_0p899_-0p043"
              ],
              t: 48,
              s: [
                184.75
              ],
              e: [
                304.75
              ]
            },
            {
              t: 72
            }
          ],
          ix: 3
        },
        y: {
          a: 0,
          k: 212.75,
          ix: 4
        }
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            d: 1,
            ty: "el",
            s: {
              a: 0,
              k: [
                10,
                10
              ],
              ix: 2
            },
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 3
            },
            nm: "Ellipse Path 1",
            mn: "ADBE Vector Shape - Ellipse",
            hd: !1
          },
          {
            ty: "st",
            c: {
              a: 0,
              k: [
                1,
                1,
                1,
                1
              ],
              ix: 3
            },
            o: {
              a: 0,
              k: 100,
              ix: 4
            },
            w: {
              a: 0,
              k: 32,
              ix: 5
            },
            lc: 1,
            lj: 1,
            ml: 4,
            ml2: {
              a: 0,
              k: 4,
              ix: 8
            },
            nm: "Stroke 1",
            mn: "ADBE Vector Graphic - Stroke",
            hd: !0
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.933333333333,
                0.992156862745,
                1,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                -32.5,
                65
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Star 03",
        np: 3,
        cix: 2,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      },
      {
        ty: "gr",
        it: [
          {
            d: 1,
            ty: "el",
            s: {
              a: 0,
              k: [
                6,
                6
              ],
              ix: 2
            },
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 3
            },
            nm: "Ellipse Path 1",
            mn: "ADBE Vector Shape - Ellipse",
            hd: !1
          },
          {
            ty: "st",
            c: {
              a: 0,
              k: [
                1,
                1,
                1,
                1
              ],
              ix: 3
            },
            o: {
              a: 0,
              k: 100,
              ix: 4
            },
            w: {
              a: 0,
              k: 32,
              ix: 5
            },
            lc: 1,
            lj: 1,
            ml: 4,
            ml2: {
              a: 0,
              k: 4,
              ix: 8
            },
            nm: "Stroke 1",
            mn: "ADBE Vector Graphic - Stroke",
            hd: !0
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.933333333333,
                0.992156862745,
                1,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                47.5,
                45
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Star 02",
        np: 3,
        cix: 2,
        ix: 2,
        mn: "ADBE Vector Group",
        hd: !1
      },
      {
        ty: "gr",
        it: [
          {
            d: 1,
            ty: "el",
            s: {
              a: 0,
              k: [
                8,
                8
              ],
              ix: 2
            },
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 3
            },
            nm: "Ellipse Path 1",
            mn: "ADBE Vector Shape - Ellipse",
            hd: !1
          },
          {
            ty: "st",
            c: {
              a: 0,
              k: [
                1,
                1,
                1,
                1
              ],
              ix: 3
            },
            o: {
              a: 0,
              k: 100,
              ix: 4
            },
            w: {
              a: 0,
              k: 32,
              ix: 5
            },
            lc: 1,
            lj: 1,
            ml: 4,
            ml2: {
              a: 0,
              k: 4,
              ix: 8
            },
            nm: "Stroke 1",
            mn: "ADBE Vector Graphic - Stroke",
            hd: !0
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.933333333333,
                0.992156862745,
                1,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Star 01",
        np: 3,
        cix: 2,
        ix: 3,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 96,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 4,
    ty: 4,
    nm: "Cloud 1",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            n: [
              "0p833_0p833_0p167_0p167"
            ],
            t: 11,
            s: [
              100
            ],
            e: [
              0
            ]
          },
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            n: [
              "0p833_0p833_0p167_0p167"
            ],
            t: 13,
            s: [
              0
            ],
            e: [
              0
            ]
          },
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            n: [
              "0p833_0p833_0p167_0p167"
            ],
            t: 59,
            s: [
              0
            ],
            e: [
              100
            ]
          },
          {
            t: 61
          }
        ],
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        s: !0,
        x: {
          a: 1,
          k: [
            {
              i: {
                x: [
                  0.1
                ],
                y: [
                  1
                ]
              },
              o: {
                x: [
                  0.9
                ],
                y: [
                  0
                ]
              },
              n: [
                "0p1_1_0p9_0"
              ],
              t: 0,
              s: [
                275.5
              ],
              e: [
                184
              ]
            },
            {
              i: {
                x: [
                  0.1
                ],
                y: [
                  1
                ]
              },
              o: {
                x: [
                  0.9
                ],
                y: [
                  0
                ]
              },
              n: [
                "0p1_1_0p9_0"
              ],
              t: 24,
              s: [
                184
              ],
              e: [
                184
              ]
            },
            {
              i: {
                x: [
                  0.102
                ],
                y: [
                  0.92
                ]
              },
              o: {
                x: [
                  0.9
                ],
                y: [
                  0
                ]
              },
              n: [
                "0p102_0p92_0p9_0"
              ],
              t: 48,
              s: [
                184
              ],
              e: [
                269.054
              ]
            },
            {
              i: {
                x: [
                  0.731
                ],
                y: [
                  1
                ]
              },
              o: {
                x: [
                  0.225
                ],
                y: [
                  0.253
                ]
              },
              n: [
                "0p731_1_0p225_0p253"
              ],
              t: 72,
              s: [
                269.054
              ],
              e: [
                275.5
              ]
            },
            {
              t: 95
            }
          ],
          ix: 3
        },
        y: {
          a: 0,
          k: 220,
          ix: 4
        }
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    4.193,
                    0.263
                  ],
                  [
                    4.158,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.688,
                    -3.952
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -4.43
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -4.43,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    4.43
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    -0.677,
                    -3.965
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -4.149,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -4.43,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    4.43
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    4.43,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -4.259
                  ]
                ],
                v: [
                  [
                    11.887,
                    -4.516
                  ],
                  [
                    3.601,
                    -11.5
                  ],
                  [
                    3.601,
                    -11.5
                  ],
                  [
                    -4.68,
                    -4.542
                  ],
                  [
                    -11.38,
                    -4.542
                  ],
                  [
                    -19.401,
                    3.479
                  ],
                  [
                    -19.401,
                    3.479
                  ],
                  [
                    -11.38,
                    11.5
                  ],
                  [
                    11.38,
                    11.5
                  ],
                  [
                    19.401,
                    3.479
                  ],
                  [
                    19.401,
                    3.479
                  ]
                ],
                c: !0
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "st",
            c: {
              a: 0,
              k: [
                1,
                1,
                1,
                1
              ],
              ix: 3
            },
            o: {
              a: 0,
              k: 100,
              ix: 4
            },
            w: {
              a: 0,
              k: 32,
              ix: 5
            },
            lc: 1,
            lj: 1,
            ml: 4,
            ml2: {
              a: 0,
              k: 4,
              ix: 8
            },
            nm: "Stroke 1",
            mn: "ADBE Vector Graphic - Stroke",
            hd: !0
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                1,
                1,
                1,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Shape 1",
        np: 3,
        cix: 2,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 96,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 5,
    ty: 4,
    nm: "Cloud 2",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            n: [
              "0p833_0p833_0p167_0p167"
            ],
            t: 11,
            s: [
              100
            ],
            e: [
              0
            ]
          },
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            n: [
              "0p833_0p833_0p167_0p167"
            ],
            t: 13,
            s: [
              0
            ],
            e: [
              0
            ]
          },
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            n: [
              "0p833_0p833_0p167_0p167"
            ],
            t: 59,
            s: [
              0
            ],
            e: [
              100
            ]
          },
          {
            t: 61
          }
        ],
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        s: !0,
        x: {
          a: 1,
          k: [
            {
              i: {
                x: [
                  0.1
                ],
                y: [
                  1
                ]
              },
              o: {
                x: [
                  0.9
                ],
                y: [
                  0
                ]
              },
              n: [
                "0p1_1_0p9_0"
              ],
              t: 0,
              s: [
                330.5
              ],
              e: [
                167.5
              ]
            },
            {
              i: {
                x: [
                  0.1
                ],
                y: [
                  1
                ]
              },
              o: {
                x: [
                  0.9
                ],
                y: [
                  0
                ]
              },
              n: [
                "0p1_1_0p9_0"
              ],
              t: 24,
              s: [
                167.5
              ],
              e: [
                167.5
              ]
            },
            {
              i: {
                x: [
                  0.101
                ],
                y: [
                  0.95
                ]
              },
              o: {
                x: [
                  0.9
                ],
                y: [
                  0
                ]
              },
              n: [
                "0p101_0p95_0p9_0"
              ],
              t: 48,
              s: [
                167.5
              ],
              e: [
                324.054
              ]
            },
            {
              i: {
                x: [
                  0.731
                ],
                y: [
                  1
                ]
              },
              o: {
                x: [
                  0.218
                ],
                y: [
                  0.284
                ]
              },
              n: [
                "0p731_1_0p218_0p284"
              ],
              t: 72,
              s: [
                324.054
              ],
              e: [
                330.5
              ]
            },
            {
              t: 95
            }
          ],
          ix: 3
        },
        y: {
          a: 0,
          k: 265,
          ix: 4
        }
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    6.375,
                    0.399
                  ],
                  [
                    6.322,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.046,
                    -6.009
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -6.736
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -6.736,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    6.736
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    -1.03,
                    -6.029
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -6.308,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -6.736,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    6.736
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    6.736,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -6.476
                  ]
                ],
                v: [
                  [
                    16.075,
                    -1.367
                  ],
                  [
                    3.476,
                    -11.986
                  ],
                  [
                    3.476,
                    -11.986
                  ],
                  [
                    -9.116,
                    -1.406
                  ],
                  [
                    -19.304,
                    -1.406
                  ],
                  [
                    -31.5,
                    10.79
                  ],
                  [
                    -31.5,
                    10.79
                  ],
                  [
                    -19.304,
                    22.986
                  ],
                  [
                    15.304,
                    22.986
                  ],
                  [
                    27.5,
                    10.79
                  ],
                  [
                    27.5,
                    10.79
                  ]
                ],
                c: !0
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "st",
            c: {
              a: 0,
              k: [
                1,
                1,
                1,
                1
              ],
              ix: 3
            },
            o: {
              a: 0,
              k: 100,
              ix: 4
            },
            w: {
              a: 0,
              k: 32,
              ix: 5
            },
            lc: 1,
            lj: 1,
            ml: 4,
            ml2: {
              a: 0,
              k: 4,
              ix: 8
            },
            nm: "Stroke 1",
            mn: "ADBE Vector Graphic - Stroke",
            hd: !0
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                1,
                1,
                1,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Shape 1",
        np: 3,
        cix: 2,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 96,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 6,
    ty: 4,
    nm: "Shadow",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 15,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          250,
          180,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          -37.154,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    37.432,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -37.432
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.021,
                    -0.694
                  ],
                  [
                    -36.733,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -1.105,
                    -36.465
                  ],
                  [
                    0,
                    0.699
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -37.432,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.699
                  ],
                  [
                    1.105,
                    -36.465
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    36.733,
                    0
                  ],
                  [
                    0.021,
                    -0.694
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -37.432
                  ]
                ],
                v: [
                  [
                    82.223,
                    -37.154
                  ],
                  [
                    -82.223,
                    -37.154
                  ],
                  [
                    -150,
                    30.623
                  ],
                  [
                    -150,
                    35.069
                  ],
                  [
                    -149.947,
                    37.154
                  ],
                  [
                    -82.223,
                    -28.538
                  ],
                  [
                    82.223,
                    -28.538
                  ],
                  [
                    149.947,
                    37.154
                  ],
                  [
                    150,
                    35.069
                  ],
                  [
                    150,
                    30.623
                  ]
                ],
                c: !0
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "st",
            c: {
              a: 0,
              k: [
                0.933333333333,
                0.992156862745,
                1,
                1
              ],
              ix: 3
            },
            o: {
              a: 0,
              k: 100,
              ix: 4
            },
            w: {
              a: 0,
              k: 1,
              ix: 5
            },
            lc: 1,
            lj: 1,
            ml: 4,
            ml2: {
              a: 0,
              k: 4,
              ix: 8
            },
            nm: "Stroke 1",
            mn: "ADBE Vector Graphic - Stroke",
            hd: !0
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0,
                0,
                0,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Shape 1",
        np: 3,
        cix: 2,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 96,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 7,
    ty: 4,
    nm: "Base",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          250,
          180,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          -70,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ty: "rc",
            d: 1,
            s: {
              a: 0,
              k: [
                300,
                140
              ],
              ix: 2
            },
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 320,
              ix: 4
            },
            nm: "Rectangle Path 1",
            mn: "ADBE Vector Shape - Rect",
            hd: !1
          },
          {
            ty: "fl",
            c: {
              a: 1,
              k: [
                {
                  i: {
                    x: [
                      0.1
                    ],
                    y: [
                      1
                    ]
                  },
                  o: {
                    x: [
                      0.9
                    ],
                    y: [
                      0
                    ]
                  },
                  n: [
                    "0p1_1_0p9_0"
                  ],
                  t: 0,
                  s: [
                    0.413832724094,
                    0.784281790257,
                    1,
                    1
                  ],
                  e: [
                    0.0580506064,
                    0.077281616628,
                    0.256188720465,
                    1
                  ]
                },
                {
                  i: {
                    x: [
                      0.1
                    ],
                    y: [
                      1
                    ]
                  },
                  o: {
                    x: [
                      0.9
                    ],
                    y: [
                      0
                    ]
                  },
                  n: [
                    "0p1_1_0p9_0"
                  ],
                  t: 24,
                  s: [
                    0.0580506064,
                    0.077281616628,
                    0.256188720465,
                    1
                  ],
                  e: [
                    0.0580506064,
                    0.077281616628,
                    0.256188720465,
                    1
                  ]
                },
                {
                  i: {
                    x: [
                      0.1
                    ],
                    y: [
                      1
                    ]
                  },
                  o: {
                    x: [
                      0.9
                    ],
                    y: [
                      0
                    ]
                  },
                  n: [
                    "0p1_1_0p9_0"
                  ],
                  t: 48,
                  s: [
                    0.0580506064,
                    0.077281616628,
                    0.256188720465,
                    1
                  ],
                  e: [
                    0.413832724094,
                    0.784281790257,
                    1,
                    1
                  ]
                },
                {
                  t: 72
                }
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Rectangle 1",
        np: 2,
        cix: 2,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 96,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 8,
    ty: 4,
    nm: "BG",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          250,
          250,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ty: "rc",
            d: 1,
            s: {
              a: 0,
              k: [
                500,
                500
              ],
              ix: 2
            },
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 4
            },
            nm: "Rectangle Path 1",
            mn: "ADBE Vector Shape - Rect",
            hd: !1
          },
          {
            ty: "st",
            c: {
              a: 0,
              k: [
                1,
                1,
                1,
                1
              ],
              ix: 3
            },
            o: {
              a: 0,
              k: 100,
              ix: 4
            },
            w: {
              a: 0,
              k: 18.8,
              ix: 5
            },
            lc: 1,
            lj: 1,
            ml: 4,
            ml2: {
              a: 0,
              k: 4,
              ix: 8
            },
            nm: "Stroke 1",
            mn: "ADBE Vector Graphic - Stroke",
            hd: !0
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Rectangle 1",
        np: 3,
        cix: 2,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 96,
    st: 0,
    bm: 0
  }
], Us = [], Xs = {
  v: js,
  fr: Ds,
  ip: Bs,
  op: zs,
  w: Ns,
  h: qs,
  nm: Ws,
  ddd: $s,
  assets: Ys,
  layers: Gs,
  markers: Us
}, Hs = "_button_2eo6g_1", Ks = "_player_2eo6g_12", Ni = {
  button: Hs,
  player: Ks,
  "player--loaded": "_player--loaded_2eo6g_22"
}, Js = (C) => {
  var V;
  const F = `${C}`, I = parseFloat(F), j = (V = F.match(/[\d.\-+]*\s*(.*)/)) == null ? void 0 : V[1];
  return [isNaN(I) ? 0 : I, j || "px"];
}, qi = [5, 50], Wi = [50, 95], Zs = hi.memo(({
  attributes: C = {},
  isDarkMode: F,
  onChange: I,
  size: j = 85,
  speed: V = 1.3,
  className: W = "",
  id: D = ""
}) => {
  const [N, $] = Js(j), [U, st] = hi.useState([0, 0]), [mt] = hi.useState(F ? Wi[0] : qi[0]), [xt, Ct] = hi.useState(!1), [se, Dt] = hi.useState(!1);
  hi.useEffect(() => {
    yt();
  }, [F]);
  const yt = () => {
    st(F ? qi : Wi), Ct(se);
  }, Lt = () => {
    st(F ? Wi : qi), Ct(!0), I(!F);
  }, At = () => {
    Dt(!0);
  };
  return rr("button", {
    ...C,
    onClick: Lt,
    style: {
      width: `${N}${$}`,
      height: `${N * 0.5}${$}`
    },
    className: sr(Ni.button, W),
    id: D,
    children: rr(Vs, {
      className: sr(Ni.player, {
        [Ni["player--loaded"]]: se
      }),
      style: {
        marginTop: `${N * -0.575}${$}`,
        marginLeft: `${N * -0.32}${$}`,
        width: `${N * 1.65}${$}`,
        height: `${N * 1.65}${$}`
      },
      loop: !1,
      speed: V,
      play: xt,
      animationData: Xs,
      goTo: mt,
      segments: U,
      onLoad: At
    })
  });
}, Qs);
Zs.displayName = "DarkModeToggle";
function Qs(C, F) {
  return C.size === F.size && C.isDarkMode === F.isDarkMode && C.speed === F.speed && C.className === F.className && C.id === F.id;
}
export {
  Zs as DarkModeToggle
};
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("._button_2eo6g_1{cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background-color:transparent;padding:0}._player_2eo6g_12{display:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}._player--loaded_2eo6g_22{display:-webkit-box;display:-ms-flexbox;display:flex}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
