
//A utility file for reducers that takes the current state and the modifications to be done in the elements in the state and returns a new object with modified elements which can be set as the new state in reducer by returning it.

export const updateObject = (oldObject, updatedValues) => {
    return{
        ...oldObject,
        ...updatedValues
    };
};