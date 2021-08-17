import { expect } from 'chai';

// import the students from students.js to check if it is an array or not

import { documentation} from './main.js';

describe('documentation', () => {
    it('should be an array and it should include my name', () => {
        expect(students).to.be.an('array').and.to.include('Alby Baby');
    });
});