const btnKq = document.getElementById("btnKq");
btnKq.onclick = function () {
    const diemChuan = document.getElementById("diemChuan").value * 1;
    const diemMon_1 = document.getElementById("diemMon_1").value * 1;
    const diemMon_2 = document.getElementById("diemMon_2").value * 1;
    const diemMon_3 = document.getElementById("diemMon_3").value * 1;
    const khuVuc = document.getElementById("khuVuc").value *1 ;
    const doiTuong = document.getElementById("doiTuong").value * 1;

    let diemUuTien = khuVuc + doiTuong;
    let diemTongKet = diemMon_1 + diemMon_2 + diemMon_3 + diemUuTien;

    let rs = "";

    if (diemMon_1 === 0 || diemMon_2 === 0 || diemMon_3 === 0) {
        rs = `Bạn đã rớt do có môn điểm 0`;
    } else if (diemTongKet >= diemChuan) {
        rs = `Bạn đã đậu. Tổng điểm là: ${diemTongKet}`;
    } else {
        rs = `Bạn đã rớt. Tổng điểm là: ${diemTongKet}`;
    }

    const pInfo = document.getElementById("pInfo");
    pInfo.innerText = rs;
};