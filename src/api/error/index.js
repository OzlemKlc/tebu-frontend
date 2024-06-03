export default function handleError(e) {
    console.log("AAAAAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",e);

    let errorMessages = [];
    if(e.errors)
    {
        console.log(e);
        for(const [key, value] of Object.entries(e.errors))
        {
            console.log(value);
            errorMessages.push(value[0]);
        }
    }
    else{
        errorMessages.push(e.Message);
    }

    console.log("ii" , errorMessages);
    window.alertError(errorMessages);
}