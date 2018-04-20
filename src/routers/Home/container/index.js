import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import store from '../store'
import Context from '../components/Context'
import Props from '../components/Props'
import HeaderLeft from '../components/HeaderLeft'
import {observer} from 'mobx-react'

const home = require('../../../assets/home.png')
const home_active = require('../../../assets/home_active.png')

@observer
export default class Home extends Component<{}> {
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitleStyle: {
            fontSize: 30,
            color: 'black'
        },
        headerStyle: {
            backgroundColor: 'white',
            // borderBottomWidth:0
        },
        headerLeft:(
            <HeaderLeft />
        ),
        tabBarIcon: (({tintColor, focused}) => {
            return (
                <Image
                    source={!focused ? home : home_active}
                    style={[{height: 20, width: 20}, {resizeMode: 'stretch'}]}
                />
            )
        }),
        tabBarLabel: '主页',
        gesturesEnabled: true,
    })
    render() {
        const {homeStore, changeText, completedHomeStore} = store
        const propStore = {
            homeStore,
            completedHomeStore,
            changeHomeStore(a) {
                changeText(a)
            }
        }
        return (
            <View style={styles.container}>
                <Context></Context>
                <Props {...propStore}></Props>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Text style={styles.bottom} onPress={() => {this.props.navigation.navigate('Mine')}}>
                        点我跳转到Mine
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    bottom: {
        marginBottom: 30
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})