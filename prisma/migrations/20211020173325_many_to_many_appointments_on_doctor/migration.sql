-- CreateTable
CREATE TABLE "AppointmentsOnDoctors" (
    "appointmentId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,

    CONSTRAINT "AppointmentsOnDoctors_pkey" PRIMARY KEY ("appointmentId","doctorId")
);

-- AddForeignKey
ALTER TABLE "AppointmentsOnDoctors" ADD CONSTRAINT "AppointmentsOnDoctors_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentsOnDoctors" ADD CONSTRAINT "AppointmentsOnDoctors_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
