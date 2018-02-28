import { Navigation } from 'react-native-navigation';

// import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: "react-native-starter.FindPlaceScreen",
                label: "Find Place",
                title: "Find Place",
                navigatorButtons: {
                    leftButtons: [
                        {
                            title: "Menu",
                            id: "sideDrawerToggle"
                        }
                    ]
                }
            },
            {
                screen: "react-native-starter.SharePlaceScreen",
                label: "Share Place",
                title: "Share Place",
                navigatorButtons: {
                    leftButtons: [
                        {
                            title: "Menu",
                            id: "sideDrawerToggle"
                        }
                    ]
                }
            }
        ],
        drawer: {
            left: {
                screen: "react-native-starter.SideDrawer"
            }
        }
    });
};

export default startTabs;
