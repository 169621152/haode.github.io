
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



//page2的轮播js
var mySwiper = new Swiper('.swiper-container', {
	autoplay: true, //可选选项，自动滑动
	initialSlide: 0, //初始化的轮播显示图为第三个
	direction: 'horizontal', //横向切换 竖向切换为vertical
	loop: true, //无限循环轮播图
	preventClicks: false, //防止触摸的时候触发点击事件 
	// preventInteractionOnTransition: true, //切换时滑动无效 直接切换结束
	//virtualTranslate : true, //让轮播锁定 分页器动 图片不动
	speed: 700, //过渡效果时间
	autoplay: {
	delay: 1000,
	},
	// parallax: true, //看不懂 没啥感觉
	navigation: { //上下切换按钮
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
	},
	pagination: {
	el: '.swiper-pagination', //获取的是哪个class
	clickable: true, //添加这个之后可以点击分页器切换
	},
	//切换效果
	effect: 'coverflow', //分页的感觉
	slidesPerView: 3,
	centeredSlides: true,
	coverflowEffect: {
	rotate: 30,
	stretch: 10,
	depth: 60,
	modifier: 2,
	slideShadows: true
	},
	// effect : 'flip', //fade、cube效果 也可以直接用 coverflow得用上面的
	})
	mySwiper.el.onmouseover = function () { //鼠标经过停止自动轮播
	mySwiper.autoplay.stop();
	}
	mySwiper.el.onmouseout = function () { //鼠标经过开始自动轮播
	mySwiper.autoplay.start();
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

