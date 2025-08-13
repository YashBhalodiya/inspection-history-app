export const getInspectionsByMonth = (inspections = [], month, year) => {
  return inspections.filter(inspection => {
    const inspectionDate = new Date(inspection.date);
    return (
      inspectionDate.getFullYear() === year &&
      inspectionDate.getMonth() + 1 === month
    );
  });
};