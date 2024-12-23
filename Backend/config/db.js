import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://kumarbikashgouda:WB1fc3FllfXRdDHD@cluster0.gghjqav.mongodb.net/Tomato`
    )
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log("Db Connection Failed", error));
};
