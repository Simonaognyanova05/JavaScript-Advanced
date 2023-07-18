function solve(object) {
    if(object.method === 'GET' || object.method === 'POST' || object.method === ' DELETE' || object.method === 'CONNECT'){
        return object;
    }else{
        throw new Error('Invalid request header: Invalid Method');
    }
    
    if(object.url === '')
}
solve({
    method: 'ss',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});