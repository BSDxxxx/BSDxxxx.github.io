/**
 * 鼠标点击效果
 */

//社会主义核心价值观（红色）
// var a_idx = 0;
// jQuery(document).ready(function ($) {
//   $("body").click(function (e) {
//     var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
//     var $i = $("<span/>").text(a[a_idx]);
//     a_idx = (a_idx + 1) % a.length;
//     var x = e.pageX,
//       y = e.pageY;
//     $i.css({
//       "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
//       "top": y - 20,
//       "left": x,
//       "position": "absolute",
//       "font-weight": "bold",
//       "color": "#ff6651"
//     });
//     $("body").append($i);
//     $i.animate({
//       "top": y - 180,
//       "opacity": 0
//     }, 1500, function () {
//       $i.remove();
//     });
//   });
// });

// 社会主义核心价值观（红色）
// var a_idx = 0;
// $("body").click(function(e) {
//         var a = new Array(
//             "富强", "民主", "文明", "和谐",
//             "自由", "平等", "公正", "法治",
//             "爱国", "敬业", "诚信", "友善"
//             );
//         var $i = $("<span/>").text(a[a_idx]);
//         a_idx = (a_idx + 1) % a.length;
//         var x = e.pageX,
//         y = e.pageY;
//         $i.css({
//             "z-index": 144469,
//             "top": y - 20,
//             "left": x,
//             "position": "absolute",
//             "font-weight": "bold",
//             "color": "#f00"
//         });
//         $("body").append($i);
//         $i.animate({
//             "top": y - 180,
//             "opacity": 0
//         },
//         1500,
//         function() {
//             $i.remove()
//         })
//     });

// 社会主义核心价值观（不消失）
// $(document).ready(function() {
//   var coreSocialistValues = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"],
//   index = Math.floor(Math.random() * coreSocialistValues.length);

//   document.body.addEventListener('click',
//   function(e) {
//   //过滤a标签
//       if (e.target.tagName == 'A') {
//           return;
//       }
//       var x = e.pageX,
//       y = e.pageY,
//       span = document.createElement('span');
//       span.textContent = coreSocialistValues[index];
//       index = (index + 1) % coreSocialistValues.length;
//       span.style.cssText = ['z-index: 9999999; position: absolute; font-weight: bold; color: #ff6651; top: ', y - 20, 'px; left: ', x, 'px;'].join('');
//       document.body.appendChild(span);
//       animate(span);
//   });
// })

// 社会主义核心价值观（七彩）
$(document).ready(function(){
    var a_index = 0;
    var c_index = 0;
    $("body").click(function(e){
        var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
        var c = new Array("#FF0000", "#FF8000", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#8000FF");
        var $i = $("<span/>").text(a[a_index]);
        a_index = (a_index + 1) % a.length;
        c_index = (c_index + 1) % c.length;
        var x = e.pageX,y = e.pageY;
        $i.css({
            "z-index": 99999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": c[c_index],
            "-webkit-user-select" : "none",
            "-moz-user-select" : "none",
            "-ms-user-select" : "none",
            "user-select" : "none"
        });
        $("body").append($i);
        $i.animate({"top": y-180,"opacity": 0},1500,function() {
            $i.remove();
        });
    });
});

// 爱心
// ! function (e, t, a) {
//   function r() {
//     for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");
//     requestAnimationFrame(r)
//   }

//   function n() {
//     var t = "function" == typeof e.onclick && e.onclick;
//     e.onclick = function (e) {
//       t && t(), o(e)
//     }
//   }

//   function o(e) {
//     var a = t.createElement("div");
//     a.className = "heart", s.push({
//       el: a,
//       x: e.clientX - 5,
//       y: e.clientY - 5,
//       scale: 1,
//       alpha: 1,
//       color: c()
//     }), t.body.appendChild(a)
//   }

//   function i(e) {
//     var a = t.createElement("style");
//     a.type = "text/css";
//     try {
//       a.appendChild(t.createTextNode(e))
//     } catch (t) {
//       a.styleSheet.cssText = e
//     }
//     t.getElementsByTagName("head")[0].appendChild(a)
//   }

//   function c() {
//     return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
//   }
//   var s = [];
//   e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
//     setTimeout(e, 1e3 / 60)
//   }, i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), n(), r()
// }(window, document);


// 烟花爆炸
"use strict";

function updateCoords(e) {
  pointerX = (e.clientX || e.touches[0].clientX) - canvasEl.getBoundingClientRect().left, pointerY = e.clientY || e.touches[0].clientY - canvasEl.getBoundingClientRect().top
}

function setParticuleDirection(e) {
  var t = anime.random(0, 360) * Math.PI / 180,
    a = anime.random(50, 180),
    n = [-1, 1][anime.random(0, 1)] * a;
  return {
    x: e.x + n * Math.cos(t),
    y: e.y + n * Math.sin(t)
  }
}

function createParticule(e, t) {
  var a = {};
  return a.x = e, a.y = t, a.color = colors[anime.random(0, colors.length - 1)], a.radius = anime.random(16, 32), a.endPos = setParticuleDirection(a), a.draw = function () {
    ctx.beginPath(), ctx.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !0), ctx.fillStyle = a.color, ctx.fill()
  }, a
}

function createCircle(e, t) {
  var a = {};
  return a.x = e, a.y = t, a.color = "#F00", a.radius = 0.1, a.alpha = 0.5, a.lineWidth = 6, a.draw = function () {
    ctx.globalAlpha = a.alpha, ctx.beginPath(), ctx.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !0), ctx.lineWidth = a.lineWidth, ctx.strokeStyle = a.color, ctx.stroke(), ctx.globalAlpha = 1
  }, a
}

function renderParticule(e) {
  for (var t = 0; t < e.animatables.length; t++) {
    e.animatables[t].target.draw()
  }
}

function animateParticules(e, t) {
  for (var a = createCircle(e, t), n = [], i = 0; i < numberOfParticules; i++) {
    n.push(createParticule(e, t))
  }
  anime.timeline().add({
    targets: n,
    x: function (e) {
      return e.endPos.x
    },
    y: function (e) {
      return e.endPos.y
    },
    radius: 0.1,
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    update: renderParticule
  }).add({
    targets: a,
    radius: anime.random(80, 160),
    lineWidth: 0,
    alpha: {
      value: 0,
      easing: "linear",
      duration: anime.random(600, 800)
    },
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    update: renderParticule,
    offset: 0
  })
}

function debounce(e, t) {
  var a;
  return function () {
    var n = this,
      i = arguments;
    clearTimeout(a), a = setTimeout(function () {
      e.apply(n, i)
    }, t)
  }
}
var canvasEl = document.querySelector(".fireworks");
if (canvasEl) {
  var ctx = canvasEl.getContext("2d"),
    numberOfParticules = 30,
    pointerX = 0,
    pointerY = 0,
    tap = "mousedown",
    colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"],
    setCanvasSize = debounce(function () {
      canvasEl.width = 2 * window.innerWidth, canvasEl.height = 2 * window.innerHeight, canvasEl.style.width = window.innerWidth + "px", canvasEl.style.height = window.innerHeight + "px", canvasEl.getContext("2d").scale(2, 2)
    }, 500),
    render = anime({
      duration: 1 / 0,
      update: function () {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
      }
    });
  document.addEventListener(tap, function (e) {
    "sidebar" !== e.target.id && "toggle-sidebar" !== e.target.id && "A" !== e.target.nodeName && "IMG" !== e.target.nodeName && (render.play(), updateCoords(e), animateParticules(pointerX, pointerY))
  }, !1), setCanvasSize(), window.addEventListener("resize", setCanvasSize, !1)
}
"use strict";

function updateCoords(e) {
  pointerX = (e.clientX || e.touches[0].clientX) - canvasEl.getBoundingClientRect().left, pointerY = e.clientY || e.touches[0].clientY - canvasEl.getBoundingClientRect().top
}

function setParticuleDirection(e) {
  var t = anime.random(0, 360) * Math.PI / 180,
    a = anime.random(50, 180),
    n = [-1, 1][anime.random(0, 1)] * a;
  return {
    x: e.x + n * Math.cos(t),
    y: e.y + n * Math.sin(t)
  }
}

function createParticule(e, t) {
  var a = {};
  return a.x = e, a.y = t, a.color = colors[anime.random(0, colors.length - 1)], a.radius = anime.random(16, 32), a.endPos = setParticuleDirection(a), a.draw = function () {
    ctx.beginPath(), ctx.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !0), ctx.fillStyle = a.color, ctx.fill()
  }, a
}

function createCircle(e, t) {
  var a = {};
  return a.x = e, a.y = t, a.color = "#F00", a.radius = 0.1, a.alpha = 0.5, a.lineWidth = 6, a.draw = function () {
    ctx.globalAlpha = a.alpha, ctx.beginPath(), ctx.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !0), ctx.lineWidth = a.lineWidth, ctx.strokeStyle = a.color, ctx.stroke(), ctx.globalAlpha = 1
  }, a
}

function renderParticule(e) {
  for (var t = 0; t < e.animatables.length; t++) {
    e.animatables[t].target.draw()
  }
}

function animateParticules(e, t) {
  for (var a = createCircle(e, t), n = [], i = 0; i < numberOfParticules; i++) {
    n.push(createParticule(e, t))
  }
  anime.timeline().add({
    targets: n,
    x: function (e) {
      return e.endPos.x
    },
    y: function (e) {
      return e.endPos.y
    },
    radius: 0.1,
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    update: renderParticule
  }).add({
    targets: a,
    radius: anime.random(80, 160),
    lineWidth: 0,
    alpha: {
      value: 0,
      easing: "linear",
      duration: anime.random(600, 800)
    },
    duration: anime.random(1200, 1800),
    easing: "easeOutExpo",
    update: renderParticule,
    offset: 0
  })
}

function debounce(e, t) {
  var a;
  return function () {
    var n = this,
      i = arguments;
    clearTimeout(a), a = setTimeout(function () {
      e.apply(n, i)
    }, t)
  }
}
var canvasEl = document.querySelector(".fireworks");
if (canvasEl) {
  var ctx = canvasEl.getContext("2d"),
    numberOfParticules = 30,
    pointerX = 0,
    pointerY = 0,
    tap = "mousedown",
    colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"],
    setCanvasSize = debounce(function () {
      canvasEl.width = 2 * window.innerWidth, canvasEl.height = 2 * window.innerHeight, canvasEl.style.width = window.innerWidth + "px", canvasEl.style.height = window.innerHeight + "px", canvasEl.getContext("2d").scale(2, 2)
    }, 500),
    render = anime({
      duration: 1 / 0,
      update: function () {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
      }
    });
  document.addEventListener(tap, function (e) {
    "sidebar" !== e.target.id && "toggle-sidebar" !== e.target.id && "A" !== e.target.nodeName && "IMG" !== e.target.nodeName && (render.play(), updateCoords(e), animateParticules(pointerX, pointerY))
  }, !1), setCanvasSize(), window.addEventListener("resize", setCanvasSize, !1)
};
