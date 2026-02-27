const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
  
  import type { Config } from "tailwindcss";
  
  const config: Config = {
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class", "class"],
  
	theme: {
	  extend: {
		animation: {
		  fadeIn: "fadeIn 1s ease-in-out",
		  fadeOut: "fadeOut 1s ease-in-out",
		  slideInUp: "slideInUp 1s ease-in-out",
		  slideInDown: "slideInDown 1s ease-in-out",
		  slideInLeft: "slideInLeft 1s ease-in-out",
		  slideInRight: "slideInRight 1s ease-in-out",
		  spotlight: "spotlight 2s ease .75s 1 forwards",
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		},
		keyframes: {
		  spotlight: {
			"0%": {
			  opacity: "0",
			  transform: "translate(-72%, -62%) scale(0.5)",
			},
			"100%": {
			  opacity: "1",
			  transform: "translate(-50%,-40%) scale(1)",
			},
		  },
  
		  fadeIn: {
			"0%": { opacity: "0" },
			"100%": { opacity: "1" },
		  },
		  fadeOut: {
			"0%": { opacity: "1" },
			"100%": { opacity: "0" },
		  },
		  slideInUp: {
			"0%": { transform: "translateY(100%)", opacity: "0" },
			"100%": { transform: "translateY(0)", opacity: "1" },
		  },
		  slideInDown: {
			"0%": { transform: "translateY(-100%)", opacity: "0" },
			"100%": { transform: "translateY(0)", opacity: "1" },
		  },
		  slideInLeft: {
			"0%": { transform: "translateX(-100%)", opacity: "0" },
			"100%": { transform: "translateX(0)", opacity: "1" },
		  },
		  slideInRight: {
			"0%": { transform: "translateX(100%)", opacity: "0" },
			"100%": { transform: "translateX(0)", opacity: "1" },
		  },
  
		  "accordion-down": {
			from: {
			  height: "0",
			},
			to: {
			  height: "var(--radix-accordion-content-height)",
			},
		  },
		  "accordion-up": {
			from: {
			  height: "var(--radix-accordion-content-height)",
			},
			to: {
			  height: "0",
			},
		  },
		},
		fontFamily: {
		  satoshi: ["Satoshi", "sans-serif"],
		  inter: ["Inter", "sans-serif"],
		},
		backgroundImage: {
		  "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
		  "gradient-conic":
			"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		colors: {
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  chart: {
			"1": "hsl(var(--chart-1))",
			"2": "hsl(var(--chart-2))",
			"3": "hsl(var(--chart-3))",
			"4": "hsl(var(--chart-4))",
			"5": "hsl(var(--chart-5))",
		  },
		  sidebar: {
			DEFAULT: "hsl(var(--sidebar-background))",
			foreground: "hsl(var(--sidebar-foreground))",
			primary: "hsl(var(--sidebar-primary))",
			"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
			accent: "hsl(var(--sidebar-accent))",
			"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
			border: "hsl(var(--sidebar-border))",
			ring: "hsl(var(--sidebar-ring))",
		  },
		},
	  },
	},
	plugins: [addVariablesForColors, require("tailwindcss-animate")],
  };
  // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
  function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
  
	addBase({
	  ":root": newVars,
	});
  }
  export default config;
  