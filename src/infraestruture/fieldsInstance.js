
let instance;

class FieldsWraper {
    constructor(fields) {
        this.fields = getInstanceFields(fields);
    }

    validate() {
        const { fields } = this;

        console.log(fields);
    }

    getValues() {
        let request = {};

        const { fields } = this;

        fields.map(field => {
            const { getValue } = field.instance;
            console.log(getValue);

            return {
                ...field,
                value: getValue()
            };
        }).forEach(field => {
            console.log(field);
            request[field.field] = field.value
        });

        console.log(request);
    }
}

const getInstanceFields = (fields) => Object.keys(fields).map(key => ({ fields: key, instance: fields[key].getWrappedInstance() }));

export const createFields = (fields) => {
    instance = new FieldsWraper(fields);
    return new FieldsWraper(fields);
}

export const getInstance = () => {
    return instance;
}

