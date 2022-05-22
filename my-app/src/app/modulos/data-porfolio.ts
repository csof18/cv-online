export interface DataPorfolio {
    informacion_personal: InformacionPersonal;
    experiencia:          Experiencia[];
    educacion:            Estudio[];
    cursos:               Estudio[];
    habilidades:          Habilidades;
    proyectos:            Proyecto[];
}

export interface Estudio {
    titulo:          string;
    fecha_inicio:    string;
    fecha_fin:       string;
    establecimiento: string;
}

export interface Experiencia {
    posicion:     string;
    fecha_inicio: string;
    fecha_fin:    string;
    empresa:      string;
}

export interface Habilidades {
    blandas: Blanda[];
    duras:   Dura[];
}

export interface Blanda {
    habilidad: string;
    img:       string;
    habilidad_blanda: boolean;
    habilidad_dura: boolean;
}

export interface Dura {
    habilidad: string;
    nivel:     string;
    img:       string;
    habilidad_blanda: boolean;
    habilidad_dura: boolean;
}
export interface InformacionPersonal {
    banner:      string;
    foto_perfil: string;
    nombre:      string;
    apellido:    string;
    titulo:      string;
    acerca_de: string;
    texto_banner: string;
}

export interface Proyecto {
    nombre:      string;
    fecha:       string;
    descripcion: string;
    tecnologias: string[];
    link:        string;
}