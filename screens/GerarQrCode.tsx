import QRCode from 'react-native-qrcode-svg'
import * as Animatable from 'react-native-animatable'
import Loading from '../helpers/Loading.js'


export default function({ navigation }){

    return(
        <Animatable.View>
            <QRCode
                value='teste'
                size={200}
            />
            
        </Animatable.View>
    )
}