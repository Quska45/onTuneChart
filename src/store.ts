import { writable } from 'svelte/store';
export const dark = writable(false);

export type EventData = {
    result: number;
    elapsedTime: number;
};

export type MockHostType = {
    name: number;
    isOn: boolean;
};

export type NewHostType = {
    groupName: string;
    limit: number;
    isAllTrue: boolean;
};

export type MockGroupHostType = {
    name: string;
    isOn: boolean;
    data: {
        top: number;
        cpu: number;
        mem: number;
        swap: number;
        disk: number;
    };
};

export type MockGroupType = {
    name: number;
    isOn: boolean;
    hosts: MockGroupHostType[];
};

export type ShowViewerListType = 'on' | 'off' | 'all';

// DateTime
export type DateTimeType = 'numeric' | '2-digit' | undefined;
export type DateTimeFormatOptions = {
    year: DateTimeType;
    month: DateTimeType;
    day: DateTimeType;
    hour: DateTimeType;
    minute: DateTimeType;
    second: DateTimeType;
    hour12: boolean;
    timeZone?: string | undefined;
    timeZoneName?: 'short' | 'long' | 'shortOffset' | 'longOffset' | undefined;
};
//

export const Dock_Arr = writable([]);
export const Float_Arr = writable([]);
export const PF_Add_Div = writable({});
