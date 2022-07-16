
export default function getCanvasPic(ctx:any, errorCount:number) {

  for (let ind = 0; ind < errorCount; ind++) {

    if (ind === 0) {
      ctx.beginPath();
      ctx.moveTo(40, 40);
      ctx.lineTo(40, 360);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.closePath();
    }

    if (ind === 1) {
      ctx.beginPath();
      ctx.moveTo(40, 40);
      ctx.lineTo(360, 40);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.closePath();
    }

    if (ind === 2) {
      ctx.beginPath();
      ctx.moveTo(360, 40);
      ctx.lineTo(360, 360);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.closePath();
    }

    if (ind === 3) {
      ctx.beginPath();
      ctx.moveTo(200, 40);
      ctx.lineTo(200, 80);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(200, 100, 20, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();
    }

    if (ind === 4) {
      ctx.beginPath();
      ctx.arc(200, 180, 60, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();
    }

    if (ind === 5) {
      ctx.beginPath();
      ctx.moveTo(140, 180);
      ctx.lineTo(80, 120);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.moveTo(260, 180);
      ctx.lineTo(320, 120);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.closePath();
    }

    if (ind === 6) {
      ctx.beginPath();
      ctx.moveTo(200, 240);
      ctx.lineTo(140, 300);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.moveTo(200, 240);
      ctx.lineTo(260, 300);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.closePath();
    }
  }
}
