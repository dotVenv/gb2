/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

/** @type {import('next').NextConfig} */
const nextConfig = {transpilePackages: ['three'],};
const withTM = require('next-transpile-modules')(['three'])

module.exports = {
  withTM,
  content: [
    "./gb2/gb/static/gb/static/**/*.{js,mdx,html}",
    "./gb2/gb_app/static/gb_app/static/**.{js,mdx,html}",
    "./node_modules/@nextui-org/theme/dist/**.{js,ts,jsx,tsx}",
    
  ],
  darkMode: ["class", "class"],
  theme: {
  	extend: {
  		border: 'hsl(var(--border))',
  		input: 'hsl(var(--input))',
  		ring: 'hsl(var(--ring))',
  		background: 'hsl(var(--background))',
  		foreground: 'hsl(var(--foreground))',
  		primary: {
  			DEFAULT: 'hsl(var(--primary))',
  			foreground: 'hsl(var(--primary-foreground))'
  		},
  		secondary: {
  			DEFAULT: 'hsl(var(--secondary))',
  			foreground: 'hsl(var(--secondary-foreground))'
  		},
  		destructive: {
  			DEFAULT: 'hsl(var(--destructive))',
  			foreground: 'hsl(var(--destructive-foreground))'
  		},
  		muted: {
  			DEFAULT: 'hsl(var(--muted))',
  			foreground: 'hsl(var(--muted-foreground))'
  		},
  		accent: {
  			DEFAULT: 'hsl(var(--accent))',
  			foreground: 'hsl(var(--accent-foreground))'
  		},
  		popover: {
  			DEFAULT: 'hsl(var(--popover))',
  			foreground: 'hsl(var(--popover-foreground))'
  		},
  		card: {
  			DEFAULT: 'hsl(var(--card))',
  			foreground: 'hsl(var(--card-foreground))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			white: '#FFFFFF',
  			black: '#000000',
  			blue: {
  				'50': '#e6f1fe',
  				'100': '#cce3fd',
  				'200': '#99c7fb',
  				'300': '#66aaf9',
  				'400': '#338ef7',
  				'500': '#006FEE',
  				'600': '#005bc4',
  				'700': '#004493',
  				'800': '#002e62',
  				'900': '#001731'
  			},
  			zinc: {
  				'400': '#A1A1AA',
  				'500': '#71717A',
  				'600': '#52525B',
  				'900': '#18181B'
  			},
  			purple: {
  				'800': '#301050',
  				'900': '#180828'
  			},
  			'color-1': 'hsl(var(--color-1))',
  			'color-2': 'hsl(var(--color-2))',
  			'color-3': 'hsl(var(--color-3))',
  			'color-4': 'hsl(var(--color-4))',
  			'color-5': 'hsl(var(--color-5))'
  		},
  		animation: {
  			shine: 'shine var(--duration) infinite linear'
  		},
  		keyframes: {
  			shine: {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			},
  			'aurora-border': {
  				'0%, 100%': {
  					borderRadius: '37% 29% 27% 27% / 28% 25% 41% 37%'
  				},
  				'25%': {
  					borderRadius: '47% 29% 39% 49% / 61% 19% 66% 26%'
  				},
  				'50%': {
  					borderRadius: '57% 23% 47% 72% / 63% 17% 66% 33%'
  				},
  				'75%': {
  					borderRadius: '28% 49% 29% 100% / 93% 20% 64% 25%'
  				}
  			},
  			'aurora-1': {
  				'0%, 100%': {
  					top: '0',
  					right: '0'
  				},
  				'50%': {
  					top: '50%',
  					right: '25%'
  				},
  				'75%': {
  					top: '25%',
  					right: '50%'
  				}
  			},
  			'aurora-2': {
  				'0%, 100%': {
  					top: '0',
  					left: '0'
  				},
  				'60%': {
  					top: '75%',
  					left: '25%'
  				},
  				'85%': {
  					top: '50%',
  					left: '50%'
  				}
  			},
  			'aurora-3': {
  				'0%, 100%': {
  					bottom: '0',
  					left: '0'
  				},
  				'40%': {
  					bottom: '50%',
  					left: '25%'
  				},
  				'65%': {
  					bottom: '25%',
  					left: '50%'
  				}
  			},
  			'aurora-4': {
  				'0%, 100%': {
  					bottom: '0',
  					right: '0'
  				},
  				'50%': {
  					bottom: '25%',
  					right: '40%'
  				},
  				'90%': {
  					bottom: '50%',
  					right: '25%'
  				}
  			}
  		}
  	}
  },
  animation: {
    orbit: "orbit calc(var(--duration)*1s) linear infinite",
    "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
    ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
    grid: "grid 15s linear infinite",
  },
  keyframes: {
    orbit: {
      "0%": {
        transform:
          "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
      },
      "100%": {
        transform:
          "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
      },
    },
    "border-beam": {
      "100%": {
        "offset-distance": "100%",
      },
    },
    ripple: {
      "0%, 100%": {
        transform: "translate(-50%, -50%) scale(1)",
      },
      "50%": {
        transform: "translate(-50%, -50%) scale(0.9)",
      },

    },
    "accordion-down": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0" },
    },
    "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
    grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
  },
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: "#66AAF9",
            foreground: "#0000",
          },
          focus: "#66AAF9",
        },
      },},
    addCommonColors: true,
    layout: {
      radius: {
        small: "2px", // rounded-small
        medium: "4px", // rounded-medium
        large: "6px", // rounded-large
      },
      borderWidth: {
        small: "1px", // border-small
        medium: "1px", // border-medium
        large: "2px", // border-large
      },
    },
  }),],
};
