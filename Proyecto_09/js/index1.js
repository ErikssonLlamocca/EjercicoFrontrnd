/*Crear una clase Empleado con los atributos: código, nombre, apellido, correo y cargo; y las operaciones: sueldoBruto (), descuento () y sueldoNeto (). Para calcular el sueldo bruto, considere los siguientes criterios:

Cargo	Sueldo (S/)
Jefe	5000
Analista	4000
Programador	3000
Soporte	2000
Asistente	1500

Para calcular el descuento, es el 12.5% del sueldo bruto. Finalmente calcule el sueldo neto.
*/

class Empleado{    //clases son atributos y metodos
    codigo = "";
    nombre = "";
    apellido = "";
    correo = "";
    cargo = "";
    sueldobruto = function(){
        let sueldo= 0;
        if(this.cargo == "jefe"){
            sueldo = 5000;
        }else if(this.cargo == "analista"){
            sueldo = 4000;
        }else if(this.cargo == "programador"){
            sueldo = 3000;
        }else if(this.cargo == "soporte"){
            sueldo = 2000;
        }else{
            sueldo = 1500;
        }
    return sueldo;
    }
    descuento = function(){
        let descuento = 0;
        descuento = this.sueldobruto()*0.125;

    return descuento;
    }
    sueldoneto= function(){
        let sueldoneto = 0;
        sueldoneto = this.sueldobruto() - this.descuento();
        return sueldoneto;
    }
}
const txtCodigo = document.getElementById("txtCodigo");
const txtNombre = document.getElementById("txtNombre");
const txtApellido = document.getElementById("txtApellido");
const txtCorreo = document.getElementById("txtCorreo");
const txtCargo = document.getElementById("txtCargo");
const btnEnviar = document.getElementById("btnEnviar");
const resultado = document.getElementById("resultado");

btnEnviar.onclick = function(){
    let nuevoempleado = new Empleado()
    nuevoempleado.codigo = txtCodigo.value;
    nuevoempleado.nombre = txtNombre.value;
    nuevoempleado.apellido = txtApellido.value;
    nuevoempleado.correo = txtCorreo.value;
    nuevoempleado.cargo = txtCargo.value;
    resultado.innerText = `el sueldo bruto es ${nuevoempleado.sueldobruto()} el descuento es ${nuevoempleado.descuento()} y el sueldo neto es ${nuevoempleado.sueldoneto()}`
}
 

