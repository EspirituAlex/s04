// Find courses whose instructor is "Sir Alvin" and is priced greater than or equal to 20000
db.courses.find({ $and: [{"instructor": "Sir Alvin"}, {"price": {$gte: 20000}}]},
{_id: 0, isActive: 0, instructor: 0})

// Find courses whose instructor is "Ma'am Tine" and is inactive.
db.courses.find({ $and: [{"instructor": "Ma'am Tine"}, {"isActive": {$eq: true}}]},
{_id: 0, isActive: 0, instructor: 0})

//Find courses with letter 'r' in its name and has a price lower than or equal to 25000
db.courses.find({ $and: [{"name": /R/i}, {"price": {$lte: 25000}}]})

// Update all courses with price less than 21000 to inactive.
db.courses.updateMany({"price": {$lt: 21000}}, {$set: {"isActive": false}})
/* 1 */
{
    "acknowledged" : true,
    "matchedCount" : 2.0,
    "modifiedCount" : 1.0
}

//Delete all courses with price greater than or equal to 25000.
db.courses.deleteMany({"price": {$gte: 25000}})
/* 1 */
{
    "acknowledged" : true,
    "deletedCount" : 2.0
}