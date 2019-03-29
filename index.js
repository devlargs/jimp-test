// const Jimp = require("jimp");

// const spaces = { w: 3046, h: 2267 };

// const nice = async () => {
//     const date = +new Date();
//     const file = (e) => `./temp/${date}/${e}.jpg`;
//     const first = await Jimp.read(`./photos/1.jpg`);
//     first.resize(spaces.w, spaces.h)
//     const second = await Jimp.read("./photos/2.jpg");
//     second.resize(spaces.w, spaces.h)
   
//     const third = await Jimp.read("./photos/3.jpg");
//     third.resize(spaces.w, spaces.h)
//     const layout = await Jimp.read("./eventLayout/1.png")

//     const initial = { h: 198 }

//     const newPhoto = new Jimp(6716, 9992, 0xFFFFFFFF)
//         .composite(first, 188, initial.h)
//         .composite(first, 3465, initial.h)
//         .composite(second, 188, initial.h + spaces.h + 235)
//         .composite(second, 3465, initial.h + spaces.h + 235)
//         .composite(third, 188, initial.h + ((spaces.h + 235) * 2))
//         .composite(third, 3465, initial.h + ((spaces.h + 235) * 2))
//     newPhoto.composite(layout, 0, 0).write("gago.png");

//     console.log("nice");
// }

// nice();

// ---- USING ORIGINAL LAYOUT (LARGE)


const Jimp = require("jimp");

const spaces = { w: 1090, h: 815 };

const nice = async () => {
    const date = +new Date();
    const file = (e) => `./temp/${date}/${e}.jpg`;
    const first = await Jimp.read(`./photos/1.jpg`);
    first.resize(spaces.w, spaces.h)
    const second = await Jimp.read("./photos/2.jpg");
    second.resize(spaces.w, spaces.h)
   
    const third = await Jimp.read("./photos/3.jpg");
    third.resize(spaces.w, spaces.h)


    const initial = { h: 66 }
    const addend = 79;

    
    // .write("sex.png")

    for (let i = 1; i < 40; i++) {
    const layout = await Jimp.read(`./eventLayout/${i}.png`);

        const newPhoto = new Jimp(2400, 3600, 0xFFFFFFFF)
        .composite(first, 67, initial.h)
        .composite(first, 1237, initial.h)
        .composite(second, 67, initial.h + spaces.h + addend)
        .composite(second, 1237, initial.h + spaces.h + addend)
        .composite(third, 67, initial.h + ((spaces.h + addend) * 2))
        .composite(third, 1237, initial.h + ((spaces.h + addend) * 2))
        newPhoto.composite(layout, 0, 0).write(`jimp/${i}.png`);
        console.log(`nice ${i}`);
    }

}

nice();