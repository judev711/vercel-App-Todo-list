// App.post("/new-task",(req, res)=>{
//   const task = req.body.task;
//   if(!task) return res.status(500).json({Error:"task is require !"});
//   const createdAt = Date.now();
//   const q ="INSERT INTO todos (task, createdAt) VALUES (?, ?)"
//   db.query(q, [task, createdAt], (err, result)=>{
//     if (err){
//       console.log("Error for inserting data")
//       return res
//       .status(500)
//       .json({Error:"error for inserting data"})
//     }
//     return res.status(200).json({status:"succes!", id: result.insertid})
   
//   })
// })
// // partie interressante !
// const handletask = async (event) =>{
//   event.preventDefault();
//  try {
//   const response = await axios.post("http://localhost:2004/", { task });
//   console.log("Reponse", response.data);
//   settask("");

//  } catch (error) {
//   console.log("")
//  }


  
// }
