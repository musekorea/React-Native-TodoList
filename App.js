//import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TouchableHighlight,
} from "react-native";
import { app_color } from "./theme.js";

export default function App() {
	const [headerTitle, setHeaderTitle] = useState("todo");
	const headerTodo = (e) => {
		setHeaderTitle("todo");
	};
	const headerTobuy = (e) => {
		setHeaderTitle("tobuy");
	};
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableHighlight
					onPress={headerTodo}
					underlayColor="red"
					activeOpacity={0.5}
				>
					<Text
						style={[
							styles.header_title,
							{
								color:
									headerTitle === "todo"
										? app_color.fontDefaultColor
										: app_color.deactivate,
							},
						]}
					>
						To Do
					</Text>
				</TouchableHighlight>
				<TouchableOpacity onPress={headerTobuy}>
					<Text
						style={[
							styles.header_title,
							{
								color:
									headerTitle === "tobuy"
										? app_color.fontDefaultColor
										: app_color.deactivate,
							},
						]}
					>
						To Buy
					</Text>
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
		color: "red",
	},
});
