// import mongoose from "mongoose";

// // ***********   Create a Schema
// const studentSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//   },
//   join: {
//     type: Date,
//     default: Date.now,
//   },
// });

//***********   chack the information for the schema (Most use of debugging purpose)
// console.log(studentSchema.path('name'))

// Create a Model (Compiling schema)
// const studentModel = mongoose.model("student", studentSchema);

// ***********  Creating new document
// const creatDoc = async () => {
//   try {
//     const studentDocument = new studentModel({
//       name: "khan",
//       age: 17,
//       gender: "Mail",
//     });

// ***********   Insert external data Creat document
// const creatDoc = async (na, ag, ge) => {
//   try {
//     const studentDocument = new studentModel({
//       name: na,
//       age: ag,
//       gender: ge,
//     });

// ***********   Saving document (Without authentication)
// const result = await studentDocument.save({ validateBeforeSave: false });

// ***********   Saving document Using await (New method)
//     const result = await studentDocument.save();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

//  ***********  Saving document Using callback (old method)
// studentDocument.save((err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

// ***********   Creating Multiple document

// const creatMultipleDoc = async () => {
//   try {
//     const studentDocument1 = new studentModel({
//       name: "khan Baba",
//       age: 28,
//       gender: "Mail",
//     });

//     const studentDocument2 = new studentModel({
//       name: "Ahmed",
//       age: 38,
//       gender: "Mail",
//     });

//     const studentDocument3 = new studentModel({
//       name: "Amir",
//       age: 48,
//       gender: "Mail",
//     });

//     //                  ***********   Saving Multiple document Using await (New method)  ********
//     const result = await studentModel.insertMany([studentDocument1, studentDocument2, studentDocument3]);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

//                                       ***********  Retrieve all data   *********************
// const getAll = async () => {
//   try {
// const result = await studentModel.find();
// const result = await studentModel.find({}, 'name age gender');
// const result = await studentModel.find().limit(1);      // limit by document
// const result = await studentModel.find({}, null, {limit: 1});    // limit by document
// const result = await studentModel.find().skip(1);          // skip document
// const result = await studentModel.find({}, null, {skip: 1});    // skip document
// const result = await studentModel.find().countDocuments();    // count document
// const result = await studentModel.find().sort({age: 1});    // sort document
//  const result = await studentModel.find({}, {name: 1, age: 1}, {limit: 1 ,skip: 1});    // mixture to find document
// const result = await studentModel.find({name: 'khan'});

// const result = await studentModel.find().select('name age gender');        // include
// const result = await studentModel.find().select(['name', 'age', 'gender']);     // include
// const result = await studentModel.find().select({name: 1, age: 1, gender: 1});     // include
// const result = await studentModel.find().select({name: 1, age: 1, gender: 1}).lean();     // include

// const result = await studentModel.find().select('-name -age -gender');     // exclude
// const result = await studentModel.find().select(['-name', '-age', '-gender']);       // exclude
// const result = await studentModel.find().select({name: 0, age: 0, gender: 0});         // exclude
// const result = await studentModel.findById('65cce0fb7c19acb3b2270e36');

// console.log(result);
// result.forEach(
//   (item)=> console.log
//   (item.id,
//     item.name,
//     item.age,
//     item.gender,
//      ));
//   } catch (error) {
//     console.log(error);
//   }
// };

//                                ***********  Update all document   *********************
// ************     findOneAndUpdate
// const updateDoc = async (id) => {
//   try {
// const result = await studentModel.findOneAndUpdate(id,
//   {name: "amir",
//   age: 16,
//   gender: "Mail",},
//   {returnDocuments: true}
//   );
//     console.log(result);
// } catch (error) {
//   console.log(error);
// }
// };

// ******    updateOne  ********
// const updateDoc = async (id) => {
//   try {
// const result = await studentModel.updateOne(
//   {_id: id},   // Filtering the field
//   {name: "don"},
//   {upsert: true},
//   );
//     console.log(result);
// } catch (error) {
//   console.log(error);
// }
// };

// ******    updateMany  ********
// const updateDoc = async (id) => {
//   try {
// const result = await studentModel.updateMany(
//   {_id: id}, 
//   {name: "don"},
//   {upsert: true},
//   );
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
//                                ***********  delete all document   *********************
// *************     findOneAndDelete
// const deleteDoc = async (id) => {
//   try {
// const result = await studentModel.findOneAndDelete(id,
//   {name: "amir",
//   age: 16,
//   gender: "Mail",},
//   {returnDocuments: true}
//   );
//     console.log(result);
// } catch (error) {
//   console.log(error);
// }
// };

// ******    deleteOne  ********
// const deleteDoc = async (id) => {
//   try {
// const result = await studentModel.deleteOne(
//   {_id: id},   // Filtering the field
//   {name: "don"},
//   {upsert: true},
//   );
//     console.log(result);
// } catch (error) {
//   console.log(error);
// }
// };

// ******    deleteMany  ********
// const updateDoc = async (id) => {
//   try {
// const result = await studentModel.deleteMany(
//   {_id: id}, 
//   {name: "don"},
//   {upsert: true},
//   );
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };



// export default creatDoc;
// export default updateDoc;
// export default deleteDoc;
// export default getAll;
// export default creatMultipleDoc;
