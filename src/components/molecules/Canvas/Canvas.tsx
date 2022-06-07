import React from 'react';


const Canvas = ({ draw, height, width }:any) => {
  const canvas = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const context:any = canvas.current;
    draw(context.getContext('2d'));
  });

  return (
    <>
      <span>Виселица</span>
      <canvas ref={canvas} height={height} width={width} />
    </>
  );
};


export default Canvas;
