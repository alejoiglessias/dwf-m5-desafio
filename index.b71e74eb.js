// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3LmCz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _router = require("./router");
var _button = require("./components/button");
var _move = require("./components/move");
var _countdown = require("./components/countdown");
var _result = require("./components/result");
(function main() {
    (0, _router.initRouter)();
    (0, _button.initButtonComponent)();
    (0, _move.initMoveComponent)();
    (0, _countdown.initCountdownComponent)();
    (0, _result.initResultComponent)();
})();

},{"./components/button":"jqdBz","./router":"4QFWt","./components/move":"aAQk8","./components/countdown":"d6d8D","./components/result":"92YXQ"}],"jqdBz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initButtonComponent", ()=>initButtonComponent);
function initButtonComponent() {
    class MyButton extends HTMLElement {
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            this.classList.add("button");
            const style = document.createElement("style");
            style.textContent = `.button {
        font-family: "Odibee Sans";
        font-weight: 400;
        font-size: 45px;
        line-height: 50px;
        text-align: center;
        color: var(--light-cyan);
      
        width: 100%;
        height: 100%;

        padding: 9px 0px;

        background-color: var(--brandeis-blue);
      
        border: 10px solid var(--imperial-blue);
        border-radius: 10px;

        display: block;
      }`;
            this.appendChild(style);
        }
    }
    customElements.define("my-button", MyButton);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
parcelHelpers.export(exports, "goTo", ()=>goTo);
var _welcome = require("./pages/welcome/welcome");
var _instructions = require("./pages/instructions/instructions");
var _play = require("./pages/play/play");
const routes = [
    {
        path: /\//,
        component: (0, _welcome.initWelcomePage)()
    },
    {
        path: /\/instructions/,
        component: (0, _instructions.initInstructionsPage)()
    },
    {
        path: /\/play/,
        component: (0, _play.initPlayPage)()
    }
];
function initRouter() {
    goTo(location.pathname);
}
function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
}
function handleRoute(route) {
    const root = document.querySelector(".root");
    for (const r of routes)if (r.path.test(route)) {
        const element = r.component;
        if (root.firstChild) root.firstChild.remove();
        root.appendChild(element);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pages/welcome/welcome":"haaqF","./pages/instructions/instructions":"6Ch8H","./pages/play/play":"gMGr0"}],"haaqF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcomePage", ()=>initWelcomePage);
function initWelcomePage() {
    const welcomePage = document.createElement("div");
    welcomePage.classList.add("welcome");
    welcomePage.innerHTML = `<div class="welcome__container">
  <h1 class="welcome__title">
    <span>Piedra Papel </span><span class="welcome__title--eton">ó</span>
    <span>Tijera</span>
  </h1>

  <div class="welcome__button">
    <a class="welcome__link" href="../instructions"
      ><my-button>Empezar</my-button></a
    >
  </div>
</div>

<div class="welcome__hands">
  <my-move class="welcome__move" type="scissors"></my-move>
  <my-move class="welcome__move" type="rock"></my-move>
  <my-move class="welcome__move" type="paper"></my-move>
</div>`;
    return welcomePage;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Ch8H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstructionsPage", ()=>initInstructionsPage);
function initInstructionsPage() {
    const instructionsPage = document.createElement("div");
    instructionsPage.classList.add("instructions");
    instructionsPage.innerHTML = `<div class="instructions__container">
  <h2 class="instructions__info">
    Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3
    segundos.
  </h2>

  <div class="instructions__button">
    <a class="instructions__link" href="../play"
      ><my-button>¡Jugar!</my-button></a
    >
  </div>
</div>

<div class="instructions__hands">
  <my-move class="instructions__move" type="scissors"></my-move>
  <my-move class="instructions__move" type="rock"></my-move>
  <my-move class="instructions__move" type="paper"></my-move>
</div>`;
    return instructionsPage;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gMGr0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPlayPage", ()=>initPlayPage);
var _router = require("../../router");
var _state = require("../../state");
function initPlayPage() {
    const playPage = document.createElement("div");
    playPage.classList.add("play");
    playPage.innerHTML = `<div class="play__container">
  <my-countdown></my-countdown>
</div>

<div class="play__hands">
  <my-move class="play__move" type="scissors"></my-move>
  <my-move class="play__move" type="rock"></my-move>
  <my-move class="play__move" type="paper"></my-move>
</div>`;
    if (location.pathname == "/play") initCountdown(playPage);
    return playPage;
}
function initCountdown(container) {
    myMove(container);
    let count = 3;
    const countdown = setInterval(()=>{
        count--;
        if (count == 0) {
            clearInterval(countdown);
            const checkMove = document.querySelector(".play__move--select");
            if (checkMove) {
                const myPlay = checkMove.getAttribute("type");
                const computerPlay = computerMove();
                (0, _state.state).setMove(myPlay, computerPlay);
                container.innerHTML = `<div class="play__result">
        <my-move
          class="play__position play__computer"
          type="${computerPlay}"
        ></my-move>
        <my-move class="play__position play__player" type="${myPlay}"></my-move>
      </div>`;
                const winner = (0, _state.state).whoWins(myPlay, computerPlay);
                initResult(winner);
            } else (0, _router.goTo)("/instructions");
        }
    }, 1000);
    function myMove(container) {
        const moves = [
            "rock",
            "paper",
            "scissors"
        ];
        moves.forEach((move)=>{
            const hand = container.querySelector(`[type=${move}]`);
            hand?.addEventListener("click", ()=>{
                lowerOpacity(container);
                hand.classList.add("play__move--select");
            });
        });
    }
    function lowerOpacity(container) {
        const hands = container.querySelectorAll(".play__move");
        hands.forEach((hand)=>{
            hand.classList.remove("play__move--select");
            hand.classList.add("play__move--blurred");
        });
    }
    function computerMove() {
        const number = Math.floor(Math.random() * 3);
        const move = [
            "rock",
            "paper",
            "scissors"
        ][number];
        return move;
    }
    function initResult(result) {
        const countdown = setTimeout(()=>{
            clearTimeout(countdown);
            const resultPage = document.createElement("div");
            resultPage.classList.add("result");
            if (result == "computer") resultPage.classList.add("result--lose");
            else resultPage.classList.add("result--win");
            const score = getScore();
            resultPage.innerHTML = `<div class="result__image">
        <my-result result="${result}"></my-result>
      </div>
      
      <div class="result__box">
        <h4 class="result__score">Score</h4>
        <h5 class="result__text">Vos: ${score.player}</h5>
        <h5 class="result__text">Máquina: ${score.computer}</h5>
      </div>
      
      <div class="result__button">
        <a class="result__link" href="../instructions"
          ><my-button>Volver a Jugar</my-button></a
        >
      </div>`;
            container.appendChild(resultPage);
        }, 1000);
    }
    function getScore() {
        const currentState = (0, _state.state).getState();
        const score = {
            player: 0,
            computer: 0
        };
        currentState.history.forEach((game)=>{
            const result = (0, _state.state).whoWins(game.myPlay, game.computerPlay);
            if (result == "player") score.player++;
            else if (result == "computer") score.computer++;
        });
        return score;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../state":"1Yeju","../../router":"4QFWt"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            myPlay: "",
            computerPlay: ""
        },
        history: []
    },
    loadState () {
        const state = localStorage.getItem("state");
        if (state) {
            const data = JSON.parse(state);
            return data;
        } else {
            const data = this.data;
            return data;
        }
    },
    saveState (state) {
        localStorage.setItem("state", JSON.stringify(state));
    },
    getState () {
        return this.loadState();
    },
    setState (newState) {
        this.data = newState;
        this.saveState(newState);
    },
    setMove (myPlay, computerPlay) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = myPlay;
        currentState.currentGame.computerPlay = computerPlay;
        this.pushToHistory(currentState.currentGame);
    },
    pushToHistory (play) {
        const currentState = this.getState();
        currentState.history.push(play);
        this.setState(currentState);
    },
    whoWins (myPlay, computerPlay) {
        function winner(p1, p2) {
            return p1 === "scissors" && p2 === "paper" || p1 === "rock" && p2 === "scissors" || p1 === "paper" && p2 === "rock";
        }
        if (winner(myPlay, computerPlay)) return "player";
        else if (winner(computerPlay, myPlay)) return "computer";
        else return "draw";
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAQk8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initMoveComponent", ()=>initMoveComponent);
function initMoveComponent() {
    class MyMove extends HTMLElement {
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const type = this.getAttribute("type");
            const rockURL = require("75e5dc88732334d1");
            const paperURL = require("fbb0e504239b8cdc");
            const scissorsURL = require("e0bb95d043bf1ec4");
            this.innerHTML = `${type == "rock" ? `<img class="image" src="${rockURL}">` : type == "paper" ? `<img class="image" src="${paperURL}">` : `<img class="image" src="${scissorsURL}">`}`;
            const style = document.createElement("style");
            style.textContent = `.image {
        width: 100%;
        height: 100%;
      }`;
            this.appendChild(style);
        }
    }
    customElements.define("my-move", MyMove);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","fbb0e504239b8cdc":"dZmU6","e0bb95d043bf1ec4":"cshm7","75e5dc88732334d1":"vKmMx"}],"dZmU6":[function(require,module,exports) {
module.exports = require("201e0494f61ad31c").getBundleURL("7UhFu") + "paper.48246ca0.svg" + "?" + Date.now();

},{"201e0494f61ad31c":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"cshm7":[function(require,module,exports) {
module.exports = require("f1f6abd2225d48d").getBundleURL("7UhFu") + "scissors.a521238b.svg" + "?" + Date.now();

},{"f1f6abd2225d48d":"lgJ39"}],"vKmMx":[function(require,module,exports) {
module.exports = require("50125a1a7157f25d").getBundleURL("7UhFu") + "rock.74a28346.svg" + "?" + Date.now();

},{"50125a1a7157f25d":"lgJ39"}],"d6d8D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCountdownComponent", ()=>initCountdownComponent);
function initCountdownComponent() {
    class MyCountdown extends HTMLElement {
        shadow = this.attachShadow({
            mode: "open"
        });
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            let count = 3;
            const myCountdown = document.createElement("p");
            myCountdown.classList.add("countdown");
            myCountdown.textContent = count.toString();
            const countdown = setInterval(()=>{
                count--;
                myCountdown.textContent = count.toString();
                if (count == 0) clearInterval(countdown);
            }, 1000);
            const style = document.createElement("style");
            style.innerHTML = `.countdown {
        font-family: "American Typewriter Bold";
        font-weight: 700;
        font-size: 100px;
        line-height: 100%;
        text-align: center;
        color: black;
      }`;
            this.shadow.appendChild(style);
            this.shadow.appendChild(myCountdown);
        }
    }
    customElements.define("my-countdown", MyCountdown);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"92YXQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResultComponent", ()=>initResultComponent);
function initResultComponent() {
    class MyResult extends HTMLElement {
        shadow = this.attachShadow({
            mode: "open"
        });
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const myResult = document.createElement("div");
            myResult.classList.add("result");
            const greenStarURL = require("fa5c37f8e39cc93e");
            const redStarURL = require("b9fc512c8e30b34d");
            const result = this.getAttribute("result");
            if (result == "player") myResult.innerHTML = `<img src="${greenStarURL}" />
        <h3 class="text">Ganaste</h3>`;
            else if (result == "computer") myResult.innerHTML = `<img src="${redStarURL}" />
        <h3 class="text">Perdiste</h3>`;
            else myResult.innerHTML = `<img src="${greenStarURL}" />
        <h3 class="text">Empate</h3>`;
            const style = document.createElement("style");
            style.textContent = `.result {
        position: relative;
        text-align: center;
      }
      
      .text {
        font-family: "Odibee Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 55px;
        line-height: 61px;
        letter-spacing: 0.05em;
        color: #ffffff;
      
        position: absolute;
        left: 21.09%;
        right: 15.77%;
        top: 37.15%;
        bottom: 39.39%;
      
        margin: 0px;
      }`;
            this.shadow.appendChild(style);
            this.shadow.appendChild(myResult);
        }
    }
    customElements.define("my-result", MyResult);
}

},{"fa5c37f8e39cc93e":"akLJ1","b9fc512c8e30b34d":"6PDdL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"akLJ1":[function(require,module,exports) {
module.exports = require("5a4e721ce4833c54").getBundleURL("7UhFu") + "green-star.5230059c.svg" + "?" + Date.now();

},{"5a4e721ce4833c54":"lgJ39"}],"6PDdL":[function(require,module,exports) {
module.exports = require("53b9a085bd697d6d").getBundleURL("7UhFu") + "red-star.260c61af.svg" + "?" + Date.now();

},{"53b9a085bd697d6d":"lgJ39"}]},["3LmCz","h7u1C"], "h7u1C", "parcelRequireca0a")

//# sourceMappingURL=index.b71e74eb.js.map
