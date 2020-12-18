import * as functions from 'firebase-functions';
import * as express from 'express';
import getTrips from "./api/GetAllTrips";

const app = express();

app.get("/trips", getTrips);
export const api = functions.https.onRequest(app);