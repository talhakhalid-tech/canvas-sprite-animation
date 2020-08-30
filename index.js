window.onload = function () {
  //definitions
  const canvas = document.querySelector("canvas");
  canvas.width = 600;
  canvas.height = 450;
  const context = canvas.getContext("2d");

  const img = new Image();
  img.src = "/tile.png";

  img.onload = () => {
    var cellWidth = 192;
    var cellHeight = 200;

    drawImage = (horIndex, verIndex, count) => {
      context.drawImage(
        img,
        horIndex * cellWidth,
        verIndex * cellHeight,
        cellWidth,
        cellHeight,
        // 350,
        (canvas.width / 8) * count - cellWidth / 2,
        75,
        cellWidth,
        cellHeight
      );
    };

    let horCell = 0;
    let verCell = 0;
    let count = 0;
    let date = new Date();

    animateFunction = () => {
      let now = new Date();
      if (now - date >= 150) {
        date = now;
        context.clearRect(0, 0, canvas.width, canvas.height);

        console.log(count);
        horCell++;
        count++;
        if (horCell % 4 === 0) {
          horCell = 0;
          verCell++;
          if (verCell % 2 === 0) {
            verCell = 0;
            count = 0;
          }
        }
        drawImage(horCell, verCell, count);
      }

      window.requestAnimationFrame(animateFunction);
    };

    window.requestAnimationFrame(animateFunction);
  };
};
