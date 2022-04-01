import { Request, Response } from "express";
import { Registry } from "../../application/registry/registry.interface";
import { RegistryUseCase } from "../../application/registry/registry.usecase";

const registryUsecase = new RegistryUseCase();

export class RegistryController{

    static async postRegistry(req:Request, res:Response){
        const {fullname, subject, message, email} = req.body;
        const registry : Registry = {
            fullname,
            subject,
            message,
            email,
            created_at:Date().toString()
        }
        const new_registry = await registryUsecase.postRegistry(registry);
        res.json(new_registry)
    }

}