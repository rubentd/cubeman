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
 			var cubemanStructure = "<ins class='cubeman-head'>" +
 				"<ins class='chead front'></ins>" +
 				"<ins class='chead back'></ins>" +
 				"<ins class='chead top'></ins>" +
 				"<ins class='chead bottom'></ins>" +
 				"<ins class='chead left'></ins>" +
 				"<ins class='chead right'></ins>" +
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
