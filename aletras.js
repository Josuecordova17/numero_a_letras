var unidades = ['zero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince']
var decimas = ['','dies','veint','treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa']
function convertir() {
    let num = document.getElementById('txt').value
    var n = document.getElementById('num')   
    var nu =num.toString()
    var ne;
num = parseInt(nu.replace(',', ''));
nu = nu.replace(',', '');
    switch (true) {
        case num<1000:
            n.innerHTML=cientos(num)
            break;
        case num>1000 && num<2000:
            ne =  cientos(parseInt(nu.slice(-3)))
           n.innerHTML =`mil ${ne}` 
            
            break;
        case num==1000 :
            n.innerHTML='mil'
            break;
        case num>1999&&num<1000000:
        let na = cientos(parseInt(nu.slice(0,(nu.length-3)))),
        ne=cientos(parseInt(nu.slice(-3)))
        if (ne=="zero") {
            ne=''
        }
       n.innerHTML =`${na} mil ${ne}`
            break;
    
        default:
            break;
    }
}
function cientos(num) {
    var re = ''
    let nu = num.toString()
    switch (true) {
        case num<100:
            re =numero(num)
            break;
        case num==100 :
            re ='cien'
            break;
        case num>100 && num<200:
            ne = numero(nu.slice(-2))
           re =`ciento ${ne}` 
            break;
        case num>199&&num<1000 :
        let ni=nu.split('')  
         ne = numero(parseInt(nu.slice(-2)))
         if (ne=="zero") {
             ne=''
         }
        re =`${unidades[ni[0]]}cientos ${ne}`
        if (ni[0]==9) {
            re =`novecientos ${ne}`
        }
            break;
        default:
            break;
    }
    return re
}
function numero(num) {
    var re = ''
    let nu = num.toString()
   switch (true) {
       case num<16 :
           re =  unidades[num]
           
           break;
       case num>15&&num<30&&num!=20 :
           ni=nu.split('')
           re =  `${decimas[ni[0]]}i${unidades[ni[1]]}`
           break;
        case num===20 :
           re =  `veinte`
           break;
       case num>29 && num<100:
           ni=nu.split('')
           re =  `${decimas[ni[0]]} y ${unidades[ni[1]]}`
           if (ni[1]==0) {
               re =  `${decimas[ni[0]]}`
           }
           break;
           
       default:
           break;
   }
   return re
}