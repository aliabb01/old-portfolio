const readyHandler = (loading) => {
    if(document.readyState == 'complete') {
        loading = false;
        document.removeEventListener('readystatechange', readyHandler);
    }
};

export default readyHandler