export default function handleError(e) {

    let errorMessages = [];
    if(e.errors)
    {
        for(const [key, value] of Object.entries(e.errors))
        {
            errorMessages.push(value[0]);
        }
    }
    else{
        errorMessages.push(e.Message);
    }

    window.alertError(errorMessages);
}