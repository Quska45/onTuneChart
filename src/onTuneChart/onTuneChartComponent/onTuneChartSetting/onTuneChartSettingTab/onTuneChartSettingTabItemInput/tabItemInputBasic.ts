export interface ITabItemInputBasic {
    warnMessage: string;
    valueCheck: ( value: unknown ) => boolean;
};