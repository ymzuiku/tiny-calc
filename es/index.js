"use strict";function mul(t,r){var e=0,l=t.toString(),a=r.toString();try{e+=l.split(".")[1].length}catch(t){}try{e+=a.split(".")[1].length}catch(t){}return Number(l.replace(".",""))*Number(a.replace(".",""))/Math.pow(10,e)}function add(t,r){var e,l,a;try{e=t.toString().split(".")[1].length}catch(t){e=0}try{l=r.toString().split(".")[1].length}catch(t){l=0}return(mul(t,a=Math.pow(10,Math.max(e,l)))+mul(r,a))/a}function sub(t,r){var e,l,a;try{e=t.toString().split(".")[1].length}catch(t){e=0}try{l=r.toString().split(".")[1].length}catch(t){l=0}return(mul(t,a=Math.pow(10,Math.max(e,l)))-mul(r,a))/a}function div(t,r){var e=0,l=0;try{e=t.toString().split(".")[1].length}catch(t){e=0}try{l=r.toString().split(".")[1].length}catch(t){l=0}return mul(Number(t.toString().replace(".",""))/Number(r.toString().replace(".","")),Math.pow(10,l-e))}exports.__esModule=!0,exports.calc={mul:mul,add:add,sub:sub,div:div},exports.default=exports.calc;