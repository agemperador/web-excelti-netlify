import React,{useState, useRef} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useTranslation } from "react-i18next";
import Info from '../../components/shared/info/info';
import {CoachingList, CoachingItem, TrainingContainer,TrainingSliderContainer} from './training.styles'
import TrainingList from './training-list/training-list';
import TeamList from '../../components/shared/team-list/team-list';
import FormationContentList from './formation-content-list/formation-content-list';
import Title from '../../components/shared/title/title';
import ProfessionalSlider from '../../components/professional-slider/professional-slider';
import useProfessionals from '../../hooks/useProfessionals';
import useContent from '../../components/shared/useContent';
import TraductionSlider from '../../components/traduction-slider/traduction-sliders';
import SlideshowTraining from '../../components/shared/slide-show/slide-show-training';
import TrainingListInfograph from './training-list-2/training-list-2';
import Slideshow from '../../components/shared/slide-show/slide-show';


const Training = () => {
    const { t } = useTranslation();
    const { trainingImages } = useContent();
    const [trainingOption, setTrainingOption] = useState('curso');
    const [coachingOption, setCoachingOption] = useState('')

    const history = useHistory()
    const paragraph = () => {
        return(<div>
            {t('trainingParagraph')}
        </div>)
    };
    
    const scrollToRef = () =>  refScroll.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const refScroll = useRef();

    const handleOption = (option) =>{
        setTrainingOption(option)
    }
    
    
    const cursos = [
        // ACA VA UN FORMATO HTML YA PRE DISEÑADO PARA CADA CURSO O HACEMOS UN FORMATO GENERAL Y LO RELLENAMOS CON ESTA INFORMACIÓN
        {   title: 'Enlace',
            requirements:'Título universitario o terciario en cualquier disciplina. Nivel de lengua extranjera equivalente a la de un traductor o profesor de inglés. Nivel de lengua española equivalente a la de un hispanoparlante culto.',
            admision: 'En función de una entrevista personal a distancia, cuyo fin es orientar a los interesados, evaluar su perfil y anticipar qué áreas deben desarrollar durante su formación.',
            entrevistas:'Se organiza en función del CV resumido del interesado, en el que consten sus datos personales, su formación (año y lugar de graduación y promedio general), antecedentes laborales. - Días y horario: a combinar. La entrevista tiene una duración aproximada de 1 hora. ',
            modalidad:'presencial',
            resumen:'Este curso de interpretación de enlace se articula con los siguientes',
            cursosArticulados: [{name:'Consecutiva',key:2},
                                {name:'Consecutiva formal',key:3},
                                {name:'Introducción a la simultánea',key:4},
                                {name:'Simultánea - Organismos internacionales',key:5},
                                {name:'Simultánea - Mercados especializados',key:6} ],
            infoPedagogica: 'El curso de interpretación de enlace tiene una duración de 2 meses, según el siguiente detalle',
            duracion: '2 meses (abril y mayo)',
            objetivos:' Interpretación de enlace. Presencialidad vs. virtualidad. Técnicas de desverbalización. Técnicas de expresión oral. Traducción a primera vista. Introducción a las técnicas de interpretación consecutiva sin notas. Primeros pasos para la interpretación simultánea. Nuevos medios técnicos para la interpretación.',
            modulosTematicos:'Gestión empresarial. Negociaciones. Temas de actualidad.',
            periodicidadSemanal:'1 clase a distancia de 90 minutos + 1 tutoría a distancia',
            clase:' Miércoles de 18.00 a 19.30 horas. Actividad sincrónica y grupal. Se utiliza la plataforma ZOOM, licenciada. La clase se estructura sobre una planificación previamente distribuida. La grabación de la clase se hace accesible a los alumnos que no puedan asistir.',
            tutoria: 'Día y horario a convenir. Actividad sincrónica individual. Se trabaja intensamente para alcanzar los objetivos en función del perfil de cada asistente.',
            profesores:['Olga Álvarez','Violeta Harfuch','Gabriela Yáñez'],
            evaluacion: 'Interpretación simultánea remota',
            key:1},
                
        {   title: 'Consecutiva', 
            requirements:'Título universitario o terciario en cualquier disciplina. Nivel de lengua extranjera equivalente a la de un traductor o profesor de inglés. Nivel de lengua española equivalente a la de un hispanoparlante culto.',
            admision: 'En función de una entrevista personal a distancia, cuyo fin es orientar a los interesados, evaluar su perfil y anticipar qué áreas deben desarrollar durante su formación.',
            entrevistas:'Se organiza en función del CV resumido del interesado, en el que consten sus datos personales, su formación (año y lugar de graduación y promedio general), antecedentes laborales. - Días y horario: a combinar. La entrevista tiene una duración aproximada de 1 hora. ',
            modalidad:'presencial',
            resumen:'Este curso de consecutivas se articula con los siguientes',
            cursosArticulados: [{name:'Enlace',key:1},
                                {name:'Consecutiva formal',key:3},
                                {name:'Introducción a la simultánea',key:4},
                                {name:'Simultánea - Organismos internacionales',key:5},
                                {name:'Simultánea - Mercados especializados',key:6} ],
            infoPedagogica: 'El curso de interpretación de enlace tiene una duración de 2 meses, según el siguiente detalle',
            duracion: '2 meses (abril y mayo)',
            objetivos:'Consecutivas sin notas. Con notas. Corta. Formal. Diplomática. Diferentes dispositivos para las consecutivas. Tablet interpretation. Consecutiva remota. Técnicas de expresión oral. Aplicación de la consecutiva a la simultanea',
            modulosTematicos:'Medio ambiente. Salud pública. Temas de actualidad.',
            periodicidadSemanal:'1 clase a distancia de 90 minutos + 1 tutoría a distancia',
            clase:'Miércoles de 18.00 a 19.30 horas. Actividad sincrónica y grupal. Se utiliza la plataforma ZOOM, licenciada. La clase se estructura sobre una planificación previamente distribuida. La grabación de la clase se hace accesible a los alumnos que no puedan asistir.',
            tutoria: 'Día y horario a convenir, actividad sincrónica individual. Se trabaja intensamente para alcanzar los objetivos en función del perfil de cada asistente.',
            profesores:['Olga Álvarez','Violeta Harfuch','Gabriela Yáñez'],
            evaluacion: 'Interpretación simultánea remota',
            key:2
            }, 

        {   title:'Consecutiva formal',
            requirements:'Título universitario o terciario en cualquier disciplina. Nivel de lengua extranjera equivalente a la de un traductor o profesor de inglés. Nivel de lengua española equivalente a la de un hispanoparlante culto.',
            admision: 'En función de una entrevista personal a distancia, cuyo fin es orientar a los interesados, evaluar su perfil y anticipar qué áreas deben desarrollar durante su formación.',
            entrevistas:'Se organiza en función del CV resumido del interesado, en el que consten sus datos personales, su formación (año y lugar de graduación y promedio general), antecedentes laborales. - Días y horario: a combinar. La entrevista tiene una duración aproximada de 1 hora. ',
            modalidad:'presencial',
            resumen:'Este curso de consecutivas se articula con los siguientes',
            cursosArticulados: [{name:'Enlace',key:1},
                                {name:'Consecutiva',key:2},
                                {name:'Introducción a la simultánea',key:4},
                                {name:'Simultánea - Organismos internacionales',key:5},
                                {name:'Simultánea - Mercados especializados',key:6} ],
            infoPedagogica: 'El curso de interpretación consecutiva formal  tiene una duración de 2 meses, según el siguiente detalle',
            duracion: ' 2 meses (agosto y septiembre)',
            objetivos:'Adquirir las habilidades necesarias para actuar como intérprete consecutivo. Características de la situación formal. La presencia y exposición del intérprete. Ceremonial y protocolo. Técnicas de expresión oral. Aplicación de la consecutiva a la simultánea',
            modulosTematicos:'Política. Diplomacia. Banquetes. Unidades culturales argentinas',
            periodicidadSemanal:'1 clase a distancia de 90 minutos + 1 tutoría a distancia',
            clase:'Actividad sincrónica y grupal. Se utiliza la plataforma ZOOM, licenciada. La clase se estructura sobre una planificación previamente distribuida. La grabación de la clase se hace accesible a los alumnos que no puedan asistir',
            tutoria: 'Día y horario a convenir. Actividad sincrónica e individual. Se trabaja intensamente para alcanzar los objetivos en función del perfil de cada asistente',
            profesores:['Olga Álvarez','Violeta Harfuch','Gabriela Yáñez'],
            evaluacion: 'Interpretación simultánea remota',
            key:3
        }, 


        {   title:'Introducción a la simultánea', 
            requirements:'Título universitario o terciario en cualquier disciplina. Nivel de lengua extranjera equivalente a la de un traductor o profesor de inglés. Nivel de lengua española equivalente a la de un hispanoparlante culto.',
            admision: 'En función de una entrevista personal a distancia, cuyo fin es orientar a los interesados, evaluar su perfil y anticipar qué áreas deben desarrollar durante su formación.',
            entrevistas:'Se organiza en función del CV resumido del interesado, en el que consten sus datos personales, su formación (año y lugar de graduación y promedio general), antecedentes laborales. - Días y horario: a combinar. La entrevista tiene una duración aproximada de 1 hora. ',
            modalidad:'presencial',
            resumen:'Este curso de introducción a la simultánea se articula con los siguientes',
            cursosArticulados: [{name:'Enlace',key:1},
                                {name:'Consecutiva',key:2},
                                {name:'Consecutiva formal',key:3},
                                {name:'Simultánea - Organismos internacionales',key:5},
                                {name:'Simultánea - Mercados especializados',key:6} ],
            infoPedagogica: 'El curso de introducción a la interpretación simultánea remota tiene una duración de 4 meses, según el siguiente detalle',
            duracion: '4 meses (agosto a noviembre)',
            objetivos:'Introducción a las técnicas de interpretación simultánea. Escuchas intensivas. Uso profesional de la voz (español e ingles). Expresión para la simultánea. Preparación de conferencias (lengua y terminología). El pasaje de lo presencial a la virtualidad',
            modulosTematicos:'Medio ambiente. Educación. Empleo. Temas de actualidad',
            periodicidadSemanal:'1 clase a distancia de 90 minutos + 1 tutoría a distancia',
            clase:'Lunes de 18.00 a 19.30 horas, actividad sincrónica y grupal. Se utiliza la plataforma ZOOM, licenciada. La clase se estructura sobre una planificación previamente distribuida. La grabación de la clase se hace accesible a los alumnos que no puedan asistir',
            tutoria: 'Día y horario a convenir. Actividad sincrónica e individual. Se trabaja intensamente para alcanzar los objetivos en función del perfil de cada asistente',
            profesores:['Olga Álvarez','Violeta Harfuch','Gabriela Yáñez'],
            evaluacion: 'Interpretación simultánea remota',
            key:4
        }, 
        
        {   title:'Simultánea - Organismos internacionales', 
            requirements:'Título universitario o terciario en cualquier disciplina. Nivel de lengua extranjera equivalente a la de un traductor o profesor de inglés. Nivel de lengua española equivalente a la de un hispanoparlante culto.',
            admision: 'En función de una entrevista personal a distancia, cuyo fin es orientar a los interesados, evaluar su perfil y anticipar qué áreas deben desarrollar durante su formación.',
            entrevistas:'Se organiza en función del CV resumido del interesado, en el que consten sus datos personales, su formación (año y lugar de graduación y promedio general), antecedentes laborales. - Días y horario: a combinar. La entrevista tiene una duración aproximada de 1 hora. ',
            modalidad:'Presencial',
            resumen:'Este curso de simultánea se articula con los siguientes',
            cursosArticulados: [{name:'Enlace',key:1},
                                {name:'Consecutiva',key:2},
                                {name:'Consecutiva formal',key:3},
                                {name:'Introducción a la simultánea',key:4},
                                {name:'Simultánea - Mercados especializados',key:6}],
            infoPedagogica: 'El curso de introducción a la interpretación simultánea remota tiene una duración de 4 meses, según el siguiente detalle',
            duracion: '4 meses (abril a julio)',
            objetivos:' a) adquirir las habilidades necesarias para actuar como intérprete simultáneo (inglés-español y viceversa); y b) familiarizarse con el mercado internacional de la interpretación',
            modulosTematicos:'Organizaciones internacionales. Política internacional',
            periodicidadSemanal:'1 clase a distancia de 90 minutos + 1 tutoría a distancia',
            clase:'Clase remota: lunes de 18.00 a 19.30 horas',
            tutoria: 'A convenir',
            profesores:['Olga Álvarez','Violeta Harfuch','Gabriela Yáñez'],
            evaluacion: 'Interpretación simultánea remota',
            key:5
            },  
        
        {   title:'Simultánea remota - Mercados especializados',  
            requirements:'Título universitario o terciario en cualquier disciplina. Nivel de lengua extranjera equivalente a la de un traductor o profesor de inglés. Nivel de lengua española equivalente a la de un hispanoparlante culto.',
            admision: 'En función de una entrevista personal a distancia, cuyo fin es orientar a los interesados, evaluar su perfil y anticipar qué áreas deben desarrollar durante su formación.',
            entrevistas:'Se organiza en función del CV resumido del interesado, en el que consten sus datos personales, su formación (año y lugar de graduación y promedio general), antecedentes laborales. - Días y horario: a combinar. La entrevista tiene una duración aproximada de 1 hora. ',
            modalidad:'presencial',
            resumen:'Este curso de simultánea se articula con los siguientes',
            cursosArticulados: [/* {name:'Enlace',key:1},
                                {name:'Consecutiva',key:2},
                                {name:'Consecutiva formal',key:3},
                                {name:'Introducción a la simultánea',key:4},
                                {name:'Simultánea - Organismos internacionales',key:5} */],
            infoPedagogica: 'El curso de introducción a la interpretación simultánea remota tiene una duración de 4 meses, según el siguiente detalle',
            duracion: '4 meses (abril a julio)',
            objetivos:'a) adquirir las habilidades necesarias para actuar como intérprete simultáneo (inglés-español y viceversa); b) familiarizarse con el mercado argentino y regional de trabajo de la interpretación; y c) práctica de relay',
            modulosTematicos:'Tecnología. Medicina. Economía y comercio',
            periodicidadSemanal:'1 clase presencial de 90 minutos + tutorías + prácticas individuales.',
            clase:'Clase remota: lunes de 18.00 a 19.30 horas.',
            tutoria: 'A convenir',
            profesores:['Olga Álvarez','Violeta Harfuch','Gabriela Yáñez'],
            evaluacion: 'Simulacro de conferencia (interpretación simultánea) con orador en vivo ante público.',
            key:6
            },  
        
    ] 

    const coaching = [
        
        {title: t('traductores'), 
        topics: [{topicTitle: 'Traductores', description: ''}], 
        key:1 } ,
        {title: t('interpretes'),
        topics: [{topicTitle:'Intérpretes', description: ''}],
        key:2 },
        {title: t('estudiantes'),
        topics: [{topicTitle:'Estudiantes', description: ''}], 
        key:3  },
        {title: t('institucionesInternacionales'),
        topics: [{topicTitle:'Ingresantes en instituciones internacionales', description: ''}], 
        key:4 },
    ]

    const modalidad = [
        {title:t('modalidadVirtual'),description:"", key:0},
        {title:t('modalidadMoodle'),description:"",key:1},
        {title:t('modalidadElearningPlataforma'),description:"", key:2},
        {title:t('modalidadBlended'),description:"", key:3},
        {title:t('modalidadGroup'),description:'',key:4},
        {title:t('modalidadIndividual'),description:'',key:5},
        {title:t('modalidadComunicacion'),description:'',key:6},
        {title:t('modalidadTeorica'),description:'',key:7},
        {title:t('modalidadElearning'),description:'',key:8},
    ]

    const trainingContent = {
        modalidad:{content:modalidad, key:'modalidad'},
        coaching:{content:coaching, key:'coaching'},
        curso:{content:cursos, key:'curso'}
    }
    const trainingList = {
        modalidad:{name: t('modalidad'), link:'#training-option',key:'modalidad',subTitle:t('modalidadSubTitle'),secondTitle:'',color:'blue'} ,
        coaching:{name: t('coaching'), link:'#training-option',key:'coaching',subTitle:'',secondTitle:t('coachingSecondTitle'),color:'green'},
        curso:{name: t('cursoInterpretacion'), link:'#training-option',key:'curso',subTitle:t('cursoSubTitle'),secondTitle:t('cursoSecondTitle'),color:'cyan'}  
    }
    
    const {getAllProfessionals} =  useProfessionals()
    const topic = t("teacher")
    const professionals = getAllProfessionals().filter((prof)=>prof.profession.includes(topic))


    
    return (
        <TrainingContainer>
            <Title title={t("training")} color={'green'} />
            <Info className='info' paragraph={paragraph()}/>
            <TrainingListInfograph id='ingographTraining'  handleOption ={handleOption} trainingDic={trainingList}>
            </TrainingListInfograph>
            
            <TrainingSliderContainer>

                { Object.keys(trainingList).map((key,i)=>
                    <TraductionSlider   time={10} color={trainingList[key].color} wide={160}>
                        <Slideshow handleOption ={handleOption} option={key}  linked ={'#training-option'}  time={10}
                                items={trainingImages[key]} wide={250} height={200} />
                    </TraductionSlider>
                )}
                {/* <TraductionSlider   time={10} color={'blue'} wide={160}>
                    <Slideshow handleOption ={handleOption} option='modalidad'  linked ={'#training-option'}  time={10}
                                items={trainingImages['modalidad']} wide={250} height={200} />
                </TraductionSlider>
                <TraductionSlider handleOption ={handleOption} option='coaching' time={10} 
                        color={'green'} wide={160}>
                    <Slideshow linked ={'#training-option'}  time={10}
                    items={trainingImages['coaching']} wide={250}  height={200}/>
                </TraductionSlider>
                <TraductionSlider time={10} color={'cyan'} wide={160}>
                    <Slideshow handleOption ={handleOption} option='curso' 
                                linked ={'#training-option'}  time={10} 
                                items={trainingImages['curso']}
                                wide={250}  height={200}/>
                </TraductionSlider>
                 */}
            </TrainingSliderContainer>

       
                
                    <h2 id="training-option">{trainingList[trainingOption].name} </h2>
                    <h3>{trainingList[trainingOption].secondTitle}</h3>

                    <p className='subtitle'>{trainingList[trainingOption].subTitle}</p> 

                    {/* <SlideshowTraining key={trainingOption} items={trainingImages[trainingOption]}  time={10} wide={300} height={300} hasTextSlide={false}/>  */}

                    <FormationContentList ref={refScroll}  handleOption ={handleOption}  formationItems={trainingContent[trainingOption]}/>
                
            {/* <TeamList teamTitle={'docentes'} teamList={teachers}/> */}
            <ProfessionalSlider history={history} professionals={professionals}/>
        </TrainingContainer>
    )
}

export default Training;
