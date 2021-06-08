module.exports = {
  show(req, res) { res.send('ola') },
  create(req, res) {
    const data = req.body;
    console.log(data);
    res.send(data)
  }
}