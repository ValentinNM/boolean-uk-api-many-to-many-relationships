Today's exercise: Relationships with Prisma

Repo: boolean-uk-api-many-to-many-relationships

**Description**
Build GET routes & controllers, with one POST to create a patient with an initial appointment, and practice writing Prisma queries that involve relationships between models

**Instructions**
  - Download this template .ZIP and extract it, then open it in VS Code: https://github.com/vherus/boolean-uk-api-many-to-many/archive/refs/heads/main.zip
  - Rename `.env_example` to `.env`
  - Create a new database in ElephantSQL (you can use your previous shadow db), then update the `.env` with the correct URL's
  - Add the relationships defined below to the models in `./prisma/schema.prisma`
  - Run `npx prisma migrate dev --name add_relations`
  - Build the controllers and routes as instructed

Relationships:
  - Doctor can have many Appointments
  - Appointment can have many Doctors
  - Patient can have many Appointments

Use `npx prisma studio` to seed data.

Build these routes and controllers for the *Patient* resource:
  - POST `/patients` that creates a new patient and an initial related appointment

Build these routes and controllers for the *Appointment* resource:
  - GET `/appointments?practiceName=value&order=recent` that returns all appointments, with optional query params to filter by practiceName and order by most recent
  - GET `/appointments/doctors` that returns all appointments *including* their related Doctors

Build these routes and controllers for the *Doctor* resource:
  - GET `/doctors/:id/appointments` that returns the appointments for specific doctor
  - GET `/doctors/:id/practice` returns a list of places where the doctor has appointments
  - GET `/doctors/most-busy` returns the doctor with the most appointments
  - GET `/doctors/total-hours` returns the total amount of time in appontments, assuming each appointment is 30 mins

**Tips**
  - Use the Prisma docs extensively
  - Get in the support channel if you're stuck for more than 15 minutes

**Challenge**
- Add validations to your controllers that sends a useful message back to the client when there's an error, with suggestions as to what they could do differently.

- Create these routes and controllers for the *Patient* resource:
  - GET `/patients/:id/appointments` that returns the patient's appointments
  - GET `/patients/:id/doctors` that returns the Doctors the patient has appointments with
  - GET `/patients/:id/doctors?practiceName=value` that returns the Doctors the patient has appoints with, filtered by practiceName