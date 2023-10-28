const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");
const calendarBody = document.querySelector("#calendar tbody");
for (let year = 1990; year <= 2030; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.text = year;
    yearSelect.appendChild(option);
  }

// Function to generate the calendar
function generateCalendar(month, year) {
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the selected month
  const firstDay = new Date(year, month, 1).getDay(); // Get the day of the week of the first day

  calendarBody.innerHTML = ""; // Clear the calendar body

  let date = 1;

let prevMonthDays = new Date(year, month, 0).getDate(); // Get the number of days in the previous month

  for (let i = 0; i < 6; i++) {
    const row = calendarBody.insertRow();
    for (let j = 0; j < 7; j++) {
      const cell = row.insertCell();

      if (i === 0 && j < firstDay) {
        // Fill empty cells before the first day of the month
        cell.textContent = prevMonthDays - firstDay + j + 1;
        cell.classList.add("blur"); // Add a CSS class for blurred cells
        cell.classList.add("white-cell");
      } else if (date <= daysInMonth) {
        cell.textContent = date;
        cell.classList.add("white-cell");
        date++;
      } else {
        // Display dates from the next month
        cell.textContent = date - daysInMonth;
        cell.classList.add("blur"); // Add a CSS class for blurred cells
        cell.classList.add("white-cell");
        date++;
      }
    }
  }
}

// Initial calendar generation
generateCalendar(0, 1990); // You can set default values

// Event listener for month and year selection
monthSelect.addEventListener("change", function () {
  const selectedMonth = parseInt(monthSelect.value);
  const selectedYear = parseInt(yearSelect.value);
  if(selectedMonth !== -1 && selectedYear !== -1){
      generateCalendar(selectedMonth, selectedYear);
  }
});
// Event listener for year selection
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
