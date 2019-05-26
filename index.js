
var body = document.body;
//获取页面id
function getId(nameWhat) {
	return document.getElementById(nameWhat);
}
//获取指定类下面的class
function getClass(parent, classname) {
	return parent.getElementsByClassName(classname);
}

//获取指定下面的tag标签
function getTagname(parent, tagname) {
	return parent.getElementsByTagName(tagname);
}

//获取指定下面的所有非空子节点
function getchild(parent) {
	return parent.children;
}

//改变位置和position
function changePosition(name, positioN, toP, lefT) {
	name.style.position = positioN;
	name.style.top = toP;
	name.style.left = lefT;
}

//改变大小形状背景
function changeLike(name, widtH, heighT, backgrounD, bordeR) {
	name.style.width = widtH;
	name.style.height = heighT;
	name.style.background = backgrounD;
	name.style.border = bordeR;
}
//改变display
function changeDisply(name, a, b, c, d) {
	name.style.display = a;
	name.style.justifyContent = b;
	name.style.alignItems = c;
	name.style.flexDirection = d;
}


var pages = document.getElementsByClassName("page");
var wrap = document.getElementById("wrap");
var main = document.getElementById("main");
var timer;
let titlelist = ["ITRDUCTION", "SKILL", "USE", "PRODUCTION", "END"];
let toplist = ["2px", "44px", "86px", "128px", "170px"];
//获取每个页面/获取整个盒子/获取中间的盒子/获取可视窗口的高

document.addEventListener("mousewheel", scrollFun, false);
document.addEventListener("DOMMouseScrool", scrollFun, false);
document.addEventListener("mousewheel", scrollFun, false);
document.addEventListener("DOMMouseScroll", scrollFun, false);
// 禁止了mousewheel事件

var startTime = 0;
// 判断开始时间
var endTime = 0;
// 判断结束时间
var now = 0;
let indexs = 0;

function scrollFun(e) {


	startTime = new Date().getTime();
	// 获取开始的时间
	var event = e || window.event;
	var dir = event.detail || -event.wheelDelta;


	//判断轮滚上下
	if (startTime - endTime > 300) {
		if (dir > 0 && indexs < 4) {

			indexs++;
		}
		if (dir < 0 && indexs > 0) {
			indexs--;
		}
		setTimeout(function () {
			main.style.top = -indexs * 100 + 'vh';

			if (main.offsetTop <= 0 && main.offsetTop > main.offsetHeight / 5 * -1) {
				for (let i = 0; i < pages.length; i++) {
					images[i].style.transform = "scale(1)";
				}

				alerts.style.top = toplist[indexs];
				alerts.innerHTML = titlelist[indexs];

				images[indexs].style.transform = "scale(1.3)";
				alerts.style.animation = "jello 0.5s ease ";
				setTimeout(function () {
					alerts.style.animation = "none";
				}, 500)

			} else if (main.offsetTop <= main.offsetHeight / 5 * -1 && main.offsetTop > main.offsetHeight / 5 * -2) {
				for (let i = 0; i < pages.length; i++) {

					images[i].style.transform = "scale(1)";
				}

				alerts.style.top = toplist[indexs];
				alerts.innerHTML = titlelist[indexs];

				images[indexs].style.transform = "scale(1.3)";
				alerts.style.animation = "jello 0.5s ease ";
				setTimeout(function () {
					alerts.style.animation = "none";
				}, 500)

			}
			else if (main.offsetTop <= main.offsetHeight / 5 * -2 && main.offsetTop > main.offsetHeight / 5 * -3) {
				for (let i = 0; i < pages.length; i++) {

					images[i].style.transform = "scale(1)";
				}

				alerts.style.top = toplist[indexs];
				alerts.innerHTML = titlelist[indexs];

				images[indexs].style.transform = "scale(1.3)";
				alerts.style.animation = "jello 0.5s ease ";
				setTimeout(function () {
					alerts.style.animation = "none";
				}, 500)

			}
			else if (main.offsetTop <= main.offsetHeight / 5 * -3 && main.offsetTop > main.offsetHeight / 5 * -4) {

				for (let i = 0; i < pages.length; i++) {

					images[i].style.transform = "scale(1)";
				}

				alerts.style.top = toplist[indexs];
				alerts.innerHTML = titlelist[indexs];

				images[indexs].style.transform = "scale(1.3)";
				alerts.style.animation = "jello 0.5s ease ";
				setTimeout(function () {
					alerts.style.animation = "none";
				}, 500)

			}
			else if (main.offsetTop <= main.offsetHeight / 5 * -4 && main.offsetTop > main.offsetHeight / 5 * -5) {
				for (let i = 0; i < pages.length; i++) {

					images[i].style.transform = "scale(1)";
				}
				alerts.style.top = toplist[indexs];
				alerts.innerHTML = titlelist[indexs];

				images[indexs].style.transform = "scale(1.3)";
				alerts.style.animation = "jello 0.5s ease ";
				setTimeout(function () {
					alerts.style.animation = "none";
				}, 500)

			}



		}, 0);
		endTime = new Date().getTime();
	} else {
		return;
	}

}



console.log(main.offsetTop);

var pagess = getId("page");
var lis = getTagname(pagess, "li");
var images = getTagname(pagess, "img");
var ois = getTagname(pagess, "i");
var alerts = getId("alert");
console.log(alerts.innerHTML);
images[0].style.transform = "scale(1.5)";
for (let i = 0; i < lis.length; i++) {

	lis[i].onclick = function () {
		for (let i = 0; i < pages.length; i++) {
			images[i].style.transform = "scale(1)";
		}
		indexs = i;
		main.style.top = -i * 100 + 'vh';
		images[i].style.transform = "scale(1.3)";
		alerts.style.animation = "jello 0.5s ease";
		setTimeout(function () {
			alerts.style.animation = "none";
		}, 500)
		// setInterval(function(){
		//     console.log(lis[i].offsetTop);
		// },500)
		alerts.style.top = this.offsetTop + "px";
		alerts.innerHTML = titlelist[i];
	}
}

for (let i = 0; i < lis.length; i++) {

	lis[i].onmouseover = function () {
		for (let i = 0; i < pages.length; i++) {
			images[i].style.transform = "scale(1)";
		}
		images[i].style.transform = "scale(1.3)";
	}
}




//倒影轮播

var imf = function () {
	var lf = 0;
	var instances = [];
	//定义一个通过class获得元素的方法
	function getElementsByClass(object, tag, className) {
		var o = object.getElementsByTagName(tag);
		for (var i = 0, n = o.length, ret = []; i < n; i++)
			if (o[i].className == className) ret.push(o[i]);
		if (ret.length == 1) ret = ret[0];
		return ret;
	}
	function addEvent(o, e, f) {
		if (window.addEventListener) o.addEventListener(e, f, false);
		else if (window.attachEvent) r = o.attachEvent('on' + e, f);
	}
	function createReflexion(cont, img) {
		var flx = false;
		if (document.createElement("canvas").getContext) {
			flx = document.createElement("canvas");
			flx.width = img.width;
			flx.height = img.height;
			var context = flx.getContext("2d");
			context.translate(0, img.height);
			context.scale(1, -1);
			context.drawImage(img, 0, 0, img.width, img.height);
			context.globalCompositeOperation = "destination-out";
			var gradient = context.createLinearGradient(0, 0, 0, img.height * 2);
			gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
			gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
			context.fillStyle = gradient;
			context.fillRect(0, 0, img.width, img.height * 2);
		} else {
			/* ---- DXImageTransform ---- */
			flx = document.createElement('img');
			flx.src = img.src;
			flx.style.filter = 'flipv progid:DXImageTransform.Microsoft.Alpha(' +
				'opacity=50, style=1, finishOpacity=0, startx=0, starty=0, finishx=0, finishy=' +
				(img.height * .25) + ')';
		}
		/* ---- insert Reflexion ---- */
		flx.style.position = 'absolute';
		flx.style.left = '-1000px';
		cont.appendChild(flx);
		return flx;
	}
	/* //////////// ==== ImageFlow Constructor ==== //////////// */
	function ImageFlow(oCont, size, zoom, border) {
		this.diapos = [];
		this.scr = false;
		this.size = size;
		this.zoom = zoom;
		this.bdw = border;
		this.oCont = oCont;
		this.oc = document.getElementById(oCont);
		this.scrollbar = getElementsByClass(this.oc, 'div', 'scrollbar');
		this.text = getElementsByClass(this.oc, 'div', 'text');
		this.title = getElementsByClass(this.text, 'div', 'title');
		this.legend = getElementsByClass(this.text, 'div', 'legend');
		this.bar = getElementsByClass(this.oc, 'img', 'bar');
		this.arL = getElementsByClass(this.oc, 'img', 'arrow-left');
		this.arR = getElementsByClass(this.oc, 'img', 'arrow-right');
		this.bw = this.bar.width;
		this.alw = this.arL.width - 5;
		this.arw = this.arR.width - 5;
		this.bar.parent = this.oc.parent = this;
		this.arL.parent = this.arR.parent = this;
		this.view = this.back = -1;
		this.resize();
		this.oc.onselectstart = function () { return false; }
		/* ---- create images ---- */
		var img = getElementsByClass(this.oc, 'div', 'bank').getElementsByTagName('a');
		this.NF = img.length;
		for (var i = 0, o; o = img[i]; i++) {
			this.diapos[i] = new Diapo(this, i,
				o.rel,
				o.title || '- ' + i + ' -',
				o.innerHTML || o.rel,
				o.href || '',
				o.target || '_self'
			);
		}
		/* ==== add mouse wheel events ==== */
		if (window.addEventListener)
			this.oc.addEventListener('DOMMouseScroll', function (e) {
				this.parent.scroll(-e.detail);
			}, false);
		else this.oc.onmousewheel = function () {
			this.parent.scroll(event.wheelDelta);
		}
		/* ==== scrollbar drag N drop ==== */
		this.bar.onmousedown = function (e) {
			if (!e) e = window.event;
			var scl = e.screenX - this.offsetLeft;
			var self = this.parent;
			/* ---- move bar ---- */
			this.parent.oc.onmousemove = function (e) {
				if (!e) e = window.event;
				self.bar.style.left = Math.round(Math.min((self.ws - self.arw - self.bw), Math.max(self.alw, e.screenX - scl))) + 'px';
				self.view = Math.round(((e.screenX - scl)) / (self.ws - self.alw - self.arw - self.bw) * self.NF);
				if (self.view != self.back) self.calc();
				return false;
			}
			/* ---- release scrollbar ---- */
			this.parent.oc.onmouseup = function (e) {
				self.oc.onmousemove = null;
				return false;
			}
			return false;
		}
		/* ==== right arrow ==== */
		this.arR.onclick = this.arR.ondblclick = function () {
			if (this.parent.view < this.parent.NF - 1)
				this.parent.calc(1);
		}
		/* ==== Left arrow ==== */
		this.arL.onclick = this.arL.ondblclick = function () {
			if (this.parent.view > 0)
				this.parent.calc(-1);
		}
	}
	/* //////////// ==== ImageFlow prototype ==== //////////// */
	ImageFlow.prototype = {
		/* ==== targets ==== */
		calc: function (inc) {
			if (inc) this.view += inc;
			var tw = 0;
			var lw = 0;
			var o = this.diapos[this.view];
			if (o && o.loaded) {
				/* ---- reset ---- */
				var ob = this.diapos[this.back];
				if (ob && ob != o) {
					ob.img.className = 'diapo';
					ob.z1 = 1;
				}
				/* ---- update legend ---- */
				this.title.replaceChild(document.createTextNode(o.title), this.title.firstChild);
				this.legend.replaceChild(document.createTextNode(o.text), this.legend.firstChild);
				/* ---- update hyperlink ---- */
				if (o.url) {
					o.img.className = 'diapo link';
					window.status = 'hyperlink: ' + o.url;
				} else {
					o.img.className = 'diapo';
					window.status = '';
				}
				/* ---- calculate target sizes & positions ---- */
				o.w1 = Math.min(o.iw, this.wh * .5) * o.z1;
				var x0 = o.x1 = (this.wh * .5) - (o.w1 * .5);
				var x = x0 + o.w1 + this.bdw;
				for (var i = this.view + 1, o; o = this.diapos[i]; i++) {
					if (o.loaded) {
						o.x1 = x;
						o.w1 = (this.ht / o.r) * this.size;
						x += o.w1 + this.bdw;
						tw += o.w1 + this.bdw;
					}
				}
				x = x0 - this.bdw;
				for (var i = this.view - 1, o; o = this.diapos[i]; i--) {
					if (o.loaded) {
						o.w1 = (this.ht / o.r) * this.size;
						o.x1 = x - o.w1;
						x -= o.w1 + this.bdw;
						tw += o.w1 + this.bdw;
						lw += o.w1 + this.bdw;
					}
				}
				/* ---- move scrollbar ---- */
				if (!this.scr && tw) {
					var r = (this.ws - this.alw - this.arw - this.bw) / tw;
					this.bar.style.left = Math.round(this.alw + lw * r) + 'px';
				}
				/* ---- save preview view ---- */
				this.back = this.view;
			}
		},
		/* ==== mousewheel scrolling ==== */
		scroll: function (sc) {
			if (sc < 0) {
				if (this.view < this.NF - 1) this.calc(1);
			} else {
				if (this.view > 0) this.calc(-1);
			}
		},
		/* ==== resize  ==== */
		resize: function () {
			this.wh = this.oc.clientWidth;
			this.ht = this.oc.clientHeight;
			this.ws = this.scrollbar.offsetWidth;
			this.calc();
			this.run(true);
		},
		/* ==== move all images  ==== */
		run: function (res) {
			var i = this.NF;
			while (i--) this.diapos[i].move(res);
		}
	}
	/* //////////// ==== Diapo Constructor ==== //////////// */
	Diapo = function (parent, N, src, title, text, url, target) {
		this.parent = parent;
		this.loaded = false;
		this.title = title;
		this.text = text;
		this.url = url;
		this.target = target;
		this.N = N;
		this.img = document.createElement('img');
		this.img.src = src;
		this.img.parent = this;
		this.img.className = 'diapo';
		this.x0 = this.parent.oc.clientWidth;
		this.x1 = this.x0;
		this.w0 = 0;
		this.w1 = 0;
		this.z1 = 1;
		this.img.parent = this;
		this.img.onclick = function () { this.parent.click(); }
		this.parent.oc.appendChild(this.img);
		/* ---- display external link ---- */
		if (url) {
			this.img.onmouseover = function () { this.className = 'diapo link'; }
			this.img.onmouseout = function () { this.className = 'diapo'; }
		}
	}
	/* //////////// ==== Diapo prototype ==== //////////// */
	Diapo.prototype = {
		/* ==== HTML rendering ==== */
		move: function (res) {
			if (this.loaded) {
				var sx = this.x1 - this.x0;
				var sw = this.w1 - this.w0;
				if (Math.abs(sx) > 2 || Math.abs(sw) > 2 || res) {
					/* ---- paint only when moving ---- */
					this.x0 += sx * .1;
					this.w0 += sw * .1;
					if (this.x0 < this.parent.wh && this.x0 + this.w0 > 0) {
						/* ---- paint only visible images ---- */
						this.visible = true;
						var o = this.img.style;
						var h = this.w0 * this.r;
						/* ---- diapo ---- */
						o.left = Math.round(this.x0) + 'px';
						o.bottom = Math.floor(this.parent.ht * .25) + 'px';
						o.width = Math.round(this.w0) + 'px';
						o.height = Math.round(h) + 'px';
						/* ---- reflexion ---- */
						if (this.flx) {
							var o = this.flx.style;
							o.left = Math.round(this.x0) + 'px';
							o.top = Math.ceil(this.parent.ht * .75 + 1) + 'px';
							o.width = Math.round(this.w0) + 'px';
							o.height = Math.round(h) + 'px';
						}
					} else {
						/* ---- disable invisible images ---- */
						if (this.visible) {
							this.visible = false;
							this.img.style.width = '0px';
							if (this.flx) this.flx.style.width = '0px';
						}
					}
				}
			} else {
				/* ==== image onload ==== */
				if (this.img.complete && this.img.width) {
					/* ---- get size image ---- */
					this.iw = this.img.width;
					this.ih = this.img.height;
					this.r = this.ih / this.iw;
					this.loaded = true;
					/* ---- create reflexion ---- */
					this.flx = createReflexion(this.parent.oc, this.img);
					if (this.parent.view < 0) this.parent.view = this.N;
					this.parent.calc();
				}
			}
		},
		/* ==== diapo onclick ==== */
		click: function () {
			if (this.parent.view == this.N) {
				/* ---- click on zoomed diapo ---- */
				if (this.url) {
					/* ---- open hyperlink ---- */
					window.open(this.url, this.target);
				} else {
					/* ---- zoom in/out ---- */
					this.z1 = this.z1 == 1 ? this.parent.zoom : 1;
					this.parent.calc();
				}
			} else {
				/* ---- select diapo ---- */
				this.parent.view = this.N;
				this.parent.calc();
			}
			return false;
		}
	}
	/* //////////// ==== public methods ==== //////////// */
	return {
		/* ==== initialize script ==== */
		create: function (div, size, zoom, border) {
			/* ---- instanciate imageFlow ---- */
			var load = function () {
				var loaded = false;
				var i = instances.length;
				while (i--) if (instances[i].oCont == div) loaded = true;
				if (!loaded) {
					/* ---- push new imageFlow instance ---- */
					instances.push(
						new ImageFlow(div, size, zoom, border)
					);
					/* ---- init script (once) ---- */
					if (!imf.initialized) {
						imf.initialized = true;
						/* ---- window resize event ---- */
						addEvent(window, 'resize', function () {
							var i = instances.length;
							while (i--) instances[i].resize();
						});
						/* ---- stop drag N drop ---- */
						addEvent(document.getElementById(div), 'mouseout', function (e) {
							if (!e) e = window.event;
							var tg = e.relatedTarget || e.toElement;
							if (tg && tg.tagName == 'HTML') {
								var i = instances.length;
								while (i--) instances[i].oc.onmousemove = null;
							}
							return false;
						});
						/* ---- set interval loop ---- */
						setInterval(function () {
							var i = instances.length;
							while (i--) instances[i].run();
						}, 16);
					}
				}
			}
			/* ---- window onload event ---- */
			addEvent(window, 'load', function () { load(); });
		}
	}
}();

/* ==== create imageFlow ==== */
//          div ID    , size, zoom, border
imf.create("imageFlow", 0.15, 1.5, 10);



//page2的轮播js


var oPic = document.getElementById('pic');
var oPrev = getByClass(oPic, 'prev')[0];
var oNext = getByClass(oPic, 'next')[0];

var aLi = oPic.getElementsByTagName('li');

var arr = [];

for (var i = 0; i < aLi.length; i++) {
	var oImg = aLi[i].getElementsByClassName('skill')[0];

	arr.push([parseInt(getStyle(aLi[i], 'left')), parseInt(getStyle(aLi[i], 'top')),
	getStyle(aLi[i], 'zIndex'), oImg.width, parseFloat(getStyle(aLi[i], 'opacity') * 100)
	]);
}


oPrev.onclick = function () {
	arr.push(arr[0]);
	arr.shift();
	for (var i = 0; i < aLi.length; i++) {
		var oImg = aLi[i].getElementsByClassName('skill')[0];

		aLi[i].style.zIndex = arr[i][2];
		startMove(aLi[i], {
			left: arr[i][0],
			top: arr[i][1],
			opacity: arr[i][4]
		});
		startMove(oImg, {
			width: arr[i][3]
		});
	}

}

oNext.onclick = function() {
	arr.unshift(arr[arr.length - 1]);
	arr.pop();
	for (var i = 0; i < aLi.length; i++) {
		var oImg = aLi[i].getElementsByClassName('skill')[0];

		aLi[i].style.zIndex = arr[i][2];
		startMove(aLi[i], {
			left: arr[i][0],
			top: arr[i][1],
			opacity: arr[i][4]
		});
		startMove(oImg, {
			width: arr[i][3]
		});
	}
}



function getStyle(obj, name) {
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj, false)[name];
	}
}


function getByClass(oParent, sClass) {
	var aResult = [];
	var aEle = oParent.getElementsByTagName('*');

	for (var i = 0; i < aEle.length; i++) {
		if (aEle[i].className == sClass) {
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}

var characters = document.getElementById("characters");

var goto = document.getElementById("gotonext");

var op = characters.getElementsByTagName("p")[0];

var oi = characters.getElementsByTagName("i")[0];

var colors =["#000","#fff","teal","#87b0a5","#4b518f","#eee","#666","#a29971","transparent","ForestGreen","DimGray",
	"Goldenrod","Gold","Gainsboro","HoneyDew","LightBlue","LightGreen","LightYellow","LightBlue"
];

goto.onclick =function(){
	changeCss();
}

characters.onclick =function(){
	changeCss();
}

function changeCss(){
	var nums = parseInt(Math.random()*8);
	characters.style.background = colors[nums];
	var numes = parseInt(Math.random()*8);
	op.style.color = colors[numes];
	characters.style.border = "1px solid " + colors[numes] ;
	characters.classList.add("active");
	oi.style.color = colors[numes];
	setTimeout(function(){
		characters.classList.remove("active");
	},500)
}



var mas = getId("messageBtn");

mas.onclick = function(){
	var a  = confirm("你想留言？");
	if(a){
		alert("留啥啊留言，直接给我发邮件！");
	}else{
		alert("ok!想法一致");
	}
}