
export default function getCanvasPic(ctx:any, errorCount:number) {

  for (let ind = 0; ind < errorCount; ind++) {

    if (ind === 0) {
      ctx.beginPath();
      ctx.moveTo(20, 20);
      ctx.lineTo(20, 180);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();
    }

    if (ind === 1) {
      ctx.beginPath();
      ctx.moveTo(20, 20);
      ctx.lineTo(180, 20);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();
    }

    if (ind === 2) {
      ctx.beginPath();
      ctx.moveTo(180, 20);
      ctx.lineTo(180, 180);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();
    }

    if (ind === 3) {
      ctx.beginPath();
      ctx.moveTo(100, 20);
      ctx.lineTo(100, 40);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(100, 50, 10, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();
    }

    if (ind === 4) {
      ctx.beginPath();
      ctx.arc(100, 90, 30, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();
    }

    if (ind === 5) {
      ctx.beginPath();
      ctx.moveTo(70, 90);
      ctx.lineTo(40, 60);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.moveTo(130, 90);
      ctx.lineTo(160, 60);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();
    }

    if (ind === 6) {
      ctx.beginPath();
      ctx.moveTo(100, 120);
      ctx.lineTo(70, 150);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.moveTo(100, 120);
      ctx.lineTo(130, 150);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.closePath();
    }
  }
}
