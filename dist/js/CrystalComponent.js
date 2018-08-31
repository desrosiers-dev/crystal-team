"use strict";

console.log();
var CrystalComponent = Vue.component("crystal-page", {
	props: ['crystal'],
	template: "\n\n\t\t<section class=\"page\" v-bind:style=\"{ backgroundColor: crystal.backgroundColor, backgroundImage: crystal.backgroundTexture }\">\n\n\t\t\t<!--display flex on .page, with flex-direction: row-->\n\t\t\t<a href=\"javascript:;\"><img class=\"bag-icon\" src=\"dist/img/bag.png\"></a>\n \t\t\t<!--position absolute-->\n\n\t\t\t<p class=\"vertical-text\">{{crystal.verticalText}}</p> <!--position absolute-->\n\n\t\t\t<div class=\"column-1\">\n\t\t\t\t<h1 v-bind:style=\"'color: ' + crystal.homeh1Color\">{{crystal.title}}</h1>\n\t\t\t\t<h2>{{crystal.subtitle}}</h2>\n\t\t\t\t<div class=\"hide-on-desktop column-3\">\n\t\t\t\t\t<div class=\"bullets\">\n\t\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"facts\">\n\t\t\t\t\t\t<li class=\"fact\" v-for=\"fact in crystal.facts\">\n\t\t\t\t\t\t\t{{fact}}\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"chakras\">\n\t\t\t\t\t<div class=\"chakra-area\">\n\t\t\t\t\t\t<h3>{{crystal.chakraName}}</h3>\n\t\t\t\t\t\t<img class=\"chakra-shape\" v-bind:src=\"crystal.chakraImage\" alt=\"chakra shape\">\n\t\t\t\t\t\t<h4 v-bind:style=\"'color: ' + crystal.homeh1Color\">{{crystal.chakraNickname}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"chakra-area\" v-if=\"crystal.chakra2Name\">\n\t\t\t\t\t\t<h3>{{crystal.chakra2Name}}</h3>\n\t\t\t\t\t\t<img class=\"chakra-shape\" v-bind:src=\"crystal.chakra2Image\" alt=\"chakra shape\">\n\t\t\t\t\t\t<h4 v-bind:style=\"'color: ' + crystal.homeh1Color\">{{crystal.chakra2Nickname}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"hide-on-mobile\">{{crystal.description}}</p>\n\t\t\t</div>\n\t\t\t<div  id=\"prev\" class=\"hide-on-desktop\">\n\t\t\t\t<span v-bind:style=\"'color: ' + crystal.homeh1Color\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"column-2\">\n\n\t\t\t\t<div class=\"numbers\">\n\t\t\t\t\t<img class=\"active number slide\" v-bind:src=\"crystal.numberImages[0]\" alt=\"number one\">\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"crystals\">\n\t\t\t\t\t<img class=\"active crystal\" v-bind:src=\"crystal.crystalImages[0]\" alt=\"crystal\">\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"dots\">\n\t\t\t\t\t<div v-bind:style=\"'border-color: ' + crystal.homeh1Color\" class=\"active dot\"></div>\n\t\t\t\t\t<div v-bind:style=\"'border-color: ' + crystal.homeh1Color\" class=\"dot \"></div>\n\t\t\t\t\t<div v-bind:style=\"'border-color: ' + crystal.homeh1Color\" class=\"dot \"></div>\n\t\t\t\t\t<div v-bind:style=\"'border-color: ' + crystal.homeh1Color\" class=\"dot \"></div>\n\t\t\t\t</div>\n\n\t\t\t</div> <!--function module to updates numbers, crystals and dots simultaneously-->\n\t\t\t<div id=\"next\" class=\"hide-on-desktop\">\n\t\t\t\t<span v-bind:style=\"'color: ' + crystal.homeh1Color\"></span>\n\t\t\t</div>\t\t\n\t\t\t<div class=\"column-3\">\n\t\t\t\t<p class=\"hide-on-desktop\">{{crystal.description}}</p>\n\t\t\t\t<div class=\"hide-on-mobile  bullets\">\n\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t\t<div class=\"bullet\"></div>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"hide-on-mobile facts\">\n\t\t\t\t\t<li class=\"fact\" v-for=\"fact in crystal.facts\">\n\t\t\t\t\t\t{{fact}}\n\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div class=\"add-button\" v-bind:style=\"'background-color: ' + crystal.backgroundColor\">add</div> <!--position absolute-->\n\t\t\t\n\t\t</section>\n\t"
});
//# sourceMappingURL=CrystalComponent.js.map
