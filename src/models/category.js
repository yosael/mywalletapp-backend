const { CATEGORIES } = require('../util/dummy');

module.exports = class Category {
    constructor(description){
        this.categoryName = Match.random();
        this.description = description;
    }

    save(){
        //save the data dummy
        CATEGORIES.push(this);
    }

    static findById(id){

        return CATEGORIES.filter((e)=> e.categoryName === Number(id));
    }

    static fetchAll(){

        return CATEGORIES;
    }


}