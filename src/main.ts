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
  index:number
  visible:boolean

  constructor(polygon:PIXI.Polygon, length:number, growth:number, isVert:boolean, index:number) {
    this.polygon = polygon
    this.original = JSON.parse(JSON.stringify(polygon));
    this.length = length
    this.growth = growth
    this.isVert = isVert
    this.index = index
    this.visible = false
  }

  set animLength(perc:number)  {
    let offset = this.length * perc
    this.animWidth = perc

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
let bladesMax = 0

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


    // Setup graphics
    graphics = new PIXI.Graphics();
    graphics.beginFill(0xffb900)
    graphics.drawRect(0, 0, window.innerWidth, window.innerHeight)

    app.stage.addChild(graphics);

    let tl = gsap.timeline({defaults: {
      animLength: 1,
      ease: "sine.inOut",
      duration: 1,
      repeat: 1,
      yoyo: true,
      onComplete: function() {
        this.targets().forEach((target:Blade, i:number) => {
          target.visible = false;
        });
      },
      onStart: function() {
        this.targets().forEach((target:Blade, i:number) => {
          target.visible = true;
        });
      }
    }});

    // Scenes
    let introB = createBlade(window.innerWidth*(5/6), window.innerHeight/2, 15, 5, -window.innerWidth*(4/6), false)
    tl.to(introB, {})

    let doubleIntro1 = createBlade(window.innerWidth*(3.9/5), window.innerHeight/2, 15, 5, -window.innerWidth*(3/5), false)
    let doubleIntro2 = createBlade(window.innerWidth*(0.9/5), window.innerHeight/2+25, 15, 5, window.innerWidth*(3/5), false)
    tl.to([doubleIntro1, doubleIntro2], {}, "2").addLabel("Scene2")

    let scene3Row1 = createBladeRow(false, window.innerHeight/2-80-25, 25*2, window.innerWidth*(0.9/5), 15, 5, window.innerWidth*(3/5), 3)
    let scene3Row2 = createBladeRow(false, window.innerHeight/2-80, 25*2, window.innerWidth*(3.9/5), 15, 5, -window.innerWidth*(3/5), 3)
    scene3Row1.forEach((blade, i) => {
      tl.to(blade, {delay:(i*0.3), repeat: 1}, "Scene2")
    });
    scene3Row2.forEach((blade, i) => {
      tl.to(blade, {delay:(i*0.3), repeat: 1}, "Scene2")
    });
    tl.addLabel("Scene3")


    let scene4Row1 = createBladeRow(false, window.innerHeight/10, 25*2, window.innerWidth*(0.9/5), 15, 5, window.innerWidth*(3/5), 15)
    let scene4Row11 = createBladeRow(false, window.innerHeight/10, 25*2, window.innerWidth*(0.9/5), 15, 5, window.innerWidth*(3/5), 15)
    let scene4Row2 = createBladeRow(false, window.innerHeight/10-25, 25*2, window.innerWidth*(3.9/5), 15, 5, -window.innerWidth*(3/5), 15)
    let scene4Row21 = createBladeRow(false, window.innerHeight/10-25, 25*2, window.innerWidth*(3.9/5), 15, 5, -window.innerWidth*(3/5), 15)
    scene4Row1.forEach((blade, i) => {
      tl.to(blade, {delay:(i*0.3), repeat: 3}, "Scene3")
    });
    scene4Row2.forEach((blade, i) => {
      tl.to(blade, {delay:(i*0.3), repeat: 3}, "Scene3")
    });

    scene4Row11.forEach((blade, i) => {
      tl.to(blade, {delay:(i*0.1+6), repeat: 3}, "Scene3")
    });
    scene4Row21.forEach((blade, i) => {
      tl.to(blade, {delay:(i*0.1+6), repeat: 3}, "Scene3")
    });
    tl.addLabel("Scene5")


    let scene5Row1 = createBladeRow(true, window.innerWidth*(0.2/5), 20, window.innerHeight/30, 10, 2, window.innerHeight*(8/10), 50)
    scene5Row1.forEach((blade, i) => {
      tl.to(blade, {delay:(i*0.07), repeat: 1, duration:3}, "Scene5")
    });
    tl.addLabel("Scene6")

    let scene6Row1 = createBladeRow(true, window.innerWidth*(4.8/5), -20, window.innerHeight-window.innerHeight/30, 10, 2, -window.innerHeight*(8/10), 50)
    scene6Row1.forEach((blade, i) => {
      tl.to(blade, {delay:(i*0.07), repeat: 1, duration:3}, "Scene6")
    });
    tl.addLabel("Scene7")


    let scene7Row1 = createBladeRow(true, window.innerWidth*(0.2/5), 40, window.innerHeight/30+30, 10, 2, window.innerHeight*(8/10), 25)
    let scene7Row2 = createBladeRow(true, window.innerWidth*(0.2/5)+980, -40, window.innerHeight-window.innerHeight/30-30, 10, 2, -window.innerHeight*(8/10), 25)

    scene7Row1.forEach((blade, i) => {
      tl.to(blade, {delay:(i*0.1), repeat: 1, duration:2}, "Scene7")
    });
    scene7Row2.forEach((blade, i) => {
      tl.to(blade, {delay:(i*0.1), repeat: 1, duration:2}, "Scene7")
    });

    let scene71Row1 = createBladeRow(true, window.innerWidth*(0.2/5), 40, window.innerHeight/30+30, 10, 2, window.innerHeight*(8/10), 25)
    let scene71Row2 = createBladeRow(true, window.innerWidth*(0.2/5)+980, -40, window.innerHeight-window.innerHeight/30-30, 10, 2, -window.innerHeight*(8/10), 25)

    scene71Row1.forEach((blade, i) => {
      tl.to(blade, {delay:(i*0.1+5), repeat: 1, duration:2}, "Scene7")
    });
    scene71Row2.forEach((blade, i) => {
      tl.to(blade, {delay:(i*0.1+5), repeat: 1, duration:2}, "Scene7")
    });


    tl.addLabel("Scene8")

    let scene8Row1 = createBladeRow(true, window.innerWidth*(0.2/5), 40, window.innerHeight/30+30, 10, 2, window.innerHeight*(8/10), 25)
    let scene8Row11 = createBladeRow(true, window.innerWidth*(0.2/5), 40, window.innerHeight/30+30, 10, 2, window.innerHeight*(8/10), 25)
    let scene8Row12 = createBladeRow(true, window.innerWidth*(0.2/5), 40, window.innerHeight/30+30, 10, 2, window.innerHeight*(8/10), 25)
    let scene8Row13 = createBladeRow(true, window.innerWidth*(0.2/5), 40, window.innerHeight/30+30, 10, 2, window.innerHeight*(8/10), 25)
    let scene8Row14 = createBladeRow(true, window.innerWidth*(0.2/5), 40, window.innerHeight/30+30, 10, 2, window.innerHeight*(8/10), 25)
    let scene8Row15 = createBladeRow(true, window.innerWidth*(0.2/5), 40, window.innerHeight/30+30, 10, 2, window.innerHeight*(8/10), 25)
    let scene8Row16 = createBladeRow(true, window.innerWidth*(0.2/5), 40, window.innerHeight/30+30, 10, 2, window.innerHeight*(8/10), 25)
    let scene8Row2 = createBladeRow(true, window.innerWidth*(0.2/5)+980, -40, window.innerHeight-window.innerHeight/30-30, 10, 2, -window.innerHeight*(8/10), 25)
    let scene8Row21 = createBladeRow(true, window.innerWidth*(0.2/5)+980, -40, window.innerHeight-window.innerHeight/30-30, 10, 2, -window.innerHeight*(8/10), 25)
    let scene8Row22 = createBladeRow(true, window.innerWidth*(0.2/5)+980, -40, window.innerHeight-window.innerHeight/30-30, 10, 2, -window.innerHeight*(8/10), 25)
    let scene8Row23 = createBladeRow(true, window.innerWidth*(0.2/5)+980, -40, window.innerHeight-window.innerHeight/30-30, 10, 2, -window.innerHeight*(8/10), 25)
    let scene8Row24 = createBladeRow(true, window.innerWidth*(0.2/5)+980, -40, window.innerHeight-window.innerHeight/30-30, 10, 2, -window.innerHeight*(8/10), 25)
    let scene8Row25 = createBladeRow(true, window.innerWidth*(0.2/5)+980, -40, window.innerHeight-window.innerHeight/30-30, 10, 2, -window.innerHeight*(8/10), 25)
    let scene8Row26 = createBladeRow(true, window.innerWidth*(0.2/5)+980, -40, window.innerHeight-window.innerHeight/30-30, 10, 2, -window.innerHeight*(8/10), 25)

    scene8Row1.forEach((blade, i) => {
      tl.to(blade, {delay:(i*0.1), repeat: 1, duration:2}, "Scene8")
    });
    scene8Row2.forEach((blade, i) => {
      tl.to(blade, {delay:(i*0.1), repeat: 1, duration:2}, "Scene8")
    });


    scene8Row11.forEach((blade, i) => {
        tl.to(blade, {delay:(i*0.1+1), repeat: 1, duration:2}, "Scene8")
    });
    scene8Row21.forEach((blade, i) => {
        tl.to(blade, {delay:(i*0.1+3), repeat: 1, duration:2}, "Scene8")
    });
    scene8Row12.forEach((blade, i) => {
        tl.to(blade, {delay:(i*0.1+4), repeat: 1, duration:2}, "Scene8")
    });
    scene8Row22.forEach((blade, i) => {
        tl.to(blade, {delay:(i*0.1+5), repeat: 1, duration:2}, "Scene8")
    });
    scene8Row13.forEach((blade, i) => {
        tl.to(blade, {delay:(i*0.1+6), repeat: 1, duration:2}, "Scene8")
    });
    scene8Row23.forEach((blade, i) => {
        tl.to(blade, {delay:(i*0.1+7), repeat: 1, duration:2}, "Scene8")
    });
    scene8Row14.forEach((blade, i) => {
        tl.to(blade, {delay:(i*0.1+8), repeat: 1, duration:2}, "Scene8")
    });
    scene8Row24.forEach((blade, i) => {
        tl.to(blade, {delay:(i*0.1+9), repeat: 1, duration:2}, "Scene8")
    });
    scene8Row15.forEach((blade, i) => {
        tl.to(blade, {delay:(i*0.1+10), repeat: 1, duration:2}, "Scene8")
    });
    scene8Row25.forEach((blade, i) => {
        tl.to(blade, {delay:(i*0.1+11), repeat: 1, duration:2}, "Scene8")
    });
    scene8Row16.forEach((blade, i) => {
        tl.to(blade, {delay:(i*0.1+12), repeat: 1, duration:2}, "Scene8")
    });
    scene8Row26.forEach((blade, i) => {
        tl.to(blade, {delay:(i*0.1+13), repeat: 1, duration:2}, "Scene8")
    });



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
    new PIXI.Point(originX + width/2, originY + length/100),
    new PIXI.Point(originX, originY + length/40),
    new PIXI.Point(originX - width/2, originY + length/100))
  }
  else {
    polygon = new PIXI.Polygon(new PIXI.Point(originX, originY),
    new PIXI.Point(originX + length/100, originY + width/2),
    new PIXI.Point(originX + length/40, originY),
    new PIXI.Point(originX + length/100, originY - width/2))
  }

  let bladeObj = new Blade(polygon, length, growth, isVert, bladesMax)
  blades.push(bladeObj)
  bladesMax += 1

  return bladeObj
}

function createBladeRow(isVert:boolean,start:number,dist:number,pos:number,width:number,growth:number,length:number,amount:number): Array<Blade> {
  let min = bladesMax;

  if (isVert) {
    let i = 0
    while (i < amount) {
      createBlade(i*dist+start, pos, width, growth, length, true);
      i++;
    }
  }
  else {
    let i = 0
    while (i < amount) {
      createBlade(pos, i*dist+start, width, growth, length, false);
      i++;
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
    if (blade.visible) {
      graphics.drawPolygon(blade.polygon.points);
    }
  })

};

main();
