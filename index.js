const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });

  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "e3583020-4661-4be4-aa19-52a4bd16d657"}}
    )
    return res.status(r.status).json(r.data)
} catch (e){
    return res.status(e.response.status).json(e.response.data);
}

});


app.listen(3001);





//Project ID: bdcd3d5e-1c6d-4e3f-bfca-596e91a6b75a
//key: e3583020-4661-4be4-aa19-52a4bd16d657