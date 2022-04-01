import { Schema, model } from 'mongoose'
import { Registry } from '../application/registry/registry.interface';

const schema = new Schema<Registry>({
    id: {type:String},
    fullname: {type:String, required:true},
    subject: {type: String, required: true},
    message: {type: String, required: true},
    email: {type: String, required: true},
    created_at: {type:String, required:true}
  });

  export const RegistryModel = model<Registry>("Registro", schema)