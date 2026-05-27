function xuLyLoaiKH() {
    let loaiKH = document.getElementById("selLoaiKH").value;
    let groupKetNoi = document.getElementById("groupKetNoi");

    if (loaiKH === "doanhnghiep") {
        groupKetNoi.style.display = "block";
    } else {
        groupKetNoi.style.display = "none";
    }
}

function tinhTienCap() {
    let maKH = document.getElementById("txtMaKH").value;
    let loaiKH = document.getElementById("selLoaiKH").value;
    let soKenhCaoCap = document.getElementById("txtsoKenh").value * 1;
    let soKetNoi = document.getElementById("txtSoKetNoi").value * 1;

    let tongTien = 0;
    if (loaiKH === "nhadan") {
        tongTien = 4.5 + 20.5 + (7.5 * soKenhCaoCap);
    } else if (loaiKH === "doanhnghiep") {
        let phiXuLy = 15;
        let phiKenhCaoCap = 50 * soKenhCaoCap;
        let phiDichVuCoBan = 0;
        if (soKetNoi <= 10) {
            phiDichVuCoBan = 75;
        } else {
            phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
        }
        tongTien = phiXuLy + phiDichVuCoBan + phiKenhCaoCap;
    }
    let divKq = document.getElementById("divKq");
    divKq.style.display = "block";
    divKq.innerHTML = `Mã khách hàng: ${maKH}; Tiền cáp: $${tongTien}`;
}