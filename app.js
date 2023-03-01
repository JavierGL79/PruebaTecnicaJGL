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
    console.log('CONTABILIZACIÓN DEL SEXO:')
    console.log()
    console.log (`Hay ${sexH} hombres y ${sexM} mujeres de un total de ${countSex.length} empleados.`);
    console.log()
};

// Salario bruto total de empresa 1 = 453166,667
function salarioBruto(empresa) {
    dataExcel = readExcel('datos_prueba_tecnica.xlsx');
    let emp = empresa;
    let totalSalary = 0;

    for (let salary of dataExcel){
        if (salary['ID Empresa'] == emp){
            let iSalary = salary['salario bruto anual'];
            totalSalary += iSalary;
        }
    }
    console.log('SALARIO BRUTO ANUAL DE LA EMPRESA:')
    console.log()
    console.log (`El salario bruto anual de la empresa 1 (Equilibrha IT y CT2) es de ${totalSalary.toFixed(3)} €`);
    console.log()
};

//Listado de empleados que cobren +28000 y pertenezcan empresa 2. Id, apellidos, salario y
function listadoEmpleados() {
    dataExcel = readExcel('datos_prueba_tecnica.xlsx');
    
    console.log();
    console.log (`LISTA DE EMPLEADOS:`);
    console.log();
    
    for (let id of dataExcel){
        if(id['ID Empresa'] == 2 && id['salario bruto anual'] > 28000) {

        console.log(`Id empleado: ${id['id empleado']}, nombre: ${id['nombre']} ${id['apellido1']} ${id['apellido2']}, salario: ${id['salario bruto anual'].toFixed(3)} €, empresa: ${id['Nombre empresa']}.`)
        }
    };
    
    console.log();
};

console.log()
console.log('RESULTADOS DE LA PRUEBA TÉCNICA:')
console.log()

countSex();
salarioBruto(1);
listadoEmpleados();