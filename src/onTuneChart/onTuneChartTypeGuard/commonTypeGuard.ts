export const commonTypeGuard = {
    isOfType: function <T>( varToBeChecked: unknown, propertyToCheckFor: keyof T ): varToBeChecked is T {
        return (varToBeChecked as T)[propertyToCheckFor] !== undefined;
    },
};