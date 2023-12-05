

import mongoose from "mongoose";

import dotenv from "dotenv"
import {config} from "./config/config.js"

import  pissdata from  "./data/pissadat.js"
import  PissaModel  from "./Models/PissaModel.js";

//config dot env and mongodb conn file
//config dotenv
dotenv.config();
config();

//import data
const importData = async () => {
  try {
    await PissaModel.deleteMany();
    const sampleData = pissdata.map((pizza) => {
      return { ...pizza };
    
    });

    await PissaModel.insertMany(sampleData);
    console.log("DATA IMPOrted");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const dataDestroy = () => {};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
