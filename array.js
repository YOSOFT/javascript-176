var dias = ['lunes', 'martes'];
       dias.push("miercoles")
       console.log(dias);

       dias.pop();
       console.log(dias);

       dias.unshift("domingo")
       console.log(dias);
       dias.shift();
       console.log(dias);

       dias.push("miercoles");
       dias.push("Jueves","fsadasdf");

        console.log(dias);
         dias.splice(1,0, "nuevo", "otro");

        console.log(dias);

        console.log(dias.slice(0,2))

        dias.forEach(
            (x,i) => 
                console.log(x,i)   
        )