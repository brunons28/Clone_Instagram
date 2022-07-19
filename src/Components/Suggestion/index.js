import { useState, useEffect } from 'react'
import './style.css';

export function Suggestion(props) {



    return (
        <div className="container-suggestion">
            <div className="header-suggestion">
                <img src={`https://avatars.githubusercontent.com/u/73445411?s=96&v=4`} />

                <div className="user-infos-suggestion">

                    <div className="infos">
                        <span>bruno.nnogueira</span>
                        <p>Bruno Nogueira</p>
                    </div>
                
                    <button className="switch">Mudar</button>                  

                </div>               
            </div>

            <div className="header-main-suggestion">
                        <p>Sugestões para você</p>

                        <span>Ver tudo </span>
            </div>

            <div className="user-suggestion">
            <div className="infos-suggestion" >
                            <img src={`https://github.com/gabrieldiasss.png`} />

                        <div className="info-suggestion">
                             <span>rrtSóAgradece</span>
                             <p>Seguido por gicampus</p>                                
                       
                        </div>
                    
                        <button className="follow">Seguir</button>

                   </div>
                    
            </div>

            <div className="user-suggestion">
            <div className="infos-suggestion" >
                            <img src={`https://github.com/gabrieldiasss.png`} />

                        <div className="info-suggestion">
                             <span>visaomonstrafc</span>
                             <p>Seguido por motivacaofc</p>                                
                       
                        </div>
                    
                        <button className="follow">Seguir</button>

                   </div>
                    
            </div>

            <div className="user-suggestion">
            <div className="infos-suggestion" >
                            <img src={`https://github.com/gabrieldiasss.png`} />

                        <div className="info-suggestion">
                             <span>alex_roberto18</span>
                             <p>Seguido por rogerioLopes</p>                                
                       
                        </div>
                    
                        <button className="follow">Seguir</button>

                   </div>
                    
            </div>

            <div className="user-suggestion">
            <div className="infos-suggestion" >
                            <img src={`https://github.com/gabrieldiasss.png`} />

                        <div className="info-suggestion">
                             <span>lionel_messi</span>
                             <p>Seguido por cr7Ronaldo</p>                                
                       
                        </div>
                    
                        <button className="follow">Seguir</button>

                   </div>
                    
            </div>

            <div className="user-suggestion">
            <div className="infos-suggestion" >
                            <img src={`https://github.com/gabrieldiasss.png`} />

                        <div className="info-suggestion">
                             <span>lucasalmeida</span>
                             <p>Seguido por filipedechamps</p>                                
                       
                        </div>
                    
                        <button className="follow">Seguir</button>

                   </div>
                    
            </div>


            <footer className="footer-suggestion">
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; Idiomas</p>

                <p>&copy; 2022 INSTAGRAM FROM META</p>
            </footer>
        </div>
    )
}
