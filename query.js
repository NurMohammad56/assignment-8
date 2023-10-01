// 1.Create a new collection.
use("craftshop")
db.createCollection("Products")

// 2.Removes a collection from the database.
use("craftshop")
db.Products.drop()

// 3. Inserts a single document into a collection.
use("craftshop")
db.Products.insertOne(
    {
        "name": "nur mohammad"
    }
)

// 4. Delete/remove a single document from the collection.
use("craftshop")
db.mycollection.deleteOne(

    { _id: ObjectId("d2f3g4h5j6k7l8j7h6g4x2d3") }

)



