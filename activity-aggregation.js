//EMPLOYEE

/* 1 */
{
    "_id" : ObjectId("63214b4ad34c2bea75d6b6e5"),
    "ID" : 312456,
    "Employee Name" : "Joongki Song",
    "Employee Age" : 28,
    "Employee Role" : "Store Manager",
    "Salary" : 120000
}

/* 2 */
{
    "_id" : ObjectId("63214b95d34c2bea75d773c6"),
    "ID" : 345342,
    "Employee Name" : "Joongkuk Jeon",
    "Employee Age" : 25,
    "Employee Role" : "Store Associate",
    "Salary" : 45000
}

/* 3 */
{
    "_id" : ObjectId("63214b9ed34c2bea75d78c88"),
    "ID" : 334566,
    "Employee Name" : "Jin Kim",
    "Employee Age" : 35,
    "Employee Role" : "Cashier",
    "Salary" : 67500
}

/* 4 */
{
    "_id" : ObjectId("63214ba5d34c2bea75d7a158"),
    "ID" : 245345,
    "Employee Name" : "Hyekyo Song",
    "Employee Age" : 40,
    "Employee Role" : "Senior Cashier",
    "Salary" : 72500
}

/* 5 */
{
    "_id" : ObjectId("63214bb3d34c2bea75d7c7a4"),
    "ID" : 445364,
    "Employee Name" : "Tae Hyung Kim",
    "Employee Age" : 22,
    "Employee Role" : "Store Associate",
    "Salary" : 35000
}

// INVENTORY

/* 1 */
{
    "_id" : ObjectId("63214ea9d34c2bea75df6f87"),
    "ID" : "LS0000123",
    "Name" : "XYZ Chocolate Bar - 100g",
    "Price" : 5.23,
    "Quantity" : 25000,
    "Category" : "chocolates, sweets"
}

/* 2 */
{
    "_id" : ObjectId("63214ebfd34c2bea75dfabf1"),
    "ID" : "LS0003123",
    "Name" : "Milk Non-fat - 1lt",
    "Price" : 3,
    "Quantity" : 1000,
    "Category" : "dairy, healthy"
}

/* 3 */
{
    "_id" : ObjectId("63214ed1d34c2bea75dfdae6"),
    "ID" : "LS0004566",
    "Name" : "Eggs - 12 Pack",
    "Price" : 6,
    "Quantity" : 5000,
    "Category" : "poultry, generic"
}

/* 4 */
{
    "_id" : ObjectId("63214edcd34c2bea75dff598"),
    "ID" : "LS0008542",
    "Name" : "Whole Chicken",
    "Price" : 12.59,
    "Quantity" : 1250,
    "Category" : "poultry, meat"
}

/* 5 */
{
    "_id" : ObjectId("63214eeed34c2bea75e02279"),
    "ID" : "LS0008543",
    "Name" : "Carrots (Packed) - 250g",
    "Price" : 3.5,
    "Quantity" : 3000,
    "Category" : "vegetables, healthy, organic"
}

/* 6 */
{
    "_id" : ObjectId("63214ef8d34c2bea75e03c7c"),
    "ID" : "LS0009846",
    "Name" : "Beans (Packed) - 250g",
    "Price" : 6.75,
    "Quantity" : 6000,
    "Category" : "vegetables, healthy, organic"
}

/* 7 */
{
    "_id" : ObjectId("63214f01d34c2bea75e05460"),
    "ID" : "LS0009100",
    "Name" : "Bell Pepper (Packed) - 250g",
    "Price" : 4.95,
    "Quantity" : 12000,
    "Category" : "vegetables, healthy, organic"
}

/* 8 */
{
    "_id" : ObjectId("63214f08d34c2bea75e065fd"),
    "ID" : "LS0002688",
    "Name" : "ZZ Butter - 500g",
    "Price" : 25,
    "Quantity" : 500,
    "Category" : "dairy, healthy, premium"
}

// PAYMENTS

/* 1 */
{
    "_id" : ObjectId("63215038d34c2bea75e361a1"),
    "ID" : "BL2021005",
    "Gross Amount" : 105.65,
    "Discounts" : 10,
    "Net Amount" : 95.65,
    "Date/Time" : ISODate("2021-01-01T16:00:00.000Z")
}

/* 2 */
{
    "_id" : ObjectId("63215064d34c2bea75e3cdbf"),
    "ID" : "BL2021006",
    "Gross Amount" : 45.25,
    "Discounts" : 0,
    "Net Amount" : 45.25,
    "Date/Time" : ISODate("2021-01-01T16:15:55.000Z")
}

/* 3 */
{
    "_id" : ObjectId("6321506ad34c2bea75e3dc3a"),
    "ID" : "BL2021007",
    "Gross Amount" : 153.33,
    "Discounts" : 20.33,
    "Net Amount" : 133,
    "Date/Time" : ISODate("2021-01-01T16:31:08.000Z")
}

/* 4 */
{
    "_id" : ObjectId("63215070d34c2bea75e3ebd9"),
    "ID" : "BL2021008",
    "Gross Amount" : 21,
    "Discounts" : 0,
    "Net Amount" : 21,
    "Date/Time" : ISODate("2021-01-01T20:25:52.000Z")
}

/* 5 */
{
    "_id" : ObjectId("63215079d34c2bea75e40019"),
    "ID" : "BL2021009",
    "Gross Amount" : 89.72,
    "Discounts" : 0.72,
    "Net Amount" : 89,
    "Date/Time" : ISODate("2021-01-01T08:45:12.000Z")
}

/* 6 */
{
    "_id" : ObjectId("6321509ad34c2bea75e45119"),
    "ID" : "BL2021010",
    "Gross Amount" : 33.5,
    "Discounts" : 20.5,
    "Net Amount" : 13,
    "Date/Time" : ISODate("2021-01-01T11:02:35.000Z")
}

// PROMOS

/* 1 */
{
    "_id" : ObjectId("63215160d34c2bea75e6311e"),
    "ID" : "PROMO01",
    "Name" : "Sales Promo",
    "Period" : 7,
    "Daily Sales" : "20, 50, 12, 30, 45, 15, 60"
}

/* 2 */
{
    "_id" : ObjectId("63215166d34c2bea75e6403e"),
    "ID" : "PROMO02",
    "Name" : "Milk Promo",
    "Period" : 2,
    "Daily Sales" : "120, 200"
}

/* 3 */
{
    "_id" : ObjectId("6321516bd34c2bea75e64c2a"),
    "ID" : "PROMO03",
    "Name" : "Meat Promo",
    "Period" : 3,
    "Daily Sales" : "101, 205"
}

/* 4 */
{
    "_id" : ObjectId("6321516fd34c2bea75e65946"),
    "ID" : "PROMO04",
    "Name" : "New Year Promo",
    "Period" : 7,
    "Daily Sales" : "68, 88, 105, 188, 74, 278, 350"
}