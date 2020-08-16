import { theme as ChakraTheme, DefaultTheme } from "@chakra-ui/core";
import icons from "./ui-elements/icons";

export interface Theme extends DefaultTheme {
	borders: any;
	shadows: any;
	radii: any;
	colors: any;
	borderWidths: any;
	borderRadius: any;
}

const theme: Theme = {
	...ChakraTheme,
	borders: {
		...ChakraTheme.borders,
		none: "none",
		normal: "1px solid",
	},
	borderWidths: {
		xl: "2rem",
		lg: "1rem",
		md: "0.5rem",
		sm: "0.25rem",
		xs: "0.125rem",
		"2xs": "0.0625rem",
		"3xs": "0.03125rem",
		none: 0,
	},
	icons: {
		...ChakraTheme.icons,
		...icons,
	},
	fonts: {
		...ChakraTheme.fonts,
		heading: "Larsseit, Helvetica Neue, Open Sans, sans-serif",
		body: "Inter, Helvetica Neue, Open Sans, sans-serif",
	},
	shadows: {
		...ChakraTheme.shadows,
		subtle: "rgba(0, 0, 0, 0.12) 0px 12px 12px",
		around:
			"rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.08) 0px 3px 6px",
	},
	radii: {
		...ChakraTheme.radii,
		xl: "1rem",
		noLeftRadius: `0 4px 4px 0`,
		noRightRadius: `4px 0 0 4px`,
		noTopRadius: `0 0 4px 4px`,
		noBottomRadius: `4px 4px 0 0`,
	},
	colors: {
		...ChakraTheme.colors,
		blue: {
			50: "#E7EFFC",
			100: "#B9D0F7",
			200: "#8BB1F3",
			300: "#5C92EE",
			400: "#2E73E9",
			500: "#0054E5",
			600: "#0045BC",
			700: "#003692",
			800: "#002769",
			900: "#00173F",
		},
		teal: {
			50: "#E7F3F7",
			100: "#B9DB37",
			200: "#8BC3D7",
			300: "#5CABC7",
			400: "#2E93B7",
			500: "#007BA7",
			600: "#006589",
			700: "#004F6B",
			800: "#00384C",
			900: "#00222E",
		},
		coral: {
			50: "#FFF3EF",
			100: "#FFDCCF",
			200: "#FFC4AF",
			300: "#FFAD8F",
			400: "#FF966F",
			500: "#FF7F50",
			600: "#D16842",
			700: "#A35133",
			800: "#743A25",
			900: "#462316",
		},
		brown: {
			50: "#F6EBEB",
			100: "#E6C4C4",
			200: "#D69E9E",
			300: "#C57777",
			400: "#5BB050",
			500: "#A52A2A",
			600: "#882323",
			700: "#6A1B1B",
			800: "#4B1414",
			900: "#2D0C0C",
		},
		green: {
			50: "#EDF8F4",
			100: "#CAEADE",
			200: "#A6DDC8",
			300: "#83CFB2",
			400: "#60C29C",
			500: "#3DB586",
			600: "#32956E",
			700: "#277456",
			800: "#1C533D",
			900: "#113225",
		},
		red: {
			50: "#FCEFEC",
			100: "#F6D0C8",
			200: "#F1B2A3",
			300: "#EB937F",
			400: "#E6745A",
			500: "#E15636",
			600: "#B9472D",
			700: "#903723",
			800: "#672819",
			900: "#3E180F",
		},
		crimson: {
			50: "#FDE9ED",
			100: "#FABECA",
			200: "#F694A6",
			300: "#F36983",
			400: "#F03E60",
			500: "#ED143D",
			600: "#C21132",
			700: "#970D27",
			800: "#6C0A1C",
			900: "#410611",
		},
		purple: {
			50: "#F2E8FF",
			100: "#D9BCFF",
			200: "#BF8FFF",
			300: "#A663FF",
			400: "#8D36FF",
			500: "#740AFF",
			600: "#5F09D1",
			700: "#4A07A3",
			800: "#350574",
			900: "#200346",
		},
		magenta: {
			50: "#F3EBF2",
			100: "#DCC3D8",
			200: "#C69BBE",
			300: "#AF73A4",
			400: "#984B8A",
			500: "#822470",
			600: "#6B1E5C",
			700: "#531748",
			800: "#3C1133",
			900: "#240A1F",
		},
		orange: {
			50: "#FCF0E8",
			100: "#F7D3BB",
			200: "#F3B78F",
			300: "#EE9A62",
			400: "#E97D35",
			500: "#E56109",
			600: "#BC5008",
			700: "#923E06",
			800: "#692D05",
			900: "#3F1B03",
		},
		yellow: {
			50: "#FEFCE7",
			100: "#FDF6B9",
			200: "#FCF18B",
			300: "#FBEB5C",
			400: "#FAE62E",
			500: "#FAE100",
			600: "#CDB900",
			700: "#A09000",
			800: "#726700",
			900: "#453E00",
		},
		gold: {
			50: "#FFF8E7",
			100: "#FFEBB9",
			200: "#FFDD8B",
			300: "#FFD05C",
			400: "#FFC32E",
			500: "#FFB600",
			600: "#D19500",
			700: "#A37400",
			800: "#745300",
			900: "#463200",
		},
		gray: {
			50: "#F7FAFC",
			100: "#EDF2F7",
			200: "#E3E7ED",
			300: "#BABEC2",
			400: "#A0AEC0",
			500: "#718096",
			600: "#4A5568",
			700: "#2D3748",
			800: "#1A202C",
			900: "#171923",
		},
		gray2: {
			50: "#EBECED",
			100: "#EDEFF3",
			200: "#E3E7ED",
			300: "#747A83",
			400: "#4C5460",
			500: "#252E3D",
			600: "#1F2632",
			700: "#181E27",
			800: "#11151C",
			900: "#0B0D11",
		},
		neutral: {
			50: "#FCFCFD",
			100: "#F7F8FA",
			200: "#F2F4F6",
			300: "#EDEFF3",
			400: "#E8EBF0",
			500: "#E3E7ED",
			600: "#BABEC2",
			700: "#919397",
			800: "#68696C",
			900: "#3E3F41",
		},
	},
	borderRadius: {
		none: 0,
		small: 2,
		regular: 4,
		big: 8,
		bigger: 16,
		biggest: 24,
		round: 9999,
	},
};

export default theme;
