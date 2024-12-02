// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri =
//   "mongodb+srv://mahidhuwaviya04:secondprojectchapapp@cluster0.y428y.mongodb.net/chat?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("You successfully connected to MongoDB!");
//   } catch (error) {
//     console.log("Error---from mongodb server", error);
//   }
// }
// export default run;
