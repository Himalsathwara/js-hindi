const myObject ={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject){
    // if(object.hasOwnProperty.call)(object,key)){
    //     cosnt element = object[key]
    console.log(`${key} shortcut is for ${myObject[key]}`);

    }

    const progrmming = ["js","rb", "py", "java"]

for( const key in progrmming){
             console.log(progrmming[[key]]);
}
    const map= new Map()
        map.set('IN',"India")
        map.set('USA', "united stzte of america")
        map.set('SA', "south africa")
        map.set('FR', "France")
        

    for (const key in map){
        console.log(key);
        
    }
    
