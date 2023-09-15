function acceso (time) {
    edad = prompt("Cuantos años tenes?")
    if (edad < 18){
        alert("NO PODES ENTRAR")
    }
    else {
        alert("PODES INGRESAR")
        if (time==2){
            alert(`NO PAGAS ENTRADA YA QUE INGRESASTE A LAS ${time}`)
        }
        else{
            alert("EL VALOR DE LA ENTRADA ES DE $1000")
        }
    }
}

//acceso(5);
//acceso(10);
//acceso(2);

class Celular{
    constructor (color,peso,resolucion_de_pantalla,camara,memoria_ram){
        this.color = color;
        this.peso = peso;
        this.resolucion_de_pantalla = resolucion_de_pantalla;
        this.camara = camara;
        this.memoria_ram = memoria_ram;
        this.encendido = false
    };

   

    prender(){
        if (this.encendido == false){
            alert("Celular prendido");
            this.encendido = true; 
        } else {
            alert("El celular ya esta prendido");
            };
    };

    reiniciar(){
        if (this.encendido == true){
            alert("Reiniciando celular");
        } else {
            alert ("No se puede reiniciar ya que el celular está apagado");
        }
    }

    tomarFotos(){
        if (this.encendido == true
            
            ){
            alert("Tomando foto...");
        } else {
            alert ("No se puede tomar fotos ya que el celular está apagado");
        }
    }

    grabar(){
        if (this.encendido == true){
            alert("Grabando...");
        } else {
            alert ("No se puede grabar ya que el celular está apagado");
        }
    }
    info(){
        return document.write(`Color del celular: ${this.color}<br>
        Su peso es de: ${this.peso}<br>
        Una resolucion de pantalla de :${this.resolucion_de_pantalla}<br>
        Su camara es de: ${this.camara}<br>`
        )
    }
}

//celular1 = new Celular("negro","300gr","25px","40mpx","4gb");
//alert(celular1.encendido)
//celular1.prender();
//celular1.tomarFotos();
//celular1.grabar();
//celular1.reiniciar();
//celular1.info();

class App{
    constructor(descargas,puntuacion,peso){
        this.descargas= descargas;
        this.puntuacion= puntuacion;
        this.peso= peso;
        this.iniciada= false;
        this.instalada= false;
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente")
        }
    }

    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert ("App iniciada");
        }
        else{
            alert("La app no está instalada, debera primero instalarla en el dispositivo")
        }
    }
    
    cerrar (){
        if (this.iniciada == true);
            this.iniciada = false;
            alert("Se ha cerrado correctamente la aplicacion")

    }
    desintalar(){
        if (this.instalada == true && this.iniciada == false){
            this.instalada = false;
            alert("app desintalda correctamente")
        }
        else{
            alert("Para desintalar debe cerrar la aplicación")
        }
    }
    
    
}

fifa23 = new App(194500,5,"2gb");
fifa23.abrir()
fifa23.instalar()
fifa23.abrir()
fifa23.desintalar()
fifa23.cerrar()
fifa23.desintalar()