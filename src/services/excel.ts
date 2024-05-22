import * as XLSX from 'xlsx';


const exportToExcel = (data: object[]) => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Convert the array of objects to a worksheet
    const ws = XLSX.utils.json_to_sheet(data);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Generate the Excel file and trigger the download
    XLSX.writeFile(wb, `users.xlsx`);
};
export default exportToExcel