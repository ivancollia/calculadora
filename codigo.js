const pantalla = document.querySelector(".pantalla")
const botones = document.querySelectorAll(".boton")

botones.forEach(boton =>{
    boton.addEventListener("click",()=>{
        const botonApretado = boton.textContent;
        if(boton.id === "c"){
            pantalla.textContent = "0";//para que quede en 0 cuando borre todo con C
            return
        }
        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.textContent = "0" //para que quede en 0 cuando borre todo con la flecha
            }else(
            pantalla.textContent = pantalla.textContent.slice(0,-1)
            )
            return
        }

        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent) //lee las expresiones de sumas o restas y al darle = te dice
            }catch{
                pantalla.textContent = "Error"
            }
             return
        }

        if(pantalla.textContent === "0" || pantalla.textContent==="Error"){//validaciones
            pantalla.textContent = botonApretado
        }else(
            pantalla.textContent += botonApretado
        )
        
    })
})