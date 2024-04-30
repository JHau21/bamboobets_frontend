import Input from "../../../../../components/input";

import { useWallet } from "../../../../../state/wallet";
import { useGeneral } from "../../../../../state/general";
import { useContract } from "../../../../../state/contract";

import { compute_coin_flip_payout } from "../../../../../utils/common";

type Props = {
	bet: string | undefined;
	set_bet: Function;
	default_color: string;
	shadow_color: string;
};

const BetBar = ({ bet, set_bet, default_color, shadow_color }: Props) => {
	const { space_trail_max_bet } = useContract();
	const { loading } = useGeneral();
	const { wallet_balance } = useWallet();

	return (
		<div className="flex flex-row items-center w-full h-full rounded-lg justify-between bg-dark-nexus">
			<div className="flex flex-col items-start w-[20%] p-3">
				<p className="m-0 text-shadow-none text-bbb-white font-thin h-[50%]">
					Available Funds:
				</p>
				<p className="font-bold text-bbb-white text-shadow-none h-[50%] mt-1">
					{wallet_balance ? Number(wallet_balance)?.toFixed(4) : "0.0000"} MATC
				</p>
			</div>
			<div className="flex flex-col items-start w-[45%] h-full rounded-lg p-3">
				<p className="m-0 text-bbb-white font-thin h-[50%]">Wager:</p>
				<div className="w-full h-[30px] mt-1">
					<Input
						value={bet ?? ""}
						onChange={(value: string) => set_bet(value)}
						default_color={default_color}
						shadow_color={shadow_color}
						disabled={loading}
					/>
				</div>
			</div>
			<div className="flex flex-col items-end w-[30%] h-full rounded-lg p-3">
				<div className="w-full h-[50%] flex flex-row items-center justify-start">
					<p className="m-0 text-shadow-none text-bbb-white font-thin">Max Wager:</p>
					<p className="font-bold text-bbb-white text-shadow-none ml-1">
						{space_trail_max_bet ? Number(space_trail_max_bet)?.toFixed(5) : "0.0000"}{" "}
						MATC
					</p>
				</div>
				<div className="w-full h-[50%] flex flex-row items-center justify-start">
					<p className="m-0 text-shadow-none text-bbb-white font-thin">Payout:</p>
					<p className="font-bold text-bbb-white text-shadow-none ml-1">
						{bet ? compute_coin_flip_payout(Number(bet)) : "0.0000"} MATC
					</p>
				</div>
			</div>
		</div>
	);
};

export default BetBar;
