// JS Library Reference: https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.4/TweenMax.min.js

var tl = new TimelineLite();
tl.staggerFrom(
	'.topics',
	3,
	{
		css: { transform: 'scale(0)', top: '60%', left: '50%' },
		ease: Elastic.easeOut,
	},
	0.3
);

var topic1 = document.getElementById('topic1');
var topic2 = document.getElementById('topic2');
var topic3 = document.getElementById('topic3');
var topic4 = document.getElementById('topic4');
var topic5 = document.getElementById('topic5');
var footer = document.getElementById('footer');
var topics = document.getElementsByClassName('topics');

topic1.addEventListener('mouseover', topic1retina, false);
topic1.addEventListener('touchstart', topic1retina, false);
topic2.addEventListener('mouseover', topic2retina, false);
topic2.addEventListener('touchstart', topic2retina, false);
topic3.addEventListener('mouseover', topic3retina, false);
topic3.addEventListener('touchstart', topic3retina, false);
topic4.addEventListener('mouseover', topic4retina, false);
topic4.addEventListener('touchstart', topic4retina, false);
topic5.addEventListener('mouseover', topic5retina, false);
topic5.addEventListener('touchstart', topic5retina, false);
footer.addEventListener('mouseover', footerretina, false);
footer.addEventListener('touchstart', footerretina, false);

function topic1retina(event) {
	TweenMax.to('#retina', 0.2, { left: '49%', top: '60.5%' });
}

function topic2retina(event) {
	TweenMax.to('#retina', 0.2, { left: '49%', top: '59.5%' });
}

function topic3retina(event) {
	TweenMax.to('#retina', 0.2, { left: '50%', top: '59%' });
}

function topic4retina(event) {
	TweenMax.to('#retina', 0.2, { left: '51%', top: '59.5%' });
}

function topic5retina(event) {
	TweenMax.to('#retina', 0.2, { left: '51%', top: '60.5%' });
}

function footerretina(event) {
	TweenMax.to('#retina', 0.2, { left: '50%', top: '60.8%' });
}

for (var i = 0; i < topics.length; i++) {
	topics[i].addEventListener('mouseout', retinaout);
}
function retinaout(event) {
	TweenMax.to('#retina', 0.2, { left: '50%', top: '60%' });
}
