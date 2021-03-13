const getOrder = (req, res) => {
  res.json({
    id: res.user.id,
    message: "order route",
  });
};

module.exports = getOrder;
