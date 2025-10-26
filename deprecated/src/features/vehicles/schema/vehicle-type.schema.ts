import { VehicleType } from "@/features/vehicles/model/vehicle.types";
import { z } from "zod";

export const VehicleTypeSchema = z.nativeEnum(VehicleType);
