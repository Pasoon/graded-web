const calculateGrade = course => {
  const deliverables = course.deliverables;
  const sum = 0;
  const grade = 0;
  deliverables.forEach(deliverable => {
    sum += deliverable.grade;
  });

  grade = sum / deliverables.length;

  return grade;
};

export default calculateGrade;
