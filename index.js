let a = 20;
let b = 20;

let c = b;

c += 10;

console.log(a == b);
// --> true

let k = {
  name: "Chí",
};

let m = {
  name: "Luân",
};

console.log(k.name == m.name);
// --> true

let i = k;

// Memory
//  ---- Address variable k i ----- #ABC20
//  ---- Address variable m ----- #ABC21

//Function

let o = 20;

SUM(10, 20, 20);
SUM(6, 8, 5);
SUM(9, 10, 5);

function SUM(so1, so2, so3) {
  const tb = (so1 + so2 + so3) / 3;

  //WIHOUT RETURN
  //   computing ..... ;

  //OUTPUT
  return tb;
}

// (function () {
//   document.write(SUM(10, 5, 10) + SUM(5, 8, 4));
// })();

// Hàm Tổng
// Hảm Trung bình

function Numb(n) {
  let k = n + 20;
  return k;
}

let numb01 = Numb(8);
let numb02 = Numb(2);

const footballer = {
  name: "Quang Hải",
  win: 20,
  width: 70,
  height: 180,
  club: "Hoàng Anh Gia Lai",
  //   Method
  addWin(winNumb) {
    this.win += winNumb;
  },
  changeClub(nameClub) {
    this.club = nameClub;
    1;
  },
};

footballer.addWin(10);

footballer.changeClub("Hải phòng");

document.write(
  "Tên : " +
    footballer.name +
    "<br>" +
    "Số bàn thắng : " +
    footballer.win +
    "<br>" +
    "Câu lạc bộ : " +
    footballer.club
);

