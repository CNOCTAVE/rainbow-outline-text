// rainbow-outline-text - rainbow outline text.
// Copyright (C) 2024-2025  Yu Hongbo, CNOCTAVE

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.RainbowOutlineText = factory());
}(this, (function () {
    'use strict';

    class RainbowOutlineText {
        constructor(colors, 
            className = 'rainbow-outline-text') {
            this.styleId = 'rainbow-outline-text-style';
            this.colors = colors;
            this.className = className || 'rainbow-outline-text';
            this._createStyleElement();
            this._createStyle();
        }

        static init(colors, className = 'rainbow-outline-text') {
            if (!Array.isArray(colors) || colors.length != 8) {
                console.error('RainbowOutlineText.init() requires an array of 8 color values');
                return false;
            }
            return new RainbowOutlineText(colors, className);
        }

        addTo(element) {
            if (!element || !element.classList) {
                console.error('Invalid DOM element provided');
                return false;
            }

            element.classList.add(this.className);
            return true;
        }

        removeFrom(element) {
            if (!element || !element.classList) {
                console.error('Invalid DOM element provided');
                return false;
            }

            element.classList.remove(this.className);
            return true;
        }

        getCSSCode() {
            return `
.${this.className} {
    text-shadow: 
        0 -2px 2px ${this.colors[0]},
        2px -2px 2px ${this.colors[1]},
        2px 0 2px ${this.colors[2]},
        2px 2px 2px ${this.colors[3]},
        0 2px 2px ${this.colors[4]},
        -2px 2px 2px ${this.colors[5]},
        -2px 0 2px ${this.colors[6]},
        -2px -2px 2px ${this.colors[7]};
}
            `.trim();
        }

        getCSSText() {
            return `
0 -2px 2px ${this.colors[0]},
2px -2px 2px ${this.colors[1]},
2px 0 2px ${this.colors[2]},
2px 2px 2px ${this.colors[3]},
0 2px 2px ${this.colors[4]},
-2px 2px 2px ${this.colors[5]},
-2px 0 2px ${this.colors[6]},
-2px -2px 2px ${this.colors[7]};
            `.trim();
        }

        _createStyleElement() {
            var style = document.getElementById(this.styleId);
            if (!style) {
                style = document.createElement('style');
                style.id = this.styleId;
                document.head.appendChild(style);
            }
        }

        _createStyle() {
            const style = document.getElementById(this.styleId);
            style.textContent += this.getCSSCode();
        }

        removeStyleElement() {
            const existingStyle = document.getElementById(this.styleId);
            if (existingStyle) {
                document.head.removeChild(existingStyle);
            }
        }
    }

    return RainbowOutlineText;
})));