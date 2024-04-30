import { create } from "zustand";
import { ethers } from "ethers";

import { initialize_coin_flip_contract, initialize_space_trail_contract } from "../utils/common";

import coin_flip_abi from "../abis/coin_flip_abi";
import space_trail_abi from "../abis/space_trail_abi";

export type UseContract = {
	coin_flip_contract: ethers.Contract | undefined;
	space_trail_contract: ethers.Contract | undefined;
	coin_flip_max_bet: string | undefined;
	space_trail_max_bet: string | undefined;
	coin_flip_listener: ethers.Contract | undefined;
	space_trail_listener: ethers.Contract | undefined;

	set_space_trail_contract: () => Promise<ethers.Contract | undefined>;
	set_coin_flip_contract: () => Promise<ethers.Contract | undefined>;
	update_coin_flip_max_bet: (contract: ethers.Contract | undefined) => void;
	update_space_trail_max_bet: (contract: ethers.Contract | undefined) => void;
};

export const useContract = create<UseContract>((set) => ({
	coin_flip_contract: undefined,
	space_trail_contract: undefined,
	coin_flip_max_bet: undefined,
	space_trail_max_bet: undefined,
	coin_flip_listener: undefined,
	space_trail_listener: undefined,

	set_coin_flip_contract: async () => {
		try {
			const contract_address: string = process.env
				.REACT_APP_COIN_FLIP_CONTRACT_ADDRESS as string;
			const contract_abi: Array<any> = coin_flip_abi;

			const { contract, listener, max_bet } = await initialize_coin_flip_contract(
				contract_address,
				contract_abi
			);

			set({
				coin_flip_contract: contract,
				coin_flip_max_bet: max_bet,
				coin_flip_listener: listener,
			});

			return contract;
		} catch (err) {
			console.error(err);

			return undefined;
		}
	},
	set_space_trail_contract: async () => {
		try {
			const contract_address: string = process.env
				.REACT_APP_SPACE_TRAIL_CONTRACT_ADDRESS as string;
			const contract_abi: Array<any> = space_trail_abi;

			const { contract, listener, max_bet } = await initialize_space_trail_contract(
				contract_address,
				contract_abi
			);

			set({
				space_trail_contract: contract,
				space_trail_max_bet: max_bet,
				space_trail_listener: listener,
			});

			return contract;
		} catch (err) {
			console.error(err);

			return undefined;
		}
	},
	update_coin_flip_max_bet: async (contract: ethers.Contract | undefined) => {
		if (!contract)
			return {
				message: "Contract initialization failed. Please try again!",
				success: false,
				max_bet: undefined,
			};

		const max_bet: bigint = await contract.get_max_wager();
		const formatted_max_bet: string = ethers.formatEther(max_bet);

		return {
			message: "Successfully fetched max bet!",
			success: true,
			coin_flip_max_bet: formatted_max_bet,
		};
	},
	update_space_trail_max_bet: async (contract: ethers.Contract | undefined) => {
		if (!contract)
			return {
				message: "Contract initialization failed. Please try again!",
				success: false,
				max_bet: undefined,
			};

		const max_bet: bigint = await contract.getMaxWager();
		const formatted_max_bet: string = ethers.formatEther(max_bet);

		return {
			message: "Successfully fetched max bet!",
			success: true,
			space_trail_max_bet: formatted_max_bet,
		};
	},
}));
