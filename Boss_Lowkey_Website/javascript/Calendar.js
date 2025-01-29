// script.js
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const daysElement = document.getElementById('days');
  const monthYearElement = document.getElementById('monthYear');
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  
  function renderCalendar() {
      daysElement.innerHTML = '';
      const firstDay = new Date(currentYear, currentMonth).getDay();
      const numDays = new Date(currentYear, currentMonth + 1, 0).getDate();
      monthYearElement.innerText = `${monthNames[currentMonth]} ${currentYear}`;
  
      for (let i = 0; i < firstDay; i++) {
          const emptyDiv = document.createElement('div');
          daysElement.appendChild(emptyDiv);
      }
  
      for (let day = 1; day <= numDays; day++) {
          const dayDiv = document.createElement('div');
          dayDiv.innerText = day;
          if (currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() && day === new Date().getDate()) {
              dayDiv.classList.add('today');
          }
          daysElement.appendChild(dayDiv);
      }
  }
  
  function prevMonth() {
      if (currentMonth === 0) {
          currentMonth = 11;
          currentYear--;
      } else {
          currentMonth--;
      }
      renderCalendar();
  }
  
  function nextMonth() {
      if (currentMonth === 11) {
          currentMonth = 0;
          currentYear++;
      } else {
          currentMonth++;
      }
      renderCalendar();
  }
  
  document.addEventListener('DOMContentLoaded', renderCalendar);
  