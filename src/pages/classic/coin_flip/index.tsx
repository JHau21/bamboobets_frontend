import { useEffect, useState, FC } from "react";
import { ethers } from "ethers";

import BetBar from "./components/bet_bar";
import Button from "../../../components/button";
import EndGameCard from "./components/end_game_card";

import { useWallet } from "../../../state/wallet";
import { useGeneral } from "../../../state/general";
import { useMessage } from "../../../state/message";
import { useContract } from "../../../state/contract";

import { handle_coin_flip } from "../../../utils/contract_methods";

import { CoinOptions } from "../../../types/common";

import BambooCoinDefault from "../../../assets/images/icons/bamboo-coin-default.svg";
import BambooCoinHover from "../../../assets/images/icons/bamboo-coin-hover-active.svg";
import CoinFlipSpin from "../../../assets/animations/gifs/coin_flip.gif";
import FlowerCoinDefault from "../../../assets/images/icons/flower-coin-default.svg";
import FlowerCoinHover from "../../../assets/images/icons/flower-coin-hover-active.svg";

import { color_palette } from "../../../constants/colors";

const CoinFlip: FC<{}> = () => {
	const { coin_flip_contract, coin_flip_listener, coin_flip_max_bet, set_coin_flip_contract } =
		useContract();
	const { loading, set_loading } = useGeneral();
	const { error, set_error } = useMessage();
	const { wallet_address, connect_wallet } = useWallet();

	const [bet, set_bet] = useState<{ amt: string | undefined; coin: CoinOptions | undefined }>({
		amt: undefined,
		coin: undefined,
	});
	const [bet_outcome, set_bet_outcome] = useState<boolean | undefined>(undefined);
	const [hover, set_hover] = useState<{ bamboo: boolean; flower: boolean }>({
		bamboo: false,
		flower: false,
	});

	const handle_exit = async () => {
		set_bet({
			amt: undefined,
			coin: undefined,
		});
		set_bet_outcome(undefined);
	};

	const play = async () => {
		if (error) set_error(undefined);

		if (bet.amt && bet.coin) {
			const num_bet: number = Number(bet.amt);

			if (num_bet <= 0) {
				set_error("Bet must be greater than 0!");
			} else if (num_bet > Number(coin_flip_max_bet)) {
				set_error("Cannot bet more than the maximum wager!");
			} else {
				set_loading(true);

				let contract: ethers.Contract | undefined;

				if (!coin_flip_contract) contract = await set_coin_flip_contract();
				else if (coin_flip_contract) contract = coin_flip_contract;

				if (!contract) set_error("Failed to initialize smart contract!");

				const { message, success } = await handle_coin_flip(num_bet, bet.coin, contract);

				if (!success) {
					set_error(message);
					set_loading(false);
				}
			}
		} else {
			if (!bet.amt) set_error("Cannot play without placing a bet!");
			else if (!bet.coin) set_error("Cannot play without selecting a coin!");
			else set_error("Soemthing went wrong!");
		}
	};

	useEffect(() => {
		if (!coin_flip_contract && wallet_address) set_coin_flip_contract();
	}, [wallet_address]);

	useEffect(() => {
		if (loading && coin_flip_listener) {
			coin_flip_listener.on("BetResolved", async (player, amountWon, win: boolean) => {
				set_bet_outcome(win);
				set_loading(false);
			});

			return () => {
				coin_flip_listener.off("BetResolved", () => {});
			};
		}
	}, [loading]);

	return (
		<div className="w-full h-full flex flex-col items-center text-shadow-none relative">
			<EndGameCard bet_outcome={bet_outcome} onExit={handle_exit} />
			<div className="w-full h-[50%] rounded-lg bg-gradient-to-br from-light-pink to-light-green p-[2px]">
				<div className="w-full h-full rounded-lg bg-dark-nexus">
					{!loading ? (
						<div className="flex flex-row items-center h-full w-full px-40 justify-around py-4">
							<img
								className="h-[150px] w-[150px] rounded-full hover:cursor-pointer hover:shadow-pink-card-glow"
								src={
									hover.flower || bet.coin === CoinOptions.Flower
										? FlowerCoinHover
										: FlowerCoinDefault
								}
								alt={"Flower Coin"}
								onMouseOver={() => set_hover({ bamboo: false, flower: true })}
								onMouseLeave={() => set_hover({ bamboo: false, flower: false })}
								onClick={() => set_bet({ ...bet, coin: CoinOptions.Flower })}
							/>
							<img
								className="h-[150px] w-[150px] rounded-full hover:cursor-pointer hover:shadow-green-card-glow"
								src={
									hover.bamboo || bet.coin === CoinOptions.Bamboo
										? BambooCoinHover
										: BambooCoinDefault
								}
								alt={"Bamboo Coin"}
								onMouseOver={() => set_hover({ bamboo: true, flower: false })}
								onMouseLeave={() => set_hover({ bamboo: false, flower: false })}
								onClick={() => set_bet({ ...bet, coin: CoinOptions.Bamboo })}
							/>
						</div>
					) : (
						<div className="flex items-center justify-center h-full w-full">
							<img
								className={"h-[193px] w-[193px]"}
								src={CoinFlipSpin}
								alt={"Flipping Coin..."}
							/>
						</div>
					)}
				</div>
			</div>
			<div className="flex flex-row items-center mt-4 w-full rounded-lg justify-between bg-gradient-to-br from-light-pink to-light-green h-[30%] p-[2px]">
				<BetBar
					bet={bet}
					set_bet={set_bet}
					default_color={color_palette["bbb-white"]}
					shadow_color={color_palette["vibrant-green"]}
				/>
			</div>
			<div className="mt-4 h-[5%]">
				{wallet_address ? (
					<Button
						title={loading ? "Flipping..." : "Play"}
						onClick={() => bet && wallet_address && play()}
						disabled={!bet || loading}
					/>
				) : (
					<Button title={"Connect Wallet"} onClick={async () => connect_wallet()} />
				)}
			</div>
		</div>
	);
};

export default CoinFlip;
