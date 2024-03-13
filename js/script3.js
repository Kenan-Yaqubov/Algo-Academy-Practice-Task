let message = ""

function replaceFn(userMessage, replaceText, whatReplaces) {
    for (let i = 0; i < userMessage.length; i++){
        if(userMessage[i] ==  replaceText){
            message += whatReplaces
    }else{
        message += userMessage[i]
    }
    }
    alert(message)
}

replaceFn("nanananjjjjnanan", "n", "...")