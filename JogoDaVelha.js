
        function campo(){
            const campo = JogoDaVelha.idCampo;          
            for(var celula=0;celula<=9;celula++){
                let div = document.createElement("div");
                div.className = "div-center";
                div.onclick = addimg;
                div.id = celula;
                campo.appendChild(div);
            }
        }

        let JogoDaVelha = {
            status : document.querySelector("#status"),
            idCampo: document.querySelector("#campo"),
            winnerBox: document.querySelector("#winner"),
            winnig: false,
            campo: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
            X:"./iconmonstr-x-mark-1.svg",
            O:"./iconmonstr-circle-2.svg",
            winCases:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
            vez: true,

            iconVez:function (){
                if(this.vez){
                    this.vez = false;
                    return this.X;
                }
                this.vez = true;
                return this.O;
            },
            insereNoCampo:function(id){
                if(this.campo[Number(id)] == " "){
                    const icon = this.iconVez();
                    this.campo[Number(id)] =  icon;
                    this.checkWin(icon);
                    return icon;
                }
                return false;
            },

            deuVelha:function(){
                if(!this.campo.includes(" ") && !this.winnig){
                    this.status.innerHTML = "Deu Velha";
                }
            },
            checkWin:function(icon){
                this.winCases.forEach(win=>{
                    let cont = 0;
                    win.forEach(index=>{
                        if(this.campo[index]===icon){
                            cont++;
                            if(cont==3){
                                this.winnerBox.src = icon;
                                this.winnig = true;
                            }
                        }
                    })
                })
                this.deuVelha();
            }
        }

        function resetCampo(){
            let novoCampo = JogoDaVelha.idCampo;
            novoCampo.innerHTML = "";
            JogoDaVelha.campo.fill(" ");
            JogoDaVelha.winnerBox.src = ""
            campo();
        }

        function addimg(div){
            const icon = JogoDaVelha.insereNoCampo(div.target.id);
            const img = document.createElement('img');
            if(icon){
                img.src = icon 
                div.target.appendChild(img);
            }
        }

        campo();

        