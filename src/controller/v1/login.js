const login = (req, res) => {
  try {
    res.status(200).json({
      status: 200,
      message: 'This is message'
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};