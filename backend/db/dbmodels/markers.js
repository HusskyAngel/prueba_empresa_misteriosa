import {Schema,Model}from 'mongoose';
import mongoose from 'mongoose';
// Definir el esquema del GeoJSON
const GeoJSONSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

// Definir el esquema del usuario
const UserSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true
  },
  geoJSONs: {
    type: [GeoJSONSchema],
    default: []
  }
});

// Crear los modelos
const GeoJSON = mongoose.model('GeoJSON', GeoJSONSchema);
const User = mongoose.model('User', UserSchema);

export {GeoJSON,User};

