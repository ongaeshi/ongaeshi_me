//
// @file 
// @brief  キャンバス操作
// @author ongaeshi
// @date   2011/01/30

var Canvas = (function() {
  var ARROW_COLOR = 'rgba(204,0,0,1)';
  var ARROW_SIZE = 4.0;
  var ARROW_POS = [
    {x: 0,y:30},
    {x:25,y:60},
    {x:60,y: 0},
  ];
  var ARROW_RANGE = 60;
  var ARROW_1ST_FRAME = 10;
  var ARROW_2ND_FRAME = 17;

  return {
    draw_arrow: function(ctx, x, y) {
      ctx.strokeStyle = ARROW_COLOR;
      ctx.lineWidth = ARROW_SIZE;

      ctx.beginPath();
      ctx.moveTo(x + ARROW_POS[0].x, y + ARROW_POS[0].y);
      ctx.lineTo(x + ARROW_POS[1].x, y + ARROW_POS[1].y);
      ctx.lineTo(x + ARROW_POS[2].x, y + ARROW_POS[2].y);
      ctx.stroke();
    },

    draw_arrow_anim: function(ctx, x, y) {
      var counter = 0;
      
      timer_id = setInterval(function () {
        counter++;

        ctx.strokeStyle = ARROW_COLOR;
        ctx.lineWidth = ARROW_SIZE;

	// IEは部分クリアに対応していない？
	// キャンバスが丸ごと消されるので、IEの時は諦めて上書き。
	// 少し矢印が太って表示されてしまう。
        if (!isMSIE)
	  ctx.clearRect(x, y, ARROW_RANGE, ARROW_RANGE);

        if (counter <= ARROW_1ST_FRAME) {
          rate = MyMath.rate(0, ARROW_1ST_FRAME, counter);

          ctx.beginPath();
          ctx.moveTo(x + ARROW_POS[0].x, y + ARROW_POS[0].y);
          ctx.lineTo(x + MyMath.lerp(ARROW_POS[0].x, ARROW_POS[1].x, rate), y + MyMath.lerp(ARROW_POS[0].y, ARROW_POS[1].y, rate));
          ctx.stroke();
          return;

        } else if (counter <= ARROW_2ND_FRAME) {
          rate = MyMath.rate(ARROW_1ST_FRAME, ARROW_2ND_FRAME, counter);
          
          ctx.beginPath();
          ctx.moveTo(x + ARROW_POS[0].x, y + ARROW_POS[0].y);
          ctx.lineTo(x + ARROW_POS[1].x, y + ARROW_POS[1].y);
          ctx.lineTo(x + MyMath.lerp(ARROW_POS[1].x, ARROW_POS[2].x, rate), y + MyMath.lerp(ARROW_POS[1].y, ARROW_POS[2].y, rate));
          ctx.stroke();
        } else {
          Canvas.draw_arrow(ctx, x, y);
          clearInterval(timer_id);
        }
        
      }, 16);
    },

    fade_in: function(canvas, color, fade_speed) {
      var ctx = canvas.getContext('2d');

      canvas.style.display = '';

      ctx.fillStyle = color;
      ctx.globalAlpha = 1.0;
      
      timer_id = setInterval(function () {
        ctx.globalAlpha -= fade_speed;

        if (ctx.globalAlpha <= fade_speed) {
          ctx.globalAlpha = 0.0;
          canvas.style.display = 'none';
          clearInterval(timer_id);
        }

        //console.log(ctx.globalAlpha);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);

      }, 16);
    }
  };
})();


