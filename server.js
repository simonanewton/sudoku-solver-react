const express = require("express");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") app.use(express.static("client/build"));

express.Router().use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
