module.exports = (error, _req, res, _next) => {
    const [err] = error.details;
    const { type, message } = err;
    if (type) return res.status(400).json({ message });
    return res.status(500).json(error.message);
  };