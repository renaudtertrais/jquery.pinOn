/* * * * * * * * * * * * * * * * * * * *\
		jQuery pinOn() plugin v0.1							
\* * * * * * * * * * * * * * * * * * * */

/* Position a child relative to its parent
 *
 * @param parent (string | jQuery Object) : selector or jQuery object of the parent
 * @param position (string) : position relative to the parent (i.e 'top', 'left bottom', 'right-10' , 'top+30 left-9'...)
 * @param align (string) : alignement relative to the position (i.e if position is 'top', align could be 'right-10', 'left' ...) default is 'center'
 * 
 * Renaud Tertrais - 2014
 * @eMaj_Fr
 * github.com/eMaj-Fr
 * www.emaj.fr
 */
 (function($){

 	$.fn.pinOn = function( parent , position , align ){
		var params = {
			position : {},
			align : {}
		};

		params.$parent = parent ;
		
		if( typeof(parent) == 'string' )
			params.$parent = $(parent);

		var rgx ;

		// * * * POSITION * * *
		rgx = new RegExp('([a-z]+)([+-][0-9]+)?([^a-z]+([a-z]+)([+-][0-9]+)?)?','gi');
		position = rgx.exec( position );

		if( position ){

			var first 		= position[1];
			var firstDelta 	= parseInt( position[2] || '0' );
			var second 		= position[4];
			var secondDelta = parseInt( position[5] || '0' );

			if( ['left','right'].indexOf(first) > -1 ){	
				params.position.x = first;
				params.position.dx = firstDelta ;
			}else if( ['left','right'].indexOf(second) > -1 ){	
				params.position.x = second;
				params.position.dx = secondDelta ;
			}

			if( ['top','bottom'].indexOf(first) > -1 ){	
				params.position.y = first;
				params.position.dy = firstDelta ;
			}else if( ['top','bottom'].indexOf(second) > -1 ){	
				params.position.y = second;
				params.position.dy = secondDelta ;
			}
		}

		// * * * ALIGN * * *
		rgx = new RegExp('([a-z]+)([+-][0-9]+)?','gi');
		align = rgx.exec( align );

		if( align ){

			var alignValue 	= align[1] || 'center' ;
			var alignDelta 	= parseInt( align[2] || '0' );

			if( ['left','right','center','top','bottom'].indexOf(alignValue) > -1 ){	
				params.align.value = alignValue ;
				params.align.delta = alignDelta ;
			}
		}



		return this.each(function(){
			var $this = $(this);
			// css position of parent
			if( params.$parent.css("position") == 'static')
				params.$parent.css("position","relative");

			$this.css("position","absolute");

			// position
			var x = 'left';
			var y = 'top' ;
			var dx = parseInt( params.position.dx || '0' );
			var dy = parseInt( params.position.dy || '0' );
			// align
			var alignValue = params.align.value || 'center';
			var alignDelta = parseInt( params.align.delta || 0 );

			// x ?
			if(params.position.x){
				dx += params.$parent.width();

				if(params.position.x == 'left')
					x = 'right';
				else if(params.position.x == 'right')
					x = 'left';

			}else{
				dx += alignDelta ;
				if( alignValue == 'center' )
					dx += (params.$parent.width() - $this.width())/2 ;
				else if( alignValue == 'right' ){
					x  = 'right';
					dx *= -1;
				}
			}
			// y ?
			if( params.position.y){
				dy += params.$parent.height();

				if(params.position.y == 'top')
					y = 'bottom';
				else if(params.position.y == 'bottom')
					y = 'top';
			}else{
				dy += alignDelta ;
				if( alignValue == 'center' )
					dy += (params.$parent.height() - $this.height())/2 ;
				else if( alignValue == 'bottom' ){
					y  = 'bottom';
					dy *= -1;
				}
			}

			var css = {
				left 	: '',
				right 	: '',
				top 	: '',
				bottom 	: '',
			};
			css[y] = dy;
			css[x] = dx;

			$this.css(css);

		});
	}

})(jQuery);