import Croud from "../models/CroudSchema.js";

export const croudGetController = async (req, res) => {
  try {
    const data = await Croud.find({});

    res.status(200).json({
      success: true,
      message: "Successfully get",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Not found data",
    });
  }
};
export const croudGetByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Croud.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully get",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Not found data",
    });
  }
};
export const croudDeleteController = async (req, res) => {
  const id = req.params.id;

  try {
    await Croud.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Faild to Delete",
    });
  }
};
export const croudUpdateController = async (req, res) => {
  const id = req.params.id;
  try {
    const updateData = await Croud.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updateData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Faild to update",
    });
  }
};
