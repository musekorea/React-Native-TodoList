//import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TouchableHighlight,
} from "react-native";
import { app_color } from "./theme.js";

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableHighlight
					onPress={() => {
						console.log("clicked");
					}}
					underlayColor="red"
					activeOpacity={0.5}
				>
					<Text style={styles.header_title}>To Do</Text>
				</TouchableHighlight>
				<TouchableOpacity style={styles.header_title}>
					<Text style={styles.header_title}>To Buy</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: app_color.background,
		alignItems: "center",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
		padding: "10px",
	},
	header_title: {
		fontSize: "40px",
		fontWeight: 600,
		color: app_color.fontDefaultColor,
	},
});
