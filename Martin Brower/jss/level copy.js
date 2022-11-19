const level = document.getElementById('level');
const medal = document.getElementById('medal');
const medal1 = document.getElementById('medal1');
const medal2 = document.getElementById('medal2');
//medal.style.color = "#000";
//medal.style.display = "none";
let bronze = "#977547";
let prata = "#474A51";
let ouro = "#ffd700";
let black = "#000";
let point = "100%";
level.style.width = point;
if (level.style.width == "0%"){
    medal1.style.display = "none";
    medal2.style.display = "none";
}else{
    if (level.style.width <= "10%"){
            medal1.style.display = "none";
            medal2.style.display = "none";
            medal.style.color = bronze;
    }else{
        if (level.style.width <= "20%"){
            medal2.style.display = "none";
            medal.style.color = bronze;
            medal1.style.color = bronze;
        }else{
            if (level.style.width <= "30%"){
                medal.style.color = bronze;
                medal1.style.color = bronze;
                medal2.style.color = bronze;
            }else{
                if (level.style.width <= "40%"){
                    medal1.style.display = "none";
                    medal2.style.display = "none";
                    medal.style.color = prata;
                }else{   
                    if (level.style.width <= "50%"){
                    medal2.style.display = "none";
                    medal.style.color = prata;
                    medal1.style.color = prata;
                    }else{   
                        if (level.style.width <= "60%"){
                        medal.style.color = prata;
                        medal1.style.color = prata;
                        medal2.style.color = prata;
                        }else{
                            if (level.style.width <= "70%"){
                            medal1.style.display = "none";
                            medal2.style.display = "none";
                            medal.style.color = ouro;
                            }else{
                                if (level.style.width <= "80%"){
                                    medal2.style.display = "none";
                                    medal.style.color = ouro;
                                    medal1.style.color = ouro;
                                }else{
                                    if (level.style.width <= "90%"){
                                        medal.style.color = ouro;
                                        medal1.style.color = ouro;
                                        medal2.style.color = ouro;
                                    }else{
                                    if(level.style.width <= "100%"){   
                                        medal.style.color = black;
                                        medal1.style.display = "none";
                                        medal2.style.display = "none";
                                    }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}