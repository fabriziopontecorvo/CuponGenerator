import {faker} from '@faker-js/faker';
import objectsToCsv from 'objects-to-csv';

const Cupones = [];


function formatDate(date) {
    var d = date,
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join("");
}

function createRandomUser() {

    return {
        "NumTar": null,
        "NumCup": faker.random.numeric(8),
        "FecCup": formatDate(faker.date.between('2022-01-01T00:00:00.000Z', '2022-10-18T00:00:00.000Z')), // 20220809
        "Importe": faker.datatype.float({ // acceleratedAmount
            max: 999999999999,
            min: 500,
            precision: 0.01
        }),
        "Lote": null,
        "Marca": null,
        "Estable": faker.random.numeric(10),
        "Fec_Pres": formatDate(faker.date.between('2022-01-01T00:00:00.000Z', '2022-10-18T00:00:00.000Z')),
        "FecPago": formatDate(faker.date.between('2022-01-01T00:00:00.000Z', '2022-10-18T00:00:00.000Z')),
        "PlanCuota": faker.random.numeric(2),
        "NumCuota": null,
        "CodOper": '0005',
        "AranPag": faker.datatype.float({
            max: 99999999,
            min: 500,
            precision: 0.01
        }),
        "AranAdm": faker.datatype.float({
            max: 99999999,
            min: 500,
            precision: 0.01
        }),
        "dFechaCarga": faker.date.between('2022-01-01T00:00:00.000Z', '2022-10-18T00:00:00.000Z').toISOString().substring(0,19).replace('T',' '),
        "AranEmi": null,
        "Caja": null,
        "NroAut": null,
        "BcoPag": faker.random.numeric(3),
        "SucPag": null,
        "TipoPlanC": 'A',
        "TermCaptura": null,
        "PosManual": null,
        "RubroEst": null,
        "BcoEst": null,
        "CasaEst": null,
        "Dias_Pago": faker.random.numeric(2),
        "Comision": null,
        "Da_Seguros_Servicios": null,
        "Da_Marca_1_Debito": null,
        "ModIng_Aut": null,
        "Id_AgroPatac": null,
        "Id_Campania": null,
        "ImpCampania": null,
        "TasaCampania": null,
        "PorcDescComercio": null,
        "TID": faker.random.alpha(15),
        "Importe_Total_Plan": faker.random.numeric(8), // financialCostPrisma
        "cCambioTNA": null,
        "nTNAOriginal": null,
        "Marca_Switch": null,
        "Cod_plan_gobierno": null,
        "Costo_Financiero": faker.random.numeric(8),
        "FECHA_AUT": null,
        "HORA_AUT": null,
        "NRO_MICROFILM": null,
        "UP_TRACE_NUMBER": null,
        "Financiado": null,
        "Marca_Token": null,
        "Pan_Token": null,
        "Token_Assurance_Level": null,
        "MC_QR": null,
        "MC_Billetera": null,
        "dFecCUp": null,
        "iNumCup": null,
        "iNroAut": null,
    }
}


Array.from({length: 10}).forEach(() => {
    Cupones.push(createRandomUser());
});

const csv = new objectsToCsv(Cupones)
await csv.toDisk('./cupones.csv')


