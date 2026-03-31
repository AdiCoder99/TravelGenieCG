import express from 'express'
import generateItinerary from '../controllers/itineraryController.js';

const itineraryRoutes = express.Router();

itineraryRoutes.post('/generate', generateItinerary);

export default itineraryRoutes;