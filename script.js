document.addEventListener("DOMContentLoaded", function() {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    changeColorBtn.addEventListener("click", function() {
        colorBox.style.backgroundColor = getRandomColor();
    });
});

const height = 11;

// Loop through each row
for (let i = 1; i <= height; i++) {
  let row = '';

  // Add spaces to align the triangle to the right
//   for (let j = 1; j <= height - i; j++) {
//     row += '';
//   }

  // Add asterisks to form the triangle
  for (let k = 1; k <= 1 * i - 1; k++) {
    row += '#';
  }

  // Print the row
  console.log(row);
}
