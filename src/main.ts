import * as PIXI from "pixi.js"
import * as dat from 'dat.gui'
import * as Filters from 'pixi-filters'
import { gsap } from "gsap";


let graphics: PIXI.Graphics

class Blade {
  polygon:PIXI.Polygon
  original:PIXI.Polygon
  length:number
  growth:number
  isVert:boolean

  constructor(polygon:PIXI.Polygon, length:number, growth:number, isVert:boolean) {
    this.polygon = polygon
    this.original = JSON.parse(JSON.stringify(polygon));
    this.length = length
    this.growth = growth
    this.isVert = isVert
  }

  set animLength(perc:number)  {
    let offset = this.length * perc
    if (this.isVert) {
      this.polygon.points[3] = offset + this.original.points[3]
      this.polygon.points[5] = offset + this.original.points[5]
      this.polygon.points[7] = offset + this.original.points[7]
    }
    else {
      this.polygon.points[2] = offset + this.original.points[2]
      this.polygon.points[4] = offset + this.original.points[4]
      this.polygon.points[6] = offset + this.original.points[6]
    }
  }

  set animWidth(perc:number)  {
    let offset = this.growth * perc
    if (this.isVert) {
      this.polygon.points[2] = offset + this.original.points[2]
      this.polygon.points[6] =  this.original.points[6] - offset
    }
    else {
      this.polygon.points[3] = offset + this.original.points[3]
      this.polygon.points[7] = this.original.points[7] - offset
    }
  }
}

let blades: Array<Blade> = []
let bladesMin = 0
let bladesMax = 1

const load = (app: PIXI.Application) => {
    return new Promise<void>((resolve) => {
        app.loader
        .load(() => {
            resolve();
        });
    });
};


const main = async () => {
    // Actual app
    let app = new PIXI.Application();

    // Display application properly
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';

    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);


    // Load assets
    await load(app);

    // // Filter
    // let myFilter = new Filters.PixelateFilter();
    // myFilter.size = 5;
    // app.stage.filters = [myFilter]


    //Grass
    graphics = new PIXI.Graphics();
    graphics.beginFill(0xffb900)
    graphics.drawRect(0, 0, window.innerWidth, window.innerHeight)

    app.stage.addChild(graphics);



    gsap.to(createBlade(window.innerWidth*(5/6), window.innerHeight/2, 15, 5, -window.innerWidth*(4/6), false),
      {
        duration:2.5,
        ease: "sine.inOut",
        animLength: 1,
        animWidth: 1
      }
    );



    // Handle window resizing
    window.addEventListener('resize', (_e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
    });

    document.body.appendChild(app.view);

    let context = {
    };

    app.ticker.add(update, context);
};



function createBlade(originX:number, originY:number, width:number, growth:number, length:number, isVert:boolean): Blade {
  let polygon:PIXI.Polygon;

  if (isVert) {
    polygon = new PIXI.Polygon(new PIXI.Point(originX, originY),
    new PIXI.Point(originX + width/2, originY),
    new PIXI.Point(originX, originY + 20*(length%1)),
    new PIXI.Point(originX - width/2, originY))
  }
  else {
    polygon = new PIXI.Polygon(new PIXI.Point(originX, originY),
    new PIXI.Point(originX, originY + width/2),
    new PIXI.Point(originX + 20*(length%1), originY),
    new PIXI.Point(originX, originY - width/2))
  }

  let bladeObj = new Blade(polygon, length, growth, isVert)
  blades.push(bladeObj)
  bladesMax += 1

  return bladeObj
}

function createBladeRow(isVert:boolean,start:number,end:number,pos:number,width:number,growth:number,length:number,num:number): Array<Blade> {
  let min = bladesMax - 1;

  if (isVert) {
    for (let i = start; i += (end-start)/num; i <= end) {
      createBlade(pos, i, width, growth, length, false);
    }
  }
  else {
    for (let i = start; i += (end-start)/num; i <= end) {
      createBlade(i, pos, width, growth, length, false);
    }
  }

  return blades.slice(min, bladesMax)
}

function update(this: any) {
  graphics.clear()

  graphics.beginFill(0xffb900)
  graphics.drawRect(0, 0, window.innerWidth, window.innerHeight)

  graphics.beginFill(0x000000)
  blades.forEach((blade) => {
    graphics.drawPolygon(blade.polygon.points);
  })

};

main();
