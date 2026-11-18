const campoNombre = document.querySelector("#campo-nombre");
const campoParcial1 = document.querySelector("#campo-parcial1");
const campoParcial2 = document.querySelector("#campo-parcial2");
const botonRegistrar = document.querySelector("#boton-registrar");
const botonReiniciar = document.querySelector("#boton-reiniciar");
const listaTarjetas = document.querySelector("#lista-tarjetas");

botonRegistrar.addEventListener("click", () => {
    const nombre = campoNombre.value;
    const parcial1 = Number(campoParcial1.value);
    const parcial2 = Number(campoParcial2.value);
    const promedioNumero = (parcial1 + parcial2) / 2;
    const promedio = promedioNumero.toFixed(1);

    if (promedioNumero >= 6.0) {
        listaTarjetas.innerHTML += `
            <div class="tarjeta estado-positivo">
                <h3>${nombre}</h3>
                <p>Promedio: ${promedio}</p>
                <p>Estado: Aprobado</p>
            </div>
        `;
    } else {
        listaTarjetas.innerHTML += `
            <div class="tarjeta estado-alerta">
                <h3>${nombre}</h3>
                <p>Promedio: ${promedio}</p>
                <p>Estado: Reprobado</p>
            </div>
        `;
    }

    campoNombre.value = "";
    campoParcial1.value = "";
    campoParcial2.value = "";
    campoNombre.focus();
});

botonReiniciar.addEventListener("click", () => {
    listaTarjetas.innerHTML = "";
});