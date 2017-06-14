
let instance;

class FieldsWraper {
    constructor(fields) {
        this.fields = getInstanceFields(fields);
    }

    validate() {
        const { fields } = this;

        const isValid = fields.reduce((isValid, field) => {
            const isValidField = field.instance.validate || identityFn(true);

            return isValid && isValidField();
        }, true);

        return isValid;
    }

    getValues() {
        const { fields } = this;

        const result = fields.map(toFieldIdValue).reduce(toObjectValues, {});

        return result;
    }
}

const toObjectValues = (acc, field) => {
    return { ...acc, [field.id]: field.value }
};

const toFieldIdValue = field => {
    const getValue = field.instance.getValue || noop;

    return {
        id: field.id,
        value: getValue()
    }
};

const identityFn = prop => () => prop;
const noop = () => { };

const getInstanceFields = (fields) => Object.keys(fields).map(key => {
    const scope = fields[key];
    const getInstance = scope.getWrappedInstance || noop;

    let instanceFunction = {};

    try {
        instanceFunction = getInstance.apply(scope);
    } catch (err) {
    }

    return {
        id: key,
        instance: instanceFunction || {}
    }
});


export const createFields = (fields) => {
    instance = new FieldsWraper(fields);
    return new FieldsWraper(fields);
}

export const getInstance = () => {
    return instance;
}

