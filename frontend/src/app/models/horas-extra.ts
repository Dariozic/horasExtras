export class HorasExtra {

  constructor(
    documento = 0,
    nombres = '',
    apellidos = '',
    fecha_inicio = new Date(),
    fecha_fin = new Date(),
    hora_inicio = '',
    hora_fin = '',
    hora_ini_extra = '',
    hora_fin_extra = '',
    motivo_hora_extra = ''
    ) {
      this.documento = documento;
      this.nombres = nombres;
      this.apellidos = apellidos;
      this.fecha_inicio = fecha_inicio;
      this.fecha_fin = fecha_fin;
      this.hora_inicio = hora_inicio;
      this.hora_fin = hora_fin;
      this.hora_ini_extra = hora_ini_extra;
      this.hora_fin_extra = hora_fin_extra;
      this.motivo_hora_extra = motivo_hora_extra;
  }

  documento: Number;
  nombres: String;
  apellidos: String;
  fecha_inicio: Date;
  fecha_fin: Date;
  hora_inicio: String;
  hora_fin: String;
  hora_ini_extra: String;
  hora_fin_extra: String;
  motivo_hora_extra: String;
}
