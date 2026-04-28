type ID = number|string

function printID(id:ID):void{
    if(typeof id ==="string"){
        console.log(id.toUpperCase())
    }else{
        console.log(id)
    }
}

printID("Avi12")