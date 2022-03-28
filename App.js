//import { StatusBar } from "expo-status-bar";
import { useState, useRef, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TouchableHighlight,
	TextInput,
	ScrollView,
	Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome5 } from "@expo/vector-icons";
import { app_color, styles } from "./theme.js";

export default function App() {
	const [headerTitle, setHeaderTitle] = useState("todo");
	const [textValue, setTextValue] = useState("");
	const [todos, setTodos] = useState({});
	const inputRef = useRef();

	const saveTodos = async (newTodos) => {
		try {
			const jsonTodos = JSON.stringify(newTodos);
			await AsyncStorage.setItem("@todos", jsonTodos);
		} catch (error) {
			console.log(error);
		}
	};

	const loadHeader = async () => {
		try {
			const header = await AsyncStorage.getItem("@header");
			if (!header) {
				setHeaderTitle("todo");
			} else {
				setHeaderTitle(header);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const loadTodos = async () => {
		try {
			const storageDatas = await AsyncStorage.getItem("@todos");
			if (!storageDatas) {
				setTodos({});
				return;
			}
			const jsonTodos = JSON.parse(storageDatas);
			setTodos(jsonTodos);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		loadTodos();
		loadHeader();
	}, []);

	const headerTodo = (e) => {
		setHeaderTitle("todo");
		saveHeader("todo");
	};
	const headerTobuy = (e) => {
		setHeaderTitle("tobuy");
		saveHeader("tobuy");
	};
	const saveHeader = async (header) => {
		await AsyncStorage.setItem("@header", header);
	};

	const onChangeText = (payload) => {
		setTextValue(payload);
	};
	const addTodo = async () => {
		if (textValue === "") {
			return;
		}
		const newTodos = Object.assign({}, todos, {
			[Date.now()]: { text: textValue, part: headerTitle, done: false },
		});
		setTodos(newTodos);
		inputRef.current.clear();
		await saveTodos(newTodos);
		setTextValue("");
	};
	const deleteTodo = (key) => {
		Alert.alert("Delete Todo!!", "Are you sure?", [
			{
				text: "Cancel",
				onPress: () => {
					return;
				},
			},
			{
				text: "Delete",
				onPress: async () => {
					const copiedTodos = { ...todos };
					delete copiedTodos[key];
					setTodos(copiedTodos);
					await saveTodos(copiedTodos);
				},
			},
		]);
	};
	const doneTodo = (id) => {
		const copiedTodos = { ...todos };
		Object.keys(copiedTodos).map(async (key) => {
			try {
				if (key === id) {
					copiedTodos[id].done = !copiedTodos[id].done;
					setTodos(copiedTodos);
					await saveTodos(copiedTodos);
				}
			} catch (error) {
				console.log(error);
			}
		});
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
			<TextInput
				style={styles.input}
				placeholder={headerTitle === "todo" ? "Add a Todo" : "Add a Item"}
				onChangeText={onChangeText}
				onSubmitEditing={addTodo}
				ref={inputRef}
			></TextInput>
			<ScrollView style={styles.todoWrapper}>
				{Object.keys(todos).map((key) =>
					todos[key].part === headerTitle ? (
						<View key={key} style={styles.todoBox}>
							<Text
								style={[
									styles.todoText,
									{
										textDecorationLine:
											todos[key].done === true ? "line-through" : "none",
									},
								]}
							>
								{todos[key].text}
							</Text>
							<View style={styles.buttonsBox}>
								<TouchableOpacity onPress={() => deleteTodo(key)}>
									<FontAwesome5
										style={styles.trash}
										name="trash-alt"
										size={24}
										color="black"
									/>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => doneTodo(key)}>
									<FontAwesome5
										style={styles.check}
										name="check"
										size={24}
										color="black"
									/>
								</TouchableOpacity>
							</View>
						</View>
					) : null
				)}
			</ScrollView>
		</View>
	);
}
