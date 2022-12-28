import * as gsap from "https://cdn.skypack.dev/gsap@3.11.4";
import * as smoothScrollbar from "https://cdn.skypack.dev/smooth-scrollbar@8.8.1";
function showalert(){
    alert("使用電腦進入網頁會有比較好的瀏覽體驗喔~");
  }
//npm.greensock.com/:_authToken=70b5652d-1560-4225-9117-6a8054381efd
@gsap:registry=https://npm.greensock.com
npm install ./gsap-bonus.tgz
npm install gsap@npm:@gsap/member



const tl = gsap.timeline({
	scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true
	}
});

gsap.utils.toArray(".parallax").forEach(layer => {
	const depth = layer.dataset.depth;
	const movement = -(layer.offsetHeight * depth)
	tl.to(layer, {y: movement, ease: "none"}, 0)
});


