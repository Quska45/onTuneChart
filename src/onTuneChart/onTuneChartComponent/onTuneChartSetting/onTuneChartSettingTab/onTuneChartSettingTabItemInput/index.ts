import { TabItemInputDecimal } from "./tabItemInputDecimal";
import { TabItemInputNumber } from "./tabItemInputNumber";
import { TabItemInputString } from "./tabItemInputString";

export const TabItemInputMaker = {
    'number': TabItemInputNumber,
    'string': TabItemInputString,
    'decimal': TabItemInputDecimal,
};