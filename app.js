//'use strict'

const XLSX = require('xlsx')

// Función para leer y almacenar en memoria el modelo facilitado en archivo xlsx
function readExcel(path) {
    const workbook = XLSX.readFile(path);
    const workbookSheets = workbook.SheetNames;
    // console.log(workbookSheets)

    const sheet = workbookSheets[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    
    
    return dataExcel
}

// Función para contar el número de hombres y mujeres
function countSex() {
    dataExcel = readExcel('datos_prueba_tecnica.xlsx')
    let countSex = []
    let sexH = 0;
    let sexM = 0;
    
    for (let sexCounter of dataExcel){
        countSex.push(sexCounter['sexo'])
    }

    for (let i = 0; i < countSex.length; i++){
        if(countSex[i] == 'H'){
            sexH++;
        }else{
            sexM++;
        }
    }
    console.log()
    console.log (`Hay ${sexH} hombres y ${sexM} mujeres de un total de ${countSex.length} empleados.`)
};

// Salario bruto total de empresa 1 = 453166,667
function salarioBruto(empresa) {
    dataExcel = readExcel('datos_prueba_tecnica.xlsx');
    let emp = empresa;
    console.log(empresa);
    let totalSalary = 0;

    for (let salary of dataExcel){
        if (salary['ID Empresa'] == 1){
            let iSalary = salary['salario bruto anual'];
            totalSalary += iSalary;
        }
    }

    console.log()
    console.log (`El salario bruto anual de la empresa 1 (Equilibrha IT y CT2) es de ${totalSalary.toFixed(3)} €`);
};

//Listado de empleados
function listadoEmpleados() {

    console.log()
    console.log (`HACER LISTADO EMPLEADOS.`)
    console.log()
};
countSex();
salarioBruto(1);
listadoEmpleados();