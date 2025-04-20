import { z } from "zod";
import { Status } from "@/shared/types/enums";

export const StatusSchema = z.nativeEnum(Status);
