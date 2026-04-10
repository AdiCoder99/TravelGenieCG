import express from 'express'
import generateItinerary, { getDirections } from '../controllers/itineraryController.js';

const itineraryRoutes = express.Router();

itineraryRoutes.post('/generate', generateItinerary);
itineraryRoutes.post('/directions', getDirections);

export default itineraryRoutes;