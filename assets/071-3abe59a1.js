import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-10470668.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-7b713537.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",h3:"h3",strong:"strong",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"71-morse-code-keyboard",children:[t.jsx(n.code,{children:"#71"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/71/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Morse Code Keyboard"})]}),`
`,t.jsx(n.p,{children:"Morse Code Keyboard: Did it take some time? Absolutely! Is it really only possible with CSS? Yep. Are you crazy? Maybe 😄"}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/KKrjgPo",target:"_blank",rel:"nofollow noopener noreferrer",children:"#71 CSS Challenge / Morse Code Keyboard"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#71 CSS Challenge / Morse Code Keyboard",src:"https://codepen.io/mulander/embed/KKrjgPo?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,t.jsx(n.h3,{id:"whats-morse-code",children:t.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Morse_code",target:"_blank",rel:"nofollow noopener noreferrer",children:"What's Morse Code?"})}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"Transmission"})}),`
`,t.jsxs(n.p,{children:["Morse code can be transmitted in a number of ways: Originally as electrical pulses along a telegraph wire, but later extended to an audio tone, a radio signal with short and long tones, or high and low tones, or as a mechanical, audible, or visual signal (e.g. a ",t.jsx(n.code,{children:"flashing light"}),") using devices like an Aldis lamp or a heliograph, a common flashlight, or even a car horn. Some mine rescues have used pulling on a rope - a short pull for a dot and a long pull for a dah."]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`/* short light */
@keyframes short-#{$i} {
  0%,
  40%,
  60%,
  100% {
    opacity: 0;
  }
  41%,
  59% {
    opacity: 1;
  }
}
/* long light */
@keyframes long-#{$i} {
  0%,
  15%,
  85%,
  100% {
    opacity: 0;
  }
  16%,
  84% {
    opacity: 1;
  }
}
`})}),`
`,t.jsxs(n.h3,{id:"scss-function-directives",children:["SCSS ",t.jsx(n.code,{children:"Function Directives"})]}),`
`,t.jsx(n.p,{children:"Sass supports custom functions and can be used in any value or script context. E.g"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$grid-width: 40px;
$gutter-width: 10px;
  
@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar { width: grid-width(5); }
`})}),`
`,t.jsx(n.h3,{id:"animation-combine",children:"Animation Combine"}),`
`,t.jsx(n.p,{children:"Multiple animations can be combined at one element."}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{children:`// set dur as 1s

'A' : '.-' : 'short-a-1 1s 0s, long-a-2 1s 1s'
'B' : '-...' : 'long-b-1 1s 0s, short-b-2 1s 1s, short-b-3 1s 2s, short-b-4 1s 3s,'
`})}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

- const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
.frame: .triggers
	each k in keys
		input.radio(type="radio", name="morse", id='morse-' + k)
		label.trigger(for='morse-' + k, id='label-' + k)= k
	.light
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$duration: 1s;

$characters: (
	a: ".-",
	b: "-...",
	c: "-.-.",
	d: "-..",
	e: ".",
	f: "..-.",
	g: "--.",
	h: "....",
	i: "..",
	j: ".---",
	k: "-.-",
	l: ".-..",
	m: "--",
	n: "-.",
	o: "---",
	p: ".--.",
	q: "--.-",
	r: ".-.",
	s: "...",
	t: "-",
	u: "..-",
	v: "...-",
	w: ".--",
	x: "-..-",
	y: "-.--",
	z: "--..",
	0: "-----",
	1: ".----",
	2: "..---",
	3: "...--",
	4: "....-",
	5: ".....",
	6: "-....",
	7: "--...",
	8: "---..",
	9: "----."
);

@function lets-morse($character, $code) {
	$morse-animations: ();
	$animation-name: "";
	@for $i from 1 through str-length($code) {
		$morse-symbol: str-slice(
			$code,
			$i,
			$i
		); // slice string into single characters
		@if ($morse-symbol == ".") {
			$animation-name: short-#{$character}-#{$i};
		} // assign animation name
		@if ($morse-symbol == "-") {
			$animation-name: long-#{$character}-#{$i};
		} // assign animation name
		$animation: $animation-name
			$duration
			(($i - 1) * $duration); // create animation
		$morse-animations: append(
			$morse-animations,
			$animation,
			comma
		); // combine animations
	}
	@return $morse-animations;
}

.frame {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 400px;
	height: 400px;
	margin-top: -200px;
	margin-left: -200px;
	border-radius: 2px;
	box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	background: #333;
	color: #fff;
	font-family: "Open Sans", Helvetica, sans-serif;
	font-weight: 400;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.radio {
	display: none;
}

.triggers {
	position: absolute;
	bottom: 0;
	left: 0;
	background: #666;
	border-top: 2px solid #888;
	padding: 5px 0;
}

.trigger {
	position: relative;
	float: left;
	width: 34px;
	height: 34px;
	margin: 3px;
	font-size: 16px;
	line-height: 34px;
	text-align: center;
	text-transform: uppercase;
	border-radius: 50%;
	cursor: pointer;

	&:hover {
		background: #999;
	}
}

#label-0 {
	clear: both;
}

.light {
	position: absolute;
	width: 30px;
	height: 30px;
	top: -120px;
	left: 185px;
	border-radius: 50%;
	background: #fff;
	box-shadow: 0 0 15px 0 #fff;
	opacity: 0;
	animation: none;
}

@each $character, $code in $characters {
	#morse-#{$character}:checked ~ .light {
		animation: lets-morse($character, $code);
	}
}

// animations for each character to fix a bug with reused animations in a row
@each $character, $code in $characters {
	@for $i from 1 through str-length($code) {
		$morse-symbol: str-slice(
			$code,
			$i,
			$i
		); // slice string into single characters
		@if ($morse-symbol == ".") {
			@keyframes short-#{$character}-#{$i} {
				0%,
				40%,
				60%,
				100% {
					opacity: 0;
				}
				41%,
				59% {
					opacity: 1;
				}
			}
		}
		@if ($morse-symbol == "-") {
			@keyframes long-#{$character}-#{$i} {
				0%,
				15%,
				85%,
				100% {
					opacity: 0;
				}
				16%,
				84% {
					opacity: 1;
				}
			}
		}
	}
}

@for $i from 1 through 5 {
	@keyframes short-#{$i} {
		0%,
		40%,
		60%,
		100% {
			opacity: 0;
		}
		41%,
		59% {
			opacity: 1;
		}
	}

	@keyframes long-#{$i} {
		0%,
		15%,
		85%,
		100% {
			opacity: 0;
		}
		16%,
		84% {
			opacity: 1;
		}
	}
}
`})})]})}function $(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{$ as default};
//# sourceMappingURL=071-3abe59a1.js.map
