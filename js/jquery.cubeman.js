/* 
 * Cubeman v0.1.0
 * A man made of cubes
 * (c)2014 Rubén Torres - rubentdlh@gmail.com
 * Released under the MIT license
 */

 (function($) {

 	function Cubeman(elem, options){
 		this.bearer=elem;
 		this.options=options;
 	}

 	Cubeman.prototype = {

 		create: function(){
 			this.bearer.addClass("cubeman-wrap");
 			
			var cubeContent = "<ins class='face front'></ins>" +
 				"<ins class='face back'></ins>" +
 				"<ins class='face top'></ins>" +
 				"<ins class='face bottom'></ins>" +
 				"<ins class='face left'></ins>" +
 				"<ins class='face right'></ins>"; 

 			var head = "<ins class='cubeman-head'>" +
 				cubeContent +
 				"</ins>";

 			var body = "<ins class='cubeman-body'>" +
 				cubeContent +
 				"</ins>";

 			var leftArm = "<ins class='cubeman-limb left-arm'>" +
 				cubeContent +
 				"</ins>";

 			var rightArm = "<ins class='cubeman-limb right-arm'>" +
 				cubeContent +
 				"</ins>";

 			var leftLeg = "<ins class='cubeman-limb left-leg'>" +
 				cubeContent +
 				"</ins>";

 			var rightLeg = "<ins class='cubeman-limb right-leg'>" +
 				cubeContent +
 				"</ins>";

 			var cubemanStructure = "<ins class='cubeman-all'>" +
 				head +
 				body + 
 				leftArm + 
 				rightArm + 
 				leftLeg + 
 				rightLeg + 
 				"</ins>";
 			this.bearer.append(cubemanStructure);
 		}

 	}

 	$.fn.cubeman = function(options) {
 		this.each(function(){
 			options = $.extend({}, $.fn.cubeman.defaults, options);
 			var cubeman = new Cubeman($(this), options);
 			cubeman.create();
 		});	
 	}

 	$.fn.cubeman.defaults = {
 	};

 })(jQuery);
