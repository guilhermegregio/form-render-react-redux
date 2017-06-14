const datasource = {

    store(data) {
        window.localStorage.setItem('FORM_DATA', JSON.stringify(data));
    },

    getStore() {
        return JSON.parse(window.localStorage.getItem('FORM_DATA') || '[]');
    }
}


export default datasource;