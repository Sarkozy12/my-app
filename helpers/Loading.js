import loading from '../assets/spinning-dots.svg'

import estiloLoading from './Loading.module.css'

function Loading(){
    return(
        <div className={estiloLoading.loader_container}>
            <img className={estiloLoading.loader} src={loading} alt="Loading"/>
        </div>
    )
}

export default Loading