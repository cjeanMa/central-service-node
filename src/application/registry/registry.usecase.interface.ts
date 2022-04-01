import { Registry } from "./registry.interface";

export interface IRegistryUseCase{
    postRegistry(registry:Registry):Promise<Registry>
}