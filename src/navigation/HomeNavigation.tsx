import React from 'react';

import { HomeTabParamList } from '@_types/NavigationProps';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JobList from '@screens/Home/JobList.screen';
import EventList from '@screens/Home/EventsList.screen';
import JobAdd from '@screens/Home/JobAdd.screen';
import { SvgXml } from 'react-native-svg';
import { I_ADD, I_CALENDAR_EVENT, I_HOME } from '@utils/IconsSet';
import { getThemeColor } from '@utils/TailwindProperties';

const BottomTab = createBottomTabNavigator<HomeTabParamList>();

const JobsListTabBarIcon = ({
	color,
	size,
	focused,
}: {
	focused: boolean;
	color: string;
	size: number;
}) => (
	<SvgXml
		className={`${focused && 'scale-150'}`}
		xml={I_HOME}
		color={color}
		width={size}
		height={size}
	/>
);

const JobAddTabBarIcon = ({
	color,
	size,
	focused,
}: {
	focused: boolean;
	color: string;
	size: number;
}) => (
	<SvgXml
		className={`${focused && 'scale-150'}`}
		xml={I_ADD}
		color={color}
		width={size}
		height={size}
	/>
);

const EventsListTabBarIcon = ({
	color,
	size,
	focused,
}: {
	focused: boolean;
	color: string;
	size: number;
}) => (
	<SvgXml
		className={`${focused && 'scale-150'}`}
		xml={I_CALENDAR_EVENT}
		color={color}
		width={size}
		height={size}
	/>
);

const HomeNavigation = () => {
	return (
		<BottomTab.Navigator
			screenOptions={{
				tabBarActiveTintColor: getThemeColor('primary'),
				tabBarStyle: {
					minHeight: '9%',
				},
				tabBarShowLabel: false,
				headerShadowVisible: false,
				headerTitleStyle: { paddingHorizontal: 5 },
			}}
		>
			<BottomTab.Screen
				name="JobList"
				component={JobList}
				options={{
					tabBarIcon: JobsListTabBarIcon,
					headerTitle: 'Job Applications List',
				}}
			/>
			<BottomTab.Screen
				name="JobAdd"
				component={JobAdd}
				options={{
					tabBarIcon: JobAddTabBarIcon,
					headerTitle: 'Add Job Application',
				}}
			/>
			<BottomTab.Screen
				name="EventsList"
				component={EventList}
				options={{
					tabBarIcon: EventsListTabBarIcon,
					headerTitle: 'Upcoming Events',
				}}
			/>
		</BottomTab.Navigator>
	);
};

export default HomeNavigation;
