import { useTranslation } from "react-i18next";
const UseContent = () => {
    const { t } = useTranslation();

    const interpretationBannerContent =[{
                'key': 1,
                'name': t("asesoramientoEnTraduccion"),
                'content': t("asesoramientoEnTraduccionContent"),
                'url': '/interpretation/Interprete_consultora21a.jpg',
                'alt': 'asesoramiento'
            },
            {
                'key': 2,
                'name': t("simultanea"),
                'content': t("simultaneaContent"),
                'url': '/interpretation/simultanea21.jpg',
                'alt': 'simultanea'
            },
            /* {
                'key': 3,
                'name': 'Intérprete consultora',
                'content': 'Asesoramiento para organizadores de conferencias, empresas, organizaciones y otros clientes en materia de contratación de intérpretes. Formación y gestión de equipos de intérpretes en congresos, convenciones, seminarios, actividades de capacitación, negociaciones, conferencias de prensa y otro tipo de reuniones en las que los participantes de diversas lenguas y culturas requieran la interpretación para poder comunicarse.  Asesoramiento sobre otros servicios audiovisuales relacionados con la interpretación.',
                'url': '/interpretation/interprete_consultora21a.jpg',
                'alt': 'consultora'
            }, */
            {
                'key': 3,
                'name': t("consecutiva"),
                'content': t("consecutivaContent"),
                'url': '/interpretation/consecutivas21.jpg',
                'alt': 'consecutiva'
            },
            {
                'key': 4,
                'name': t('susurrada'),
                'content': t("susurradaContent"),
                'extraContent':t('susurradaContentI'),
                'url': '/interpretation/maradona2.jpeg',
                'alt': 'susurrada'
            },
            {
                'key': 5,
                'name': t("interpretacionRemota"),
                'content': t("interpretacionRemotaContent"),
                'url': '/interpretation/interpretacionremota21.png',
                'alt': 'susurrada'
            },
            {
                'key': 6,
                'name': t("eventosHibridos"),
                'content': t('eventosHibridosContent'),
                'url': '/interpretation/hibridos21.jpg',
                'alt': 'hibridos'
            },
            {
                'key': 7,
                'name': t("actuacionPericial"),
                'content': t('actuacionPericialContent'),
                'url': '/interpretation/business_improv_2009_4.jpg',
                'alt': 'peritos'
            },
            {
                'key': 8,
                'name': t("coordinacionIntegralEventos"),
                'content': t('coordinacionIntegralEventosContent'),
                'url': '/interpretation/event_management.jpeg',
                'alt': 'coordinacion_integral'
            }
        ]


    const trainingImages = {
        'curso': [{
                'key': 'Curso-1',
                'name': t('cursoInterpretacion'),
                'content': '',
                'url': '/capacitacion/curso/2018 prueba.jpg',
                'alt': 'Curso-1'
            },
            {
                'key': 'Curso-2',
                'name': t('cursoInterpretacion'),
                'content': '',
                'url': '/capacitacion/curso/2018 desde la cabina.jpg',
                'alt': 'Curso-2'
            },
            {
                'key': 'Curso-3',
                'name': t('cursoInterpretacion'),
                'content': '',
                'url': '/capacitacion/curso/ESCRITORIO.jpg',
                'alt': 'Curso-3'
            },
            {
                'key': 'Curso-4',
                'name': t('cursoInterpretacion'),
                'content': '',
                'url': '/capacitacion/curso/2018 control en la cabina.jpg',
                'alt': 'Curso-4'
            },
            {
                'key': 'Curso-5',
                'name': t('cursoInterpretacion'),
                'content': '',
                'url': '/capacitacion/curso/2018 Violeta dando instrucciones.jpg',
                'alt': 'Curso-5'
            }

        ],
        'coaching': [{
                'key': 'coaching-1',
                'name': t('coaching'),
                'content': '',
                'url': '/capacitacion/coaching/AIIC 2019 liliana vista amplia del colegio.jpg',
                'alt': 'coaching 1'
            },
            {
                'key': 'coaching-2',
                'name': t('coaching'),
                'content': '',
                'url': '/capacitacion/coaching/auris.jpg',
                'alt': 'coaching 2'
            },
            {
                'key': 'coaching-4',
                'name': t('coaching'),
                'content': '',
                'url': '/capacitacion/coaching/salon.jpg',
                'alt': 'coaching 3'
            },
            {
                'key': 'coaching-5',
                'name': t('coaching'),
                'content': '',
                'url': '/capacitacion/coaching/foto 8 20190211_084506.jpg',
                'alt': 'coaching-5'
            },
            {
                'key': 'coaching-7',
                'name': t('coaching'),
                'content': '',
                'url': '/capacitacion/coaching/grupal1.jpg',
                'alt': 'coaching-7'
            },
            {
                'key': 'coaching-8',
                'name': t('coaching'),
                'content': '',
                'url': '/capacitacion/coaching/grupal2.jpg',
                'alt': 'coaching'
            },
            {
                'key': 'coaching-9',
                'name': t('coaching'),
                'content': '',
                'url': '/capacitacion/coaching/box2.jpg',
                'alt': 'coaching-9'
            },
            {
                'key': 'coaching-10',
                'name': t('coaching'),
                'content': '',
                'url': '/capacitacion/coaching/conf.jpg',
                'alt': 'coaching-10'
            },
            {
                'key': 'coaching-11',
                'name': t('coaching'),
                'content': '',
                'url': '/capacitacion/coaching/foto 6 20190211_093759.jpg',
                'alt': 'coaching-11'
            },

        ],
        'modalidad': [{
                'key': 'modalidad-1',
                'name': t('modalidad'),
                'content': '',
                'url': '/capacitacion/modalidad/Devolución de simultánea_2019.jpg',
                'alt': 'modalidad-1'
            },
            {
                'key': 'modalidad-2',
                'name': t('modalidad'),
                'content': '',
                'url': '/capacitacion/modalidad/Evaluación de simultánea remota con público.jpg',
                'alt': 'modalidad-2'
            },
            {
                'key': 'modalidad-3',
                'name': t('modalidad'),
                'content': '',
                'url': '/capacitacion/modalidad/Evaluación de simultánea remota-Cabina virtual.jpg',
                'alt': 'modalidad-3'
            },
            /* {
                'key': 'modalidad-4',
                'name': 'Modalidades',
                'content': '',
                'url': '/capacitacion/modalidad/HIBRIDOS.jpg',
                'alt': 'modalidad-4'
            }, */
            {
                'key': 'modalidad-5',
                'name': t('modalidad'),
                'content': '',
                'url': '/capacitacion/modalidad/Práctica de consecutiva y simultánea_2019.jpg',
                'alt': 'modalidad-5'
            },
        ]
    }

    const large_square_size = '100%';
    const short_square_size = '100%';

    const backgroundImages = ['home/traduction-background.jpg',
        'home/learning-background.jpg',
        'home/learning-background.jpg',
        'home/servicios-audiovisuales-background.jpg',
        'home/professional-background.jpg',
        'home/professional-background.jpg'
    ]

    const exceltiColors = ['rgb(6,107,153)',
        'rgb(18,134,193)',
        'rgb(0,152,219)',
        'rgb(21,178,185)',
        'rgb(9,174,140)',
        'rgb(36,181,122)',
        'rgb(68,169,37)',
        'rgb(52,150,91)',
    ]
    const exceltiColors2 = [
        'rgb(18,134,193)',
        'rgb(68,169,37)',
        'rgb(21,178,185)'
    ]
    const exceltiColorsAlpha2 = [{
            'initial': 'rgba(18,134,193,0.5)',
            'mid': 'rgba(18,134,193,0)'
        },
        {
            'initial': 'rgba(68,169,37,0.5)',
            'mid': 'rgba(68,169,37,0)'
        },
        {
            'initial': 'rgba(21,178,185,0.5)',
            'mid': 'rgba(21,178,185,0)'
        }
    ]

    const exceltiColorsAlpha = [{
            'initial': 'rgba(6,107,153,0.5)',
            'mid': 'rgba(6,107,153,0)'
        },
        {
            'initial': 'rgba(18,134,193,0.5)',
            'mid': 'rgba(18,134,193,0)'
        },
        {
            'initial': 'rgba(0,152,219,0.5)',
            'mid': 'rgba(0,152,219,0)'
        },
        {
            'initial': 'rgba(21,178,185,0.5)',
            'mid': 'rgba(21,178,185,0)'
        },
        {
            'initial': 'rgba(9,174,140,0.5)',
            'mid': 'rgba(9,174,140,0)'
        },
        {
            'initial ': 'rgba(36,181,122,0.5)',
            'mid': 'rgba(36,181,122,0)'
        },
        {
            'initial': 'rgba(68,169,37,0.5)',
            'mid': 'rgba(68,169,37,0)'
        },
        {
            'initial': 'rgba(52,150,91,0.5)',
            'mid': 'rgba(52,150,91,0)'
        }
    ]


    const dots = [
        "top:0px;left: 0px",
        'top:0px;left: 0px',
        "top:0px;left: 0px",
        'top:0px;left: 0px',
        "top:0px;left: 0px",
        'top:0px;left: 0px',
    ]
    const box_shadows = [
        "0px -30px 0 6px var(--background),-20px 180px 0 4px var(--background),220px 150px 0 6px var(--background)",
        "0px -30px 0 6px var(--background),-20px 180px 0 4px var(--background),230px 150px 0 6px var(--background)",
        "0px -20px 0 6px var(--background),0px 180px 0 4px var(--background),230px 160px 0 6px var(--background)",
        "0px -30px 0 6px var(--background),-20px 180px 0 4px var(--background),200px 150px 0 6px var(--background)",
        "0px -10px 0 6px var(--background),-20px 180px 0 4px var(--background),250px 150px 0 6px var(--background)",
        "0px 30px 0 6px var(--background),-20px 130px 0 4px var(--background),250px 150px 0 6px var(--background)"
    ]

    return {
        interpretationBannerContent,
        trainingImages,
        large_square_size,
        short_square_size,
        backgroundImages,
        exceltiColors,
        exceltiColors2,
        exceltiColorsAlpha2,
        exceltiColorsAlpha,
        dots,
        box_shadows,
    }
}
export default UseContent;