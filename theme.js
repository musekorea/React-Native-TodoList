import { StyleSheet } from "react-native";

export const app_color = {
	background: "black",
	deactivate: "#3a3d40", //Gray
	fontDefaultColor: "white",
};

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: app_color.background,
		alignItems: "center",
		marginTop: 25,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
		padding: 10,
	},
	header_title: {
		fontSize: 40,
		fontWeight: "600",
		color: "red",
	},
	input: {
		backgroundColor: "white",
		width: "80%",
		padding: 10,
		borderRadius: 20,
		marginTop: 10,
		fontSize: 18,
	},
	todoWrapper: { width: "100%" },
	todoBox: {},
	todoText: {
		color: "white",
		fontSize: 18,
		textDecorationLine: "line-through",
	},
	buttonsBox: {
		flexDirection: "row",
	},
	check: {
		marginHorizontal: 10,
	},
	todoNoEdit: {
		width: "80%",
		backgroundColor: "gray",
		marginTop: 20,
		padding: 10,
		borderRadius: 20,
		marginLeft: "10%",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 15,
	},
	todoEdit: {
		width: "80%",
		backgroundColor: "white",
		marginTop: 20,
		padding: 10,
		borderRadius: 20,
		marginLeft: "10%",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 15,
	},
	editInput: {
		width: "80%",
	},
	editButtons: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "20%",
	},
});
export default styles;
