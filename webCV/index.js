// Riwayat Pendidikan

let listRiwayatPendidikan = document.querySelector("#listRiwayatPendidikan");

let dataRiwayatPendidikan = [
  {
    title: "Mahasiswa",
    desc: "belajar",
  },
];
const addRiwayatPendidikan = (event) => {
  event.preventDefault();

  let messageTitle = prompt("Tambahkan riwayat pendidikan anda");
  let messageDesc = prompt("Tambahkan deskripsi pendidikan anda");

  let newData = {
    title: messageTitle,
    desc: messageDesc,
  };

  dataRiwayatPendidikan.push(newData);

  newData = {
    title: "",
    desc: "",
  };

  dataRiwayatPendidikan.map((item) => {
    let displayList = document.createElement("li");
    let displayTitle = document.createElement("p");

    // tampilkan <p></p>
    displayTitle.innerHTML = `<p class="tags">${item.title}<br /><span>${item.desc} </span><span>January, 2019 - now</span></span></p>`;
    displayList.appendChild(displayTitle);
    listExperience.appendChild(displayList);
  });
};

// Pengalaman

let listPengalaman = document.querySelector("#listPengalaman");

let dataPengalaman = [
  {
    title: "Mahasiswa",
    desc: "belajar",
  },
];
const addPengalaman = (event) => {
  event.preventDefault();

  let messageTitle = prompt("Tambahkan pengalaman anda");
  let messageDesc = prompt("Tambahkan deskripsi pengalaman anda");

  let newData = {
    title: messageTitle,
    desc: messageDesc,
  };

  dataPengalaman.push(newData);

  newData = {
    title: "",
    desc: "",
  };

  dataPengalaman.map((item) => {
    let displayList = document.createElement("li");
    let displayTitle = document.createElement("p");

    // tampilkan <p></p>
    displayTitle.innerHTML = `<p class="tags">${item.title}<br /><span>${item.desc} </span><span>January, 2019 - now</span></span></p>`;
    displayList.appendChild(displayTitle);
    listExperience.appendChild(displayList);
  });
};
