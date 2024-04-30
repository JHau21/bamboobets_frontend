import Input from "../../../../../components/input";

import { useWallet } from "../../../../../state/wallet";
import { useGeneral } from "../../../../../state/general";
import { useContract } from "../../../../../state/contract";

import { compute_coin_flip_payout } from "../../../../../utils/common";

import { CoinOptions } from "../../../../../types/common";

type Props = {
	bet: { amt: string | undefined; coin: CoinOptions | undefined };
	set_bet: Function;
	default_color: string;
	shadow_color: string;
};

const BetBar = ({ bet, set_bet, default_color, shadow_color }: Props) => {
	const { coin_flip_max_bet } = useContract();
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
						value={bet.amt ?? ""}
						onChange={(value: string) => {
							set_bet({ ...bet, amt: value });
						}}
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
						{coin_flip_max_bet ? Number(coin_flip_max_bet)?.toFixed(5) : "0.0000"} MATC
					</p>
				</div>
				<div className="w-full h-[50%] flex flex-row items-center justify-start">
					<p className="m-0 text-shadow-none text-bbb-white font-thin">Payout:</p>
					<p className="font-bold text-bbb-white text-shadow-none ml-1">
						{bet.amt ? compute_coin_flip_payout(Number(bet.amt)) : "0.0000"} MATC
					</p>
				</div>
			</div>
		</div>
	);
};

export default BetBar;
