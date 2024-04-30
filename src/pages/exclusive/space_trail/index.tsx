import { useEffect, useState } from "react";
import { ethers } from "ethers";

import BetBar from "./components/bet_bar";
import Button from "../../../components/button";
import CommitChoice from "./components/commit_screen";
import EndGameCard from "./components/end_game_screen";
import EventScreens from "./components/event_screens";
import MenuScreen from "./components/menu_screen";

import { useWallet } from "../../../state/wallet";
import { useGeneral } from "../../../state/general";
import { useMessage } from "../../../state/message";
import { useContract } from "../../../state/contract";

import { handle_space_trail } from "../../../utils/contract_methods";

import { color_palette } from "../../../constants/colors";
import { SpaceTrailOptions } from "../../../types/common";

import FlyingAnimation from "../../../assets/animations/gifs/space_trail.gif";

const SpaceTrail = () => {
	const {
		space_trail_contract,
		space_trail_listener,
		space_trail_max_bet,
		set_space_trail_contract,
	} = useContract();
	const { loading, set_loading } = useGeneral();
	const { error, set_error } = useMessage();
	const { wallet_address, connect_wallet } = useWallet();

	const [bet, set_bet] = useState<string | undefined>(undefined);
	const [choice, set_choice] = useState<SpaceTrailOptions | undefined>(undefined);
	const [read_event, set_read_event] = useState<number>(0);
	const [commit_choice, set_commit_choice] = useState<boolean>(false);
	const [bet_outcome, set_bet_outcome] = useState<boolean | undefined>(undefined);
	const [playing, set_playing] = useState<boolean>(false);

	const handle_exit = async () => {
		set_bet(undefined);
		set_choice(undefined);
		set_bet_outcome(undefined);
		set_read_event(0);
		set_commit_choice(false);
	};

	const handle_selection = async () => {
		set_playing(false);
		set_loading(true);

		if (bet && choice && space_trail_contract) {
			const num_bet: number = Number(bet);

			const { message, success } = await handle_space_trail(
				num_bet,
				choice,
				space_trail_contract
			);

			if (!success) {
				set_error(message);
				set_loading(false);
			}
		} else {
			if (!choice)
				set_error(
					"You need to select a choice from the available options to continue the game."
				);
			else set_error("Soemthing went wrong!");
		}
	};

	const play = async () => {
		if (error) set_error(undefined);

		if (bet) {
			const num_bet: number = Number(bet);

			if (num_bet <= 0) {
				set_error("Bet must be greater than 0!");
			} else if (num_bet > Number(space_trail_max_bet)) {
				set_error("Cannot bet more than the maximum wager!");
			} else {
				set_playing(true);

				let contract: ethers.Contract | undefined;

				if (!space_trail_contract) contract = await set_space_trail_contract();
				else if (space_trail_contract) contract = space_trail_contract;

				if (!contract) set_error("Failed to initialize smart contract!");

				if (read_event) set_read_event(0);
			}
		} else {
			if (!bet) set_error("Cannot play without placing a bet!");
			else set_error("Soemthing went wrong!");
		}
	};

	useEffect(() => {
		if (!space_trail_contract && wallet_address) set_space_trail_contract();
	}, [wallet_address]);

	useEffect(() => {
		if (loading && space_trail_listener) {
			space_trail_listener.on("BetResolved", async (player, amountWon, win: boolean) => {
				console.log(win);
				set_bet_outcome(win);
				set_loading(false);
			});

			return () => {
				space_trail_listener.off("BetResolved", () => {});
			};
		}
	}, [loading]);

	if (playing) {
		if (read_event < 8) {
			return (
				<div className="w-full h-full flex flex-col items-center text-shadow-none relative">
					<EventScreens read_event={read_event} />
					<div className="h-[5%]">
						<Button
							title={"Continue"}
							hover_active_color={color_palette["light-pink"]}
							onClick={() => set_read_event(read_event + 1)}
							disabled={!bet}
						/>
					</div>
				</div>
			);
		} else if (!commit_choice) {
			return (
				<div className="w-full h-full flex flex-col items-center text-shadow-none relative">
					<MenuScreen choice={choice} set_choice={set_choice} />
					<div className="h-[5%]">
						<Button
							title={"Continue"}
							hover_active_color={color_palette["light-pink"]}
							onClick={() =>
								bet && choice && wallet_address && set_commit_choice(true)
							}
							disabled={!bet || !choice}
						/>
					</div>
				</div>
			);
		} else {
			return (
				<div className="w-full h-full flex flex-col items-center text-shadow-none relative">
					<CommitChoice choice={choice} />
					<div className="h-[5%]">
						<Button
							title={"Continue"}
							hover_active_color={color_palette["light-pink"]}
							onClick={() => bet && choice && wallet_address && handle_selection()}
							disabled={!bet || !choice}
						/>
					</div>
				</div>
			);
		}
	} else if (loading) {
		return (
			<div className="w-full h-full flex flex-col items-center text-shadow-none relative">
				<div
					className="absolute w-[45%] h-full"
					style={{
						backgroundImage: `radial-gradient(circle at center, transparent, ${color_palette["dark-nexus"]})`,
					}}
				></div>
				<img className={"w-[45%] h-full"} src={FlyingAnimation} alt={"Flying Space Ship"} />
			</div>
		);
	} else
		return (
			<div className="w-full h-full flex flex-col items-center text-shadow-none relative">
				<EndGameCard bet_outcome={bet_outcome} choice={choice} onExit={handle_exit} />
				<div className="w-full h-[50%] rounded-lg bg-gradient-to-br from-light-blue to-light-pink p-[2px]">
					<div className="w-full h-full rounded-lg bg-dark-nexus flex flex-col items-center text-bbb-white">
						<div className="w-full h-[60px] text-md-header flex flex-row items-center justify-center overflow-hidden">
							<span className="text-light-blue text-shadow-blue-glow font-header-family">
								Welcome to
							</span>{" "}
							<span className="text-light-pink text-shadow-pink-glow font-header-family ml-3">
								Space Trail
							</span>
						</div>
						<p className="w-full text-center px-6 font-thin">
							You and your crew of space pioneers have all heard rumors of an entire
							planet made of gold! The planet, Goldminium, has a habitable moon called
							Luna Terra. This moon houses the base of all mining operation on
							Goldminum and you all need to get there to strike it rich! The journey
							to Luna Terra follows the infamous Space Trail. Your future is uncertain
							and the path ahead is full of danger.
							<br />
							Good luck!
						</p>
					</div>
				</div>
				<div className="flex flex-row items-center mt-4 w-full rounded-lg justify-between bg-gradient-to-br from-light-blue to-light-pink h-[30%] p-[2px]">
					<BetBar
						bet={bet}
						set_bet={set_bet}
						default_color={color_palette["bbb-white"]}
						shadow_color={color_palette["vibrant-pink"]}
					/>
				</div>
				<div className="mt-4 h-[5%]">
					{wallet_address ? (
						<Button
							title={playing ? "Playing..." : "Play"}
							hover_active_color={color_palette["light-pink"]}
							onClick={() => bet && wallet_address && play()}
							disabled={!bet || playing}
						/>
					) : (
						<Button
							title={"Connect Wallet"}
							onClick={async () => connect_wallet()}
							hover_active_color={color_palette["light-pink"]}
						/>
					)}
				</div>
			</div>
		);
};

export default SpaceTrail;
