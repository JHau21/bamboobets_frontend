import { ethers } from "ethers";

export const compute_coin_flip_payout = (bet: number): string => {
	return (bet * 1.98).toFixed(4);
};

export const initialize_coin_flip_contract = async (
	contract_address: string,
	contract_abi: Array<any>
): Promise<{ contract: ethers.Contract; listener: ethers.Contract; max_bet: string }> => {
	const provider: ethers.BrowserProvider = new ethers.BrowserProvider(window.ethereum);
	const signer: ethers.JsonRpcSigner = await provider.getSigner();
	const contract: ethers.Contract = new ethers.Contract(contract_address, contract_abi, signer);
	const max_bet: bigint = await contract.get_max_wager();
	const formatted_max_bet: string = ethers.formatEther(max_bet);

	const alchemy_provider = new ethers.AlchemyProvider(
		process.env.REACT_APP_NETWORK as string,
		process.env.REACT_APP_ALCHEMY_API_KEY as string
	);
	const contract_listener = new ethers.Contract(contract_address, contract_abi, alchemy_provider);

	return {
		contract: contract,
		listener: contract_listener,
		max_bet: formatted_max_bet,
	};
};

export const initialize_space_trail_contract = async (
	contract_address: string,
	contract_abi: Array<any>
): Promise<{ contract: ethers.Contract; listener: ethers.Contract; max_bet: string }> => {
	const provider: ethers.BrowserProvider = new ethers.BrowserProvider(window.ethereum);
	const signer: ethers.JsonRpcSigner = await provider.getSigner();
	const contract: ethers.Contract = new ethers.Contract(contract_address, contract_abi, signer);
	const max_bet: bigint = await contract.getMaxWager();
	const formatted_max_bet: string = ethers.formatEther(max_bet);

	const alchemy_provider = new ethers.AlchemyProvider(
		process.env.REACT_APP_NETWORK as string,
		process.env.REACT_APP_ALCHEMY_API_KEY as string
	);
	const contract_listener = new ethers.Contract(contract_address, contract_abi, alchemy_provider);

	return {
		contract: contract,
		listener: contract_listener,
		max_bet: formatted_max_bet,
	};
};
