
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myFirstTheme: CustomThemeConfig = {
    name: 'my-first-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "var(--color-primary-900)",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #6f8e88 
		"--color-primary-50": "233 238 237", // #e9eeed
		"--color-primary-100": "226 232 231", // #e2e8e7
		"--color-primary-200": "219 227 225", // #dbe3e1
		"--color-primary-300": "197 210 207", // #c5d2cf
		"--color-primary-400": "154 176 172", // #9ab0ac
		"--color-primary-500": "111 142 136", // #6f8e88
		"--color-primary-600": "100 128 122", // #64807a
		"--color-primary-700": "83 107 102", // #536b66
		"--color-primary-800": "67 85 82", // #435552
		"--color-primary-900": "54 70 67", // #364643
		// secondary | #d19080 
		"--color-secondary-50": "248 238 236", // #f8eeec
		"--color-secondary-100": "246 233 230", // #f6e9e6
		"--color-secondary-200": "244 227 223", // #f4e3df
		"--color-secondary-300": "237 211 204", // #edd3cc
		"--color-secondary-400": "223 177 166", // #dfb1a6
		"--color-secondary-500": "209 144 128", // #d19080
		"--color-secondary-600": "188 130 115", // #bc8273
		"--color-secondary-700": "157 108 96", // #9d6c60
		"--color-secondary-800": "125 86 77", // #7d564d
		"--color-secondary-900": "102 71 63", // #66473f
		// tertiary | #a5c9ac 
		"--color-tertiary-50": "242 247 243", // #f2f7f3
		"--color-tertiary-100": "237 244 238", // #edf4ee
		"--color-tertiary-200": "233 242 234", // #e9f2ea
		"--color-tertiary-300": "219 233 222", // #dbe9de
		"--color-tertiary-400": "192 217 197", // #c0d9c5
		"--color-tertiary-500": "165 201 172", // #a5c9ac
		"--color-tertiary-600": "149 181 155", // #95b59b
		"--color-tertiary-700": "124 151 129", // #7c9781
		"--color-tertiary-800": "99 121 103", // #637967
		"--color-tertiary-900": "81 98 84", // #516254
		// success | #e0b3a4 
		"--color-success-50": "250 244 241", // #faf4f1
		"--color-success-100": "249 240 237", // #f9f0ed
		"--color-success-200": "247 236 232", // #f7ece8
		"--color-success-300": "243 225 219", // #f3e1db
		"--color-success-400": "233 202 191", // #e9cabf
		"--color-success-500": "224 179 164", // #e0b3a4
		"--color-success-600": "202 161 148", // #caa194
		"--color-success-700": "168 134 123", // #a8867b
		"--color-success-800": "134 107 98", // #866b62
		"--color-success-900": "110 88 80", // #6e5850
		// warning | #dbcfc3 
		"--color-warning-50": "250 248 246", // #faf8f6
		"--color-warning-100": "248 245 243", // #f8f5f3
		"--color-warning-200": "246 243 240", // #f6f3f0
		"--color-warning-300": "241 236 231", // #f1ece7
		"--color-warning-400": "230 221 213", // #e6ddd5
		"--color-warning-500": "219 207 195", // #dbcfc3
		"--color-warning-600": "197 186 176", // #c5bab0
		"--color-warning-700": "164 155 146", // #a49b92
		"--color-warning-800": "131 124 117", // #837c75
		"--color-warning-900": "107 101 96", // #6b6560
		// error | #cf3e3e 
		"--color-error-50": "248 226 226", // #f8e2e2
		"--color-error-100": "245 216 216", // #f5d8d8
		"--color-error-200": "243 207 207", // #f3cfcf
		"--color-error-300": "236 178 178", // #ecb2b2
		"--color-error-400": "221 120 120", // #dd7878
		"--color-error-500": "207 62 62", // #cf3e3e
		"--color-error-600": "186 56 56", // #ba3838
		"--color-error-700": "155 47 47", // #9b2f2f
		"--color-error-800": "124 37 37", // #7c2525
		"--color-error-900": "101 30 30", // #651e1e
		// surface | #636f83 
		"--color-surface-50": "232 233 236", // #e8e9ec
		"--color-surface-100": "224 226 230", // #e0e2e6
		"--color-surface-200": "216 219 224", // #d8dbe0
		"--color-surface-300": "193 197 205", // #c1c5cd
		"--color-surface-400": "146 154 168", // #929aa8
		"--color-surface-500": "99 111 131", // #636f83
		"--color-surface-600": "89 100 118", // #596476
		"--color-surface-700": "74 83 98", // #4a5362
		"--color-surface-800": "59 67 79", // #3b434f
		"--color-surface-900": "49 54 64", // #313640
		
	}
}