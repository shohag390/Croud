import Croud from "../models/CroudSchema.js";

export const uploadCroud = async (req, res) => {
  const { name, email, phone, des } = req.body;

  try {
    const uploadData = new Croud({
      name,
      email,
      phone,
      des,
    });
    await uploadData.save();

    res.status(200).json({
      success: true,
      message: "Successfully uploaded",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error, Try again",
    });
  }
};
