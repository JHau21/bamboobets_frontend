import { useEffect } from "react";

import Message from "./components/message";
import Routing from "./routing";

import { useContract } from "./state/contract";
import { useMessage } from "./state/message";
import { useWallet } from "./state/wallet";

import { check_wallet_connected } from "./utils/wallet";

function App() {
	const { error, message } = useMessage();
	const { wallet_address, connect_wallet, disconnect_wallet, update_balance } = useWallet();
	const { coin_flip_contract, space_trail_contract, update_coin_flip_max_bet, update_space_trail_max_bet } = useContract();

	useEffect(() => {
		if (check_wallet_connected() && !wallet_address) connect_wallet();

		const interval: NodeJS.Timer = setInterval(() => {
			if (check_wallet_connected() && wallet_address) {
				console.log("UPDATE THE BALANCE");
				update_balance(wallet_address);
			}

			if (coin_flip_contract) update_coin_flip_max_bet(coin_flip_contract);

			if (space_trail_contract) update_space_trail_max_bet(space_trail_contract);
		}, 5000);

		window.ethereum.on("accountsChanged", (accounts: any) => {
			if (accounts.length === 0) disconnect_wallet();
		});

		return () => {
			window.ethereum.removeListener("accountsChanged", () => {
				return;
			});

			clearInterval(interval);
		};
	}, []);

	return (
		<div className="flex items-center justify-center h-screen w-screen bg-absolute-black">
			<div className="relative h-full w-full max-w-[2000px] max-h-[1000px]">
				{error && <Message>{error}</Message>}
				{/* Eventually I should add a prop so the message component distinguishes between errors and simple message */}
				{message && <Message>{message}</Message>}
				<Routing />
			</div>
		</div>
	);
}

export default App;
