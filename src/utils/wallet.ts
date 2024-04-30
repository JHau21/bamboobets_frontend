const VARIABLE: string = "wallet_connected";

export const check_wallet_connected = (): string | null => {
	return localStorage.getItem(VARIABLE);
};

export const set_wallet_connected = (): void => localStorage.setItem(VARIABLE, "true");

export const set_wallet_disconnected = (): void => localStorage.removeItem(VARIABLE);
