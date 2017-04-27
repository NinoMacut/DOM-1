/**
 * Created by Ucenik on 27.4.2017..
 */

/**
 * var x = document.getElementById("prvi").innerHTML;
document.getElementById("drugi").innerHTML = x;
*/


function prvaSlika(){
    document.getElementById("slika").src = "http://4.bp.blogspot.com/-lw5x2P_i_aY/T8si5i0I3aI/AAAAAAAAEYo/6GIIXl3RVvc/s1600/avioni-slike-mobitel.jpg";
}
function drugaSlika(){
    document.getElementById("slika").src = "http://1.bp.blogspot.com/_9DRIQ9xf9U4/TIljxhFH4YI/AAAAAAAAA8A/KPgOLr2NS7Y/s400/download-besplatne-slike-pozadine-za-mobitele-macka.jpg";
}
document.getElementById("btn").addEventListener("click", drugaSlika);



function promjenaBoje(){
    document.getElementById("prvi").style.backgroundColor = "#0000FF"
}
document.getElementById("btn2").addEventListener("click", promjenaBoje);



function sakrijDiv(){
    document.getElementById("div").style.visibility = "hidden";
}
function prikaziDiv(){
    document.getElementById("div").style.visibility = "visible";
}
document.getElementById("btn3").addEventListener("click", sakrijDiv);
document.getElementById("btn4").addEventListener("click", prikaziDiv);
