```javascript
// Correct usage of $inc and $set operator
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field1:1},$set:{field2:"newString"}})
```