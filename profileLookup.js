function lookUpProfile(name, prop){
    var result = "";
    for(var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)){
            return contacts[i][prop];
        }else if(contacts[i].firstName !== name){
            result = "No such contact";
        }else
            return  "No such property";
    }
    return result;

}
