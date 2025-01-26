var students = [];

function addStudent() {
  var name = prompt("Enter the student's name:");
  if (!name || name.trim() === "") {
    alert("Student name cannot be empty!");
    return;
  }

  var marks = [];
  for (var i = 1; i <= 5; i++) {
    var mark = prompt("Enter marks for Subject " + i + " (out of 100):");
    mark = parseInt(mark, 10);
    if (isNaN(mark) || mark < 0 || mark > 100) {
      alert("Invalid marks! Marks must be a number between 0 and 100.");
      return;
    }
    marks.push(mark);
  }

  var total = calculateTotal(marks);
  var average = calculateAverage(total, marks.length);

  students.push({ name: name, marks: marks, total: total, average: average });

  updateTable();
}

function calculateTotal(marks) {
  var total = 0;
  for (var i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return total;
}

function calculateAverage(total, count) {
  return (total / count).toFixed(2);
}

function updateTable() {
  var tableBody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; 
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.innerText = student.name;
    row.appendChild(nameCell);
    for (var j = 0; j < student.marks.length; j++) {
      var marksCell = document.createElement("td");
      marksCell.innerText = student.marks[j];
      row.appendChild(marksCell);
    }
  var totalCell = document.createElement("td");
    totalCell.innerText = student.total;
    row.appendChild(totalCell);
    var averageCell = document.createElement("td");
    averageCell.innerText = student.average;
    row.appendChild(averageCell);

    tableBody.appendChild(row);
  }
}
