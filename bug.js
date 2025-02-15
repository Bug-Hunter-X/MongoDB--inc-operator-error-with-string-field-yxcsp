```javascript
// Incorrect usage of $inc operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field1:1,field2:"string"}})
```