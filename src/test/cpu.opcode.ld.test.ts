import * as assert from 'assert';
import {CPU} from '../main/cpu';

describe ('CPU Opcode LD (0x6XNN)', () => {

    let cpu: CPU;

    beforeEach(() => {
        cpu = new CPU();
    });

    it ('should load the value 34 in the V1 register', () => {
        cpu.execute(0x6122);
        assert.equal(cpu.V1, 34);
    });

    it ('should load the value 0xFF in the VA register', () => {
        cpu.execute(0x6AFF);
        assert.equal(cpu.VA, 255);
    });

    it ('should increment the PC register', () => {
        cpu.PC = 14;
        cpu.execute(0x6AFF);
        assert.equal(cpu.PC, 16);
    });
});
