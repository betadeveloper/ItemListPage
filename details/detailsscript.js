const tbody = document.querySelector('tbody');
let data = {};
let i = 0;

// GET data from API 
axios.get('https://sheetdb.io/api/v1/t0tdd9q5rqp2u')
  .then( response => {
      response.data.forEach((element) => {
         data = element;
         const tbl = document.querySelector(".rwd-table");
    // (C2) ROWS & CELLS
    let row = `<tr id="${[i]}">
        <td data-th="Name">${data.Name}</td>
        <td data-th="Surname">${data.Surname}</td>
        <td data-th="Gender">${data.Gender}</td>
        <td data-th="Date of birth">${data.Dateofbirth}</td>
        <td data-th="Position">${data.Position}</td>
        <td data-th="Annual income">${data.Annualincome}</td>
          </tr>
      `//Append data to table
      document.querySelector(".rwd-table").innerHTML = row;
      });
  });
