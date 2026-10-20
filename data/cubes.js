const formatter = new Intl.NumberFormat("es-CO");
class Cube {
  imageName;
  name;
  id;
  priceColombianPesos;
  rating;

  constructor(cubeDetails){
    this.id = cubeDetails.id;
    this.imageName = cubeDetails.imageName;
    this.name = cubeDetails.name;
    this.priceColombianPesos = cubeDetails.priceColombianPesos;
    this.rating = cubeDetails.rating;
  }

  getStarsRating(){
    return this.rating.stars*10
  }
  getPrice(){
    return formatter.format(this.priceColombianPesos);
  }
}
export const cubes = [{
  imageName:"4pk-cubos",
  name:"4pk Cubos Rubik Juguetes 2x2 3x3 4x4 5x5 Stickerless Speed",
  id:"1",
  priceColombianPesos:44619,
  rating:{
    stars:"5.0",
    count:"12"
    }
  },
  {
  imageName:"4pk-qiyi",
  name:"Pack 4 Rubik 2x2 3x3 4x4 5x5 Qiyi Stickerless Speed Cube",
  id:"2",
  priceColombianPesos:60000,
  rating:{
    stars:"5.0",
    count:"720"
    }
  },
  {
  imageName:"3x3-mirror",
  name:"Cubo Rubik Magico 3x3 Mirror Espejo Plateado Resistente",
  id:"3",
  priceColombianPesos:12900,
  rating:{
    stars:"4.5",
    count:"348"
    }
  },
  {
  imageName:"ciyuan-3x3",
  name:"Ciyuan Cobra Cubo Rubik Qiyi Mofangge 3x3 Speedcube",
  id:"4",
  priceColombianPesos:38227,
  rating:{
    stars:"5.0",
    count:"1"
    }
  },
  {
  imageName:"infinity-cube",
  name:"Infinity Cube Fidget Cube Cubo Infinito Cubo Antiestrés",
  id:"5",
  priceColombianPesos:14000,
  rating:{
    stars:"4.5",
    count:"240"
    }
  },
  {
  imageName:"emotions",
  name:"Juego Cubo Rubik Caritas Puzzle Face Cambio De Emociones Estructura Multicolor",
  id:"6",
  priceColombianPesos:23999,
  rating:{
    stars:"5.0",
    count:"139"
    }
  },
  {
  imageName:"lubricante-qiyi",
  name:"Lubricante Cubo Rubik Qiyi Mofangge 3ml Transparente + Base",
  id:"7",
  priceColombianPesos:6900,
  rating:{
    stars:"4.5",
    count:"146"
    }
  },
  {
  imageName:"qiyi-megaminx",
  name:"Cubo Qiyi Megaminx Qiheng Estructura Base Negra",
  id:"8",
  priceColombianPesos:29900,
  rating:{
    stars:"5.0",
    count:"332"
    }
  },
  {
  imageName:"gan-v100",
  name:"Gan V100 Maglev Uv Cubo Mágico Magnetic 3x3 Black Core",
  id:"9",
  priceColombianPesos:131410,
  rating:{
    stars:"5.0",
    count:"22"
    }
  },
  {
  imageName:"qiyi-sudoku",
  name:"Cubo Rubik Sudoku 9 Colores Rcs Qiyi Puzzle Dificultad Alta",
  id:"10",
  priceColombianPesos:54614,
  rating:{
    stars:"3.5",
    count:"3"
    }
  },
  {
  imageName:"qiyi-sail-3x3",
  name:"Cubo Rubik 3x3 Sail Qiyi Cube Profesional Speed Blanco 6cm",
  id:"11",
  priceColombianPesos:32764,
  rating:{
    stars:"5.0",
    count:"1"
    }
  },
  {
  imageName:"qiyi-mofange",
  name:"QiYi MoFangGe Gift Box QiYi 0932C Cubo Rubik Pyraminx Ivy Skewb Megaminx Gif Box Color de la estructura Black Pack X4",
  id:"12",
  priceColombianPesos:78900,
  rating:{
    stars:"5.0",
    count:"40"
    }
  },
  {
  imageName:"qiyi-mirror-3x3",
  name:"Cubo Rubik Espejo Qiyi Mirror 3x3 Rompecabezas Cúbico Plateado",
  id:"13",
  priceColombianPesos:12900,
  rating:{
    stars:"5.0",
    count:"480"
    }
  },
  {
  imageName:"moyu-mofang-3x3",
  name:"Cubo Rubik Moyu Mofang Jiaoshi Rs3m V5 3x3 Ajuste Dual Magne Stickerless",
  id:"14",
  priceColombianPesos:60050,
  rating:{
    stars:"5.0",
    count:"2982"
    }
  },
  {
  imageName:"moyu-maglev-3x3",
  name:"Cubo Rubik Moyu Mf Rs3m V5 Maglev Robot 3x3 Stickersless Magnético",
  id:"15",
  priceColombianPesos:84000,
  rating:{
    stars:"5.0",
    count:"262"
    }
  },
  {
  imageName:"qiyi-mirror-speedcube",
  name:"Cubo Rubik 3x3 Mirror Qiyi Espejo Azul Acero Cuerpo Negro 5.6cm",
  id:"16",
  priceColombianPesos:12900,
  rating:{
    stars:"5.0",
    count:"480"
    }
  },
  {
  imageName:"qiyi-3x3-llavero",
  name:"Mini Cubo Rubik Qiyi 3x3x3 Llavero Stickerless Antiestrés",
  id:"17",
  priceColombianPesos:13900,
  rating:{
    stars:"5.0",
    count:"215"
    }
  },
  {
  imageName:"timer-qiyi",
  name:"Aurora Timer Cronómetro Qiyi Speedcubing Cubo Rubik Profesional Sensor Tactil",
  id:"18",
  priceColombianPesos:65900,
  rating:{
    stars:"5.0",
    count:"796"
    }
  },
  {
  imageName:"4x4-yulong",
  name:"Cubo Rubik 4x4 YJ Yulong M Magnético Stickerless Speedcube",
  id:"19",
  priceColombianPesos:60001,
  rating:{
    stars:"5.0",
    count:"58"
    }
  },
  {
  imageName:"3x3-qiyi-tornado",
  name:"Cubo Rubik 3x3x3 Magnético Qiyi Tornado V4 Flagship Ajustable Stickerless",
  id:"20",
  priceColombianPesos:196900,
  rating:{
    stars:"5.0",
    count:"24"
    }
  },
].map((cubeDetails)=>{
  return new Cube(cubeDetails);
});
