import React from 'react';

// TODO: ДОБАВИТЬ ИНТЕРФЕЙС ДЛЯ КОМПОНЕНТА
const Canvas = ({ draw, height, width }:any) => {
  const canvas = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const context:any = canvas.current;
    draw(context.getContext('2d'));
  });

  return (
    <>
      <canvas ref={canvas} height={height} width={width} />
    </>
  );
};


export default Canvas;
