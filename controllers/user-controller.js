const { UserModel, BookModel } = require("../models");

exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find({ _id });

    if (users.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No books found",
        });
    }

    res.status(200).json({
        success: true,
        data: users,
    });
};

exports.getSingleUserById = async (req, res) => {
    const { id } = req.params;

    const user = await UserModel.findById({ _id: id });

    if (!user) {
        res.status(404).json({
            success: false,
            message: "User Not Found",
        });
    } else {
        res.status(200).json({
            success: true,
            data: user,
        });
    }
};
