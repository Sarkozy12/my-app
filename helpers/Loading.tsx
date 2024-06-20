import { View } from 'react-native'
import { Image } from "@rneui/themed"
import { styles } from '../components/styles'
import ImageLoding from '../assets/spinning-dots.svg'

function Loading(){
    return(
        <View style={styles.loaderContainer}>
            <Image
                source={ImageLoding}
                containerStyle={styles.loader}
            />
        </View>
    )
}

export default Loading