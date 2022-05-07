import { Post } from '../Post';
import { Storys } from '../Storys';
import { Suggestion } from '../Suggestion';
import './style.css';

export function Layout(){
    return (
        <>

            <div className="MainGrid">

                <div className="first-column" style={{gridArea: "firstColumn"}}>
                    <div className="box">
                        <Storys/>
                    </div>

                    <div className="box" style={{margin: "30px 0"}}>
                        <Post nome="bruno.nnogueira" curtidas="70 curtidas" descrição="Desenvolvimento com uma nova tecnologia, o React.Js. Criação de sites com o React.Js melhora a performace do site.... " img="https://sujeitoprogramador.com/wp-content/uploads/2019/04/react.png" perfil=""/>
                    </div>  

                    <div className="box" style={{margin: "30px 0"}}>
                        <Post nome="gbrStrange" curtidas="110 curtidas" descrição="Todas as peças no estoque, garanta já a sua!!!" img= "https://cf.shopee.com.br/file/c233d31c947ff29baad3bb0fc402e3a9" perfil= "https://i.pinimg.com/236x/e4/48/b9/e448b900d19857fd52ffd62bc33fe3af--coreldraw-graffiti.jpg"/>
                    </div>          

                    <div className="box" style={{margin: "30px 0"}}>
                        <Post nome="songWave_beats" curtidas="200 curtidas" descrição="styles para beat makers" img= "https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg" perfil= "https://png.vector.me/files/images/2/3/235346/free_vector_musical_theme_of_the_trend_of_illustration_3.jpg"/>
                    </div>  

                    <div className="box" style={{margin: "30px 0"}}>
                        <Post nome="mtk_styles" curtidas="1.110 curtidas" descrição="UX e UI " img= "https://static.wixstatic.com/media/58e605_8c49b4cc93dd4db6b27238ffb61c8fd9~mv2.png/v1/fit/w_1000%2Ch_515%2Cal_c/file.png" perfil= "https://aelaschool.com/wp-content/uploads/2019/11/artigoQualadiferencaentreUXeUIDesign_01aaa69067bf7dd2a32f9fba1df84b12_2000.png"/>
                    </div>  

                    <div className="box" style={{margin: "30px 0"}}>
                        <Post nome="no_bruno23" curtidas="2.000 curtidas" descrição="Promo do Snoop Dog no WarZone" img= "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/vgd/Snoop-VGD-WZ-TOUT..jpg"/>
                    </div>  

                    <div className="box" style={{margin: "30px 0"}}>
                        <Post nome="JsMandrake" curtidas="50.000 curtidas" descrição="It's been over 20 years since this park had several skate street legends." img= "https://www.jenkemmag.com/home/wp-content/uploads/2014/01/LovePark.jpg"/>
                    </div>    

                  
                </div>   
                


                <div style={{gridArea: "secondColumn"}}>
                        <div className="suggestionBox" >
                            <Suggestion/>
                        </div>

                        

                        
                </div>
              
            </div>

        
        
        </>
    )
}