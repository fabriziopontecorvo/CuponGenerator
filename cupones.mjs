
import { faker } from '@faker-js/faker';
import objectsToCsv from 'objects-to-csv';

const Cupones = [];
function createRandomUser() {
  
  return {
    "establishment": faker.company.name(),
    "amountMovment": faker.finance.amount(),
    "movementDate": faker.date.recent(3),
    "presentationDate": faker.date.recent(2),
    "amountTariffPayer": faker.finance.amount(),
    "amountTarffVisa": faker.finance.amount(),
    "totalQuantityInstallment": faker.random.numeric(1, { allowLeadingZeros: false }),
    "codeGobPlan": faker.random.alpha(1),
    "acceleratedPaymentPrismaDate": faker.date.recent(1),
    "transactionId": faker.datatype.uuid(),
    "codUserBank": faker.random.alpha(3),
    "paymentDate": faker.date.recent(2),
    "financialCost": faker.finance.amount(),
    "financialCostPrisma": faker.finance.amount(),
    "acceleratedAmount": faker.finance.amount(),
    "financialDays": faker.random.numeric(1, { allowLeadingZeros: false })
  }
}



Array.from({ length: 100000 }).forEach(() => {
  Cupones.push(createRandomUser());
});

const csv = new objectsToCsv(Cupones)
await csv.toDisk('./cupones.csv')


