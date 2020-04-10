const getGradeLetter = grade => {
  let gradeLetter = '';
  if (grade >= 90) {
    gradeLetter = 'A+';
  }
  if (grade >= 85 && grade <= 89) {
    gradeLetter = 'A';
  }
  if (grade >= 80 && grade <= 84) {
    gradeLetter = 'A-';
  }
  if (grade >= 75 && grade <= 79) {
    gradeLetter = 'B+';
  }
  if (grade >= 70 && grade <= 74) {
    gradeLetter = 'B';
  }
  if (grade >= 65 && grade <= 69) {
    gradeLetter = 'C+';
  }
  if (grade >= 60 && grade <= 64) {
    gradeLetter = 'C';
  }
  if (grade >= 55 && grade <= 59) {
    gradeLetter = 'D+';
  }
  if (grade >= 50 && grade <= 54) {
    gradeLetter = 'D';
  }
  if (grade < 50) {
    gradeLetter = 'F';
  }
  return gradeLetter;
};

export default getGradeLetter;
