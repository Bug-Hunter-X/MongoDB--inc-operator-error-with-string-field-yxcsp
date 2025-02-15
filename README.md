# MongoDB $inc operator error with string field
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment or decrement numeric fields. Attempting to use it with a string field will result in an error.

## Bug
The following code attempts to increment a string field using the `$inc` operator:
```javascript
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field1:1,field2:"string"}})
```
This will result in an error because the `field2` is a string.

## Solution
To fix this error, ensure that you are only incrementing numeric fields using the `$inc` operator. If you need to modify a string field, use the `$set` operator instead.