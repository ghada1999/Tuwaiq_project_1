
const news = [

  {
    title: "addres",
   urimg:"img/1.jpg‬‬‬‬",
  des: "idojiodajcisdo;hcfjiwhneduhnujndewwjcmrjekkkklsdslad;lkkkkkkkkkkkkkkkdldshncidshiudehjidjflkds;ncjlkkfdojnoifvdjviof;dagfhnvcdkjsnckjdsncj",
   user:"GODAH"
  }


];

for(let {title,urimg,des,user}of news) { 

     document.write('<h2><a href="#">'+title+' </a></h2>');
document.write('<img class=img-responsive thumbnail width=50% src='+"'"+urimg+"'"+'><br> ');
	 
     document.write('<p>'+des +'</p> ');
	 
     document.write('written by<span class=glyphicon glyphicon-user></span> <a href="#"> </a>at: <span class=glyphicon glyphicon-time></span> 24/10/2021 - 4:22pm');
	 
}