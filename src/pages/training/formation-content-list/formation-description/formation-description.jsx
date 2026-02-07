import React, {useState,useEffect,useRef} from 'react';
import {  FormationDescriptionContainer, 
          ContentOverviewContainer,
          LeftSide, 
          HeadTitleCourse, 
          ContentInformationContainer, 
          SpanInfoCourse, 
          IconInfoCourseContainer, 
          ExtraInfoContent, 
          ExtraInfoTitle,  
          ArticulatedCoursesList,
          TeachersListCourse,
          SpanExtraInfo} from './formation-description.styles';
import {BsCardChecklist, BsFillBookmarkCheckFill} from 'react-icons/bs';
import {FaUserEdit,FaPeopleArrows} from 'react-icons/fa';
import {IoPeopleCircle} from 'react-icons/io5';
import {SiGoogleclassroom} from 'react-icons/si';
import {MdAccountTree} from 'react-icons/md';
import {RiTeamFill} from 'react-icons/ri';
import {AiOutlineCheckCircle} from 'react-icons/ai'

import useOnScreen from '../../../../hooks/intersectionObserver';


const iconSize = '75px';
const iconColor = 'var(--green)';
const FormationDescription = ({handleItemClick,formationItem}) => {
  
  const [itemsActiveArticulated, setItemsActiveArticulated] = useState(false);
  const [itemsActiveTeachers, setItemsActiveTeachers] = useState(false);

  const ref = useRef();
  const onScreen = useOnScreen(ref,"300px")

  const setBothExtraItems= (b)=>{
    setItemsActiveArticulated(b) 
    setItemsActiveTeachers(b)
  }


  useEffect(()=>{
    onScreen ? setBothExtraItems(true)
                : console.log('i');

  }, [onScreen]);

  const handleItemActive = (item) =>{
    if (item ==='articlulated') setItemsActiveArticulated(!itemsActiveArticulated);
    else if (item ==='teachers') setItemsActiveTeachers(!itemsActiveTeachers);
  }

  const handleArticulatedItemsClick = (key)=>{
    window.scrollTo(0,300);
    handleItemClick(key);
  }


  return (
        <FormationDescriptionContainer itemID='HeadTitleCourse'>
            <HeadTitleCourse>
              <span>Curso {formationItem.modalidad}</span>
              <h1>{formationItem.title}</h1>
            </HeadTitleCourse>
            <ContentOverviewContainer>
              <LeftSide>
                <span><strong><h4>Duración: </h4></strong><p>{formationItem.duracion}</p></span>
                <span><strong><h4>Módulos temáticos: </h4>      </strong><p>{formationItem.modulosTematicos}</p></span>
                <span><strong><h4>Periodicidad: </h4>   </strong><p>Semanalmente {formationItem.periodicidadSemanal}</p></span>
              </LeftSide>
              <img src='../../miniLogo1.png' alt="Logo Excelti" />
            </ContentOverviewContainer>
            <ContentInformationContainer>

              <SpanInfoCourse><strong>
                  <IconInfoCourseContainer><BsCardChecklist size={iconSize} color={iconColor}/></IconInfoCourseContainer>
                  <h4>Requisitos:</h4>              </strong><p> {formationItem.requirements}</p>                                     </SpanInfoCourse>
              <SpanInfoCourse><strong>
                <IconInfoCourseContainer><FaUserEdit size={iconSize} color={iconColor}/></IconInfoCourseContainer>
                <h4>Admisión: </h4>               </strong><p>{formationItem.admision}</p>                                          </SpanInfoCourse>
              <SpanInfoCourse><strong>
                <IconInfoCourseContainer><IoPeopleCircle size={iconSize} color={iconColor}/></IconInfoCourseContainer>
                <h4>Entrevistas: </h4>            </strong><p>{formationItem.entrevistas}</p>                                       </SpanInfoCourse>
              
              <SpanInfoCourse><strong>  
                <IconInfoCourseContainer><AiOutlineCheckCircle size={iconSize} color={iconColor}/></IconInfoCourseContainer>  
                <h4>Objetivos: </h4>              </strong><p>{formationItem.objetivos}</p>                                         </SpanInfoCourse>
              <SpanInfoCourse><strong>
              <IconInfoCourseContainer><SiGoogleclassroom size={iconSize} color={iconColor}/></IconInfoCourseContainer>  
                <h4>Clase: </h4>                  </strong><p>{formationItem.clase}</p>                                             </SpanInfoCourse>
              <SpanInfoCourse><strong>
                <IconInfoCourseContainer><FaPeopleArrows size={iconSize} fill={iconColor} stroke={iconColor} /></IconInfoCourseContainer>  
                <h4>Tutorías: </h4>               </strong><p>{formationItem.tutoria}</p>                                           </SpanInfoCourse>
              <SpanInfoCourse><strong>
                <IconInfoCourseContainer><BsFillBookmarkCheckFill size={iconSize} fill={iconColor} stroke={iconColor} /></IconInfoCourseContainer>  
                <h4>Evaluación final</h4>               </strong><p style={{"text-align":"center"}}>{formationItem.evaluacion}</p>                                           </SpanInfoCourse>
              
              <ExtraInfoContent>
                
                {formationItem.cursosArticulados.length ? <SpanExtraInfo >
                    <ExtraInfoTitle ref={ref} onClick={() => handleItemActive('articlulated')}>
                        <MdAccountTree size={iconSize} fill={iconColor} stroke={iconColor} /><h4>Cursos articulados </h4>     
                    </ExtraInfoTitle>
                    <ArticulatedCoursesList itemActive={itemsActiveArticulated}> 
                        {formationItem.resumen}: {formationItem.cursosArticulados.map((curso)=><li key={curso.key} onClick={()=>handleArticulatedItemsClick(curso.key) }> <h5>{curso.name}</h5></li>)}
                    </ArticulatedCoursesList>
                </SpanExtraInfo>:''}
                {/* <span><ExtraInfoTitle><MdAccountTree size={iconSize} fill={iconColor} stroke={iconColor} /><h4>Información pedagógica: </h4> </ExtraInfoTitle><p>{formationItem.infoPedagogica}</p>                                    </span> */}
                <SpanExtraInfo >
                  <ExtraInfoTitle onClick={() => handleItemActive('teachers')}>
                    <RiTeamFill size={iconSize} fill={iconColor} stroke={iconColor} /><h4>Profesores del curso: </h4>             
                  </ExtraInfoTitle>

                  <TeachersListCourse itemActive = {itemsActiveTeachers}>
                    {formationItem.profesores.map((profesor,i)=> <li key={i }>{profesor}</li>) } 
                  </TeachersListCourse>

                </SpanExtraInfo>
              </ExtraInfoContent>
              

            </ContentInformationContainer>

        </FormationDescriptionContainer>
        )
}

export default FormationDescription