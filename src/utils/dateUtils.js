export const getInspectionsByMonth = (inspections = [], month, year) => {
  // Now inspections will default to an empty array if undefined
  return inspections.filter(inspection => {
    const inspectionDate = new Date(inspection.date);
    return inspectionDate.getMonth() === month && inspectionDate.getFullYear() === year;
  });
};