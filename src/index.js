require("dotenv").config()

const express = require("express")
const cors = require("cors") // FOR SECURITY (find on slides)
const morgan = require("morgan") 

const app = express()

/* SETUP MIDDLEWARE */

const appointmentRouter = require("./routes/appointment/router")
// const doctorRouter = require("./routes/doctor/router")
const doctorRouter = require("./routes/doctor/router")
const patientRouter = require("./routes/patient/router")

app.disable("x-powered-by") 

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

/* SETUP ROUTES */

app.use("/appointments", appointmentRouter);
app.use("/doctors", doctorRouter);
app.use("/patients", patientRouter);

app.get("*", (req, res) => {
  res.json({ ok: true })
});

/* START SERVER */

const port = process.env.PORT || 3030

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`)
});
