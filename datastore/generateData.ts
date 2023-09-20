import { faker } from '@faker-js/faker';
import fs from 'fs';

const generateData = () => {
    const NUM_USERS = 100;
    const NUM_COMPANIES = 10;

    // Generate companies first
    const companies = Array.from({ length: NUM_COMPANIES }).map(() => ({
        id: faker.string.uuid(),
        name: faker.company.name(),
        description: faker.company.catchPhrase(),
    }));

    // Generate users linked to companies
    const users = Array.from({ length: NUM_USERS }).map(() => ({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        age: faker.number.int({ min: 18, max: 60 }),
        companyId: companies[Math.floor(Math.random() * companies.length)].id,  // Randomly link a user to a company
    }));

    return {
        users,
        companies,
    };
};

const data = generateData();
fs.writeFileSync('dist/db.json', JSON.stringify(data, null, 2));

console.log('Mock data generated and saved to db.json!');
