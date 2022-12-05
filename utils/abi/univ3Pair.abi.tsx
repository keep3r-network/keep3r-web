const	UNI_V3_PAIR_ABI = [
	{'inputs':[{'internalType':'address', 'name':'_pool', 'type':'address'}, {'internalType':'address', 'name':'_governance', 'type':'address'}], 'stateMutability':'nonpayable', 'type':'constructor'}, {'inputs':[], 'name':'ExcessiveSlippage', 'type':'error'}, {'inputs':[], 'name':'NoGovernanceZeroAddress', 'type':'error'}, {'inputs':[], 'name':'OnlyGovernance', 'type':'error'}, {'inputs':[], 'name':'OnlyPendingGovernance', 'type':'error'}, {'inputs':[], 'name':'OnlyPool', 'type':'error'}, {'inputs':[], 'name':'UnsuccessfulTransfer', 'type':'error'}, {'anonymous':false, 'inputs':[{'indexed':true, 'internalType':'address', 'name':'owner', 'type':'address'}, {'indexed':true, 'internalType':'address', 'name':'spender', 'type':'address'}, {'indexed':false, 'internalType':'uint256', 'name':'value', 'type':'uint256'}], 'name':'Approval', 'type':'event'}, {'anonymous':false, 'inputs':[{'indexed':false, 'internalType':'address', 'name':'_pendingGovernance', 'type':'address'}], 'name':'GovernanceProposal', 'type':'event'}, {'anonymous':false, 'inputs':[{'indexed':false, 'internalType':'address', 'name':'_governance', 'type':'address'}], 'name':'GovernanceSet', 'type':'event'}, {'anonymous':false, 'inputs':[{'indexed':true, 'internalType':'address', 'name':'from', 'type':'address'}, {'indexed':true, 'internalType':'address', 'name':'to', 'type':'address'}, {'indexed':false, 'internalType':'uint256', 'name':'value', 'type':'uint256'}], 'name':'Transfer', 'type':'event'}, {'inputs':[], 'name':'acceptGovernance', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'', 'type':'address'}, {'internalType':'address', 'name':'', 'type':'address'}], 'name':'allowance', 'outputs':[{'internalType':'uint256', 'name':'', 'type':'uint256'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'spender', 'type':'address'}, {'internalType':'uint256', 'name':'amount', 'type':'uint256'}], 'name':'approve', 'outputs':[{'internalType':'bool', 'name':'', 'type':'bool'}], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'name':'balanceOf', 'outputs':[{'internalType':'uint256', 'name':'', 'type':'uint256'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'uint128', 'name':'liquidity', 'type':'uint128'}, {'internalType':'uint256', 'name':'amount0Min', 'type':'uint256'}, {'internalType':'uint256', 'name':'amount1Min', 'type':'uint256'}, {'internalType':'address', 'name':'to', 'type':'address'}], 'name':'burn', 'outputs':[{'internalType':'uint256', 'name':'amount0', 'type':'uint256'}, {'internalType':'uint256', 'name':'amount1', 'type':'uint256'}], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[], 'name':'collect', 'outputs':[{'internalType':'uint256', 'name':'amount0', 'type':'uint256'}, {'internalType':'uint256', 'name':'amount1', 'type':'uint256'}], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[], 'name':'decimals', 'outputs':[{'internalType':'uint8', 'name':'', 'type':'uint8'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'factory', 'outputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'fee', 'outputs':[{'internalType':'uint24', 'name':'', 'type':'uint24'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'governance', 'outputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'uint256', 'name':'amount0Desired', 'type':'uint256'}, {'internalType':'uint256', 'name':'amount1Desired', 'type':'uint256'}, {'internalType':'uint256', 'name':'amount0Min', 'type':'uint256'}, {'internalType':'uint256', 'name':'amount1Min', 'type':'uint256'}, {'internalType':'address', 'name':'to', 'type':'address'}], 'name':'mint', 'outputs':[{'internalType':'uint128', 'name':'liquidity', 'type':'uint128'}], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[], 'name':'name', 'outputs':[{'internalType':'string', 'name':'', 'type':'string'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'pendingGovernance', 'outputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'pool', 'outputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'position', 'outputs':[{'internalType':'uint128', 'name':'liquidity', 'type':'uint128'}, {'internalType':'uint256', 'name':'feeGrowthInside0LastX128', 'type':'uint256'}, {'internalType':'uint256', 'name':'feeGrowthInside1LastX128', 'type':'uint256'}, {'internalType':'uint128', 'name':'tokensOwed0', 'type':'uint128'}, {'internalType':'uint128', 'name':'tokensOwed1', 'type':'uint128'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'_governance', 'type':'address'}], 'name':'setGovernance', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[], 'name':'sqrtRatioAX96', 'outputs':[{'internalType':'uint160', 'name':'', 'type':'uint160'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'sqrtRatioBX96', 'outputs':[{'internalType':'uint160', 'name':'', 'type':'uint160'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'symbol', 'outputs':[{'internalType':'string', 'name':'', 'type':'string'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'tickLower', 'outputs':[{'internalType':'int24', 'name':'', 'type':'int24'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'tickSpacing', 'outputs':[{'internalType':'int24', 'name':'', 'type':'int24'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'tickUpper', 'outputs':[{'internalType':'int24', 'name':'', 'type':'int24'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'token0', 'outputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'token1', 'outputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'totalSupply', 'outputs':[{'internalType':'uint256', 'name':'', 'type':'uint256'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'to', 'type':'address'}, {'internalType':'uint256', 'name':'amount', 'type':'uint256'}], 'name':'transfer', 'outputs':[{'internalType':'bool', 'name':'', 'type':'bool'}], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'from', 'type':'address'}, {'internalType':'address', 'name':'to', 'type':'address'}, {'internalType':'uint256', 'name':'amount', 'type':'uint256'}], 'name':'transferFrom', 'outputs':[{'internalType':'bool', 'name':'', 'type':'bool'}], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[{'internalType':'uint256', 'name':'amount0Owed', 'type':'uint256'}, {'internalType':'uint256', 'name':'amount1Owed', 'type':'uint256'}, {'internalType':'bytes', 'name':'data', 'type':'bytes'}], 'name':'uniswapV3MintCallback', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}
];

export default UNI_V3_PAIR_ABI;