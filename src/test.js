export const a = () => {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  c();
};

export const b = () => {
  console.log("^^^^^^^^^^^");
  d();
};

const c = () => {
  console.log("CCCCCCCCCCC");
};

const d = ()=>{console.log('DDDDDDDDD')};
