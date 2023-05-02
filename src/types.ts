export type EventMouse = MouseEvent & {
    currentTarget: EventTarget & HTMLElement;
};

export type TabItem = { name: string; isChecked: boolean };
export type TabItems = TabItem[];

export type Folder = {
    name: string;
    children: Array<Folder>;
};

export type RootFolder = Folder[];

export type MockData = {
    hostName: {
        value: string;
        type: 'string';
    };
    top: {
        value: number;
        type: 'string';
    };
    cpu: {
        value: number;
        type: 'string';
    };
    mem: {
        value: number;
        type: 'string';
    };
    swap: {
        value: number;
        type: 'string';
    };
    disk: {
        value: number;
        type: 'string';
    };
    diskName: {
        value: string;
        type: 'string';
    };
    id: {
        value: string;
        type: 'string';
    };
    check: {
        value: boolean;
        type: 'check';
    };
    check1: {
        value: boolean;
        type: 'check';
    };
};

export type MockDataColumn = {
    width: number;
    dataName: string;
    display: string;
};
