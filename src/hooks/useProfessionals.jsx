import { useTranslation } from "react-i18next";

const useProfessionals = () => {
    const { t } = useTranslation();

    const professions ={
        1:t("traductora"),
        2:t("interpreter"),
        3:t("teacher"),
        4:t("leader"),
        5:t("traductor")
    }
    
    const getAllProfessionals = () => {
        return  [
            {
                name:'Olga Álvarez',
                image:'professionals/olga.jpg',
                contac:{
                    linkedin:'https://www.linkedin.com/in/olga-alvarez-barr-4067635b/',
                    cv:'cvs/Olga_Alvarez_ESP.pdf'
                },
                profession:[
                    professions[4],
                    professions[1],
                    professions[2],
                    professions[3]
                ]
            },
            {
                name: 'Cynthia Abad Quintaié',
                image:'professionals/cintia.jpg',
                contac:{
                    linkedin:'https://www.linkedin.com/in/cynthia-abad-quintai%C3%A9-424ab787/',
                    cv:'cvs/Cynthia_Abad_Quintale_ESP.pdf'
                },
                profession:[
                    professions[1],
                    professions[2],
                ]
            },
            {
                name: 'Cristina Cucchi',
                image:'professionals/cristina.jpg',
                contac:{
                    linkedin:'',
                    cv:'cvs/Cristina_Cucchi_ESP.pdf'
                },
                profession:[
                    professions[1],
                    professions[2],
                    
                ]
            },
            {
                name: 'Nancy Lynch',
                image:'professionals/nancy.jpg',
                contac:{
                    linkedin:'',
                    cv:'cvs/Nancy_Lynch_ESP.pdf'
                },
                profession:[
                    professions[1],
                ]
            },
            {
                name: 'Laura Tavolai',
                image:'professionals/laura.jpg',
                contac:{
                    linkedin:'',
                    cv:'cvs/Laura_Tavolai_ESP.pdf'
                },
                profession:[
                    professions[1],
                    professions[2],
                ]
            },
            {
                name: 'Melisa Tello',
                image:'professionals/melisa.jpg',
                contac:{
                    linkedin:'https://www.linkedin.com/in/melisa-tello-2400a821b/',
                    cv:''
                },
                profession:[
                    professions[1],
                    
                ]
            },
            
            {
                name: 'Gabriela Yañez',
                image:'professionals/gabriela.jpg',
                contac:{
                    linkedin:'https://www.linkedin.com/in/gabriela-y%C3%A1%C3%B1ez-7447b62b/',
                    cv:'cvs/Gabriela_Luisa_Yañez_ESP.pdf'
                },
                profession:[
                    professions[1],
                    professions[2],
                    professions[3],
                    
                ]
            },
            {
                name: 'Mariana Spitalnik',
                image:'professionals/mariana.jpg',
                contac:{
                    linkedin:'https://www.linkedin.com/in/mariana-spitalnik-9338a512/',
                    cv:'cvs/Mariana_Spitalnik_ESP.pdf'
                },
                profession:[
                    professions[1],
                    
                ]
            },
            {
                name: 'Violeta Harfuch',
                image:'professionals/violeta.jpg',
                contac:{
                    linkedin:'https://www.linkedin.com/in/violeta-harfuch-54430745/',
                    cv:'cvs/Violeta_Harfuch.pdf'
                },
                profession:[
                    professions[2],
                    professions[3],
                ]
            },
            {
                name: 'Isolda Rodríguez Villegas',
                image:'professionals/isolda.jpg',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[2],
                ]
            },
            {
                name: 'Vivien Pérez Moran',
                image:'professionals/viviana.jpg',
                contac:{
                    linkedin:'',
                    cv:'cvs/Vivien_Perez_Moran_ESP.pdf'
                },
                profession:[
                    professions[2],
                    
                ]
            },
            {
                name: 'Elisa Bianchi',
                image:'professionals/elisa.jpg',
                contac:{
                    linkedin:'https://www.linkedin.com/in/elisa-bianchi-b4b3536/',
                    cv:'cvs/Elisa_Bianchi.pdf'
                },
                profession:[
                    
                    professions[3],
                ]
            },
            {
                name: 'Pamela Fioravanti',
                image:'professionals/pamela-fioravanti.png',
                contac:{
                    linkedin:'',
                    cv:'cvs/Pamela_Fioravanti_ESP.pdf'
                },
                profession:[
                    professions[1],
                ]
            },
                        {
                name: 'Samantha Sassi',
                image:'',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[1],
                ]
            },
                        {
                name: 'Martín Barrère',
                image:'professionals/martin.jpg',
                contac:{
                    linkedin:'https://www.linkedin.com/in/mart%C3%ADn-barr%C3%A8re-9618261/',
                    cv:'cvs/Martin_Barrere.pdf'
                },
                profession:[
                    professions[5],
                    professions[2]
                ]
            },
        ];
    };

    return {
        getAllProfessionals
    }
}

export default useProfessionals;