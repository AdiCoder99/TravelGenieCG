import express from 'express'
import itineraryController from '../controllers/itineraryController.js';

const itineraryRoutes = express.Router();

itineraryRoutes.post('/generate', itineraryController.generateItinerary);