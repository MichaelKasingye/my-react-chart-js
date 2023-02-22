export const colors = [
"#16a085",
"#27ae60",
"#2980b9",
"#8e44ad",
"#2c3e50",
"#f39c12",
"#d35400",
"#c0392b",
"#7f8c8d",
"#2d3436",
"#63cdda",
"#c44569",
"#e66767",
"#273c75",
]
const labels = ["Rooms", "Gym", "Restaurant", "Beach", "Boat ride"];

export const colorLabels = labels.reduce((acc, label, index) => {
    acc[label] = colors[index];
    return acc;
  }, {});
  