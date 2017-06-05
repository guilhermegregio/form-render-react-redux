import * as formRenderActions from './formRender.actions';

describe('form render actions', () => {
    it('should add an action addField', () => {
        const id = 'field';
        const name = id;
        const type = 'text';

        const expectedAction = {
            type: formRenderActions.ADD_FIELD,
            field: {
                name,
                id,
                type
            }
        };

        expect(formRenderActions.addField({name, id, type})).toEqual(expectedAction);
    });
});