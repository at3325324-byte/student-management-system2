
class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;                 
    this.name = name;            
    this.grades = grades;         
    this.attendance = attendance; 
  }

  
  calculateAverage() {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  }

  getGrade(average) {
    if (average >= 90) {
      return "A";
    } else if (average >= 80) {
      return "B";
    } else if (average >= 70) {
      return "C";
    } else if (average >= 60) {
      return "D";
    } else if (average >= 50) {
      return "E";
    } else {
      return "F";
    }
  }

  
  getFinalResult() {
    const average = this.calculateAverage();
    if (average >= 50 && this.attendance >= 75) {
      return "ناجح";
    } else {
      return "يحتاج مراجعة";
    }
  }
}



const studentsList = [
  new Student(101, "أحمد",  [90, 85, 95], 90),  
  new Student(102, "سارة",  [45, 40, 50], 80), 
  new Student(103, "محمد",  [48, 42, 46], 70), 
  new Student(104, "منى",   [70, 65, 75], 60),  
];


console.log("========== تقرير الطلاب ==========");
studentsList.forEach((student) => {
  const avg = student.calculateAverage();
  console.log(
    `الاسم: ${student.name} | المتوسط: ${avg.toFixed(2)} | التقدير: ${student.getGrade(avg)} | النتيجة: ${student.getFinalResult()}`
  );
});



const strugglingStudents = studentsList.filter((student) => {
  const avg = student.calculateAverage();
  return avg >= 40 && avg <= 49;
});


const mercyStudents = strugglingStudents.map((student) => {
  return {
    id: student.id,
    name: student.name,
    oldAverage: student.calculateAverage(),
    newAverage: student.calculateAverage() + 5,
  };
});


const totalNewAverages = mercyStudents.reduce(
  (sum, student) => sum + student.newAverage,
  0
);


let mercyAverage;
if (mercyStudents.length === 0) {
  mercyAverage = 0; 
} else {
  mercyAverage = totalNewAverages / mercyStudents.length;
}

console.log("========== الطلاب المتعثرين بعد الرأفة ==========");
console.log(mercyStudents);

console.log("========== متوسط المتعثرين بعد التعديل ==========");
console.log(mercyAverage.toFixed(2));