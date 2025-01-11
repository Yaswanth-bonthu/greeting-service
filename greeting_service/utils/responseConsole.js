const consoleResponse = (res, location) => {
    if(res.status === 200)
    {
        console.log(res.data.message, location);
    }
    else{
        console.log(res.data.error, location);
    }
}

export default consoleResponse;