!function e(t,o,i){function n(s,r){if(!o[s]){if(!t[s]){var c="function"==typeof require&&require;if(!r&&c)return c(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=o[s]={exports:{}};t[s][0].call(d.exports,function(e){var o=t[s][1][e];return n(o?o:e)},d,d.exports,e,t,o,i)}return o[s].exports}for(var a="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(e,t,o){"use strict";var i=e("./modules/checkForTags.js"),n=e("./modules/findTags.js"),a=e("./modules/isVice.js"),s=e("./modules/determineContext.js"),r=e("./modules/sendToIvw.js");i(function(e){n(e,function(e){a(e,function(e){s(e,function(e){r(e)})})})})},{"./modules/checkForTags.js":2,"./modules/determineContext.js":3,"./modules/findTags.js":4,"./modules/isVice.js":5,"./modules/sendToIvw.js":6}],2:[function(e,t,o){"use strict";var i=function(e){var t=setInterval(function(){if(document.getElementById("viceHomeAd")||document.getElementById("viceContentAd")||document.getElementById("viceBusinessAd")){clearInterval(t);var o={home:document.getElementById("viceHomeAd"),content:document.getElementById("viceContentAd"),business:document.getElementById("viceBusinessAd")};e(o)}},100)};t.exports=i},{}],3:[function(e,t,o){"use strict";var i=e("./util.js"),n=function(e,t){var o={};o.cp=e.attributes["data-src"].value,i.isHome(e)&&!i.mobileCheck()&&(o.sv="ke",o.st="vicecom",o.cp+="-home"),i.isHome(e)||i.mobileCheck()||(o.st="vicecom",o.sv="i2"),i.mobileCheck()&&i.isHome(e)&&(o.sv="ke",o.st="mobvice",o.cp+="-home"),i.mobileCheck()&&!i.isHome(e)&&(o.st="mobvice",o.sv="mo"),t(o)};t.exports=n},{"./util.js":7}],4:[function(e,t,o){"use strict";var i=function(e,t){var o;for(var i in e)null!==e[i]&&(o=e[i]);t(o)};t.exports=i},{}],5:[function(e,t,o){"use strict";var i=e("./util.js"),n=function(e,t){var o=!1;switch((-1!==e.attributes["data-src"].value.indexOf("vice")||-1!==e.attributes["data-src"].value.indexOf("noisey")||-1!==e.attributes["data-src"].value.indexOf("munchies")||-1!==e.attributes["data-src"].value.indexOf("motherboard")||-1!==e.attributes["data-src"].value.indexOf("creatorsproject")||-1!==e.attributes["data-src"].value.indexOf("i:d")||-1!==e.attributes["data-src"].value.indexOf("sports")||-1!==e.attributes["data-src"].value.indexOf("fightland")||-1!==e.attributes["data-src"].value.indexOf("thump"))&&(o=!0),o){case!0:i.makeAjaxCall(window.location.protocol+"//geoip-lookup.vice.com/lookup/countrycode",!0,function(o){"DE"!==o.data.country.code&&"CH"!==o.data.country.code&&"AT"!==o.data.country.code||t(e)});break;default:t(e)}};t.exports=n},{"./util.js":7}],6:[function(e,t,o){"use strict";var i=function(e){var t=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src="https://script.ioam.de/iam.js",t.appendChild(o),o.onload=function(){"object"==typeof window.iom&&window.iom.c(e,2)}};t.exports=i},{}],7:[function(e,t,o){"use strict";var i=function(e,t,o){var i=new XMLHttpRequest;i.open("GET",e,t),i.onload=function(e){if(4===i.readyState&&200===i.status){var t=JSON.parse(i.responseText);o(t)}},i.onerror=function(e){},i.send(null)},n=function(e){return-1!==e.attributes.id.value.indexOf("Home")},a=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e};t.exports.makeAjaxCall=i,t.exports.isHome=n,t.exports.mobileCheck=a},{}]},{},[1]);