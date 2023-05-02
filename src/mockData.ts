import type { MockData } from './types';
import { v4 as uuidv4 } from 'uuid';

export const creatMockData = (index: number): MockData => {
    const hostName = `host-${index}`;
    return {
        id: { value: uuidv4(), type: 'string' },
        hostName: { value: hostName, type: 'string' },
        top: { value: Math.floor(Math.random() * 100), type: 'string' },
        cpu: { value: Math.floor(Math.random() * 100), type: 'string' },
        mem: { value: Math.floor(Math.random() * 100), type: 'string' },
        swap: { value: Math.floor(Math.random() * 100), type: 'string' },
        disk: { value: Math.floor(Math.random() * 100), type: 'string' },
        diskName: { value: `${hostName}-disk`, type: 'string' },
        check: { value: false, type: 'check' },
        check1: { value: false, type: 'check' },
    };
};

export const createMockDataList = (length: number) => {
    return new Array(length).fill(0).map((item, i) => creatMockData(i));
};

function createMockDataCPS(index: number, callback: (data: MockData) => void) {
    const hostName = `host-${index}`;
    const data = {
        id: { value: uuidv4(), type: 'string' },
        hostName: { value: hostName, type: 'string' },
        top: { value: Math.floor(Math.random() * 100), type: 'string' },
        cpu: { value: Math.floor(Math.random() * 100), type: 'string' },
        mem: { value: Math.floor(Math.random() * 100), type: 'string' },
        swap: { value: Math.floor(Math.random() * 100), type: 'string' },
        disk: { value: Math.floor(Math.random() * 100), type: 'string' },
        diskName: { value: `${hostName}-disk`, type: 'string' },
        check: { value: false, type: 'check' },
        check1: { value: false, type: 'check' },
    };
    callback(data as MockData);
}

export function createMockDataListPromise(length: number) {
    return new Promise<MockData[]>((resolve, reject) => {
        const result: MockData[] = [];
        console.log('aaa');

        function createNextData(i: number) {
            if (i >= length) {
                console.log('length', length);
                resolve(result);
                return;
            }

            createMockDataCPS(i, (data) => {
                console.log(result, result.length);
                result.push(data);
                setTimeout(() => createNextData(i + 1), 0);
            });
        }

        createNextData(length);
    });
}
