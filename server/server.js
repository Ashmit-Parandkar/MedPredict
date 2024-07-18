import express from 'express';
import  cors from 'cors';
import fs from "fs";
import bodyParser from 'body-parser';
import { spawn } from 'child_process';
import { MongoClient, ObjectId } from 'mongodb';
import multer from "multer"
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const upload = multer({ dest: 'uploads/' });

// const symptoms = ['eyestrain','headache','distorted blurred vision distance']
// const childPython = spawn('python',['script.py',symptoms])

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
// Database name
const dbName = 'MultiClass-Disease';




app.get('/getSymptoms',async(req,res)=>{
    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // Collection name
    const collectionName = 'Symptoms';

    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
  
      // Find all documents in the 'symptoms' collection
      const symptoms = await collection.find().toArray();
      // console.log(symptoms);
      res.json(symptoms);
    } 
    finally {
      await client.close();
    }

})



app.post('/predict', (req,res)=>{

    const symptoms = req.body.symptoms
    // console.log(req.body.symptoms);

    const childPython = spawn('python',['script.py',symptoms])

    let disease = ''

    childPython.stdout.on('data',async(data)=>{
        
        // Get Disease

        let disease = data.toString('utf-8')
        disease = disease.trim();
        console.log('stdout : ', disease);


        // Get Description
        
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        // Collection name
        const collectionName = 'Descriptions';

        try {
          await client.connect();
          const db = client.db(dbName);
          const collection = db.collection(collectionName);
          
          const description_records = await collection.find({}).toArray();
          //  console.log(records);
          
          let i=0;
          while(i < description_records[0].descriptions.length){

            if (description_records[0].descriptions[i].disease === disease){
                break;
            }

            i += 1;
          }
          
          const description = description_records[0].descriptions[i].description
          //  console.log(description);



        // Get Precautions

        const precautionsCollectionName = 'Precautions';
        const precautions_records = await db.collection(precautionsCollectionName).find({}).toArray();
          // console.log(precautions_records);

          i=0;
          while(i < precautions_records[0].precautions.length){
            
            if (precautions_records[0].precautions[i].disease === disease){
                break;
            }

            i += 1;
          }
          
          const precaution = precautions_records[0].precautions[i].precautions
          //  console.log(precaution);





        // Get Medications

        const medicationsCollectionName = 'Medications';
        const medications_records = await db.collection(medicationsCollectionName).find({}).toArray();
          // console.log(medications_records);

          i=0;
          while(i < medications_records[0].medications.length){
            
            if (medications_records[0].medications[i].disease === disease){
                break;
            }

            i += 1;
          }
          
          const medication = medications_records[0].medications[i].medication
          //  console.log(medication);




        // Get Workouts

        const workoutsCollectionName = 'Workouts';
        const workouts_records = await db.collection(workoutsCollectionName).find({}).toArray();
          // console.log(workouts_records);

          i=0;
          while(i < workouts_records[0].workouts.length){
            
            if (workouts_records[0].workouts[i].disease === disease){
                break;
            }

            i += 1;
          }
          
          const workout = workouts_records[0].workouts[i].description
          //  console.log(workout);





            res.json({
                "message":"success",
                "disease":disease,
                'description':description,
                'precautions':precaution,
                'medications':medication,
                'workout':workout
            });
        } 
        finally {
          await client.close();
        }
        

    })
    
})

app.post('/chat', upload.single('image'), async(req,res) => {

  if (!req.file) {
    return res.status(400).json({ error: 'Missing image file.' });
  }

  // Access image details from req.file
  const image = req.file;
  const imagePath = image.path; // Path to the uploaded image on server
  const imageType = image.mimetype;


  try {
    // Convert image to GoogleGenerativeAI.Part object
    const imagePart = fileToGenerativePart(imagePath, imageType);

    // Prompt (assuming it's always the same)
    const prompt = "What's in this picture?";

    const content = [prompt, imagePart];

    const result = await model.generateContent(content);
    const response = await result.response;
    const text = response.text();

    res.json({ analysisResult: text });
    
  } catch (error) {
    console.error('Error during analysis:', error);
    res.status(500).json({ error: 'Analysis failed.' }); // Handle errors appropriately
  }

})

function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}


app.listen(4000, (message)=>{
    console.log("Server Listening on port 4000");
})