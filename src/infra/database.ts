import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb+srv://adreidereconomic:0GNuCrof3Gs7E65ycls@hero-tickets.7vo3iec.mongodb.net/"),
    console.log("Connect database success")
  } catch(error) {
    console.log("🚀 ~ file: database.ts ~ connect ~ error:", error)
  }
}