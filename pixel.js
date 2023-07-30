// Grid dimensions
let grid_width = document.getElementById("g-width");
let width_val = document.querySelector(".width-val");

let grid_height = document.getElementById("g-height");
let height_val = document.querySelector(".height-val");

grid_width.addEventListener("change", (e) => {
  console.log(grid_width.value);
  width_val.innerText = grid_width.value;
});

grid_height.addEventListener("change", (e) => {
  console.log(grid_height.value);
  height_val.innerText = grid_height.value;
});

let grid_container = document.querySelector(".grid-container");

// Grid buttons

//  Create Button
let create_btn = document.querySelector(".create-btn");
//  Clear Grid
let clear_btn = document.querySelector(".clear-btn");
// Erase
let erase_btn = document.querySelector(".er-btn");
// Paint
let paint_btn = document.querySelector(".pnt-btn");
// Color Pallette
let selec_color = document.querySelector(".color-pall");
let curr_selec_col= '#000000';
selec_color.addEventListener("input", (e) => {
    curr_selec_col = e.target.value;
    console.log(curr_selec_col);
  });

create_btn.addEventListener("click", (e) => {
  clear_btn.classList.remove("d-disp");
  paint_btn.classList.remove("d-disp");

  grid_container.innerHTML = "";

//   Dynamically creating grid rows and columns

  for (let i = 0; i < height_val.innerText; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", `row`);

    row.setAttribute("data-row", `row-${i}`);
    for (let j = 0; j < width_val.innerText; j++) {
      let column = document.createElement("span");

      column.setAttribute("class", "grid-item");
      column.setAttribute("data-col", `col-${j}`);
      row.append(column);
    }

    grid_container.append(row);
  }
  let grid_items = document.querySelectorAll(".grid-item");

  paint_btn.addEventListener('click',()=>{
    grid_container.classList.remove('d-disp');
    paint_btn.style.backgroundColor='#2160e3';
    paint_btn.style.color='white';

    erase_btn.style.backgroundColor='#fac02a';

    erase_btn.classList.remove('d-disp');
    grid_items.forEach((item)=>{
        item.addEventListener('click',(e)=>{
        e.target.style.backgroundColor=curr_selec_col;
        });
      })
  })

  erase_btn.addEventListener('click',(e)=>{
    paint_btn.style.backgroundColor='#fac02a';
    erase_btn.style.backgroundColor='#2160e3';
    erase_btn.style.color='white';

    
    grid_items.forEach((item)=>{
        item.addEventListener('click',(e)=>{
        e.target.style.backgroundColor='white';
        });
      })
  })

});



clear_btn.addEventListener("click", (e) => {
  grid_container.innerHTML = "";
  clear_btn.classList.toggle("d-disp");
  paint_btn.classList.toggle("d-disp");
});
