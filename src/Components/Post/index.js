import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib';
import { BsEmojiSmile } from 'react-icons/bs';

export function Post(props){
    return (
        
        <>
            <header className="header-post">
                <div className="infos-post">
                    <img className="img-header-post" src={props.perfil} />

                    <p>{props.nome}</p>
                    <FiMoreHorizontal className="tres-pontos"/>

                </div>
            </header>
            <div className="img-post">
                <img src={props.img} />
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{size: '30px'}}>
                    <section className="engagement-post">  
                        <div className="icons-1">
                           <div className="icon"> <IoMdHeartEmpty/> </div>
                          <div className="icon"> <BsChat/> </div>
                         <div className="icon" ><FiSend/> </div>
                        
                        </div>

                     <div className="icon">   <BsBookmark /> </div>
                               
                             
                    </section>
                </IconContext.Provider>

                <section className="like">
                    <span>{props.curtidas}</span>
                </section>

                <div className="legend">
                    <p>
                        <span>{props.nome}</span> {props.descrição}
                    </p>

                </div>
                <div className="time-post">
                    <time>HÁ 1 HORA</time>
                </div>

                <div className="comment">
                    <div className="fake-comment">
                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile/>
                            </div>
                            
                        </IconContext.Provider>

                        <input type="text" placeholder='Adicione um comentario...'/>

                       
                     
                    </div>

                    <button>Publicar</button>
                </div>
                
            </div>
            
            
        </>

        

    )
}