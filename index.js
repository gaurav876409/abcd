const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");
const calendarBody = document.querySelector("#calendar tbody");
for (let year = 1990; year <= 2030; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.text = year;
    yearSelect.appendChild(option);
  }

function generateCalendar(month, year) {
  const daysInMonth = new Date(year, month + 1, 0).getDate(); 
  const firstDay = new Date(year, month, 1).getDay(); 

  calendarBody.innerHTML = ""; 

  let date = 1;

let prevMonthDays = new Date(year, month, 0).getDate(); 

  for (let i = 0; i < 6; i++) {
    const row = calendarBody.insertRow();
    for (let j = 0; j < 7; j++) {
      const cell = row.insertCell();

      if (i === 0 && j < firstDay) {
        cell.textContent = prevMonthDays - firstDay + j + 1;
        cell.classList.add("blur"); 
        cell.classList.add("white-cell");
      } else if (date <= daysInMonth) {
        cell.textContent = date;
        cell.classList.add("white-cell");
        date++;
      } else {
        cell.textContent = date - daysInMonth;
        cell.classList.add("blur"); 
        cell.classList.add("white-cell");
        date++;
      }
    }
  }
}

generateCalendar(0, 1990); 

monthSelect.addEventListener("change", function () {
  const selectedMonth = parseInt(monthSelect.value);
  const selectedYear = parseInt(yearSelect.value);
  if(selectedMonth !== -1 && selectedYear !== -1){
      generateCalendar(selectedMonth, selectedYear);
  }
});
yearSelect.addEventListener("change", function () {
    const selectedMonth = parseInt(monthSelect.value);
    const selectedYear = parseInt(yearSelect.value);
    if(selectedMonth !== -1 && selectedYear !== -1){
        generateCalendar(selectedMonth, selectedYear);
    }
  });
  

function toggleCellBackground() {
    const inputDate = parseInt(document.getElementById("dateInput").value);
    const cells = calendarBody.querySelectorAll("td");
    console.log(inputDate);
    cells.forEach((cell) => {
        if (parseInt(cell.textContent) === inputDate) {
            if (cell.classList.contains("green-cell")) {
                cell.classList.remove("green-cell");
                cell.classList.add("white-cell");
            } else if (cell.classList.contains("white-cell") && (!cell.classList.contains("blur"))) {
                cell.classList.remove("white-cell");
                cell.classList.add("green-cell");
            }
        }
    });
}
