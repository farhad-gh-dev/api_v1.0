const User = require("../../models/user");

const deleteUser = async (req, res) => {
  //CHECK IF TARGET USER IS GUEST USER
  if (res.user.id === "60326838c2fc7c03dc0be81f")
    return res
      .status(403)
      .json({ message: "guest user account can not be deleted" });

  //CHECK IF USER EXIST AND DELETE
  try {
    const deletedUser = await User.findOneAndDelete({ _id: res.user.id });
    if (!deletedUser)
      return res.status(400).json({ message: "Authentication failed" });

    res.json({ message: "User deleted successfully", result: deletedUser });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = deleteUser;
