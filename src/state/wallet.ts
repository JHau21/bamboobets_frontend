import { create } from "zustand";
import { ethers } from "ethers";

import {
	check_wallet_connected,
	set_wallet_connected,
	set_wallet_disconnected,
} from "../utils/wallet";

type UseWallet = {
	wallet_address: string | undefined;
	wallet_balance: string | undefined;

	connect_wallet: () => Promise<void>;
	disconnect_wallet: () => void;
	update_balance: (wallet_address: string | undefined) => Promise<void>;
};

export const useWallet = create<UseWallet>((set) => ({
	wallet_address: undefined,
	wallet_balance: undefined,

	connect_wallet: async (): Promise<void> => {
		if (window.ethereum) {
			try {
				await window.ethereum.request({ method: "eth_requestAccounts" });

				const web_3_provider = new ethers.BrowserProvider(window.ethereum);
				const signer: ethers.JsonRpcSigner = await web_3_provider.getSigner();
				const wallet_address: string = await signer.getAddress();
				const balance: bigint = await web_3_provider.getBalance(wallet_address);
				const formatted_balance: string = ethers.formatEther(balance);

				if (!check_wallet_connected()) set_wallet_connected();

				set({ wallet_address: wallet_address, wallet_balance: formatted_balance });
			} catch (err) {
				console.error(err);
			}
		}
	},
	disconnect_wallet: (): void => {
		if (check_wallet_connected()) set_wallet_disconnected();

		set({ wallet_address: undefined, wallet_balance: undefined });
	},
	update_balance: async (wallet_address: string | undefined): Promise<void> => {
		try {
			if (!wallet_address || typeof wallet_address !== "string") return undefined;

			const provider: ethers.BrowserProvider = new ethers.BrowserProvider(window.ethereum);
			const balance: bigint = await provider.getBalance(wallet_address);
			const formatted_balance: string = ethers.formatEther(balance);

			set({ wallet_balance: formatted_balance });
		} catch (err) {
			console.error(err);
		}
	},
}));
