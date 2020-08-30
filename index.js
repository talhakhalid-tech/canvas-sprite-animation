window.onload = function () {
  //definitions
  const canvas = document.querySelector("canvas");
  canvas.width = 900;
  canvas.height = 450;
  const context = canvas.getContext("2d");

  const img = new Image();
  img.src = "/tile.png";

  var cellWidth = 192;
  var cellHeight = 200;

  drawImage = (horIndex, verIndex) => {
    context.drawImage(
      img,
      horIndex * cellWidth,
      verIndex * cellHeight,
      cellWidth,
      cellHeight,
      350,
      75,
      cellWidth,
      cellHeight
    );
  };

  let horCell = 0;
  let verCell = 0;
  let date = new Date();

  animateFunction = () => {
    let now = new Date();
    if (now - date >= 100) {
      date = now;
      context.clearRect(0, 0, canvas.width, canvas.height);

      horCell++;
      if (horCell % 4 === 0) {
        horCell = 0;
        verCell++;
        if (verCell % 2 === 0) {
          verCell = 0;
        }
      }
      drawImage(horCell, verCell);
    }

    window.requestAnimationFrame(animateFunction);
  };

  window.requestAnimationFrame(animateFunction);
};
