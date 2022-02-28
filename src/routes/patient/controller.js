// const { appointment } = require("../../utils/db")
const prisma = require("../../utils/db"); // import the whole object
//above shares the connection between multiple requests
//

//belwo creates connection in db and
// having the convivnece of having a single place to gonfigure db
// const { PrismaClient }=require("@prisma/client")

// const prisma = new PrismaClient()
// end

const postNewPatient = async (req, res) => {
  console.log("postNewPatient body: ", req.body);

  const f_name = req.body.firstName;
  const l_name = req.body.lastName;
  const dob = new Date(req.body.dateOfBirth);
  const appointment = req.body.appointment;

  console.log("postNewPatient name: ", f_name, l_name, dob);

  try {
    const patientData = await prisma.patient.create({
      data: {
        firstName: f_name,
        lastName: l_name,
        dateOfBirth: dob,
        appointments: {
          create: [
            {
              ...appointment, // using spread operator for making a copy so we don't have to destructure the obj anymore
              dateTime: new Date(appointment.dateTime),
            },
          ],
        },
      },
      include: {
        appointments: true,
      },
    });
    res.json({ new_patient: patientData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const get

module.exports = { postNewPatient };
