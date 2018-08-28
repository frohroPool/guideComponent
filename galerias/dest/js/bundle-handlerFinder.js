(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var HandlerFinder = exports.HandlerFinder = function () {

    //CAMBIA EL ICNO DE BUSQUEDA POR X SI LA CAJA DE BUSQUEDA CONTIENE TEXTO
    var evtChangeSearchBarIcon = function evtChangeSearchBarIcon() {
        var textBar = document.getElementById("top-search-text");
        textBar.addEventListener("keyup", function (event) {
            if (textBar.value.length != 0) {
                //ELIMINA CLASES PARA OCULTAR BARRA Y AGREGA LAS DE VISUALIZACION
                document.getElementById("top-search-bar-icon").classList.remove("fa-search");
                document.getElementById("top-search-bar-icon").classList.add("fa-times");
            } else {
                document.getElementById("top-search-bar-icon").classList.add("fa-search");
                document.getElementById("top-search-bar-icon").classList.remove("fa-times");
            }
        }, false);
    };
    /*
        //MUESTRA LA CAJA DE BUSQUEDA
        let evtOpenSearchBar = function(){
            let searchButon = document.getElementById("btn-search");
            searchButon.addEventListener("click", function(){
                if(document.getElementById("top-search-bar").classList.contains("hidden-top-search-bar") )
                {   //ELIMINA CLASES PARA OCULTAR BARRA Y AGREGA LAS DE VISUALIZACION
                    document.getElementById("top-search-bar").classList.remove("hidden-top-search-bar");                
                    document.getElementById("top-search-bar").classList.add("show-top-search-bar");
                }
            }, false);
        }*/

    var evtFinder = function evtFinder() {
        evtChangeSearchBarIcon();
        //evtOpenSearchBar();
    };

    return {
        evtFinder: evtFinder
    };
}();

},{}],2:[function(require,module,exports){
"use strict";

var _finder = require("../components/finder");

document.addEventListener("DOMContentLoaded", function (event) {
    _finder.HandlerFinder.evtFinder();
});

},{"../components/finder":1}]},{},[2]);
