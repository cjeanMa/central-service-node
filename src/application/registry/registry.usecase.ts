import { Registry } from "./registry.interface";
import { IRegistryUseCase } from "./registry.usecase.interface";
import { RegistryModel } from "../../models/registry.model";
import { sendEmail } from "../../helpers/ses/ManageEmail";

export class RegistryUseCase implements IRegistryUseCase{

    async postRegistry(registry:Registry): Promise<Registry> {
        const new_registry = new RegistryModel(registry);
        await new_registry.save()
        const {fullname, email, subject, message} = new_registry;
        sendEmail(fullname, email, subject, message)
        return new_registry
    }
}