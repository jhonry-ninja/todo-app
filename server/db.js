// db.js

// mongodb driver
const MongoClient = require("mongodb").MongoClient;
const CONNECTION_STRING_FROM_ATLAS = "mongodb+srv://<username>:<password>@cluster0-lk9ld.mongodb.net/test?retryWrites=true&w=majority";
const dbConnectionUrl = CONNECTION_STRING_FROM_ATLAS;

function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failureCallback
) {
    MongoClient.connect(dbConnectionUrl, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            failureCallback(err); // this should be "caught" by the calling function
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);
            console.log("[MongoDB connection] SUCCESS");

            successCallback(dbCollection);
        }
    });
}

module.exports = {
    initialize
};

