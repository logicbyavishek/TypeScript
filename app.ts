interface Book{
    name:string;
    price:number;
}

interface EBook extends Book{
    filesize:number;
    format:string;
}

interface AudioBook extends EBook{
    duration:string
}

const audioBook:AudioBook ={
    name:"Thank you for leaving",
    price:400,
    filesize:45,
    format:"MP4",
    duration:"3 Hour"
}

console.log(audioBook)