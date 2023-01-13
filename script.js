#Cargamos los datos
3.json ("json.json").then (function (datos){
    console.log ("Ya hemos cargado los datos")

    var escalaTamanio = d3.scaleLinear()

    .domain (d3.extent (datos, function (d) {return d.nota}))
    .range (["10px", "50px"])

    var escalaColor = d3.scaleLinear()
    .domain ([0,10])
    .range (["red", "green"])

    var elementoUl = d3.select ("body").append("ul")

    elementoUl
        .selectAll ("li")
        .data(datos)
        .enter()
        .append ("li")

        .text (function (d) {return d.nota})    
            
         .style ("font-size", function (d) {return escalaTamanio(d.ranking)})
         .style("color", function (d) {return escalaColor(d.nota)})
})