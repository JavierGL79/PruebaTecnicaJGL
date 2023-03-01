//'use strict'

const XLSX = require('xlsx')

function readExcel(path) {
    const workbook = XLSX.readFile(path);
    const workbookSheets = workbook.SheetNames;
    // console.log(workbookSheets)

    const sheet = workbookSheets[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

    console.log(dataExcel)
}

readExcel('datos_prueba_tecnica.xlsx')