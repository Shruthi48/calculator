// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
window.addEventListener('load', function () {
  // const isDay = false;
  // console.log('onload  called');
  // const calculatorHead = document.querySelectorAll('.calculator-container__head');
  // const calHeadStyleElement = calculatorHead[0].style;
  // calHeadStyleElement.backgroundSize = "cover";
  // calHeadStyleElement.height = "200px";
  // calHeadStyleElement.width = "500px";
  // if(isDay) {
  //     //console.log('tru;')
  //     calHeadStyleElement.backgroundImage = "url(/bg.19f8c1d4.png)";        
  // } else {
  //     calHeadStyleElement.backgroundImage = "url(/Bitmap.f6dbe94f.png)";
  // }
  changeMode();
  var isDay = true;

  function change() {
    var i = 0;
    var doc = document.body;
    var colorTop = ["#a1c4fd", "#a18cd1", "#fad0c4", "#fbc2eb"];
    var colorBottom = ["#c2e9fb", "#fbc2eb", "#ffd1ff", "#a6c1ee"];
    doc.style.backgroundImage = "linear-gradient(to top, ".concat(colorTop[i], " 0%, ").concat(colorBottom[i], " 100%)");
    i = (i + 1) % colorTop.length;
  }

  setInterval(change, 1000); //   const calSwitch = document.querySelectorAll('.calculator-container__switch');
  //   const dayImage = `<img src="./assets/day_mode.png" />`;
  //   const nightImage = '<img src="./assets/night_mode.png" />';
  //calSwitch[0].append(dayImage);

  var changeModeSelector = document.querySelectorAll(".calculator-container__switch img");
  changeModeSelector[0].addEventListener('click', function () {
    console.log('clicked');
    isDay = !isDay;
    changeMode(isDay, this);
  });

  function changeMode(isDay) {
    var calculatorHead = document.querySelectorAll('.calculator-container__head');
    var changeModeSelector = document.querySelectorAll(".calculator-container__switch img");
    var changeBottomSelector = document.querySelectorAll(".calculator-container__bottom");
    var changeBottomButtonSelector = document.querySelectorAll(".calculator-container__bottom .button");
    var typedNumbers = document.querySelector(".calculator-container__Result");
    var res = document.querySelector('.calculator-container__mid');
    var symbolsArray = ['+/-', '%', '/', '*', '-', '+', '='];
    var resArray = [];
    var sym = '';
    var leftOperand = [];
    var RightOperand = [];
    changeBottomButtonSelector.forEach(function (item, index) {
      item.addEventListener('click', function () {
        var result;
        console.log(this.getAttribute("value"));

        switch (this.getAttribute("value")) {
          case '+':
            {
              sym = this.getAttribute("value");
              leftOperand = resArray.splice(0, resArray.length);
              console.log(leftOperand);
            }
            break;

          case '-':
            {
              sym = this.getAttribute("value");
              leftOperand = resArray.splice(0, resArray.length);
            }
            break;

          case '*':
            {
              sym = this.getAttribute("value");
              leftOperand = resArray.splice(0, resArray.length);
            }
            break;

          case '/':
            {
              sym = this.getAttribute("value");
              leftOperand = resArray.splice(0, resArray.length);
            }
            break;

          case '%':
            {
              sym = this.getAttribute("value");
              leftOperand = resArray.splice(0, resArray.length);
            }
            break;

          case '^':
            {
              resArray = [];
              leftOperand = [];
              typedNumbers.innerHTML = '';
              res.innerHTML = '';
              return;
            }
            break;

          case '=':
            {
              if (resArray.length == 0) return; //console.log(leftOperand);
              //console.log('parseFloat(leftOperand.join())', parseFloat(leftOperand.join()));

              result = eval(parseFloat(leftOperand.join()) + sym + parseFloat(resArray.join()));
              res.append(result);
            }
            break;

          default:
            {
              resArray.push(this.getAttribute("value")); //console.log('resArray',resArray);
            }
        }

        typedNumbers.append(this.getAttribute("value"));
      });
    }); ////this code is repetative !! Would use a map to check the conditions based on symbol value, needs optimization

    var calHeadStyleElement = calculatorHead[0].style;
    calHeadStyleElement.backgroundSize = "cover";
    calHeadStyleElement.height = "250px";
    calHeadStyleElement.width = "500px";

    if (isDay) {
      calHeadStyleElement.backgroundImage = "url(/bg.19f8c1d4.png)";
      changeModeSelector[0].src = '/night_mode.b1fdd766.png';
      changeBottomSelector[0].style.backgroundColor = "white";
      changeBottomButtonSelector.forEach(function (item, index) {
        // item.addEventListener('click', function() {
        //     console.log(this.getAttribute("value"));
        // })
        changeBottomButtonSelector[index].style.color = "black";
        changeBottomButtonSelector[index].style.backgroundImage = "background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);";
      });
    } else {
      calHeadStyleElement.backgroundImage = "url(/Bitmap.f6dbe94f.png)";
      changeModeSelector[0].src = '/day_mode.e505210c.png';
      changeBottomSelector[0].style.backgroundColor = "black";
      changeBottomButtonSelector.forEach(function (item, index) {
        changeBottomButtonSelector[index].style.color = "gray";
        changeBottomButtonSelector[index].style.backgroundImage = "background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);";
      });
    }
  } //    let buttonValues = [1,2,3,4,5,6,7,8,9,0];
  //    let customButtons = buttonValues.map((item,index) => 
  //     <button class="button ">{item}</button>
  //    );
  //    const buttonHolder = document.querySelectorAll('.calculator-container__bottom');
  //     buttonHolder[0].append(customButtons);

});
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50668" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map