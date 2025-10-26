import { Status } from "@/shared/types";
import { StatusAPI } from "@/shared/types/enums/status-api.enum";

export const statusMapper = {
	fromApi(status: StatusAPI): Status {
		switch (status) {
			case StatusAPI.ATIVO:
				return Status.ACTIVE;
			case StatusAPI.INATIVO:
				return Status.INACTIVE;
		}
	},

	toApi(status: Status): StatusAPI {
		switch (status) {
			case Status.ACTIVE:
				return StatusAPI.ATIVO;
			case Status.INACTIVE:
				return StatusAPI.INATIVO;
		}
	},
};
