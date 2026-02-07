import React,{useState} from 'react'
import { IconInfoCourseContainer, SpanInfoModalidad  } from '../formation-description.styles';
import {BsCardChecklist,BsArrowBarDown,BsArrowBarUp,BsPersonLinesFill} from 'react-icons/bs';
import {MdOutlineImportantDevices} from 'react-icons/md'
import {VscRemoteExplorer} from 'react-icons/vsc'
import {HiBriefcase,HiOutlineDesktopComputer} from 'react-icons/hi'
import {SiGoogleclassroom} from 'react-icons/si';
import {IoMdContacts,IoMdPaper} from 'react-icons/io'
import {FaPeopleArrows} from 'react-icons/fa'

const FormationContentBox = ({item}) => {

    const [itemsViewMore, setItemsViewMore] = useState(false);

    const handleClickViewMore = ()=>{
        console.log(itemsViewMore)
        setItemsViewMore(!itemsViewMore);
        console.log(itemsViewMore)
      }
    const iconSize = '75px';
    const iconColor = 'var(--green)';

    const Icons = {
        0:<MdOutlineImportantDevices size={iconSize} color={iconColor}/>,
        1:<BsPersonLinesFill size={iconSize} color={iconColor}/>,
        2:<VscRemoteExplorer size={iconSize} color={iconColor}/>,
        3:<SiGoogleclassroom size={iconSize} color={iconColor}/>,
        4:<HiBriefcase size={iconSize} color={iconColor}/>,
        5:<FaPeopleArrows size={iconSize} color={iconColor}/>,
        6:<IoMdContacts size={iconSize} color={iconColor}/>,
        7:<IoMdPaper size={iconSize} color={iconColor}/>,
        8:<HiOutlineDesktopComputer size={iconSize} color={iconColor}/> 
    }
    

    console.log(Icons[item.key])
  return (
    <SpanInfoModalidad itemVisible={itemsViewMore} isItemLarge={item.description.length>100}>
        
        <strong> 
            <IconInfoCourseContainer>
                {Icons[item.key]}
            </IconInfoCourseContainer>
            <h4>{item.title}</h4>
        </strong>
{/*         <p> {item.description} 
        {item.key == 8 ? <a href=' http://biblio.traductores.org.ar/documentos/07428.pdf'>Ver más...</a>: ''}
        </p>  */}
        
  {/*       {item.description.length>100 ? 
            itemsViewMore?
            <BsArrowBarUp  style={{'cursor':'pointer'}} onClick={handleClickViewMore} size={'30px'}/>
            :
            <BsArrowBarDown style={{'cursor':'pointer'}} onClick={handleClickViewMore} size={'60px'}/>
            :''
            } */}
        
    </SpanInfoModalidad>
  )
}

export default FormationContentBox



