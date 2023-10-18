import { ScrollView } from 'react-native-gesture-handler';
import { Header, Icon } from '@rneui/themed';
import { View } from 'react-native';
import SideBar from "../components/menuSidebar"
import sair from "../helpers/sair"
import { styles } from '../components/styles';
import { useState } from 'react'


export default function User({navigation}) {

  const [sideBar, setSidebar] = useState(false)

    return(
      <ScrollView>
        <Header
                    backgroundColor="#ff8c00"
                    leftComponent={
                        <View>
                            <Icon 
                                name="logout" 
                                color={"#000"} 
                                size={34}
                                onPress={() => {
                                    sair(navigation)
                                }}
                            />
                        </View>
                    } 
                    centerComponent={{ text: 'Meu Perfil', style: styles.heading }}
                    rightComponent={
                        <View>
                            <Icon 
                                name="menu" 
                                color={"#000"} 
                                size={34}
                                onPress={() => {
                                    if (sideBar == false){
                                        setSidebar(true)
                                    }
                                    else
                                    {
                                        setSidebar(false)
                                    }
                                }}
                            />
                            {
                                sideBar && (
                                    <SideBar navigation={navigation} ></SideBar>
                                ) 
                            }
                        </View>
                    }
                />
      </ScrollView>
    )
}