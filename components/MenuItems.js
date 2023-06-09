import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, Pressable } from 'react-native';

const menuItemsToDisplay = [
	{
		title: 'Appetizers',
		data: [
			{ name: 'Hummus', price: '$5.00', id: '1A' },
			{ name: 'Moutabal', price: '$5.00', id: '2B' },
			{ name: 'Falafel', price: '$7.50', id: '3C' },
			{ name: 'Marinated Olives', price: '$5.00', id: '4D' },
			{ name: 'Kofta', price: '$5.00', id: '5E' },
			{ name: 'Eggplant Salad', price: '$8.50', id: '6F' },
		],
	},
	{
		title: 'Main Dishes',
		data: [
			{ name: 'Lentil Burger', price: '$10.00', id: '7G' },
			{ name: 'Smoked Salmon', price: '$14.00', id: '8H' },
			{ name: 'Kofta Burger', price: '$11.00', id: '9I' },
			{ name: 'Turkish Kebab', price: '$15.50', id: '10J' },
		],
	},
	{
		title: 'Sides',
		data: [
			{ name: 'Fries', price: '$3.00', id: '11K' },
			{ name: 'Buttered Rice', price: '$3.00', id: '12L' },
			{ name: 'Bread Sticks', price: '$3.00', id: '13M' },
			{ name: 'Pita Pocket', price: '$3.00', id: '14N' },
			{ name: 'Lentil Soup', price: '$3.75', id: '15O' },
			{ name: 'Greek Salad', price: '$6.00', id: '16Q' },
			{ name: 'Rice Pilaf', price: '$4.00', id: '17R' },
		],
	},
	{
		title: 'Desserts',
		data: [
			{ name: 'Baklava', price: '$3.00', id: '18S' },
			{ name: 'Tartufo', price: '$3.00', id: '19T' },
			{ name: 'Tiramisu', price: '$5.00', id: '20U' },
			{ name: 'Panna Cotta', price: '$5.00', id: '21V' },
		],
	},
];

const Separator = () => <View style={menuStyles.separator} />;

const Item = ({ name, price }) => (
	<View style={menuStyles.innerContainer}>
		<Text style={menuStyles.itemText}>
			{name}
		</Text>
		<Text style={menuStyles.itemPrice}>
			{price}
		</Text>

	</View>
);


const MenuItems = () => {
	const [showMenu, setShowMenu] = useState(false);
	const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

	const renderSectionHeader = ({ section: { title } }) => (
		<Text style={menuStyles.headerText}>{title}</Text>
	)

	return (
		<>
			<Pressable
				style={menuStyles.button}
				onPress={() => {
					setShowMenu(!showMenu);
				}}>
				<Text style={menuStyles.buttonText}>
					{showMenu ? 'Home' : 'View Menu'}
				</Text>
			</Pressable>
			{!showMenu && (
				<View style={menuStyles.container}>
					<Text style={menuStyles.infoText}>
						Little Lemon is a charming neighborhood bistro that serves simple food
						and classic cocktails in a lively but casual environment.
						View our menu to explore our cuisine with daily specials!
					</Text>
				</View>
			)}
			{showMenu && (
				<View style={menuStyles.container}>
					<SectionList
						sections={menuItemsToDisplay}
						keyExtractor={(item) => item.id}
						renderItem={renderItem}
						ItemSeparatorComponent={Separator}
						renderSectionHeader={renderSectionHeader}
					>
					</SectionList>
				</View>
			)}

		</>
	);
};

export default MenuItems;

const menuStyles = StyleSheet.create({
	container: {
		flex: 0.95,
	},
	innerContainer: {
		paddingHorizontal: 20,
		paddingVertical: 20,
		backgroundColor: 'black',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	headerText: {
		color: 'green',
		fontSize: 30,
		flexWrap: 'wrap',
		textAlign: 'center',
	},
	itemText: {
		color: '#F4CE14',
		fontSize: 20,
		textAlign: 'left',
	},
	itemPrice: {
		color: '#F4CE14',
		fontSize: 20,
		textAlign: 'right',
	},
	separator: {
		borderBottomWidth: 1,
		borderColor: '#EDEFEE',
	},
	button: {
		padding: 20,
		margin: 90,
		marginVertical: 8,
		backgroundColor: 'white',
		borderColor: '#EDEFEE',
		borderWidth: 2,
		borderRadius: 12,
	},
	buttonText: {
		color: '#333333',
		textAlign: 'center',
		fontSize: 24,
	},
	infoText: {
		paddingHorizontal: 20,
		paddingVertical: 90,
		color: '#F4CE14',
		fontSize: 20,
		textAlign: 'center',
	},
});

