"use strict";

class Options {
	constructor(width, height, bg, fontSize, textAlign, color) {
		this.width = width;
		this.height = height;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
		this.color = color;
		}
		newDiv() {
			let myDiv = document.createElement("div");
				myDiv.textContent = "Here I am!";
				myDiv.style.cssText = `width: ${this.width}px;
										height: ${this.height}px;
										background-color: ${this.bg};
										font-size: ${this.fontSize};
                                        text-align: ${this.textAlign};
                                        color: ${this.color};`
					document.body.appendChild(myDiv);			
		}
}

const div = new Options(200, 100, "#850000", 34, "center", "#ccc");
div.newDiv();
