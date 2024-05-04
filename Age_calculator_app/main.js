// let day_in = document.getElementById("day");
// let month_in = document.getElementById("month");
// let year_in= document.getElementById("year");

// let day_out = document.getElementById("Days");
// let month_out = document.getElementById("Months");
// let year_out = document.getElementById("Years");

const form = document.getElementById('ageCalculatorForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const submitBtn = document.getElementById('submit');

    let dayError = '';
    let monthError = '';
    let yearError = '';

    if (!day || !month || !year) {

        if (!day && (!month || !year)) {
            dayError = 'This field is required';
          }
          
          if (!month && (!day || !year)) {
            monthError = 'This field is required';
          }
          
          if (!year && (!day || !month)) {
            yearError = 'This field is required';
          }
          submitBtn.style.top = '36%';

      } else {
        if (isNaN(day) || day < 1 || day > 31) {
          dayError = 'Must be a valid date';
          submitBtn.style.top = '36%';
        }

        if (isNaN(month) || month < 1 || month > 12) {
          monthError = 'Must be a valid month';
          submitBtn.style.top = '36%';
        }

        if (isNaN(year) || year > new Date().getFullYear()) {
          yearError = 'Must be in the past';
          submitBtn.style.top = '36%';
        }
      }
      document.getElementById('dayError').innerText = dayError;
      document.getElementById('monthError').innerText = monthError;
      document.getElementById('yearError').innerText = yearError;

      if (dayError || monthError || yearError) {
        return;
      }
      submitBtn.style.top = '31%';
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        days = lastMonth.getDate() - day + today.getDate();
        months--;
    }

    document.getElementById('Years').innerText = years;
    document.getElementById('Months').innerText = months;
    document.getElementById('Days').innerText = days;
  });

