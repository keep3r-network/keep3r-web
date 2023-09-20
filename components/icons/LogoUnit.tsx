import	React		from	'react';

import type {ReactElement} from 'react';

function LogoUnit(props: React.SVGProps<SVGSVGElement>): ReactElement {
	return (
		<svg
			{...props}
			width={'40'}
			height={'40'}
			viewBox={'0 0 40 40'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}>
			<circle
				cx={'20'}
				cy={'20'}
				r={'20'}
				fill={'#FF88CF'}/>
			<path
				fillRule={'evenodd'}
				clipRule={'evenodd'}
				d={'M29.8352 17.3483C29.515 17.8229 29.2443 18.0855 29.0293 18.2943C28.9418 18.3792 28.8635 18.4552 28.7948 18.5329C28.5581 18.8007 28.4352 19.0891 28.4377 19.3586C28.4393 19.6289 28.5655 19.8804 29.0209 20.2884C29.101 20.3602 29.1912 20.4369 29.289 20.52C29.7464 20.9088 30.3682 21.4371 30.8764 22.2586C31.4933 23.2555 31.943 24.6859 31.8193 26.1793C31.6956 27.6727 30.9985 29.2292 29.6878 30.5366C28.3771 31.844 26.4528 32.9025 24.0279 33.3841C21.6031 33.8658 18.6777 33.7708 16.3258 33.2695C13.9739 32.7673 12.1946 31.858 10.7741 30.7471C9.35358 29.6363 8.29108 28.3239 7.56363 26.8379C6.83536 25.3519 6.44132 23.6922 6.30697 22.4208C6.17262 21.1494 6.29796 20.2655 6.45443 19.6036C6.6109 18.9408 6.79849 18.5009 6.94103 18.274C7.08357 18.0471 7.18106 18.0323 7.27363 18.0454C7.36702 18.0594 7.45385 18.0995 7.72992 18.3993C7.80167 18.477 7.88615 18.5723 7.98119 18.6795C8.25186 18.9846 8.60823 19.3865 9.0005 19.7551C9.52971 20.2532 10.1244 20.6906 10.7634 20.8963C11.4024 21.1027 12.0848 21.0757 12.836 20.9749C13.588 20.8741 14.4089 20.6988 15.4738 20.3236C15.6172 20.2732 15.765 20.219 15.9181 20.163L15.9182 20.1629C16.8979 19.8042 18.0938 19.3664 19.7247 19.2955C19.2553 18.9146 18.8366 18.4698 18.4885 17.9758C17.8249 17.037 17.4137 15.9204 17.2941 14.7727C17.1753 13.6258 17.3473 12.4478 17.8217 11.4042C18.296 10.3605 19.0726 9.4512 20.0261 8.79092C20.9797 8.12983 22.1102 7.71777 23.2628 7.61373L23.2628 7.61373C23.3128 7.60964 23.3627 7.60554 23.4127 7.60226C24.4711 7.53099 24.9692 7.06077 25.2461 6.77569C25.4083 6.60913 25.4951 6.50521 25.5535 6.43517C25.5951 6.38533 25.6224 6.35265 25.6524 6.32677C25.7253 6.26369 25.813 6.23911 25.8916 6.24075C25.9702 6.24157 26.0399 6.26861 26.0989 6.31694C26.157 6.36527 26.2062 6.4349 26.2807 6.63315C26.3544 6.83058 26.4544 7.15662 26.4298 7.73661C27.0807 7.51993 27.4753 7.27187 27.7178 7.11941L27.7512 7.09846C27.9904 6.94772 28.0682 6.9084 28.1501 6.89775C28.2312 6.88792 28.3173 6.90594 28.3803 6.95346C28.4434 7.00015 28.4836 7.0747 28.5401 7.19266C28.5974 7.30981 28.6695 7.47037 28.7088 7.69975C28.749 7.92913 28.7555 8.22813 28.6916 8.51895C28.64 8.75406 28.5417 8.98344 28.2869 9.28818C28.6482 9.6134 28.9734 9.97877 29.2536 10.3761C29.7468 11.0749 30.1007 11.8719 30.2932 12.7059C31.6793 11.9768 32.3297 11.9481 32.7745 12.0169C33.2194 12.0866 33.4586 12.2545 33.6019 12.5232C33.7461 12.7919 33.7936 13.1622 33.706 13.4915C33.6175 13.8208 33.3938 14.1108 33.0883 14.3426C32.7827 14.5745 32.3961 14.749 31.2484 15.1348C32.7966 15.5305 32.931 16.1293 32.9351 16.5266C32.9392 16.9239 32.813 17.1189 32.6238 17.2721C32.4337 17.4245 32.1814 17.5351 31.73 17.5793C31.2778 17.6235 30.6274 17.6022 29.8352 17.3483ZM15.7327 24.214C15.618 24.3213 15.5074 24.4827 15.4443 24.6597C15.3821 24.8366 15.3682 25.0283 15.3837 25.2167C15.3993 25.4051 15.4443 25.5886 15.5099 25.7656C15.5754 25.9417 15.6606 26.1105 15.7605 26.2702C15.8597 26.43 15.9735 26.5807 16.0972 26.7232C16.2201 26.865 16.3536 26.9985 16.4937 27.1246C16.633 27.2508 16.7788 27.3696 16.9295 27.4835C17.0795 27.5965 17.2335 27.7046 17.3916 27.807C17.5497 27.9086 17.7119 28.0053 17.8765 28.097C18.0404 28.188 18.2083 28.274 18.3787 28.3543C18.5491 28.4345 18.722 28.5083 18.8973 28.5771C19.0734 28.6451 19.2512 28.7065 19.4306 28.7614C19.6108 28.8163 19.7935 28.8638 19.977 28.9056C20.1605 28.9466 20.3456 28.981 20.5316 29.0096C20.7175 29.0375 20.9051 29.0588 21.0927 29.0743C21.2803 29.0899 21.4679 29.0989 21.6563 29.1014C21.8448 29.1047 22.0332 29.1014 22.2208 29.0932C22.4092 29.0842 22.5968 29.0702 22.7836 29.0498C22.9712 29.0293 23.1571 29.0031 23.3431 28.9703C23.5282 28.9375 23.7125 28.899 23.8952 28.8532C24.0779 28.8073 24.2589 28.7549 24.4375 28.6951C24.6153 28.6361 24.7914 28.5689 24.9643 28.4935C25.1363 28.4173 25.3051 28.3338 25.4689 28.2412C25.6336 28.1486 25.7925 28.0479 25.9457 27.9389C26.0997 27.83 26.2471 27.7137 26.388 27.5883C26.5289 27.463 26.6625 27.3303 26.787 27.1894C26.9115 27.0485 27.0278 26.8994 27.1335 26.7437C27.2392 26.5881 27.335 26.4259 27.417 26.2563C27.4989 26.0867 27.5677 25.9106 27.6209 25.7304C27.675 25.5501 27.7135 25.365 27.7381 25.1782C27.7635 24.9923 27.7749 24.8039 27.7749 24.6154C27.7741 24.427 27.7618 24.2394 27.7414 24.0518C27.7209 23.865 27.6914 23.6791 27.6488 23.4956C27.607 23.3121 27.5513 23.1319 27.4817 22.9566C27.412 22.7821 27.3285 22.6125 27.2318 22.4511C27.1343 22.2897 27.0237 22.1365 26.9017 21.994C26.7796 21.8506 26.6461 21.7171 26.5044 21.5934C26.3626 21.4689 26.2127 21.355 26.0571 21.2485C25.9014 21.1428 25.74 21.0462 25.5746 20.9561C25.4091 20.866 25.2387 20.784 25.0675 20.707C24.8971 20.6308 24.7259 20.5612 24.544 20.4965C24.3622 20.4326 24.1705 20.3736 23.9968 20.4203C23.8231 20.4662 23.6667 20.6161 23.6077 20.798C23.5487 20.9806 23.5872 21.1945 23.7011 21.3329C23.8078 21.4634 23.9815 21.5278 24.1513 21.5906L24.1852 21.6032C24.3663 21.6696 24.5375 21.74 24.707 21.8187C24.8766 21.8981 25.0445 21.985 25.2059 22.0825C25.3681 22.18 25.523 22.2864 25.668 22.4069C25.813 22.5265 25.9473 22.6592 26.0661 22.8058C26.1841 22.9525 26.2856 23.113 26.3635 23.2842C26.4405 23.4554 26.4937 23.6373 26.5322 23.8216C26.5699 24.006 26.592 24.1935 26.6035 24.3811C26.6141 24.5696 26.6141 24.758 26.5953 24.9456C26.5765 25.1324 26.5388 25.3183 26.4773 25.4961C26.4159 25.6738 26.3307 25.8434 26.2299 26.0023C26.1292 26.1613 26.0128 26.3104 25.8859 26.4496C25.7589 26.5881 25.6213 26.7175 25.4754 26.8363C25.3296 26.9551 25.1748 27.0632 25.0142 27.1615C24.8537 27.259 24.6857 27.3458 24.5137 27.422C24.3417 27.4982 24.1647 27.5637 23.9853 27.6203C23.8059 27.6776 23.6241 27.7259 23.4406 27.7661C23.2562 27.807 23.0711 27.8406 22.8843 27.866C22.6984 27.8922 22.5108 27.9111 22.3232 27.9234C22.1347 27.9357 21.9472 27.9414 21.7587 27.9406C21.5703 27.9398 21.3819 27.9316 21.1943 27.9168C21.0067 27.9012 20.8199 27.8791 20.634 27.8488C20.448 27.8193 20.2637 27.7816 20.081 27.7358C19.8983 27.6907 19.7181 27.6375 19.5395 27.576C19.3618 27.5146 19.1864 27.4458 19.0144 27.3696C18.8424 27.2934 18.6736 27.2098 18.5081 27.1197C18.3427 27.0296 18.1805 26.933 18.0232 26.8314C17.8651 26.729 17.7127 26.6217 17.5628 26.5045C17.4121 26.3874 17.2654 26.2612 17.1368 26.1342C17.009 26.0073 16.9001 25.8803 16.7755 25.7017C16.651 25.5231 16.5118 25.2929 16.5642 25.1856C16.6166 25.0775 16.8599 25.0922 17.0704 25.125C17.111 25.1315 17.1504 25.1386 17.1886 25.1455L17.1887 25.1456C17.349 25.1747 17.4905 25.2004 17.6267 25.1594C17.7954 25.1094 17.9568 24.957 18.0166 24.7785C18.0764 24.5991 18.0355 24.3943 17.9437 24.2378C17.8833 24.1353 17.8012 24.0537 17.7117 23.9648C17.6653 23.9188 17.6169 23.8707 17.5685 23.8167C17.4268 23.6594 17.2851 23.4514 17.3391 23.3367C17.3932 23.2212 17.6423 23.199 17.8495 23.2203C18.0559 23.2416 18.2206 23.3064 18.3877 23.3842C18.5548 23.4628 18.7244 23.5546 18.8743 23.6693C18.9303 23.7121 18.9836 23.7581 19.0368 23.8041L19.0368 23.8042C19.126 23.8813 19.2151 23.9583 19.3167 24.0199C19.4789 24.1174 19.673 24.1747 19.8492 24.1272C20.0245 24.0789 20.1818 23.9257 20.2375 23.7479C20.2932 23.5701 20.2481 23.367 20.1433 23.213C20.0457 23.0704 19.8957 22.969 19.7479 22.8692L19.7148 22.8468C19.6669 22.814 19.6196 22.781 19.5725 22.7481L19.5722 22.7479C19.465 22.673 19.3588 22.5988 19.2479 22.5306C19.0881 22.4331 18.9186 22.3479 18.7441 22.2758C18.5696 22.2045 18.3902 22.1464 18.2067 22.1054C18.0232 22.0644 17.8356 22.0407 17.6472 22.0407C17.4588 22.0399 17.2695 22.0636 17.0909 22.1226C16.9123 22.1824 16.7444 22.2766 16.6051 22.4028C16.4667 22.5289 16.3553 22.6862 16.2791 22.8591C16.2029 23.0311 16.1603 23.2187 16.1521 23.3752C16.1476 23.4615 16.1533 23.5385 16.1584 23.607C16.1625 23.6626 16.1662 23.7125 16.1636 23.7569C16.157 23.856 16.1202 23.9273 16.0424 23.9904C16.013 24.0141 15.9775 24.0367 15.9386 24.0615L15.9385 24.0615C15.8754 24.1017 15.8031 24.1477 15.7327 24.214ZM26.1568 14.1485C26.8538 14.1485 27.4189 13.5834 27.4189 12.8864C27.4189 12.1894 26.8538 11.6243 26.1568 11.6243C25.4597 11.6243 24.8947 12.1894 24.8947 12.8864C24.8947 13.5834 25.4597 14.1485 26.1568 14.1485Z'}
				fill={'#9D2EE5'}/>
		</svg>

	);
}

export default LogoUnit;
