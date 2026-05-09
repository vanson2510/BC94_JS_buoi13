function TinhTien() {
    const hoTen = document.getElementById("hoTen").value;
    const soKw = document.getElementById("soKw").value;
    const pInfo = document.getElementById("pInfo");

    if (hoTen === "" || soKw < 0) {
        pInfo.innerHTML = "Vui lòng nhập đầy đủ tên và số Kw hợp lệ( không để trống hoặc số âm)"
        return;
    }
//Tính toán tiền điện
let tongTien = 0;
    if (soKw <=50) {
        tongTien = soKw * 500;
    } else if (soKw <= 100) {
        tongTien = (50*500) + (soKw - 50) * 650;
    } else if (soKw <=200) {
        tongTien = (50*500) + (50 * 650) + (soKw -100) * 850;
    } else if (soKw <= 350) {
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (soKw - 200) * 1100;
    } else {
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (soKw - 350) * 1300;
    }
    pInfo.innerHTML = `Họ Tên: ${hoTen} Tiền điện: ${tongTien}`;
};