var User = require("../models/User");

module.exports = {
  getUser: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await User.findById(id);

      res.status(200).json({ message: user, success: true });
    } catch (error) {
      res.status(404).json({ messge: error.message });
    }
  },
};
