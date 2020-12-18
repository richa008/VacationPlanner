import { Request, Response } from 'express';
import { Database } from "../util/Database";
import { Trip } from "../util/Common";

const getAllTrips = (request: Request, response: Response<Trip[]>) => {

    Database.collection("Trips")
        .orderBy("startDate", "desc")
        .get()
        .then((result) => {
            const allTrips: Array<Trip> = [];
            result.forEach(doc => {
                const data = doc.data();
                const trip: Trip = {
                    id: doc.id,
                    destination: data.destination,
                    startDate: data.startDate,
                    description: data.description,
                    numberOfDays: data.numberOfDays,
                }

                allTrips.push(trip);
            })
            return response.json(allTrips);
        }).catch((error) => {
            console.log(error);
            return response.status(500).json();
        });
}

export default getAllTrips;