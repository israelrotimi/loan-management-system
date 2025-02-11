//set some data in localStore
//First define the data
export interface Store {
  hash: string;
  gender: string;
  married: boolean;
  hasChildren: boolean;
  residence: string;
  employed: boolean;
  employmentSector: string;
  employedFor: number;
  guarantors: {
    fullname: string;
    phone_no: string;
    email: string;
    rel: string;
  }[];
}

const gender = ["male", "female"];
const married = [true, false];
const hasChildren = [true, false];
const residence = ["residential", "business"];
const employed = [true, false];
const sector = ["fintech", "education", "agriculture"];

// Then create it
const createUserStore = (): Store => ({
  hash: "WIOFNOVWOF34ONR9NF9HGSLNGSLG",
  gender: gender[Math.floor(Math.random() * 2)],
  married: married[Math.floor(Math.random() * 2)],
  hasChildren: hasChildren[Math.floor(Math.random() * 2)],
  residence: residence[Math.floor(Math.random() * 2)],
  employed: employed[Math.floor(Math.random() * 2)],
  employmentSector: sector[Math.floor(Math.random() * 2)],
  employedFor: Math.floor(Math.random() * 5 + 1),
  guarantors: [
    {
      fullname: "Adekunle Mike",
      phone_no: "09038748625",
      email: "ademike@gmail.com",
      rel: "Uncle",
    },
    {
      fullname: "Lara Blessing",
      phone_no: "09038587625",
      email: "blesslara@gmail.com",
      rel: "Sister",
    },
  ],
});

// Set this data when a user is clicked
const setUserStore = () => {
  const store: Store = createUserStore();
  const storeString = JSON.stringify(store);
  localStorage.setItem("userStore", storeString);
};

const getUserStore = (): Store | null => {
  const store = localStorage.getItem("userStore");
  if (store) {
    return JSON.parse(store);
  } else {
    return null;
  }
};

export { setUserStore, getUserStore };