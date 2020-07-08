const DBbase = require("./DBbase");

/*

So, here are my thoughts on Address (this is representative of all the other models).

There are two basic cases where we will create instances of Address

  1. We dont yet have the address in the DB (so, we create instance, and then potentially save to db)
     - we supply an attributes object (where the info is gotten from some endpoint, like signup)
  2. We have retrieved our address info from DB, and now we're making an Address instance.
     - we retrieve the address info from the db, create an attributes object, then create the Address instance.
*/

class Address extends DBbase {
  constructor(adapter, attributes) {
    super(adapter); // initializing super class, DBbase - communication with db methods
    this.setAttributes(attributes);
  }

  setAttributes(attributes) {
    for (let attribute in attributes) {
      this[attribute] = dataObj[attribute];
    }
  }
}
// uncomment below for quick test

const a1 = new Address(null, { country: "US", city: "San Francisco" }); // doesnt yet exist in db
console.log(a1.country)