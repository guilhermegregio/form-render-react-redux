export const ADD_FIELD = 'ADD_FIELD';


export const addField = ({label, name, id, value, type, className}) => ({
    type: ADD_FIELD,
    field: {
        label,
        name,
        id,
        value,
        type,
        className
    }
});
