import {ethers} from 'ethers';
import KEEP3RV2_ABI from 'utils/abi/keep3rv2.abi';
import {getEnv} from 'utils/env';
import {handleTx} from '@yearn-finance/web-lib/utils/web3/transaction';

import type {ContractInterface} from 'ethers';
import type {TTxResponse} from '@yearn-finance/web-lib/utils/web3/transaction';

export async function	withdrawTokenCreditsFromJob(
	provider: ethers.providers.Web3Provider,
	chainID: number,
	jobAddress: string,
	tokenAddress: string,
	tokenAmount: ethers.BigNumber,
	receiver: string
): Promise<TTxResponse> {
	const	signer = provider.getSigner();
	const	contract = new ethers.Contract(
		getEnv(chainID).KEEP3R_V2_ADDR,
		KEEP3RV2_ABI as ContractInterface,
		signer
	);
	return await handleTx(contract.withdrawTokenCreditsFromJob(
		jobAddress,
		tokenAddress,
		tokenAmount,
		receiver
	));
}
