const express = require('express');
const app = express();
const health = require('./api/health')

app.use(express.json( { extended: false } ));

app.use("/api/health", health)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server is running in port ${PORT}`));
