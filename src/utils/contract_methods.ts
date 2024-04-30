import { ethers } from "ethers";

import { CoinOptions, SpaceTrailOptions } from "../types/common";

export const handle_coin_flip = async (
	amt: number | undefined,
	coin: CoinOptions | undefined,
	contract: ethers.Contract | undefined
): Promise<{
	message: string;
	success: boolean;
}> => {
	try {
		if (
			!amt ||
			!coin ||
			typeof amt !== "number" ||
			(coin !== CoinOptions.Bamboo && coin !== CoinOptions.Flower)
		)
			return {
				message: "The values in your bet are not formatted correctly. Please try again!",
				success: false,
			};
		else if (!contract)
			return {
				message: "Contract initialization failed. Please try again!",
				success: false,
			};

		const choice: boolean = coin === CoinOptions.Flower ? true : false;
		const amount: bigint = ethers.parseEther(amt.toString());
		const transaction: any = await contract.place_bet(choice, { value: amount });

		await transaction.wait();

		return {
			message: "Successfully flipped coin!",
			success: true,
		};
	} catch (err) {
		console.error(err);

		return {
			message: "Something unexpected occurred. Please try again!",
			success: false,
		};
	}
};

export const handle_space_trail = async (
	amt: number | undefined,
	choice: SpaceTrailOptions | undefined,
	contract: ethers.Contract | undefined
): Promise<{
	message: string;
	success: boolean;
}> => {
	try {
		if (!amt || choice === undefined || typeof amt !== "number")
			return {
				message: "The values in your bet are not formatted correctly. Please try again!",
				success: false,
			};
		else if (!contract)
			return {
				message: "Contract initialization failed. Please try again!",
				success: false,
			};

		const amount: bigint = ethers.parseEther(amt.toString());
		const transaction: any = await contract.placeBet(choice - 1, { value: amount });

		await transaction.wait();

		return {
			message: "Successfully flipped coin!",
			success: true,
		};
	} catch (err) {
		console.error(err);

		return {
			message: "Something unexpected occurred. Please try again!",
			success: false,
		};
	}
};
