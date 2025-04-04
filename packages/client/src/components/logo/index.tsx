import { Typography } from '@douyinfe/semi-ui';

import { RuntimeConfig } from 'hooks/use-runtime-config';
import Link from 'next/link';

import styles from './index.module.scss';

const { Text } = Typography;

export const LogoImage = () => {
  const config = RuntimeConfig.useHook();

  return (
    <Link href={'/'} as={'/'}>
      <a style={{ width: 36, height: 36 }}>
        {config.logo ? (
          <img src={config.logo} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="36"
            height="36"
            viewBox="0 0 512 512"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="var(--semi-color-primary)"
              stroke="none"
            >
              <path d="M880 4799 c-85 -8 -208 -39 -235 -59 -5 -4 -28 -13 -49 -20 -54 -17 -179 -142 -196 -196 -7 -21 -16 -43 -20 -49 -25 -36 -51 -144 -60 -250 -14 -169 -13 -3182 1 -3335 9 -100 37 -215 59 -245 4 -5 13 -28 20 -49 17 -54 142 -179 196 -196 21 -7 44 -16 49 -20 36 -25 144 -51 250 -60 164 -13 3180 -13 3335 0 101 9 211 36 245 60 6 4 28 13 49 20 54 17 179 142 196 196 7 21 16 44 20 49 22 30 50 145 59 245 14 153 15 3166 1 3335 -9 106 -35 214 -60 250 -4 6 -13 28 -20 49 -17 54 -142 179 -196 196 -21 7 -43 16 -49 20 -30 22 -145 50 -245 59 -139 13 -3205 13 -3350 0z m2418 -1532 c281 -282 512 -516 512 -521 0 -9 -27 -39 -174 -196 -39 -42 -109 -118 -156 -170 -47 -52 -87 -97 -90 -100 -3 -3 -43 -45 -90 -95 -46 -49 -116 -124 -154 -165 -39 -42 -105 -113 -146 -159 -41 -46 -91 -100 -110 -120 -45 -48 -248 -266 -286 -309 -29 -31 -35 -33 -156 -47 -69 -8 -220 -19 -334 -25 -115 -6 -238 -15 -274 -20 -82 -12 -520 -34 -527 -27 -6 7 16 328 27 389 5 26 14 116 20 200 6 84 15 178 20 208 5 30 14 120 20 200 15 211 18 226 54 263 35 36 281 267 366 343 30 27 68 63 85 79 17 17 87 82 155 145 68 63 140 131 160 150 20 19 81 76 136 125 54 50 135 124 179 166 200 188 209 196 240 198 6 1 241 -230 523 -512z" />
            </g>
          </svg>
        )}
      </a>
    </Link>
  );
};

export const LogoText = () => {
  const config = RuntimeConfig.useHook();

  return (
    <Link href={'/'} as={'/'}>
      <a className={styles.wrap}>
        <Text>{config?.appName}</Text>
      </a>
    </Link>
  );
};
