const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const App = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Remplacez par votre mot de passe
  database: "sysbase",
});

db.connect((err) => {
  if (!err) {
    console.log("Connexion à la base de données réussie");
  } else {
    console.error("Échec de la connexion:", err); // Affiche l'erreur pour le débogage
  }
});

App.use(express.json());
App.use(cors());

App.post("/new-task", (req, res) => {
  const task = req.body.task;
  if (!task) return res.status(400).json({ error: "Task is required" }); // Vérification de la présence de la tâche

  const createdAt = Date.now(); // Obtention du timestamp actuel
  const q = "INSERT INTO todos (task, createdAt) VALUES (?, ?)"; // Correction du nom de colonne
  db.query(q, [task, new Date()], (err, result) => {
    if (err) {
      console.error("Erreur lors de l'insertion:", err); // Affiche l'erreur pour le débogage
      return res
        .status(500)
        .json({ error: "Erreur lors de l'insertion de la tâche" });
    } else {
      console.log("donnees enregistrer avec succes !!! ");
      res.json({ status: "Succès!", id: result.insertId, result });
    }

    // Renvoie l'ID de la tâche insérée
  });
});
App.get("/read-task",(req,res)=>{
  const q = "SELECT * FROM todos";
  db.query(q, (err, result)=>{
    if(err){
      console.log("erreur de requette sq");
      return res.status(404).json({ Error: "erreur de requette sql" });
    } else{
      
      console.log("data on reading from your bd");
      return res.status(200).json({ status: "data on reading from your bd",result });

    }

  })
})

App.listen(2004, () => {
  console.log("Serveur en cours d'exécution sur le port 2004");
});
